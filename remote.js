'use strict';
/* =========================================================
   CONTROL REMOTO (cel ⇄ pantalla) con WebRTC vía PeerJS
   - La pantalla (TV / proyector / laptop) muestra un QR y un código.
   - El cel se conecta, manda su tablero y controla el juego.
   ========================================================= */
const RC={mode:null,code:null,peer:null,conns:[],conn:null,connected:false,state:null,recvAt:0,wake:null,ticker:null};
const PEER_PREFIX='tablero-trivia-v1-';
const CODE_CHARS='ABCDEFGHJKMNPQRSTUVWXYZ23456789';
const PEER_SRC='https://cdn.jsdelivr.net/npm/peerjs@1.5.4/dist/peerjs.min.js';
const QR_SRC='https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.js';

function loadScript(src){return new Promise((res,rej)=>{const s=document.createElement('script');s.src=src;s.onload=res;s.onerror=()=>rej(new Error(src));document.head.appendChild(s)})}
async function needPeer(){if(!window.Peer)await loadScript(PEER_SRC)}
async function needQR(){if(!window.qrcode)await loadScript(QR_SRC)}
function newCode(){const a=new Uint32Array(5);crypto.getRandomValues(a);return [...a].map(n=>CODE_CHARS[n%CODE_CHARS.length]).join('')}
function cleanCode(c){return String(c||'').toUpperCase().replace(/[^A-Z0-9]/g,'').slice(0,5)}
const baseURL=()=>location.origin+location.pathname;
async function wakeLock(){try{if('wakeLock' in navigator&&!RC.wake){RC.wake=await navigator.wakeLock.request('screen');RC.wake.addEventListener('release',()=>{RC.wake=null})}}catch(e){}}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'&&RC.mode){wakeLock();if(RC.mode==='remote'&&!RC.connected)scheduleReconnect(200)}});

/* =========================================================
   PANTALLA (host)
   ========================================================= */
async function startHost(){
  RC.mode='host';
  RC.code=cleanCode(store.get('trivia.tvcode'))||newCode(); store.set('trivia.tvcode',RC.code);
  if(!new URLSearchParams(location.search).has('tv')) history.replaceState(null,'',location.pathname+'?tv');
  showTV();
  try{await Promise.all([needPeer(),needQR()])}catch(e){renderTV('error');setTimeout(startHost,5000);return}
  openHostPeer(0); renderTV(); wakeLock();
}
function openHostPeer(attempt){
  if(RC.peer){try{RC.peer.destroy()}catch(e){}}
  const p=new Peer(PEER_PREFIX+RC.code,{debug:0}); RC.peer=p;
  p.on('open',()=>{renderTV();updateRcChip()});
  p.on('connection',conn=>{
    conn.on('open',()=>{RC.conns.push(conn);hostSend(conn);renderTV();updateRcChip();sfx('pop')});
    conn.on('data',d=>hostOnData(conn,d));
    conn.on('close',()=>{RC.conns=RC.conns.filter(c=>c!==conn);renderTV();updateRcChip()});
    conn.on('error',()=>{});
  });
  p.on('disconnected',()=>{setTimeout(()=>{if(!p.destroyed)try{p.reconnect()}catch(e){}},1500)});
  p.on('error',err=>{
    if(p!==RC.peer) return;
    if(err.type==='unavailable-id'){
      if(attempt<3) setTimeout(()=>openHostPeer(attempt+1),3000);
      else{RC.code=newCode();store.set('trivia.tvcode',RC.code);openHostPeer(0)}
      renderTV();
    }else if(['network','server-error','socket-error','socket-closed','browser-incompatible'].includes(err.type)){
      renderTV('error'); setTimeout(()=>{if(p===RC.peer)openHostPeer(attempt+1)},4000);
    }
  });
}
function showTV(){
  closeModal(true); stopConfetti();
  document.body.className='stage'; showOnly('tv'); $('#tv').dataset.code=''; renderTV(); window.scrollTo(0,0);
}
function renderTV(status){
  const el=$('#tv'); if(!el||RC.mode!=='host'||el.hidden) return;
  const url=baseURL()+'?c='+RC.code, n=RC.conns.length, ready=RC.peer&&RC.peer.open;
  let qr='';
  if(window.qrcode){try{const q=qrcode(0,'M');q.addData(url);q.make();qr=`<img alt="QR" src="${q.createDataURL(8,1)}">`}catch(e){}}
  const hasGame=game&&game.phase&&game.phase!=='done';
  const stHtml=`<span class="dot ${n?'on':''}"></span>${status==='error'?t('tvErr'):!ready?t('rmConnecting'):n?t('tvConnected',n):t('tvWaiting')}`;
  const actsHtml=`${hasGame?`<button class="btn gold" id="tvResume">${ic('play')} ${t('cont')}</button>`:''}
          <button class="btn" id="tvLocal">${ic('grid')} ${t('tvPlayHere')}</button>
          <button class="btn" id="tvEdit">${ic('edit')} ${t('editor')}</button>
          ${langSwitch()}`;
  /* si ya está dibujada con el mismo código e idioma, solo actualiza lo que cambia (sin repetir animaciones) */
  if(el.dataset.code===RC.code&&el.dataset.lang===cfg.lang&&$('#tvSt')){
    const st=$('#tvSt');st.className='tv-st '+(n?'ok':'');st.innerHTML=stHtml;
    $('#tvActs').innerHTML=actsHtml;
    if(qr&&!$('#tvQr img'))$('#tvQr').innerHTML=qr;
    return;
  }
  el.dataset.code=RC.code; el.dataset.lang=cfg.lang;
  el.innerHTML=`<div class="rays"></div><div class="bulbs tvb"></div>
  <div class="tv-in">
    <div class="r-k">${t('tvKicker')}</div>
    <h1 class="tv-h">${t('tvTitle')}</h1>
    <div class="tv-grid">
      <div class="qr" id="tvQr">${qr||'<div class="spin"></div>'}</div>
      <div class="tv-info">
        <div class="lb">${t('tvCode')}</div>
        <div class="code">${RC.code.split('').map((ch,i)=>`<span style="--cc:${catColor(i)}">${ch}</span>`).join('')}</div>
        <p class="tv-url">${t('tvOr')} <b>${esc(baseURL().replace(/^https?:\/\//,''))}</b> ${t('tvOr2')}</p>
        <div class="tv-st ${n?'ok':''}" id="tvSt">${stHtml}</div>
        <div class="tv-acts" id="tvActs">${actsHtml}</div>
      </div>
    </div>
  </div>`;
}
$('#tv').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  if(b.dataset.lang){setLang(b.dataset.lang);renderTV();return}
  if(b.id==='tvResume'){showGame(true);return}
  if(b.id==='tvLocal'){startGame();return}
  if(b.id==='tvEdit'){showOnly('setup');renderSetup();return}
});
function updateRcChip(){
  const el=$('#gRc'); if(!el) return;
  if(RC.mode!=='host'){el.hidden=true;return}
  el.hidden=false; el.innerHTML=`<span class="dot ${RC.conns.length?'on':''}"></span>${ic('phone')}${RC.code}`;
}
function snapshot(){
  const x=modalCtx; let m=null;
  if(x&&x.type!=='edit'){
    m={type:x.type};
    if(x.type==='clue') Object.assign(m,{c:x.c,r:x.r,value:x.value,dd:x.dd,replay:x.replay,answered:x.answered,winner:x.winner,revealed:x.revealed,wrong:[...x.wrong],teams:x.teams});
    else if(x.type==='dd') Object.assign(m,{c:x.c,r:x.r,team:x.team});
  }
  const timer=tm.total?{total:tm.total,left:Math.max(0,tm.left),paused:!!tm.paused,running:!!tm.id}:null;
  const screen=!$('#game').hidden?'game':!$('#results').hidden?'results':'lobby';
  return {code:RC.code,screen,modal:m,timer,game:game?{cfg:game.cfg,scores:game.scores,used:game.used,phase:game.phase,fin:game.fin}:null};
}
let syncT=null;
function hostSync(){
  if(RC.mode!=='host'||!RC.conns.length) return;
  if(syncT) return;
  syncT=setTimeout(()=>{syncT=null;const s=snapshot();RC.conns.forEach(c=>{try{if(c.open)c.send({t:'state',s})}catch(e){}})},40);
}
function hostSend(conn){try{conn.send({t:'state',s:snapshot()})}catch(e){}}
function hostOnData(conn,d){
  if(!d||typeof d!=='object') return;
  if(d.t==='hello'){hostSend(conn);return}
  if(d.t==='start'){
    try{const c=normalize(d.cfg);if(filledCount(c)===0){conn.send({t:'toast',msg:t('addOne')});return}cfg=c;store.set(LS_CFG,cfg);startGame(true)}catch(e){}
    return;
  }
  if(d.t==='resume'){if(game&&game.phase!=='done')showGame(true);return}
  if(d.t==='cmd') hostCmd(conn,d);
}
function hostCmd(conn,d){
  if(!game) return;
  if($('#game').hidden&&game.phase!=='done'&&d.a!=='again') showGame(false);
  const x=modalCtx, a=d.a;
  if(a==='open'){if(x&&x.type==='info')closeModal(true);openCell(+d.c,+d.r,false)}
  else if(a==='reveal'){if(x?.type==='clue')reveal();else if(x?.type==='final')finalReveal()}
  else if(a==='close'){if(x?.type==='clue')closeClue();else if(x?.type==='info')closeModal()}
  else if(a==='judge'){if(x?.type==='clue')judge(+d.i,!!d.ok)}
  else if(a==='restart'){if(x?.type==='clue')startTimer(game.cfg.timer);else if(x?.type==='final'&&game.fin?.step==='question')startTimer(game.cfg.finalTimer)}
  else if(a==='pause'){togglePause()}
  else if(a==='ddPick'){if(x?.type==='dd')ddPick(+d.i)}
  else if(a==='ddWager'){if(x?.type==='dd'&&!ddGo(Math.round(+d.w)))conn.send({t:'toast',msg:t('wBad',fmt(ddMax(x.team)))})}
  else if(a==='goEnd'){if(game.phase==='board')goEnd()}
  else if(a==='fWagers'){const err=setFinalWagers(d.w||[]);if(err)conn.send({t:'toast',msg:err})}
  else if(a==='fReveal'){finalReveal()}
  else if(a==='fMark'){finalMark(+d.i,!!d.ok)}
  else if(a==='fBack'){finalBack()}
  else if(a==='finish'){if(game.phase==='final'&&game.fin?.step==='judge')finish()}
  else if(a==='adj'){adjust(+d.i,+d.d)}
  else if(a==='sound'){toggleSound()}
  else if(a==='again'){if(game.phase==='done'){stopConfetti();startGame(true)}}
  sync();
}

/* =========================================================
   CEL (control remoto)
   ========================================================= */
async function startRemote(code){
  code=cleanCode(code);
  if(code.length<5){toast(t('rmFail'));return}
  if(RC.mode==='remote'&&RC.code===code&&RC.connected){showRemote();return}
  RC.mode='remote'; RC.code=code; RC.connected=false; RC.state=null;
  history.replaceState(null,'',location.pathname+'?c='+code);
  showRemote();
  try{await needPeer()}catch(e){renderRemote('error');scheduleReconnect(4000);return}
  if(!RC.peer||RC.peer.destroyed){
    const p=new Peer({debug:0}); RC.peer=p;
    p.on('open',()=>connectRemote());
    p.on('error',err=>{if(p!==RC.peer)return;RC.connected=false;renderRemote(err.type==='peer-unavailable'?'notfound':'lost');scheduleReconnect(err.type==='peer-unavailable'?4000:2500)});
    p.on('disconnected',()=>{setTimeout(()=>{if(!p.destroyed)try{p.reconnect()}catch(e){}},1000)});
  }else if(RC.peer.open) connectRemote();
  wakeLock();
}
function connectRemote(){
  if(RC.mode!=='remote') return;
  if(RC.conn){try{RC.conn.close()}catch(e){}}
  const c=RC.peer.connect(PEER_PREFIX+RC.code,{reliable:true}); RC.conn=c;
  c.on('open',()=>{if(c!==RC.conn)return;RC.connected=true;c.send({t:'hello'});renderRemote();if(!$('#setup').hidden)renderSetup()});
  c.on('data',d=>{if(c!==RC.conn||!d)return;if(d.t==='state'){RC.state=d.s;RC.recvAt=performance.now();if(!$('#remote').hidden)renderRemote()}else if(d.t==='toast')toast(d.msg)});
  c.on('close',()=>{if(c!==RC.conn)return;RC.connected=false;renderRemote('lost');scheduleReconnect(1500)});
  c.on('error',()=>{});
}
let reconT=null;
function scheduleReconnect(ms){
  if(RC.mode!=='remote') return;
  clearTimeout(reconT);
  reconT=setTimeout(()=>{
    if(RC.mode!=='remote'||RC.connected) return;
    if(RC.peer&&!RC.peer.destroyed&&RC.peer.open) connectRemote();
    else{try{RC.peer&&RC.peer.destroy()}catch(e){}RC.peer=null;startRemote(RC.code)}
  },ms||3000);
}
function rsend(a,extra){
  if(!RC.conn||!RC.connected){toast(t('rmLost'));return}
  try{RC.conn.send({t:'cmd',a,...(extra||{})})}catch(e){}
  try{if(navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive))navigator.vibrate(12)}catch(e){}
}
function leaveRemote(){
  RC.mode=null;RC.connected=false;RC.state=null;clearTimeout(reconT);
  try{RC.conn&&RC.conn.close()}catch(e){} try{RC.peer&&RC.peer.destroy()}catch(e){}
  RC.peer=null;RC.conn=null;clearInterval(RC.ticker);
  history.replaceState(null,'',location.pathname);
  showOnly('setup');renderSetup();
}
function rcStartRemote(){
  if(RC.mode!=='remote') return false;
  if(!RC.connected){toast(t('rmLost'));return true}
  if(filledCount()===0){toast(t('addOne'));return true}
  store.set(LS_CFG,cfg);
  RC.conn.send({t:'start',cfg}); toast(t('rmSending')); showRemote(); return true;
}
function showRemote(){document.body.className='stage';showOnly('remote');renderRemote();window.scrollTo(0,0)}

/* ---------- vista del control ---------- */
function rTimerLeft(){const tmr=RC.state&&RC.state.timer;if(!tmr)return null;let left=tmr.left;if(tmr.running&&!tmr.paused)left-=performance.now()-RC.recvAt;return Math.max(0,left)}
function rDrawTimer(){
  const bar=$('#rmBar'),num=$('#rmT'),tmr=RC.state&&RC.state.timer; if(!bar||!tmr) return;
  const left=rTimerLeft();bar.querySelector('i').style.transform=`scaleX(${left/(tmr.total*1000)})`;bar.classList.toggle('crit',left<=5000);
  if(num) num.textContent=left<=0?t('over'):Math.ceil(left/1000)+' s';
}
function renderRemote(status){
  const el=$('#remote'); if(!el||RC.mode!=='remote') return;
  const keep={};el.querySelectorAll('[data-keep]').forEach(i=>{keep[i.dataset.keep]=i.value});
  const s=RC.state, ok=RC.connected;
  const msg=ok?t('rmOk'):status==='notfound'?t('rmFail'):status==='lost'?t('rmLost'):status==='error'?t('tvErr'):t('rmConnecting');
  el.innerHTML=`<div class="bulbs"></div>
  <header class="rm-head">
    <span class="dot ${ok?'on':''}"></span>
    <div class="rm-t"><b>${t('rmScreen',esc(RC.code))}</b><small>${msg}</small></div>
    <button class="ibtn txt" id="rmLang">${cfg.lang==='es'?'EN':'ES'}</button>
    <button class="ibtn" id="rmEdit" aria-label="${t('rmEdit')}">${ic('edit')}</button>
    <button class="ibtn" id="rmLeave" aria-label="${t('rmLeave')}">${ic('x')}</button>
  </header>
  <main class="rm-main">${ok&&s?remoteBody(s):`<div class="rm-empty"><div class="spin"></div>${msg}</div>`}</main>`;
  Object.entries(keep).forEach(([k,v])=>{const i=el.querySelector(`[data-keep="${k}"]`);if(i&&v!=='')i.value=v});
  clearInterval(RC.ticker);
  if(s&&s.timer){rDrawTimer();if(s.timer.running&&!s.timer.paused)RC.ticker=setInterval(rDrawTimer,200)}
}
function rTeamsRows(G,fn){return G.cfg.teams.map((tm,i)=>fn(tm,i)).join('')}
function remoteBody(s){
  const G=s.game, m=s.modal;
  if(!G||(s.screen==='lobby'&&(!G||G.phase==='done'))||(s.screen==='lobby'&&!m)){
    const inProg=G&&G.phase!=='done';
    return `<section class="rm-card center">
      <h2 class="rm-h">${t('rmReady')}</h2>
      <p class="rm-p">${t('rmLobby')}</p>
      <div class="rm-stack">
        <button class="btn gold xl" id="rmStart">${ic('play')} ${t('rmStart')}</button>
        ${inProg?`<button class="btn" id="rmResume">${ic('redo')} ${t('rmResume')}</button>`:''}
        <button class="btn" id="rmEdit2">${ic('edit')} ${t('rmEdit')}</button>
      </div>
      <p class="hint-s">${t('rmBoard',esc(cfg.title||t('defTitle')),filledCount())}</p>
    </section>`;
  }
  const g=G.cfg;
  if(s.screen==='results'||G.phase==='done'){
    const order=ranking(g,G.scores);
    return `<section class="rm-card center"><div class="r-k">${t('winner')}</div><h2 class="rm-h" style="color:${order[0].color}">${esc(order[0].name)}</h2></section>
      <div class="rank">${rankRows(order)}</div>
      <div class="rm-stack"><button class="btn gold xl" id="rmAgain">${ic('redo')} ${t('again')}</button><button class="btn" id="rmStart">${ic('play')} ${t('rmNew')}</button><button class="btn" id="rmEdit2">${ic('edit')} ${t('rmEdit')}</button></div>`;
  }
  const timerHtml=s.timer?`<div class="tbar" id="rmBar"><i></i></div><div class="rm-tl"><span id="rmT"></span><span>${s.timer.paused?t('rmPause')+' ⏸':''}</span></div>`:'';
  if(m&&m.type==='clue'){
    const cat=g.categories[m.c], q=cat.clues[m.r];
    return `<section class="rm-card paper" style="--cc:${catColor(m.c)}">
      <div class="sh-top"><span class="cchip">${esc(cat.name)}</span><span class="sp"></span><span class="sval">${m.dd?`<span class="dd">${t('wagerTag')}</span>`:''}${fmt(m.value)}</span></div>
      ${timerHtml}
      <p class="rm-q">${esc(q.q)}</p>
      <div class="rm-ans"><small>${t('answer')} · ${t('rmOnly')}</small><div>${esc(q.a||t('noAns'))}</div></div>
    </section>
    ${m.replay?`<p class="hint-s">${t('replay')}</p>`:`<div class="rm-teams">${m.teams.map(i=>{const tm=g.teams[i],won=m.winner===i,lost=m.wrong.includes(i),dis=m.answered||lost;
      return `<div class="rm-team ${won?'won':''} ${lost?'lost':''}" style="--tc:${tm.color}"><div><b>${esc(tm.name)}</b><small>${fmt(G.scores[i])}</small></div><button class="jb ok" data-rjudge="${i}" data-ok="1" ${dis?'disabled':''} aria-label="${esc(t('gotIt',tm.name))}">${ic('check')}</button><button class="jb no" data-rjudge="${i}" data-ok="0" ${dis?'disabled':''} aria-label="${esc(t('missed',tm.name))}">${ic('x')}</button></div>`}).join('')}</div>`}
    <div class="rm-acts">
      <button class="btn ${m.revealed?'':'gold'}" id="rmReveal" ${m.revealed?'disabled':''}>${ic('eye')} ${m.revealed?t('rmShown'):t('rmShow')}</button>
      ${s.timer&&s.timer.running?`<button class="btn" id="rmPause">${ic(s.timer.paused?'play':'pause')} ${s.timer.paused?t('rmGo'):t('rmPause')}</button>`:`<button class="btn" id="rmRestart">${ic('redo')} ${t('timeB')}</button>`}
      <button class="btn dark wide" id="rmClose">${ic('grid')} ${t('boardB')}</button>
    </div>`;
  }
  if(m&&m.type==='dd'){
    const cat=g.categories[m.c];
    if(m.team==null) return `<section class="rm-card center"><h2 class="rm-h">${t('dd1')} ${t('dd2')}</h2><p class="rm-p">${esc(cat.name)} · ${t('rmPick')}</p></section>
      <div class="rm-stack">${rTeamsRows(G,(tm,i)=>`<button class="pick" data-rdd="${i}" style="--tc:${tm.color}"><span>${esc(tm.name)}<small>${fmt(G.scores[i])}</small></span></button>`)}</div>`;
    const mx=Math.max(G.scores[m.team],5*g.step), tm2=g.teams[m.team];
    return `<section class="rm-card center"><h2 class="rm-h">${t('dd1')} ${t('dd2')}</h2><p class="rm-p">${t('range',esc(tm2.name),fmt(mx))}</p>
      <div class="wager"><input type="number" id="rmW" data-keep="ddw" min="0" max="${mx}" step="${g.step}" inputmode="numeric" value="${Math.min(mx,Math.max(g.step,G.scores[m.team]))}"></div>
      <button class="btn gold xl" id="rmDDGo" data-max="${mx}">${t('seeQ')} ${ic('arrow')}</button></section>
      <div class="rm-stack">${rTeamsRows(G,(tm,i)=>`<button class="pick ${i===m.team?'sel':''}" data-rdd="${i}" style="--tc:${tm.color}"><span>${esc(tm.name)}<small>${fmt(G.scores[i])}</small></span></button>`)}</div>`;
  }
  if(m&&m.type==='info'){
    return `<section class="rm-card center"><h2 class="rm-h">${t('bd1')} ${t('bd2')}</h2>
      <div class="rm-stack"><button class="btn gold xl" id="rmGoEnd">${ic('trophy')} ${g.finalOn?t('finalBtn'):t('results')}</button><button class="btn" id="rmStay">${t('seeBoard')}</button></div></section>`;
  }
  if(G.phase==='final'&&G.fin){
    const f=G.fin,F=g.final;
    if(f.step==='wager') return `<section class="rm-card center"><h2 class="rm-h">${t('f1')} ${t('f2')}</h2><p class="rm-p">${t('category')}: <b>${esc(F.category||t('surprise'))}</b></p></section>
      <div class="wlist">${rTeamsRows(G,(tm,i)=>{const mx=Math.max(0,G.scores[i]);return `<div class="wrow" style="--tc:${tm.color}"><div><b>${esc(tm.name)}</b><small>${t('ptsMax',fmt(G.scores[i]),fmt(mx))}</small></div><input type="number" min="0" max="${mx}" step="${g.step}" data-rw="${i}" data-keep="fw${i}" value="${Math.min(f.wagers[i]||0,mx)}" inputmode="numeric" aria-label="${esc(t('wagerOf',tm.name))}"></div>`})}</div>
      <div class="rm-acts"><button class="btn gold wide" id="rmFGo">${t('seeQ')} ${ic('arrow')}</button><button class="btn wide" id="rmFBack">${ic('back')} ${t('boardB')}</button></div>`;
    const judged=f.step==='judge';
    return `<section class="rm-card paper" style="--cc:#ffc21a">
      <div class="sh-top"><span class="cchip">${esc(F.category||t('final'))}</span><span class="sp"></span><span class="sval">${t('finalL')}</span></div>
      ${judged?'':timerHtml}
      <p class="rm-q">${esc(F.q)}</p>
      <div class="rm-ans"><small>${t('answer')} · ${t('rmOnly')}</small><div>${esc(F.a||t('noAns'))}</div></div>
    </section>
    ${judged?`<p class="hint-s">${t('markHint')}</p><div class="rm-teams">${rTeamsRows(G,(tm,i)=>`<div class="rm-team ${f.marks[i]===true?'sel-ok':f.marks[i]===false?'sel-no':''}" style="--tc:${tm.color}"><div><b>${esc(tm.name)}</b><small>${fmt(+f.wagers[i]||0)}</small></div><button class="jb ok" data-rfm="${i}" data-ok="1">${ic('check')}</button><button class="jb no" data-rfm="${i}" data-ok="0">${ic('x')}</button></div>`)}</div>
      <div class="rm-acts"><button class="btn gold wide" id="rmFinish">${ic('trophy')} ${t('seeRes')}</button></div>`
    :`<div class="rm-acts"><button class="btn gold" id="rmFReveal">${ic('eye')} ${t('rmShow')}</button>${s.timer&&s.timer.running?`<button class="btn" id="rmPause">${ic(s.timer.paused?'play':'pause')} ${s.timer.paused?t('rmGo'):t('rmPause')}</button>`:`<button class="btn" id="rmFRestart">${ic('redo')} ${t('timeB')}</button>`}</div>`}`;
  }
  /* tablero */
  const left=g.categories.reduce((n,c,ci)=>n+c.clues.filter((q,ri)=>q.q.trim()&&!G.used[key(ci,ri)]).length,0);
  return `<div class="rm-scores">${scoreCards(g,G.scores)}</div>
    <p class="hint-s">${t('rmTap')} · ${t('left',left)}</p>
    <div class="rm-board">${g.categories.map((c,ci)=>`<div class="rm-cat" style="--cc:${catColor(ci)}"><h4>${esc(c.name||'—')}</h4><div class="rm-tiles">${c.clues.map((q,ri)=>{const u=G.used[key(ci,ri)];if(!q.q.trim())return '<span class="rm-tile empty"></span>';
      return `<button class="rm-tile ${u?'used':''}" data-rc="${ci}" data-rr="${ri}">${u?(u.by!=null&&g.teams[u.by]?`<span class="stamp" style="--tc:${g.teams[u.by].color}">${esc(initial(g.teams[u.by].name))}</span>`:'–'):fmt((ri+1)*g.step)}</button>`}).join('')}</div></div>`).join('')}</div>
    <div class="rm-acts"><button class="btn gold wide" id="rmEnd">${ic('trophy')} ${g.finalOn?t('finalBtn'):t('endBtn')}</button><button class="btn wide" id="rmSound">${ic(g.sound?'sound':'mute')} ${t('soundL')}</button></div>`;
}
$('#remote').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b||b.disabled) return;
  const s=RC.state, G=s&&s.game;
  if(b.id==='rmLeave'){if(confirm(t('rmLeave')+'?'))leaveRemote();return}
  if(b.id==='rmLang'){setLang(cfg.lang==='es'?'en':'es');renderRemote();return}
  if(b.id==='rmEdit'||b.id==='rmEdit2'){showOnly('setup');renderSetup();window.scrollTo(0,0);return}
  if(b.id==='rmStart'){rcStartRemote();return}
  if(b.id==='rmResume'){RC.conn.send({t:'resume'});return}
  if(b.id==='rmAgain'){rsend('again');return}
  if(b.dataset.rc!==undefined){const k=key(+b.dataset.rc,+b.dataset.rr);if(G&&G.used[k]&&!confirm(t('confReplay')))return;rsend('open',{c:+b.dataset.rc,r:+b.dataset.rr});return}
  if(b.dataset.adj!==undefined){rsend('adj',{i:+b.dataset.adj,d:+b.dataset.d});return}
  if(b.dataset.rjudge!==undefined){rsend('judge',{i:+b.dataset.rjudge,ok:b.dataset.ok==='1'});return}
  if(b.dataset.rdd!==undefined){rsend('ddPick',{i:+b.dataset.rdd});return}
  if(b.dataset.rfm!==undefined){rsend('fMark',{i:+b.dataset.rfm,ok:b.dataset.ok==='1'});return}
  if(b.id==='rmDDGo'){const w=Math.round(+$('#rmW').value||0),mx=+b.dataset.max;if(!(w>=0&&w<=mx)){toast(t('wBad',fmt(mx)));return}rsend('ddWager',{w});return}
  if(b.id==='rmReveal'){rsend('reveal');return}
  if(b.id==='rmPause'){rsend('pause');return}
  if(b.id==='rmRestart'){rsend('restart');return}
  if(b.id==='rmClose'){rsend('close');return}
  if(b.id==='rmGoEnd'){rsend('goEnd');return}
  if(b.id==='rmStay'){rsend('close');return}
  if(b.id==='rmSound'){rsend('sound');return}
  if(b.id==='rmEnd'){const g=G.cfg;const left=g.categories.reduce((n,c,ci)=>n+c.clues.filter((q,ri)=>q.q.trim()&&!G.used[key(ci,ri)]).length,0);if(left&&!confirm(t('confEnd',left,g.finalOn)))return;rsend('goEnd');return}
  if(b.id==='rmFGo'){const ws=[...document.querySelectorAll('[data-rw]')].map(i=>i.value);for(let i=0;i<ws.length;i++){const mx=Math.max(0,G.scores[i]),v=Math.round(+ws[i]||0);if(!(v>=0&&v<=mx)){toast(t('fBad',G.cfg.teams[i].name,fmt(mx)));return}}rsend('fWagers',{w:ws.map(v=>Math.round(+v||0))});return}
  if(b.id==='rmFBack'){rsend('fBack');return}
  if(b.id==='rmFReveal'){rsend('fReveal');return}
  if(b.id==='rmFRestart'){rsend('restart');return}
  if(b.id==='rmFinish'){const pend=G.fin.marks.filter(x=>x===null).length;if(pend&&!confirm(t('confPend',pend)))return;rsend('finish');return}
});

/* =========================================================
   ARRANQUE
   ========================================================= */
(function boot(){
  checkHash();
  const p=new URLSearchParams(location.search);
  const c=p.get('c');
  if(c){renderSetup();startRemote(c);return}
  if(p.has('tv')){renderSetup();startHost();return}
  showOnly('setup');renderSetup();
})();
