'use strict';
/* =========================================================
   ICONOS
   ========================================================= */
const ICONS={
  back:'<path d="M15 5l-7 7 7 7"/>',
  expand:'<path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/>',
  sound:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9a4 4 0 010 6M19.5 6.5a8 8 0 010 11"/>',
  mute:'<path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M17 9.5l5 5M22 9.5l-5 5"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x:'<path d="M6 6l12 12M18 6L6 18"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  minus:'<path d="M5 12h14"/>',
  redo:'<path d="M20 12a8 8 0 11-2.4-5.7"/><path d="M20 4v5h-5"/>',
  dice:'<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="9" r=".6" fill="currentColor"/><circle cx="15" cy="15" r=".6" fill="currentColor"/><circle cx="15" cy="9" r=".6" fill="currentColor"/><circle cx="9" cy="15" r=".6" fill="currentColor"/>',
  trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
  save:'<path d="M6 4h12v16l-6-4-6 4z"/>',
  link:'<path d="M10 14a4 4 0 005.7 0l3-3a4 4 0 00-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1-1"/>',
  down:'<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  up:'<path d="M12 15V4M7 9l5-5 5 5M5 20h14"/>',
  play:'<path d="M8 5l11 7-11 7z" fill="currentColor"/>',
  trophy:'<path d="M8 4h8v5a4 4 0 01-8 0z"/><path d="M8 6H5a3 3 0 003 4M16 6h3a3 3 0 01-3 4M12 13v4M8 20h8"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  reset:'<path d="M4 12a8 8 0 102.4-5.7"/><path d="M4 4v5h5"/>',
  grid:'<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
  edit:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  tv:'<rect x="3" y="5" width="18" height="12" rx="2"/><path d="M8 21h8M12 17v4"/>',
  phone:'<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M11 17.5h2"/>',
  pause:'<path d="M9 6v12M15 6v12"/>',
  folder:'<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>'
};
const ic=n=>`<svg class="i" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;

/* =========================================================
   TEXTOS (ES / EN)
   ========================================================= */
const STR={
es:{
  locale:'es-MX', defTitle:'Tablero de Trivia', kicker:'Editor · se guarda solo', team:n=>`Equipo ${n}`,
  tabQ:'Preguntas',tabB:'Banco',tabT:'Equipos',tabS:'Ajustes',tabG:'Guardados',
  gSave:'Guardar este tablero',gNew:'Tablero nuevo',gOpen:'Abrir',gDup:'Duplicar',gCur:'Abierto ahora',gAuto:'Se guarda solo',gUnsaved:'Este tablero todavía no está guardado.',
  gName:'¿Cómo se llama este tablero?',gSaved:n=>`“${n}” guardado`,gOpened:n=>`“${n}” abierto`,gDel:n=>`¿Borrar el tablero “${n}”? No se puede deshacer.`,gDeleted:'Tablero borrado',
  gExists:n=>`Ya tienes un tablero llamado “${n}”. ¿Reemplazarlo con este?`,gAsk:'El tablero abierto no está guardado y se va a perder. ¿Guardarlo primero?',gCopy:n=>`${n} (copia)`,
  gEmpty:'Todavía no tienes tableros guardados. Arma uno en Preguntas y toca “Guardar este tablero”.',gN:(q,d)=>`${q} preguntas · ${d}`,
  gHint:'Puedes guardar todos los tableros que quieras. El que está abierto se guarda solo con cada cambio. Viven en este navegador: para pasarlos a otro cel o compu, o tener respaldo, toca “Descargar respaldo de todo” y en el otro abre ese archivo con “Abrir archivo” (en Ajustes).',
  gBackup:'Descargar respaldo de todo',
  cont:'Continuar',newGame:'Nuevo juego',play:'Jugar',
  loadBank:'Cargar del banco…',grpMix:'Mezclas',mixRand:'🎲 Revoltijo al azar',mixPick:'🔀 Mezclar categorías…',mixTitle:'Mezclar categorías',mixHint:'Escoge 2 o más categorías del banco. Se toma una pregunta de cada nivel, repartidas entre las que escojas, y el juego le pone nombre a la mezcla (lo puedes cambiar).',mixGo:'Mezclar',mixFew:'Escoge al menos 2 categorías',grpBank:'Banco de preguntas',grpMine:'Mis categorías',noName:'(sin nombre)',
  catName:'Nombre de la categoría',saveMine:'Guardar en Mis categorías',clearCat:'Vaciar categoría',
  qPh:'Escribe la pregunta',aPh:'Respuesta',aL:'R',
  cats:'Categorías',random:'Aleatorio del banco',reroll:'Otras preguntas',clearAll:'Vaciar todo',
  edHint:'Escribe tus preguntas o carga categorías del banco (cada vez salen preguntas distintas). Las casillas vacías no aparecen en el tablero.',
  final:'Ronda final',finalOff:'Desactivada en Ajustes',pickFinal:'Elegir una del banco…',
  category:'Categoría',answer:'Respuesta',question:'Pregunta',finalPh:'Pregunta final',catPh:'Ej. Historia',
  mine:'Mía',useIn:n=>`Usar en col. ${n}`,del:'Eliminar',placeIn:'Colocar en',column:'Columna',
  bankHint:'Al usar una categoría, el tablero toma una pregunta al azar por nivel.',
  mineEmpty:'Todavía no tienes categorías propias. Crea una con “Nueva categoría” o guarda una desde Preguntas.',
  edit:'Editar',newCat:'Nueva categoría',addQ:'Agregar pregunta',save:'Guardar',cancel:'Cancelar',restore:'Restaurar original',edited:'Editada',
  nQ:n=>`${n} preguntas`,more:n=>`+${n} más`,orderHint:'Ordénalas de fácil a difícil: el tablero toma una al azar por cada nivel (100 a 500).',
  needOne:'Escribe al menos una pregunta',confRestore:'¿Regresar esta categoría a su versión original?',confDelCat:'¿Eliminar esta categoría?',
  editTitle:'Editar categoría',savedOk:'Guardado',restored:'Restaurada',
  teamsN:'Número de equipos',teamPh:'Nombre del equipo',
  sTitle:'Nombre del juego',sStep:'Valores de las casillas',stepF:(a,b)=>`${a} a ${b} puntos`,
  sTimer:'Tiempo por pregunta',secs:v=>`${v} segundos`,noTimer:'Sin temporizador',sFinalT:'Tiempo en la ronda final',
  sDD:'Casillas “Doble o nada”',ddF:v=>v>1?`${v} casillas ocultas`:`${v} casilla oculta`,none:'Ninguna',
  ddHint:'Quien la encuentra apuesta antes de ver la pregunta.',
  tFinal:'Ronda final con apuestas',tPen:'Restar puntos si fallan',tSound:'Sonidos',lang:'Idioma',
  shareT:'Llevar el juego a otra pantalla',shareB:'Copiar link con este tablero',exp:'Descargar archivo',imp:'Abrir archivo',reset:'Restablecer todo',
  shareHint:'Tus preguntas viven en este navegador. Con “Control con cel” no hace falta: el cel le manda tu tablero a la pantalla.',
  confRandom:'¿Reemplazar todas las categorías con unas al azar del banco?',tRandom:'Tablero nuevo listo',
  confBlank:'¿Borrar todas las preguntas del tablero?',confClear:'¿Vaciar esta categoría?',emptyCat:'La categoría está vacía',
  updMine:'Actualizada en Mis categorías',savedMine:'Guardada en Mis categorías',placed:(n,c)=>`“${n}” quedó en la columna ${c}`,
  confReset:'Esto borra tus preguntas, equipos y ajustes de este navegador (tu banco se conserva). ¿Continuar?',
  fileOk:'Archivo cargado',fileBad:'Ese archivo no es válido',linkOk:'Link copiado. Ábrelo en otra pantalla para cargar este tablero.',copyLink:'Copia este link:',
  confShared:t=>`¿Cargar el tablero compartido “${t}”? Reemplaza el tablero guardado en este navegador.`,sharedOk:'Tablero cargado',sharedBad:'El link del tablero no es válido',
  confReplace:(c,n)=>`¿Reemplazar la columna ${c} con “${n}”?`,confFewer:n=>`Se eliminarán las últimas ${n} categorías. ¿Continuar?`,
  addOne:'Agrega al menos una pregunta',confNew:'Hay una partida en curso. ¿Empezar una nueva desde cero?',
  backEd:'Volver',soundL:'Sonido',full:'Pantalla completa',finalBtn:'Ronda final',endBtn:'Terminar',
  left:n=>`${n} por jugar`,boardFull:'Tablero completo',played:'ya jugada',forPts:'por',addN:n=>`Sumar ${n}`,subN:n=>`Restar ${n}`,
  confEnd:(n,f)=>`Quedan ${n} preguntas sin jugar. ¿${f?'Ir a la ronda final':'Terminar el juego'}?`,
  confReplay:'Esta pregunta ya se jugó. ¿Verla otra vez? (los puntos no cambian)',
  qDef:'Pregunta',wagerTag:'Apuesta',noAns:'(sin respuesta escrita)',replay:'Repetición: los puntos no cambian.',
  gotIt:n=>`${n} acertó`,missed:n=>`${n} falló`,revealB:'Respuesta',timeB:'Tiempo',boardB:'Tablero',timerL:'Temporizador',pause:'Pausar / seguir',over:'TIEMPO',
  bd1:'Tablero',bd2:'completo',bdFinal:'Llegó la hora de la ronda final.',bdRes:'Veamos quién ganó.',results:'Resultados',seeBoard:'Ver tablero',
  dd1:'Doble',dd2:'o nada',ddSub:c=>`Categoría <b>${c}</b> · ¿qué equipo eligió la casilla?`,range:(n,m)=>`${n} puede apostar de 0 a ${m} puntos`,
  seeQ:'Ver pregunta',wBad:m=>`La apuesta va de 0 a ${m}`,wager:'Apuesta',
  f1:'Ronda',f2:'final',fSub:c=>`Categoría: <b>${c}</b><br>Cada equipo apuesta en secreto (máximo lo que tiene). Escribe aquí las apuestas.`,
  surprise:'Sorpresa',ptsMax:(s,m)=>`${s} pts · máx ${m}`,wagerOf:n=>`Apuesta de ${n}`,finalL:'Final',
  markHint:'Marca quién acertó: suma su apuesta; si falla, la pierde.',seeRes:'Ver resultados',
  confPend:n=>`${n} equipo(s) sin marcar cuentan como incorrectos. ¿Continuar?`,noFinalQ:'No hay pregunta final escrita; vamos a resultados',
  fBad:(n,m)=>`${n}: la apuesta va de 0 a ${m}`,
  winner:'Ganador',tie:'Empate',points:'puntos',again:'Jugar otra vez',editor:'Editor',
  tvBtn:'Pantalla TV',rcBtn:'Control con cel',askCode:'Escribe el código que aparece en la pantalla (TV o proyector):',
  tvKicker:'Modo pantalla',tvTitle:'Escanea con tu cel',tvCode:'Código',tvOr:'O abre',tvOr2:'en el cel, toca “Control con cel” y escribe el código.',
  tvWaiting:'Esperando el control…',tvConnected:n=>n>1?`${n} controles conectados · empieza desde el cel`:'Control conectado · empieza desde el cel',
  tvErr:'Sin conexión con el servidor. Reintentando…',tvPlayHere:'Jugar aquí sin control',tvBanner:c=>`Modo pantalla activo · código ${c}`,tvShow:'Ver código',
  rmScreen:c=>`Pantalla ${c}`,rmOk:'Conectado',rmConnecting:'Conectando…',rmLost:'Se perdió la conexión. Reconectando…',rmFail:'No encuentro esa pantalla. Revisa el código.',
  rmReady:'¡Listo!',rmLobby:'Desde aquí controlas todo: la pantalla muestra el tablero y tú ves las respuestas.',
  rmStart:'Empezar con mi tablero',rmResume:'Seguir la partida de la pantalla',rmEdit:'Editar tablero',rmLeave:'Desconectar',
  rmOnly:'solo tú la ves',rmShow:'Mostrar en pantalla',rmShown:'Ya está en pantalla',rmPause:'Pausar',rmGo:'Seguir',
  rmTap:'Toca una casilla para abrirla en la pantalla.',rmBanner:c=>`Conectado a la pantalla ${c}. “Jugar” la empieza allá.`,rmBackCtl:'Ir al control',
  rmBoard:(n,q)=>`Tu tablero: “${n}” · ${q} preguntas`,rmPick:'¿Qué equipo eligió la casilla?',rmNew:'Nuevo juego con mi tablero',rmSending:'Mandando tu tablero…'
},
en:{
  locale:'en-US', defTitle:'Trivia Board', kicker:'Editor · autosaves', team:n=>`Team ${n}`,
  tabQ:'Questions',tabB:'Bank',tabT:'Teams',tabS:'Settings',tabG:'Saved',
  gSave:'Save this board',gNew:'New board',gOpen:'Open',gDup:'Duplicate',gCur:'Open now',gAuto:'Autosaves',gUnsaved:'This board isn’t saved yet.',
  gName:'What do you want to call this board?',gSaved:n=>`“${n}” saved`,gOpened:n=>`“${n}” opened`,gDel:n=>`Delete the board “${n}”? This can’t be undone.`,gDeleted:'Board deleted',
  gExists:n=>`You already have a board called “${n}”. Replace it with this one?`,gAsk:'The open board isn’t saved and will be lost. Save it first?',gCopy:n=>`${n} (copy)`,
  gEmpty:'No saved boards yet. Build one in Questions and tap “Save this board”.',gN:(q,d)=>`${q} questions · ${d}`,
  gHint:'Save as many boards as you like. The open one saves itself on every change. They live in this browser: to move them to another phone or computer, or keep a backup, tap “Download backup of everything” and open that file on the other one with “Open file” (in Settings).',
  gBackup:'Download backup of everything',
  cont:'Continue',newGame:'New game',play:'Play',
  loadBank:'Load from bank…',grpMix:'Mixes',mixRand:'🎲 Random mix',mixPick:'🔀 Mix categories…',mixTitle:'Mix categories',mixHint:'Pick 2 or more bank categories. One question per level is drawn, spread across your picks, and the game names the mix (you can rename it).',mixGo:'Mix',mixFew:'Pick at least 2 categories',grpBank:'Question bank',grpMine:'My categories',noName:'(untitled)',
  catName:'Category name',saveMine:'Save to My categories',clearCat:'Clear category',
  qPh:'Type the question',aPh:'Answer',aL:'A',
  cats:'Categories',random:'Random from bank',reroll:'Other questions',clearAll:'Clear all',
  edHint:'Write your own questions or load categories from the bank (you get different questions each time). Empty tiles don’t show up on the board.',
  final:'Final round',finalOff:'Turned off in Settings',pickFinal:'Pick one from the bank…',
  category:'Category',answer:'Answer',question:'Question',finalPh:'Final question',catPh:'e.g. History',
  mine:'Mine',useIn:n=>`Use in col. ${n}`,del:'Delete',placeIn:'Place in',column:'Column',
  bankHint:'When you use a category, the board picks one random question per level.',
  mineEmpty:'You don’t have your own categories yet. Create one with “New category” or save one from Questions.',
  edit:'Edit',newCat:'New category',addQ:'Add question',save:'Save',cancel:'Cancel',restore:'Restore original',edited:'Edited',
  nQ:n=>`${n} questions`,more:n=>`+${n} more`,orderHint:'Order them easy to hard: the board picks one at random per level (100 to 500).',
  needOne:'Write at least one question',confRestore:'Restore this category to its original version?',confDelCat:'Delete this category?',
  editTitle:'Edit category',savedOk:'Saved',restored:'Restored',
  teamsN:'Number of teams',teamPh:'Team name',
  sTitle:'Game name',sStep:'Tile values',stepF:(a,b)=>`${a} to ${b} points`,
  sTimer:'Time per question',secs:v=>`${v} seconds`,noTimer:'No timer',sFinalT:'Final round time',
  sDD:'“Double or nothing” tiles',ddF:v=>v>1?`${v} hidden tiles`:`${v} hidden tile`,none:'None',
  ddHint:'Whoever finds one places a wager before seeing the question.',
  tFinal:'Final round with wagers',tPen:'Subtract points for wrong answers',tSound:'Sounds',lang:'Language',
  shareT:'Take the game to another screen',shareB:'Copy link with this board',exp:'Download file',imp:'Open file',reset:'Reset everything',
  shareHint:'Your questions live in this browser. With “Phone remote” you don’t need this: your phone sends the board to the screen.',
  confRandom:'Replace every category with random ones from the bank?',tRandom:'New board ready',
  confBlank:'Delete every question on the board?',confClear:'Clear this category?',emptyCat:'This category is empty',
  updMine:'Updated in My categories',savedMine:'Saved to My categories',placed:(n,c)=>`“${n}” is now in column ${c}`,
  confReset:'This erases your questions, teams and settings in this browser (your bank is kept). Continue?',
  fileOk:'File loaded',fileBad:'That file isn’t valid',linkOk:'Link copied. Open it on another screen to load this board.',copyLink:'Copy this link:',
  confShared:t=>`Load the shared board “${t}”? It replaces the board saved in this browser.`,sharedOk:'Board loaded',sharedBad:'That board link isn’t valid',
  confReplace:(c,n)=>`Replace column ${c} with “${n}”?`,confFewer:n=>`The last ${n} categories will be removed. Continue?`,
  addOne:'Add at least one question',confNew:'A game is in progress. Start a new one from scratch?',
  backEd:'Back',soundL:'Sound',full:'Fullscreen',finalBtn:'Final round',endBtn:'Finish',
  left:n=>`${n} left`,boardFull:'Board complete',played:'already played',forPts:'for',addN:n=>`Add ${n}`,subN:n=>`Subtract ${n}`,
  confEnd:(n,f)=>`${n} questions haven’t been played. ${f?'Go to the final round':'End the game'}?`,
  confReplay:'This question was already played. Show it again? (scores won’t change)',
  qDef:'Question',wagerTag:'Wager',noAns:'(no answer written)',replay:'Replay: scores won’t change.',
  gotIt:n=>`${n} got it`,missed:n=>`${n} missed`,revealB:'Answer',timeB:'Timer',boardB:'Board',timerL:'Timer',pause:'Pause / resume',over:'TIME',
  bd1:'Board',bd2:'complete',bdFinal:'Time for the final round.',bdRes:'Let’s see who won.',results:'Results',seeBoard:'View board',
  dd1:'Double',dd2:'or nothing',ddSub:c=>`Category <b>${c}</b> · which team picked this tile?`,range:(n,m)=>`${n} can wager 0 to ${m} points`,
  seeQ:'See question',wBad:m=>`Wager must be 0 to ${m}`,wager:'Wager',
  f1:'Final',f2:'round',fSub:c=>`Category: <b>${c}</b><br>Each team wagers in secret (up to what they have). Enter the wagers here.`,
  surprise:'Surprise',ptsMax:(s,m)=>`${s} pts · max ${m}`,wagerOf:n=>`${n} wager`,finalL:'Final',
  markHint:'Mark who got it: right adds the wager, wrong loses it.',seeRes:'See results',
  confPend:n=>`${n} unmarked team(s) will count as wrong. Continue?`,noFinalQ:'No final question written; going to results',
  fBad:(n,m)=>`${n}: wager must be 0 to ${m}`,
  winner:'Winner',tie:'Tie',points:'points',again:'Play again',editor:'Editor',
  tvBtn:'TV screen',rcBtn:'Phone remote',askCode:'Type the code shown on the screen (TV or projector):',
  tvKicker:'Screen mode',tvTitle:'Scan with your phone',tvCode:'Code',tvOr:'Or open',tvOr2:'on your phone, tap “Phone remote” and enter the code.',
  tvWaiting:'Waiting for a remote…',tvConnected:n=>n>1?`${n} remotes connected · start from your phone`:'Remote connected · start from your phone',
  tvErr:'Can’t reach the server. Retrying…',tvPlayHere:'Play here without a remote',tvBanner:c=>`Screen mode on · code ${c}`,tvShow:'Show code',
  rmScreen:c=>`Screen ${c}`,rmOk:'Connected',rmConnecting:'Connecting…',rmLost:'Connection lost. Reconnecting…',rmFail:'Can’t find that screen. Check the code.',
  rmReady:'Ready!',rmLobby:'You control everything from here: the screen shows the board and you see the answers.',
  rmStart:'Start with my board',rmResume:'Resume the screen’s game',rmEdit:'Edit board',rmLeave:'Disconnect',
  rmOnly:'only you see this',rmShow:'Show on screen',rmShown:'Showing on screen',rmPause:'Pause',rmGo:'Resume',
  rmTap:'Tap a tile to open it on the screen.',rmBanner:c=>`Connected to screen ${c}. “Play” starts it there.`,rmBackCtl:'Go to remote',
  rmBoard:(n,q)=>`Your board: “${n}” · ${q} questions`,rmPick:'Which team picked the tile?',rmNew:'New game with my board',rmSending:'Sending your board…'
}};

/* =========================================================
   ESTADO
   ========================================================= */
const CAT_COLORS=['#ff5a36','#ffc21a','#2bd49a','#5aa9ff','#ff4fa3','#b48cff'];
const PALETTE=['#ff5a36','#5aa9ff','#ffc21a','#2bd49a','#ff4fa3','#b48cff','#9be04a','#ff9f1c'];
const catColor=i=>CAT_COLORS[i%CAT_COLORS.length];
const LS_CFG='trivia.config.v1', LS_GAME='trivia.game.v1', LS_BANK='trivia.mybank.v1', LS_EDITS='trivia.bankedits.v1', LS_BOARDS='trivia.boards.v1';
const store={
  get(k){try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},
  set(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}},
  del(k){try{localStorage.removeItem(k)}catch(e){}}
};
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clone=o=>JSON.parse(JSON.stringify(o));
const shuffle=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const $=s=>document.querySelector(s);
const initial=s=>(String(s).trim()[0]||'?').toUpperCase();
const sync=()=>{if(typeof hostSync==='function')hostSync()};

const navLang=(navigator.language||'es').toLowerCase().startsWith('en')?'en':'es';
function curLang(){return (game&&game.cfg&&$('#setup').hidden&&$('#remote').hidden?game.cfg.lang:cfg&&cfg.lang)||navLang}
function L(){return STR[curLang()]||STR.es}
function t(k,...a){const v=L()[k];return typeof v==='function'?v(...a):v}
const fmt=n=>Number(n).toLocaleString(L().locale);

/* ---------- banco (base de datos + ediciones + propias) ---------- */
const RAW={es:BANK_DATA.es.map(c=>({name:c.name,clues:c.clues.map(([q,a])=>({q,a}))})),en:BANK_DATA.en.map(c=>({name:c.name,clues:c.clues.map(([q,a])=>({q,a}))}))};
const FINALS={es:FINAL_DATA.es.map(([category,q,a])=>({category,q,a})),en:FINAL_DATA.en.map(([category,q,a])=>({category,q,a}))};
let edits=store.get(LS_EDITS)||{es:{},en:{}}; edits.es=edits.es||{}; edits.en=edits.en||{};
let myBank=store.get(LS_BANK)||[];
function bankList(lang){lang=lang||cfg.lang;return RAW[lang].map((c,i)=>edits[lang][i]?{...edits[lang][i],idx:i,edited:true}:{...c,idx:i})}
const fbank=()=>FINALS[cfg.lang]||FINALS.es;
function blankCat(){return {name:'',clues:Array.from({length:5},()=>({q:'',a:''}))}}
/* toma una pregunta al azar por nivel */
function pickCat(src,meta){
  const n=src.clues.length, picks=[];
  for(let k=0;k<5;k++){
    const pool=[];for(let i=0;i<n;i++)if(Math.floor(i*5/n)===k)pool.push(i);
    picks.push(pool.length?pool[Math.floor(Math.random()*pool.length)]:-1);
  }
  const cat={name:src.name,clues:picks.map(i=>i>=0?{q:src.clues[i].q||'',a:src.clues[i].a||''}:{q:'',a:''})};
  if(meta) cat.src={...meta,picks};
  return cat;
}
function catFromKey(v){const [k,i]=v.split(':');if(k==='b'){const b=bankList()[+i];return pickCat(b,b.edited?null:{lang:cfg.lang,i:+i})}return pickCat(myBank[+i])}
function keyName(v){const [k,i]=v.split(':');return (k==='b'?bankList()[+i]:myBank[+i])?.name||''}
/* ---------- mezclas: preguntas de varias categorías, el juego le pone nombre ---------- */
const THEMES=[
  ['peques',/peques|infantil|little ones|children/i],
  ['musica',/m[úu]sic|canci|rock|pop latino|banda|qui[ée]n canta|antaño|songs|hits|oldies/i],
  ['deporte',/deport|f[úu]tbol|b[ée]isbol|lucha|box|f[óo]rmula|ol[íi]mpi|b[áa]squet|tenis|sports|football|baseball|boxing|basketball/i],
  ['juegos',/videojuego|minecraft|pok[ée]mon|juguete|reto|acertijo|adivinanza|game|riddle|challenge|puzzle/i],
  ['cine',/cine|pel[íi]cula|disney|pixar|star wars|saga|harry potter|shrek|simpson|bob esponja|villano|superh[ée]roe|\btv\b|caricatura|entretenimiento|emoji|frases de|movie|cartoon|spongebob|entertainment/i],
  ['mexico',/m[ée]xic|yucat|m[ée]rida|maya|tradici|dulces|refr[áa]n|lotería|baúl|recuerdos|saying|blast/i],
  ['naturaleza',/animal|mascota|dinosaur|\bel mar\b|plantas|frutas|pets|ocean|plants|fruits/i],
  ['ciencia',/ciencia|espacio|cuerpo|tecnolog|invento|n[úu]mero|matem|science|space|body|tech|invent|number|math/i],
  ['mundo',/geograf|capital|bandera|pa[íi]ses|idioma|maravilla|del mundo|mundial|transporte|geograph|flag|countr|language|wonder|world|transport/i]];
const MIXN={es:{peques:['Recreo revuelto','Hora del recreo','Mochila de preguntas'],musica:['Popurrí musical','Rocola revuelta','Karaoke de preguntas'],deporte:['Cancha mixta','Tiempo extra','Medalla revuelta'],juegos:['Control en mano','Juego de juegos','Nivel secreto'],cine:['Palomitas y claqueta','Función de gala','Cartelera revuelta'],mexico:['Puro México','Mole de preguntas','Lotería revuelta'],naturaleza:['Safari revuelto','Arca de Noé','Bichos y más'],ciencia:['Laboratorio loco','Ciencia revuelta','Cerebritos'],mundo:['Vuelta al mundo','Pasaporte revuelto','Maleta de preguntas'],familia:['Hecho en casa','Cosas de la familia','Puro chisme familiar'],mix:['Revoltijo','Pozole de preguntas','De todo un poco','Ensalada de preguntas','Botana surtida','Ponche de preguntas','Piñata de preguntas']},
  en:{peques:['Recess Mix','Backpack Bonanza','Playtime'],musica:['Mixtape','Jukebox Jumble','Karaoke Night'],deporte:['Mixed Court','Overtime','Medal Mix'],juegos:['Player One','Game of Games','Secret Level'],cine:['Popcorn & Clapper','Gala Night','Movie Jumble'],mexico:['Pure Mexico','Mole Mix','Lotería Shuffle'],naturaleza:['Safari Mix','Noah\'s Ark','Critters & Co.'],ciencia:['Mad Lab','Science Shuffle','Brainiacs'],mundo:['Around the World','Passport Mix','Suitcase of Questions'],familia:['Homemade','Family Matters','Inside Jokes'],mix:['Potpourri','Question Pozole','A Bit of Everything','Trivia Salad','Mixed Snacks','Piñata of Questions']}};
function themeOf(i){const n=(RAW.es[i]||{}).name||'';for(const [k,re] of THEMES)if(re.test(n))return k;return 'mix'}
function mixNameKey(idxs){const th=[...new Set(idxs.map(themeOf))];const k=th.length===1?th[0]:'mix';return [k,Math.floor(Math.random()*MIXN.es[k].length)]}
const mixName=(lang,nk)=>{const L=MIXN[lang]||MIXN.es,arr=L[nk[0]]||L.mix;return arr[nk[1]%arr.length]};
function pickMix(lang,idxs,nk){
  const list=bankList(lang),cats=idxs.map(i=>list[i]).filter(Boolean);if(cats.length<1)return blankCat();
  const order=shuffle(idxs.slice());const picks=[];
  for(let k=0;k<5;k++){
    let got=null;
    for(let tries=0;tries<order.length&&!got;tries++){
      const ci=order[(k+tries)%order.length],src=list[ci];if(!src)continue;
      const n=src.clues.length,pool=[];for(let i=0;i<n;i++)if(Math.floor(i*5/n)===k&&src.clues[i].q)pool.push(i);
      if(pool.length)got=[ci,pool[Math.floor(Math.random()*pool.length)]];
    }
    picks.push(got||[-1,-1]);
  }
  nk=nk||mixNameKey(idxs);
  return {name:mixName(lang,nk),clues:picks.map(([ci,qi])=>ci>=0?{q:list[ci].clues[qi].q||'',a:list[ci].clues[qi].a||''}:{q:'',a:''}),src:{lang,mix:idxs.slice(),picks,nk}};
}
function randomMix(lang){const n=RAW[lang].length;const idxs=shuffle([...Array(n).keys()]).slice(0,3);return pickMix(lang,idxs)}
let mixTarget=0;
function openMixPicker(ci){
  mixTarget=ci; modalCtx={type:'mix'};
  const list=bankList();
  const groups={};list.forEach((b,i)=>{const k=themeOf(i);(groups[k]=groups[k]||[]).push([b,i])});
  const lab={es:{peques:'Para niños',musica:'Música',deporte:'Deportes',juegos:'Juegos y retos',cine:'Cine y TV',mexico:'México',naturaleza:'Naturaleza',ciencia:'Ciencia',mundo:'Mundo',mix:'De todo'},en:{peques:'Kids',musica:'Music',deporte:'Sports',juegos:'Games & challenges',cine:'Movies & TV',mexico:'Mexico',naturaleza:'Nature',ciencia:'Science',mundo:'World',mix:'Everything else'}}[cfg.lang]||{};
  const sh=openModal(`
    <div class="sh-top"><span class="cchip">${t('mixTitle')}</span><span class="sp"></span></div>
    <p class="hint" style="margin:12px 0">${t('mixHint')}</p>
    <div class="mix-grid">${Object.keys(lab).filter(k=>groups[k]).map(k=>`<fieldset class="mix-g"><legend>${lab[k]}</legend>${groups[k].map(([b,i])=>`<label class="mix-c"><input type="checkbox" value="${i}"> ${esc(b.name)}</label>`).join('')}</fieldset>`).join('')}</div>
    <div class="actions"><button class="btn dark" id="mixGo">${ic('check')} ${t('mixGo')}</button><button class="btn" id="mixCancel">${t('cancel')}</button></div>`,'card-sheet ed-sheet');
  sh.style.setProperty('--cc',catColor(ci));
}
function mixClick(b){
  if(b.id==='mixCancel'){closeModal();return}
  if(b.id==='mixGo'){const idxs=[...document.querySelectorAll('.mix-c input:checked')].map(x=>+x.value);if(idxs.length<2){toast(t('mixFew'));return}
    cfg.categories[mixTarget]=pickMix(cfg.lang,idxs);saveCfg();closeModal(true);renderSetup();sfx('pop');return}
}
/* ---------- «Arma tu tablero»: columnas arriba, categorías abajo ---------- */
const AGE={peques:['Para los peques','Canciones infantiles','Caricaturas de hoy','Dinosaurios','Animales','Mascotas'],chavos:['Minecraft y Roblox','Palabras de los chavos','Pokémon y Nintendo','Emojis y redes','Videojuegos','Música de los 2000','Harry Potter','Caricaturas y videojuegos','Entretenimiento'],papas:['Música de los 80','Música de los 90','Rock clásico','Éxitos en inglés','Caricaturas clásicas','Marcas y logos','Tecnología','Marketing'],abuelos:['Cine de oro mexicano','Música de antaño','Del baúl de los recuerdos','Completa el refrán','TV mexicana']};
const AGEL={es:{peques:'Niños',chavos:'Chavos',papas:'Papás',abuelos:'Abuelos',todos:'Todos',mias:'Tuya'},en:{peques:'Kids',chavos:'Teens',papas:'Parents',abuelos:'Grandparents',todos:'Everyone',mias:'Yours'}};
function ageOf(i){const n=(RAW.es[i]||{}).name||'';for(const k in AGE)if(AGE[k].includes(n))return k;return 'todos'}
const PRESETS=[
  ['🎄','Posada familiar','Family posada',['Navidad y posadas','Para los peques','Música de antaño','Disney','Mérida','Retos']],
  ['👴🧒','Chavos vs. abuelos','Teens vs. grandparents',['Palabras de los chavos','Minecraft y Roblox','Pokémon y Nintendo','Música de antaño','Cine de oro mexicano','Del baúl de los recuerdos']],
  ['🍿','Noche de cine','Movie night',['Disney','Pixar','Star Wars','Harry Potter','Película en emojis','Cine de oro mexicano']],
  ['🌵','Puro Yucatán','All Yucatán',['Mérida','Los mayas','Cocina yucateca','Yucatán','Navidad y posadas','Del baúl de los recuerdos']],
  ['🎵','Pura música','All music',['Música de los 80','Música de los 90','Música de los 2000','¿Quién canta?','Banda y norteño','Música de antaño']],
  ['⚽','Deportistas','Sports fans',['Fútbol','Béisbol','Lucha libre y box','Olimpiadas','Fórmula 1','Básquetbol y tenis']],
  ['🧠','Cerebritos','Brainiacs',['Cultura general','Mezcla de todo','Verdadero o falso','Historia mundial','Ciencia','Capitales']]];
const idxByName=n=>RAW.es.findIndex(c=>c.name===n);
const TLAB={es:{todo:'Todo',mias:'Tuyas',peques:'Para niños',musica:'Música',deporte:'Deportes',juegos:'Juegos y retos',cine:'Cine y TV',mexico:'México y Yucatán',naturaleza:'Naturaleza',ciencia:'Ciencia',mundo:'Mundo',mix:'De todo'},en:{todo:'All',mias:'Yours',peques:'Kids',musica:'Music',deporte:'Sports',juegos:'Games & challenges',cine:'Movies & TV',mexico:'Mexico & Yucatán',naturaleza:'Nature',ciencia:'Science',mundo:'World',mix:'Everything else'}};
const PKS={es:{title:'Arma tu tablero',hint:'Toca una categoría y se va a la siguiente columna libre. Para cambiar o mezclar: toca una columna; la primera categoría que toques la reemplaza y las siguientes se mezclan con ella.',filling:'llenando…',empty:'vacía',mix:'Mezcla',search:'Busca: disney, mérida, rock…',roulette:'Ruleta para lo que falte',rand:'Revoltijo',create:'Crear categoría',createSub:'La de la familia, la de la oficina…',done:'Listo',cancel:'Cancelar',full:'Ya están llenas las columnas. Toca una columna para cambiarla.',cols:'Columnas',keepL:'(la de ahora)',combos:'Combos',confManual:n=>`La columna ${n} tiene preguntas escritas a mano y se va a reemplazar. ¿Seguimos?`,confEmpty:'Hay columnas vacías. ¿Las lleno al azar?',none:'No hay categorías con ese nombre.',build:'Arma tu tablero',change:'Cambiar'},
  en:{title:'Build your board',hint:'Tap a category and it goes to the next free column. To change or mix: tap a column; the first category you tap replaces it and the next ones mix in.',filling:'filling…',empty:'empty',mix:'Mix',search:'Search: disney, rock…',roulette:'Spin for the rest',rand:'Random mix',create:'Create category',createSub:'Your family one, your office one…',done:'Done',cancel:'Cancel',full:'All columns are full. Tap a column to change it.',cols:'Columns',keepL:'(current)',combos:'Combos',confManual:n=>`Column ${n} has hand-written questions and will be replaced. Continue?`,confEmpty:'Some columns are empty. Fill them at random?',none:'No categories match.',build:'Build your board',change:'Change'}};
const pk=()=>PKS[cfg.lang]||PKS.es;
let PK=null;
function keyOfSrc(c){const s=c.src;if(s&&(s.mixk||s.mix)){const keys=s.mixk?s.mixk.slice():s.mix.map(i=>'b:'+i);return {keys,nk:s.nk,nkFor:keys.join(),cur:c.name}}if(s&&s.i!=null&&!isNaN(s.i))return {keys:['b:'+s.i]};return c.clues.some(q=>q.q.trim())||c.name?{keep:true,name:c.name||t('noName')}:{keys:[]}}
function srcOfKey(key,lang){const [k,i]=key.split(':');return k==='b'?bankList(lang)[+i]:myBank[+i]}
function keyLabel(key){const s=srcOfKey(key);return s?s.name||t('noName'):'?'}
function themeOfKey(key){const [k,i]=key.split(':');return k==='m'?'mias':themeOf(+i)}
function openPicker(active){
  PK={slots:cfg.categories.map(keyOfSrc),active:active==null?null:active,fresh:active!=null,theme:'todo',q:''};
  modalCtx={type:'pick'};
  openModal(`<div class="pk" id="pk"></div>`,'card-sheet ed-sheet pk-sheet');
  drawPicker();
}
function slotName(s){if(s.keep)return s.name;if(!s.keys.length)return '';if(s.keys.length===1)return keyLabel(s.keys[0]);if(s.cur&&s.nkFor===s.keys.join())return s.cur;return s.nk?mixName(cfg.lang,s.nk):pk().mix}
function drawPicker(){
  const el=$('#pk');if(!el||!PK)return;const P=pk(),q=normTxt(PK.q);
  const used=new Set(PK.slots.flatMap(s=>s.keys||[]));
  const slots=PK.slots.map((s,i)=>{const on=PK.active===i,n=slotName(s),mix=s.keys&&s.keys.length>1;
    return `<div class="pk-slot ${n?'full':''} ${on?'on':''}" data-pslot="${i}" style="--cc:${catColor(i)}"><span class="pk-num">${i+1}</span>
      <span class="pk-sn">${n?esc(n):`<i>${on?P.filling:P.empty}</i>`}</span>
      ${mix?`<small>${s.keys.map(k=>esc(keyLabel(k))).join(' + ')}</small>`:s.keep?`<small>${P.keepL}</small>`:on?`<small>${P.filling}</small>`:''}
      ${n?`<button class="pk-x" data-pclear="${i}" aria-label="×">${ic('x')}</button>`:''}</div>`}).join('');
  const themes=['todo'].concat(myBank.length?['mias']:[],['peques','mexico','cine','musica','deporte','juegos','naturaleza','ciencia','mundo','mix']);
  const TL=TLAB[cfg.lang]||TLAB.es, AL=AGEL[cfg.lang]||AGEL.es;
  const all=bankList().map((b,i)=>({key:'b:'+i,name:b.name,th:themeOf(i),age:ageOf(i)})).concat(myBank.map((b,i)=>({key:'m:'+i,name:b.name||t('noName'),th:'mias',age:'mias'})));
  const vis=all.filter(c=>(PK.theme==='todo'||c.th===PK.theme)&&(!q||normTxt(c.name).includes(q)));
  const inSlot=k=>{const a=PK.active;if(a!=null)return (PK.slots[a].keys||[]).includes(k);return used.has(k)};
  const slotNo=k=>{const i=PK.slots.findIndex(s=>(s.keys||[]).includes(k));return i>=0?i+1:''};
  el.innerHTML=`
  <div class="sh-top"><span class="cchip">${P.title}</span><span class="sp"></span>
    <span class="pk-cols">${P.cols} ${[3,4,5,6].map(n=>`<button class="chip ${n===PK.slots.length?'on':''}" data-pcols="${n}">${n}</button>`).join('')}</span></div>
  <div class="pk-slots" style="--n:${PK.slots.length}">${slots}</div>
  <p class="hint pk-hint">${P.hint}</p>
  <div class="pk-row"><span class="lb">${P.combos}</span>${PRESETS.map((p,i)=>`<button class="chip" data-ppre="${i}">${p[0]} ${esc(cfg.lang==='en'?p[2]:p[1])}</button>`).join('')}</div>
  <div class="pk-row"><button class="btn sm gold" id="pkSpin">${ic('dice')} ${P.roulette}</button><button class="btn sm" id="pkRand">${ic('dice')} ${P.rand}</button><input type="text" id="pkQ" value="${esc(PK.q)}" placeholder="${P.search}"></div>
  <div class="pk-row pk-themes">${themes.map(k=>`<button class="chip ${k===PK.theme?'on':''}" data-ptheme="${k}">${TL[k]}</button>`).join('')}</div>
  <div class="pk-grid">
    <button class="pk-card pk-new" id="pkNew">${ic('plus')}<b>${P.create}</b><small>${P.createSub}</small></button>
    ${vis.map(c=>`<button class="pk-card ${inSlot(c.key)?'sel':''} th-${c.th}" data-pkey="${c.key}">${inSlot(c.key)||used.has(c.key)?`<span class="pk-badge">${slotNo(c.key)}</span>`:''}<b>${esc(c.name)}</b><small>${AL[c.age]||AL.todos}</small></button>`).join('')||`<p class="hint">${P.none}</p>`}
  </div>
  <div class="actions"><button class="btn dark" id="pkDone">${ic('check')} ${P.done}</button><button class="btn" id="pkCancel">${P.cancel}</button></div>`;
  const qi=$('#pkQ');if(qi&&PK.focusQ){qi.focus();qi.setSelectionRange(qi.value.length,qi.value.length);PK.focusQ=false}
}
function normTxt(s){return String(s||'').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')}
function pkSetNk(s){if(s.keys&&s.keys.length>1){if(!s.nk||s.nkFor!==s.keys.join())s.nk=mixNameKeyK(s.keys),s.nkFor=s.keys.join()}else{delete s.nk;delete s.nkFor}}
function mixNameKeyK(keys){const th=[...new Set(keys.map(themeOfKey))];const k=th.length===1?(th[0]==='mias'?'familia':th[0]):'mix';const L=MIXN.es[k]||MIXN.es.mix;return [MIXN.es[k]?k:'mix',Math.floor(Math.random()*L.length)]}
function pickerClick(b){
  const d=b.dataset,P=pk();
  if(d.pslot!=null){const i=+d.pslot;PK.active=PK.active===i?null:i;PK.fresh=PK.active!=null;drawPicker();return}
  if(d.pclear!=null){const i=+d.pclear;PK.slots[i]={keys:[]};PK.active=null;drawPicker();return}
  if(d.pcols){const n=+d.pcols;while(PK.slots.length<n)PK.slots.push({keys:[]});PK.slots=PK.slots.slice(0,n);if(PK.active>=n)PK.active=null;drawPicker();return}
  if(d.ptheme){PK.theme=d.ptheme;drawPicker();return}
  if(d.ppre!=null){const p=PRESETS[+d.ppre][3].map(idxByName).filter(i=>i>=0);PK.slots=PK.slots.map((s,i)=>p[i]!=null?{keys:['b:'+p[i]]}:s);PK.active=null;drawPicker();sfx('pop');return}
  if(d.pkey){const k=d.pkey;
    if(PK.active!=null){const s=PK.slots[PK.active];if(s.keep||PK.fresh){PK.slots[PK.active]={keys:[k]};PK.fresh=false;sfx('pop')}else{const j=s.keys.indexOf(k);if(j>=0)s.keys.splice(j,1);else s.keys.push(k);pkSetNk(s)}drawPicker();return}
    const at=PK.slots.findIndex(s=>s.keys&&s.keys.length===1&&s.keys[0]===k);if(at>=0){PK.slots[at]={keys:[]};drawPicker();return}
    const e=PK.slots.findIndex(s=>!s.keep&&!(s.keys&&s.keys.length));if(e<0){toast(P.full);return}
    PK.slots[e]={keys:[k]};drawPicker();sfx('pop');return}
  if(b.id==='pkRand'){const tgt=PK.active!=null?PK.active:PK.slots.findIndex(s=>!s.keep&&!(s.keys&&s.keys.length));if(tgt<0){toast(P.full);return}
    const ks=shuffle(RAW[cfg.lang].map((_,i)=>'b:'+i)).slice(0,3);PK.slots[tgt]={keys:ks};pkSetNk(PK.slots[tgt]);PK.active=null;drawPicker();sfx('pop');return}
  if(b.id==='pkSpin'){spinPicker();return}
  if(b.id==='pkNew'){PK.returnTo=PK.active;PK.freshAtNew=PK.fresh;PK.pending=true;closeModal(true);openBankEditor(null);return}
  if(b.id==='pkCancel'){PK=null;closeModal();return}
  if(b.id==='pkDone'){applyPicker();return}
}
function spinPicker(){
  const empt=PK.slots.map((s,i)=>(!s.keep&&!(s.keys&&s.keys.length))?i:-1).filter(i=>i>=0);if(!empt.length){toast(pk().full);return}
  const used=new Set(PK.slots.flatMap(s=>s.keys||[]));
  const pool=shuffle(RAW[cfg.lang].map((_,i)=>'b:'+i).filter(k=>!used.has(k)));
  const fin=empt.map((_,j)=>pool[j]);let n=0;
  const tick=setInterval(()=>{n++;empt.forEach((i,j)=>{const el=document.querySelector(`[data-pslot="${i}"] .pk-sn`);if(el)el.textContent=keyLabel(pool[(n*7+j*3)%pool.length])});sfx('tick');
    if(n>=12){clearInterval(tick);empt.forEach((i,j)=>PK.slots[i]={keys:[fin[j]]});drawPicker();sfx('pop')}},70);
}
function pickMixKeys(lang,keys,nk){
  const order=shuffle(keys.slice()),picks=[];
  for(let k=0;k<5;k++){let got=null;
    for(let tr=0;tr<order.length&&!got;tr++){const key=order[(k+tr)%order.length],src=srcOfKey(key,lang);if(!src)continue;
      const n=src.clues.length,pool=[];for(let i=0;i<n;i++)if(Math.floor(i*5/n)===k&&src.clues[i].q)pool.push(i);
      if(!pool.length&&n)for(let i=0;i<n;i++)if(src.clues[i].q)pool.push(i);
      if(pool.length)got=[key,pool[Math.floor(Math.random()*pool.length)]];}
    picks.push(got||['',-1]);}
  nk=nk||mixNameKeyK(keys);
  const clues=picks.map(([key,qi])=>{const s=key&&srcOfKey(key,lang);return s&&qi>=0?{q:s.clues[qi].q||'',a:s.clues[qi].a||''}:{q:'',a:''}});
  const allB=keys.every(k=>k.startsWith('b:'))&&keys.every(k=>!bankList(lang)[+k.split(':')[1]].edited);
  const src=allB?{lang,mix:keys.map(k=>+k.split(':')[1]),picks:picks.map(([key,qi])=>key?[+key.split(':')[1],qi]:[-1,-1]),nk}:{lang,mixk:keys.slice(),picks:picks.map(([key,qi])=>[key,qi]),nk};
  return {name:mixName(lang,nk),clues,src};
}
function applyPicker(){
  const P=pk();
  const empties=PK.slots.some(s=>!s.keep&&!(s.keys&&s.keys.length));
  if(empties){if(!confirm(P.confEmpty))return;
    const used=new Set(PK.slots.flatMap(s=>s.keys||[]));const pool=shuffle(RAW[cfg.lang].map((_,i)=>'b:'+i).filter(k=>!used.has(k)));
    PK.slots.forEach(s=>{if(!s.keep&&!(s.keys&&s.keys.length))s.keys=[pool.pop()]})}
  for(let i=0;i<PK.slots.length;i++){const s=PK.slots[i],c=cfg.categories[i];if(s.keep||!c)continue;
    const same=JSON.stringify(keyOfSrc(c).keys||null)===JSON.stringify(s.keys);
    if(!same&&!c.src&&c.clues.some(q=>q.q.trim())&&!confirm(P.confManual(i+1)))return}
  cfg.categories=PK.slots.map((s,i)=>{const c=cfg.categories[i];if(s.keep)return c;
    const same=c&&JSON.stringify(keyOfSrc(c).keys||null)===JSON.stringify(s.keys);if(same)return c;
    if(s.keys.length===1){const [k,j]=s.keys[0].split(':');return k==='b'?catFromKey(s.keys[0]):pickCat(myBank[+j])}
    const m=pickMixKeys(cfg.lang,s.keys,s.nk);return m});
  PK=null;saveCfg();closeModal(true);renderSetup();sfx('pop');
}

function randomCats(n,lang){const list=bankList(lang);return shuffle(list).slice(0,n).map(b=>pickCat(b,b.edited?null:{lang,i:b.idx}))}

function defaultConfig(lang=navLang){
  const S=STR[lang];
  return {
    lang, title:S.defTitle,
    teams:[1,2,3].map((n,i)=>({name:S.team(n),color:PALETTE[i]})),
    step:100, timer:30, finalTimer:60, sound:true, dd:2, finalOn:true, penalty:true,
    categories:randomCats(6,lang),
    final:clone(FINALS[lang][Math.floor(Math.random()*FINALS[lang].length)])
  };
}
function normalize(c){
  const lang=(c&&STR[c.lang])?c.lang:'es';
  const d=defaultConfig(lang); c=Object.assign({},d,c||{}); c.lang=lang;
  if(!Array.isArray(c.teams)||c.teams.length<1) c.teams=d.teams;
  c.teams=c.teams.slice(0,6).map((tm,i)=>({name:String(tm.name||STR[lang].team(i+1)),color:/^#[0-9a-f]{3,8}$/i.test(tm.color||'')?tm.color:PALETTE[i%PALETTE.length]}));
  if(!Array.isArray(c.categories)||!c.categories.length) c.categories=d.categories;
  c.categories=c.categories.slice(0,6).map(k=>{const o={name:String(k.name||''),clues:Array.from({length:5},(_,i)=>({q:String(k.clues?.[i]?.q||''),a:String(k.clues?.[i]?.a||'')}))};if(k.src&&Array.isArray(k.src.mixk)&&Array.isArray(k.src.picks))o.src={lang:k.src.lang,mixk:k.src.mixk.map(String),picks:k.src.picks.map(p=>[String(p[0]),+p[1]]),nk:Array.isArray(k.src.nk)?[String(k.src.nk[0]),+k.src.nk[1]]:['mix',0]};else if(k.src&&Array.isArray(k.src.mix)&&Array.isArray(k.src.picks))o.src={lang:k.src.lang,mix:k.src.mix.map(Number),picks:k.src.picks.map(p=>[+p[0],+p[1]]),nk:Array.isArray(k.src.nk)?[String(k.src.nk[0]),+k.src.nk[1]]:['mix',0]};else if(k.src&&Array.isArray(k.src.picks))o.src={lang:k.src.lang,i:+k.src.i,picks:k.src.picks.map(Number)};return o});
  c.final=Object.assign({category:'',q:'',a:''},c.final||{});
  ['step','timer','finalTimer','dd'].forEach(k=>{c[k]=Number(c[k])||0});if(!c.step)c.step=100;
  return c;
}
let game=store.get(LS_GAME);
let cfg=store.get(LS_CFG); cfg=cfg?normalize(cfg):defaultConfig(navLang);
let saveT; function saveCfg(){clearTimeout(saveT);saveT=setTimeout(()=>{store.set(LS_CFG,cfg);syncBoard()},250)}
/* ---------- tableros guardados (varios, con nombre) ---------- */
let boards=store.get(LS_BOARDS); if(!Array.isArray(boards)) boards=[];
const newId=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,7);
const curBoard=()=>cfg&&cfg.bid?boards.find(b=>b.id===cfg.bid):null;
function saveBoards(){store.set(LS_BOARDS,boards)}
function boardSnap(){const c=clone(cfg);delete c.bid;return c}
/* el tablero abierto se copia solo a su guardado con cada cambio */
function syncBoard(){const b=curBoard();if(!b)return;b.cfg=boardSnap();b.name=(cfg.title||'').trim()||b.name;b.updated=Date.now();saveBoards()}
function saveBoardAs(name){
  name=String(name||'').trim().slice(0,40); if(!name) return false;
  const same=boards.find(b=>b.name.toLowerCase()===name.toLowerCase()&&b.id!==cfg.bid);
  if(same){if(!confirm(t('gExists',name)))return false;boards=boards.filter(b=>b!==same)}
  cfg.title=name; const id=newId(); boards.unshift({id,name,updated:Date.now(),cfg:null}); cfg.bid=id; syncBoard(); store.set(LS_CFG,cfg); return true;
}
function askSaveCurrent(){if(curBoard()||filledCount()===0)return true;if(!confirm(t('gAsk')))return true;const n=prompt(t('gName'),cfg.title||t('defTitle'));return n?saveBoardAs(n):false}
function openBoard(id){const b=boards.find(x=>x.id===id);if(!b||!b.cfg)return;if(cfg.bid!==id&&!askSaveCurrent())return;cfg=normalize(clone(b.cfg));cfg.bid=id;store.set(LS_CFG,cfg);tab='preguntas';renderSetup();toast(t('gOpened',b.name))}
try{if(navigator.storage&&navigator.storage.persist)navigator.storage.persist().catch(()=>{})}catch(e){}
function saveGame(){store.set(LS_GAME,game);sync()}
let tab='preguntas', bankTarget=0;

/* cambia el idioma y traduce lo que venga intacto del banco */
function setLang(lang){
  if(lang===cfg.lang||!STR[lang]) return;
  const from=cfg.lang, same=(x,y)=>JSON.stringify(x)===JSON.stringify(y);
  cfg.categories=cfg.categories.map(c=>{
    const s=c.src; if(s&&s.mix&&s.lang===from){
      const ok=s.picks.every(([ci,qi])=>ci<0||RAW[from][ci]&&RAW[from][ci].clues[qi]);if(!ok)return c;
      const orig=s.picks.map(([ci,qi])=>ci>=0?RAW[from][ci].clues[qi]:{q:'',a:''});
      if(!same(orig.map(o=>[o.q,o.a]),c.clues.map(o=>[o.q,o.a]))) return c;
      const named=c.name===mixName(from,s.nk);
      return {name:named?mixName(lang,s.nk):c.name,clues:s.picks.map(([ci,qi])=>ci>=0?{...RAW[lang][ci].clues[qi]}:{q:'',a:''}),src:{...s,lang}};
    }
    if(!s||s.lang!==from||!RAW[from][s.i]) return c;
    const orig=s.picks.map(i=>i>=0?RAW[from][s.i].clues[i]:{q:'',a:''});
    if(c.name!==RAW[from][s.i].name||!same(orig.map(o=>[o.q,o.a]),c.clues.map(o=>[o.q,o.a]))) return c;
    const B=RAW[lang][s.i];return {name:B.name,clues:s.picks.map(i=>i>=0?{...B.clues[i]}:{q:'',a:''}),src:{lang,i:s.i,picks:s.picks}};
  });
  const fi=FINALS[from].findIndex(f=>same(f,{category:cfg.final.category,q:cfg.final.q,a:cfg.final.a}));
  if(fi>=0) cfg.final=clone(FINALS[lang][fi]);
  cfg.teams.forEach((tm,i)=>{if(tm.name===STR[from].team(i+1))tm.name=STR[lang].team(i+1)});
  if(cfg.title===STR[from].defTitle) cfg.title=STR[lang].defTitle;
  cfg.lang=lang; store.set(LS_CFG,cfg); syncBoard();
  if(game&&game.cfg){game.cfg.lang=lang;saveGame()}
  applyLang();
}
function applyLang(){document.documentElement.lang=curLang();document.title=(cfg.title||t('defTitle'))}

function toast(msg){document.querySelectorAll('.toast').forEach(x=>x.remove());const el=document.createElement('div');el.className='toast';el.textContent=msg;document.body.appendChild(el);setTimeout(()=>el.remove(),2600)}
function showOnly(id){['setup','game','results','tv','remote'].forEach(k=>{const el=$('#'+k);if(el)el.hidden=k!==id})}

/* =========================================================
   SONIDO (sintetizado)
   ========================================================= */
let actx;
function ac(){if(!actx){const A=window.AudioContext||window.webkitAudioContext;if(!A)return null;actx=new A()}if(actx.state==='suspended')actx.resume();return actx}
function tone(f,dur,o={}){
  const a=ac(); if(!a) return;
  const tt=a.currentTime+(o.delay||0), osc=a.createOscillator(), g=a.createGain();
  osc.type=o.type||'sine'; osc.frequency.setValueAtTime(f,tt);
  if(o.slide) osc.frequency.exponentialRampToValueAtTime(o.slide,tt+dur);
  g.gain.setValueAtTime(0.0001,tt); g.gain.exponentialRampToValueAtTime(o.vol||0.2,tt+0.015); g.gain.exponentialRampToValueAtTime(0.0001,tt+dur);
  osc.connect(g).connect(a.destination); osc.start(tt); osc.stop(tt+dur+0.05);
}
const SFX={
  deal(){for(let i=0;i<8;i++)tone(500+i*90,.06,{type:'triangle',vol:.06,delay:i*.05})},
  open(){tone(392,.1,{type:'triangle',vol:.16});tone(587,.12,{type:'triangle',vol:.16,delay:.07});tone(784,.22,{type:'triangle',vol:.16,delay:.14})},
  reveal(){tone(880,.12,{vol:.18});tone(1320,.3,{vol:.12,delay:.08})},
  correct(){[523,659,784,1047].forEach((f,i)=>tone(f,.22,{type:'triangle',vol:.24,delay:i*.075}));tone(1568,.4,{vol:.08,delay:.32})},
  wrong(){tone(196,.4,{type:'sawtooth',vol:.13});tone(147,.5,{type:'sawtooth',vol:.13,delay:.12})},
  tick(){tone(1250,.05,{type:'square',vol:.05})},
  timeup(){tone(440,.7,{type:'square',vol:.11,slide:110})},
  dd(){[392,523,659,784,659,784,1047].forEach((f,i)=>tone(f,.2,{type:'triangle',vol:.22,delay:i*.1}));tone(98,.9,{type:'sawtooth',vol:.06})},
  win(){[523,523,523,659,784,659,784,1047].forEach((f,i)=>tone(f,.28,{type:'triangle',vol:.22,delay:i*.14}));[262,330,392,523].forEach(f=>tone(f,1.4,{vol:.06,delay:1.15}))},
  pop(){tone(660,.08,{type:'triangle',vol:.12});tone(990,.1,{type:'triangle',vol:.1,delay:.05})}
};
function sfx(n){const on=game&&game.cfg?game.cfg.sound:cfg.sound; if(!on) return; try{SFX[n]()}catch(e){}}

/* =========================================================
   EDITOR
   ========================================================= */
function bankOptions(){
  let h=`<option value="">${t('loadBank')}</option><optgroup label="${t('grpMix')}"><option value="x:rand">${t('mixRand')}</option><option value="x:pick">${t('mixPick')}</option></optgroup><optgroup label="${t('grpBank')}">`;
  bankList().forEach((b,i)=>h+=`<option value="b:${i}">${esc(b.name)}</option>`);
  h+='</optgroup>';
  if(myBank.length){h+=`<optgroup label="${t('grpMine')}">`;myBank.forEach((b,i)=>h+=`<option value="m:${i}">${esc(b.name||t('noName'))}</option>`);h+='</optgroup>'}
  return h;
}
function filledCount(c=cfg){let n=0;c.categories.forEach(k=>k.clues.forEach(q=>{if(q.q.trim())n++}));return n}
const langSwitch=()=>`<div class="lang" role="group" aria-label="${t('lang')}"><button data-lang="es" class="${cfg.lang==='es'?'on':''}">ES</button><button data-lang="en" class="${cfg.lang==='en'?'on':''}">EN</button></div>`;

function renderSetup(){
  document.body.className=''; applyLang();
  const el=$('#setup');
  const hasGame=game&&game.phase&&game.phase!=='done';
  const mode=typeof RC!=='undefined'?RC.mode:null;
  const T=[['preguntas',t('tabQ'),`${filledCount()}/${cfg.categories.length*5}`],['guardados',t('tabG'),boards.length],['banco',t('tabB'),bankList().length+myBank.length],['equipos',t('tabT'),cfg.teams.length],['ajustes',t('tabS'),'']];
  el.innerHTML=`
  ${mode==='remote'?`<div class="rc-banner"><span class="dot ${RC.connected?'on':''}"></span><span class="txt">${t('rmBanner',RC.code)}</span><button class="btn sm gold" id="rcBack">${ic('phone')} ${t('rmBackCtl')}</button></div>`:''}
  ${mode==='host'?`<div class="rc-banner"><span class="dot on"></span><span class="txt">${t('tvBanner',RC.code)}</span><button class="btn sm gold" id="tvBack">${ic('tv')} ${t('tvShow')}</button></div>`:''}
  <header class="hero">
    <div class="mark">?</div>
    <div style="min-width:0;flex:1">
      <div class="kicker"><span class="live"></span>${t('kicker')}</div>
      <h1 id="heroTitle">${esc(cfg.title||t('defTitle'))}</h1>
    </div>
    <div class="hero-acts">
      ${mode?'':`<button class="btn sm" id="btnTV">${ic('tv')} ${t('tvBtn')}</button><button class="btn sm" id="btnRC">${ic('phone')} ${t('rcBtn')}</button>`}
      ${langSwitch()}
    </div>
  </header>
  <div class="tabs-scroll"><div class="tabs" role="tablist">
    ${T.map(([k,l,n])=>`<button class="tab ${tab===k?'active':''}" data-tab="${k}" role="tab">${l}${n!==''?` <span class="n" ${k==='preguntas'?'id="qCount"':''}>${n}</span>`:''}</button>`).join('')}
  </div></div>
  <div id="tabBody" class="tabpane"></div>
  <div class="dock">
    ${hasGame&&mode!=='remote'?`<button class="btn xl" id="btnContinue">${ic('redo')} ${t('cont')}</button>`:''}
    <button class="btn xl dark" id="btnStart">${ic('play')} ${hasGame&&mode!=='remote'?t('newGame'):t('play')}</button>
  </div>`;
  renderTab();
}
function renderTab(){
  const b=$('#tabBody');
  b.innerHTML={preguntas:tplPreguntas,banco:tplBanco,equipos:tplEquipos,guardados:tplGuardados,ajustes:tplAjustes}[tab]();
  b.classList.remove('tabpane');void b.offsetWidth;b.classList.add('tabpane');
}
function tplPreguntas(){
  const opts=bankOptions();
  const cats=cfg.categories.map((c,ci)=>`
    <section class="cat" style="--cc:${catColor(ci)};--k:${ci}">
      <div class="cat-band"><span class="num">${ci+1}</span><input type="text" class="cat-name" data-c="${ci}" placeholder="${t('catName')}" value="${esc(c.name)}" maxlength="40"></div>
      <div class="cat-tools">
        <button class="btn sm pk-open" data-picker="${ci}">${ic('grid')} ${pk().change}</button>
        ${c.src?`<button class="btn sm icon" data-reroll="${ci}" title="${t('reroll')}" aria-label="${t('reroll')}">${ic('dice')}</button>`:''}
        <button class="btn sm icon" data-savebank="${ci}" title="${t('saveMine')}" aria-label="${t('saveMine')}">${ic('save')}</button>
        <button class="btn sm icon red" data-clear="${ci}" title="${t('clearCat')}" aria-label="${t('clearCat')}">${ic('trash')}</button>
      </div>
      <div class="rows">
      ${c.clues.map((q,ri)=>`
        <div class="row">
          <div class="v">${(ri+1)*cfg.step}</div>
          <div class="f">
            <textarea data-c="${ci}" data-r="${ri}" data-f="q" rows="2" placeholder="${t('qPh')}">${esc(q.q)}</textarea>
            <div class="a"><span>${t('aL')}</span><input type="text" data-c="${ci}" data-r="${ri}" data-f="a" placeholder="${t('aPh')}" value="${esc(q.a)}"></div>
          </div>
        </div>`).join('')}
      </div>
    </section>`).join('');
  const fopts=`<option value="">${t('pickFinal')}</option>`+fbank().map((f,i)=>`<option value="${i}">${esc(f.category)}: ${esc(f.q)}</option>`).join('');
  return `
  <div class="toolbar">
    <label class="lb" for="ncats">${t('cats')}</label>
    <select id="ncats">${[3,4,5,6].map(n=>`<option ${n===cfg.categories.length?'selected':''}>${n}</option>`).join('')}</select>
    <span class="grow"></span>
    <button class="btn sm gold" id="btnPicker">${ic('grid')} ${pk().build}</button>
    <button class="btn sm" id="btnRandom">${ic('dice')} ${t('random')}</button>
    <button class="btn sm red" id="btnBlank">${ic('trash')} ${t('clearAll')}</button>
  </div>
  <p class="hint" style="margin:-4px 0 16px">${t('edHint')}</p>
  <div class="cats">${cats}</div>
  <section class="final">
    <h3>${ic('trophy')} ${t('final')} ${cfg.finalOn?'':`<span class="tag">${t('finalOff')}</span>`}</h3>
    <div class="fld" style="margin-bottom:12px"><select id="finalLoad">${fopts}</select></div>
    <div class="grid2">
      <div class="fld"><label class="lb">${t('category')}</label><input type="text" data-final="category" value="${esc(cfg.final.category)}" placeholder="${t('catPh')}"></div>
      <div class="fld"><label class="lb">${t('answer')}</label><input type="text" data-final="a" value="${esc(cfg.final.a)}" placeholder="${t('aPh')}"></div>
    </div>
    <div class="fld" style="margin-top:12px"><label class="lb">${t('question')}</label><textarea data-final="q" placeholder="${t('finalPh')}" rows="2">${esc(cfg.final.q)}</textarea></div>
  </section>`;
}
function bankCard(b,key,mine,k){
  const n=b.clues.length, shown=b.clues.slice(0,4);
  return `<article class="bk" style="--cc:${mine?'#e7dcc3':catColor(k)};--k:${Math.min(k,12)}">
    <h4><span>${esc(b.name||t('noName'))}</span> ${mine?`<span class="tag">${t('mine')}</span>`:''}${b.edited?`<span class="tag">${t('edited')}</span>`:''}</h4>
    <div class="bk-n">${t('nQ',n)}</div>
    <ol>${shown.map(c=>`<li><span>${esc(c.q||'—')}</span></li>`).join('')}${n>4?`<li class="more">${t('more',n-4)}</li>`:''}</ol>
    <div class="acts">
      <button class="btn sm dark" data-use="${key}">${ic('arrow')} ${t('useIn',bankTarget+1)}</button>
      <button class="btn sm icon" data-editbank="${key}" title="${t('edit')}" aria-label="${t('edit')}">${ic('edit')}</button>
    </div>
  </article>`;
}
function tplBanco(){
  if(bankTarget>=cfg.categories.length) bankTarget=0;
  return `
  <div class="toolbar">
    <label class="lb" for="bankTarget">${t('placeIn')}</label>
    <select id="bankTarget">${cfg.categories.map((c,i)=>`<option value="${i}" ${i===bankTarget?'selected':''}>${t('column')} ${i+1}${c.name?' · '+esc(c.name):''}</option>`).join('')}</select>
    <span class="grow"></span>
    <button class="btn sm gold" id="btnNewCat">${ic('plus')} ${t('newCat')}</button>
  </div>
  <p class="hint" style="margin:-4px 0 6px">${t('bankHint')}</p>
  <div class="sec">${t('grpMine')}</div>
  ${myBank.length?`<div class="bank-grid">${myBank.map((b,i)=>bankCard(b,'m:'+i,true,i)).join('')}</div>`:`<div class="empty">${t('mineEmpty')}</div>`}
  <div class="sec">${t('grpBank')}</div>
  <div class="bank-grid">${bankList().map((b,i)=>bankCard(b,'b:'+i,false,i)).join('')}</div>`;
}
function tplEquipos(){
  return `
  <div class="toolbar"><label class="lb" for="nteams">${t('teamsN')}</label>
    <select id="nteams">${[2,3,4,5,6].map(n=>`<option ${n===cfg.teams.length?'selected':''}>${n}</option>`).join('')}</select></div>
  <div class="teams">
    ${cfg.teams.map((tm,i)=>`<div class="tm" style="--tc:${esc(tm.color)};--k:${i}">
      <span class="n">${i+1}</span>
      <input type="text" data-tname="${i}" value="${esc(tm.name)}" placeholder="${t('teamPh')}" maxlength="24">
      <div class="sw">${PALETTE.map(c=>`<button style="--c:${c}" class="${c.toLowerCase()===String(tm.color).toLowerCase()?'on':''}" data-tcolor="${i}" data-col="${c}" aria-label="${c}"></button>`).join('')}</div>
    </div>`).join('')}
  </div>`;
}
function tplGuardados(){
  const cur=curBoard();
  const when=ms=>new Date(ms).toLocaleString(L().locale,{day:'numeric',month:'short',hour:'numeric',minute:'2-digit'});
  return `
  <div class="toolbar">
    ${cur?`<span class="gstate on">${ic('check')} ${t('gAuto')}: <b>${esc(cur.name)}</b></span>`:`<span class="gstate">${t('gUnsaved')}</span>`}
    <span class="grow"></span>
    ${cur?'':`<button class="btn sm gold" id="gSave">${ic('save')} ${t('gSave')}</button>`}
    <button class="btn sm" id="gNew">${ic('plus')} ${t('gNew')}</button>
  </div>
  <p class="hint" style="margin:-4px 0 14px">${t('gHint')}</p>
  ${boards.length?`<div class="bank-grid">${boards.map((b,k)=>{const c=b.cfg?normalize(clone(b.cfg)):null;if(!c)return '';const isCur=cur&&cur.id===b.id;
    return `<article class="bk ${isCur?'gcur':''}" style="--cc:${isCur?'#ffc21a':catColor(k)};--k:${Math.min(k,12)}">
      <h4><span>${esc(b.name||t('noName'))}</span>${isCur?`<span class="tag">${t('gCur')}</span>`:''}</h4>
      <div class="bk-n">${t('gN',filledCount(c),when(b.updated))}</div>
      <ol>${c.categories.slice(0,6).map(x=>`<li><span>${esc(x.name||'—')}</span></li>`).join('')}</ol>
      <div class="acts">
        ${isCur?'':`<button class="btn sm dark" data-gopen="${b.id}">${ic('folder')} ${t('gOpen')}</button>`}
        <button class="btn sm icon" data-gdup="${b.id}" title="${t('gDup')}" aria-label="${t('gDup')}">${ic('grid')}</button>
        <button class="btn sm icon red" data-gdel="${b.id}" title="${t('del')}" aria-label="${t('del')}">${ic('trash')}</button>
      </div>
    </article>`}).join('')}</div>`:`<div class="empty">${t('gEmpty')}</div>`}
  <div style="margin-top:18px"><button class="btn sm" id="btnExport">${ic('down')} ${t('gBackup')}</button></div>`;
}
function tplAjustes(){
  const sel=(id,vals,cur,f)=>`<select id="${id}">${vals.map(v=>`<option value="${v}" ${v==cur?'selected':''}>${f(v)}</option>`).join('')}</select>`;
  let k=0;
  return `
  <div class="settings">
    <div class="st" style="--k:${k++}"><label class="lb" for="sTitle">${t('sTitle')}</label><input type="text" id="sTitle" value="${esc(cfg.title)}" maxlength="40"></div>
    <div class="st" style="--k:${k++}"><label class="lb">${t('lang')}</label>${langSwitch()}</div>
    <div class="st" style="--k:${k++}"><label class="lb">${t('sStep')}</label>${sel('sStep',[100,200,500],cfg.step,v=>t('stepF',fmt(v),fmt(v*5)))}</div>
    <div class="st" style="--k:${k++}"><label class="lb">${t('sTimer')}</label>${sel('sTimer',[0,10,15,20,30,45,60,90],cfg.timer,v=>v?t('secs',v):t('noTimer'))}</div>
    <div class="st" style="--k:${k++}"><label class="lb">${t('sFinalT')}</label>${sel('sFinalTimer',[0,30,45,60,90,120],cfg.finalTimer,v=>v?t('secs',v):t('noTimer'))}</div>
    <div class="st" style="--k:${k++}"><label class="lb">${t('sDD')}</label>${sel('sDD',[0,1,2,3],cfg.dd,v=>v?t('ddF',v):t('none'))}<span class="hint">${t('ddHint')}</span></div>
    <div class="st" style="--k:${k++}">
      <label class="toggle">${t('tFinal')}<input type="checkbox" id="sFinal" ${cfg.finalOn?'checked':''}></label>
      <label class="toggle">${t('tPen')}<input type="checkbox" id="sPenalty" ${cfg.penalty?'checked':''}></label>
      <label class="toggle">${t('tSound')}<input type="checkbox" id="sSound" ${cfg.sound?'checked':''}></label>
    </div>
    <div class="st wide" style="--k:${k++}">
      <label class="lb">${t('shareT')}</label>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <button class="btn sm gold" id="btnShare">${ic('link')} ${t('shareB')}</button>
        <button class="btn sm" id="btnExport">${ic('down')} ${t('exp')}</button>
        <button class="btn sm" id="btnImport">${ic('up')} ${t('imp')}</button>
        <button class="btn sm red" id="btnReset">${ic('reset')} ${t('reset')}</button>
      </div>
      <span class="hint">${t('shareHint')}</span>
    </div>
  </div>`;
}

/* ---------- editor de categorías del banco ---------- */
function edRow(c){return `<div class="ed-row"><textarea rows="2" class="ed-q" placeholder="${t('qPh')}">${esc(c.q)}</textarea><input type="text" class="ed-a" placeholder="${t('aPh')}" value="${esc(c.a)}"><button class="btn sm icon red ed-del" aria-label="${t('del')}">${ic('x')}</button></div>`}
function openBankEditor(keyv){
  const [k,i]=keyv?keyv.split(':'):['new','-1'];
  let src;
  if(k==='b') src=bankList()[+i]; else if(k==='m') src=myBank[+i]; else src=blankCat();
  if(!src) return;
  const rows=src.clues.length?src.clues:[{q:'',a:''}];
  modalCtx={type:'edit',k,i:+i};
  const sh=openModal(`
    <div class="sh-top"><span class="cchip">${k==='new'?t('newCat'):t('editTitle')}</span><span class="sp"></span></div>
    <div class="fld" style="margin-top:14px"><label class="lb">${t('catName')}</label><input type="text" id="edName" value="${esc(src.name)}" maxlength="40" placeholder="${t('catName')}"></div>
    <p class="hint" style="margin:12px 0 6px">${t('orderHint')}</p>
    <div class="ed-rows" id="edRows">${rows.map(edRow).join('')}</div>
    <div><button class="btn sm" id="edAdd" style="margin:12px 0 18px">${ic('plus')} ${t('addQ')}</button></div>
    <div class="actions">
      <button class="btn dark" id="edSave">${ic('check')} ${t('save')}</button>
      <button class="btn" id="edCancel">${t('cancel')}</button>
      ${k==='b'&&src.edited?`<button class="btn red" id="edRestore">${ic('reset')} ${t('restore')}</button>`:''}
      ${k==='m'?`<button class="btn red" id="edDelete">${ic('trash')} ${t('del')}</button>`:''}
    </div>`,'card-sheet ed-sheet');
  sh.style.setProperty('--cc',k==='b'?catColor(+i):'#ffc21a');
}
function bankEditorClick(b){
  const x=modalCtx;
  if(b.id==='edAdd'){$('#edRows').insertAdjacentHTML('beforeend',edRow({q:'',a:''}));const last=$('#edRows').lastElementChild.querySelector('textarea');last&&last.focus();return}
  if(b.classList.contains('ed-del')){const rows=document.querySelectorAll('.ed-row');if(rows.length>1)b.closest('.ed-row').remove();else b.closest('.ed-row').querySelectorAll('textarea,input').forEach(f=>f.value='');return}
  if(b.id==='edCancel'){closeModal();return}
  if(b.id==='edRestore'){if(!confirm(t('confRestore')))return;delete edits[cfg.lang][x.i];store.set(LS_EDITS,edits);closeModal(true);renderSetup();toast(t('restored'));return}
  if(b.id==='edDelete'){if(!confirm(t('confDelCat')))return;myBank.splice(x.i,1);store.set(LS_BANK,myBank);closeModal(true);renderSetup();return}
  if(b.id==='edSave'){
    const name=$('#edName').value.trim();
    const clues=[...document.querySelectorAll('.ed-row')].map(r=>({q:r.querySelector('.ed-q').value.trim(),a:r.querySelector('.ed-a').value.trim()})).filter(c=>c.q);
    if(!clues.length){toast(t('needOne'));return}
    const cat={name:name||t('noName'),clues};
    if(x.k==='b'){edits[cfg.lang][x.i]=cat;store.set(LS_EDITS,edits)}
    else if(x.k==='m'){myBank[x.i]=cat;store.set(LS_BANK,myBank)}
    else{myBank.unshift(cat);store.set(LS_BANK,myBank)}
    closeModal(true);renderSetup();toast(t('savedOk'));
    if(PK&&PK.pending&&x.k==='new'){PK.pending=false;const shift=k=>k.startsWith('m:')?'m:'+(+k.slice(2)+1):k;PK.slots.forEach(s=>{if(s.keys)s.keys=s.keys.map(shift)});
      const a=PK.returnTo!=null?PK.returnTo:PK.slots.findIndex(s=>!s.keep&&!(s.keys&&s.keys.length));
      if(a>=0){const s=PK.slots[a];if(PK.returnTo!=null&&!PK.fresh&&s.keys&&s.keys.length&&!s.keep){s.keys.push('m:0');pkSetNk(s)}else PK.slots[a]={keys:['m:0']}}
      modalCtx={type:'pick'};openModal(`<div class="pk" id="pk"></div>`,'card-sheet ed-sheet pk-sheet');PK.active=null;drawPicker()}
  }
}

$('#setup').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  if(b.dataset.lang){setLang(b.dataset.lang);renderSetup();return}
  if(b.dataset.tab){tab=b.dataset.tab;renderSetup();return}
  if(b.id==='btnStart'){if(typeof rcStartRemote==='function'&&rcStartRemote())return;startGame();return}
  if(b.id==='btnContinue'){showGame(true);return}
  if(b.id==='btnTV'){if(typeof startHost==='function')startHost();return}
  if(b.id==='btnRC'){const c=prompt(t('askCode'));if(c&&typeof startRemote==='function')startRemote(c);return}
  if(b.id==='rcBack'){showRemote();return}
  if(b.id==='tvBack'){showTV();return}
  if(b.id==='btnPicker'){openPicker(null);return}
  if(b.dataset.picker!=null){openPicker(+b.dataset.picker);return}
  if(b.id==='btnRandom'){if(!confirm(t('confRandom')))return;cfg.categories=randomCats(cfg.categories.length,cfg.lang);saveCfg();renderSetup();toast(t('tRandom'));return}
  if(b.id==='btnBlank'){if(!confirm(t('confBlank')))return;cfg.categories=cfg.categories.map(blankCat);cfg.final={category:'',q:'',a:''};saveCfg();renderSetup();return}
  if(b.dataset.clear){const i=+b.dataset.clear;if(!confirm(t('confClear')))return;cfg.categories[i]=blankCat();saveCfg();renderSetup();return}
  if(b.dataset.reroll){const i=+b.dataset.reroll,s=cfg.categories[i].src;if(!s)return;
    if(s.mixk){const old=cfg.categories[i].name,keep=old!==mixName(s.lang,s.nk);const c=pickMixKeys(s.lang,s.mixk,s.nk);if(keep)c.name=old;cfg.categories[i]=c;saveCfg();renderSetup();sfx('pop');return}
    if(s.mix){const old=cfg.categories[i].name,keep=old!==mixName(s.lang,s.nk);const c=pickMix(s.lang,s.mix,s.nk);if(keep)c.name=old;cfg.categories[i]=c;saveCfg();renderSetup();sfx('pop');return}const B=bankList(s.lang)[s.i];if(!B)return;cfg.categories[i]=pickCat(B,B.edited?null:{lang:s.lang,i:s.i});saveCfg();renderSetup();sfx('pop');return}
  if(b.dataset.savebank){const c=cfg.categories[+b.dataset.savebank];if(!c.name.trim()&&!c.clues.some(q=>q.q.trim())){toast(t('emptyCat'));return}
    const cat={name:c.name,clues:c.clues.filter(q=>q.q.trim()).map(q=>({q:q.q,a:q.a}))};
    const ex=c.name.trim()?myBank.findIndex(x=>x.name.trim().toLowerCase()===c.name.trim().toLowerCase()):-1;
    if(ex>=0) myBank[ex]=cat; else myBank.unshift(cat);
    store.set(LS_BANK,myBank);toast(ex>=0?t('updMine'):t('savedMine'));renderSetup();return}
  if(b.dataset.use){cfg.categories[bankTarget]=catFromKey(b.dataset.use);toast(t('placed',cfg.categories[bankTarget].name,bankTarget+1));bankTarget=(bankTarget+1)%cfg.categories.length;saveCfg();renderSetup();return}
  if(b.dataset.editbank){openBankEditor(b.dataset.editbank);return}
  if(b.id==='gSave'){const n=prompt(t('gName'),cfg.title||t('defTitle'));if(n&&saveBoardAs(n)){toast(t('gSaved',cfg.title));renderSetup()}return}
  if(b.id==='gNew'){if(!askSaveCurrent())return;cfg=defaultConfig(cfg.lang);store.set(LS_CFG,cfg);tab='preguntas';renderSetup();return}
  if(b.dataset.gopen){openBoard(b.dataset.gopen);return}
  if(b.dataset.gdup){const o=boards.find(x=>x.id===b.dataset.gdup);if(!o||!o.cfg)return;if(o.id===cfg.bid)syncBoard();const name=t('gCopy',o.name).slice(0,40);const c=clone(o.cfg);c.title=name;boards.unshift({id:newId(),name,updated:Date.now(),cfg:c});saveBoards();renderSetup();toast(t('gSaved',name));return}
  if(b.dataset.gdel){const o=boards.find(x=>x.id===b.dataset.gdel);if(!o||!confirm(t('gDel',o.name)))return;boards=boards.filter(x=>x!==o);saveBoards();if(cfg.bid===o.id){delete cfg.bid;store.set(LS_CFG,cfg)}renderSetup();toast(t('gDeleted'));return}
  if(b.id==='btnNewCat'){openBankEditor(null);return}
  if(b.dataset.tcolor!==undefined){const i=+b.dataset.tcolor;cfg.teams[i].color=b.dataset.col;saveCfg();const row=b.closest('.tm');row.style.setProperty('--tc',b.dataset.col);row.querySelectorAll('.sw button').forEach(x=>x.classList.toggle('on',x===b));return}
  if(b.id==='btnExport'){const blob=new Blob([JSON.stringify({...cfg,myBank,bankEdits:edits,boards},null,2)],{type:'application/json'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=(cfg.title||'trivia').replace(/[^\w\-áéíóúñ ]/gi,'').trim().replace(/\s+/g,'-')+'.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);return}
  if(b.id==='btnImport'){$('#importFile').click();return}
  if(b.id==='btnShare'){shareLink();return}
  if(b.id==='btnReset'){if(!confirm(t('confReset')))return;cfg=defaultConfig(cfg.lang);store.set(LS_CFG,cfg);store.del(LS_GAME);game=null;renderSetup();return}
});
$('#setup').addEventListener('input',e=>{
  const el=e.target, d=el.dataset;
  if(el.classList.contains('cat-name')){cfg.categories[+d.c].name=el.value}
  else if(d.f){cfg.categories[+d.c].clues[+d.r][d.f]=el.value; const cnt=$('#qCount'); if(cnt) cnt.textContent=`${filledCount()}/${cfg.categories.length*5}`}
  else if(d.final){cfg.final[d.final]=el.value}
  else if(d.tname!==undefined){cfg.teams[+d.tname].name=el.value}
  else if(el.id==='sTitle'){cfg.title=el.value; const h=$('#heroTitle'); if(h) h.textContent=el.value||t('defTitle'); document.title=el.value||t('defTitle')}
  else return;
  saveCfg();
});
$('#setup').addEventListener('change',e=>{
  const el=e.target, d=el.dataset;
  if(d.load!==undefined&&el.value.startsWith('x:')){const ci=+d.load,v=el.value;const cur=cfg.categories[ci];el.value='';
    if(cur.clues.some(q=>q.q.trim())&&!confirm(t('confReplace',ci+1,v==='x:rand'?t('mixRand'):t('mixTitle'))))return;
    if(v==='x:rand'){cfg.categories[ci]=randomMix(cfg.lang);saveCfg();renderSetup();sfx('pop')}else openMixPicker(ci);return}
  if(d.load!==undefined&&el.value){const ci=+d.load;const cur=cfg.categories[ci];
    if(cur.clues.some(q=>q.q.trim())&&!confirm(t('confReplace',ci+1,keyName(el.value)))){el.value='';return}
    cfg.categories[ci]=catFromKey(el.value);saveCfg();renderSetup();return}
  if(el.id==='finalLoad'&&el.value!==''){cfg.final=clone(fbank()[+el.value]);saveCfg();renderSetup();return}
  if(el.id==='ncats'){const n=+el.value,cur=cfg.categories.length;
    if(n<cur){const lost=cfg.categories.slice(n).some(c=>c.clues.some(q=>q.q.trim()));if(lost&&!confirm(t('confFewer',cur-n))){el.value=cur;return}cfg.categories=cfg.categories.slice(0,n)}
    else{const used=new Set(cfg.categories.map(c=>c.name));const extra=shuffle(bankList().filter(b=>!used.has(b.name))).slice(0,n-cur).map(b=>pickCat(b,b.edited?null:{lang:cfg.lang,i:b.idx}));while(extra.length<n-cur)extra.push(blankCat());cfg.categories=cfg.categories.concat(extra)}
    saveCfg();renderSetup();return}
  if(el.id==='bankTarget'){bankTarget=+el.value;renderSetup();return}
  if(el.id==='nteams'){const n=+el.value;while(cfg.teams.length<n){const i=cfg.teams.length;cfg.teams.push({name:t('team',i+1),color:PALETTE[i%PALETTE.length]})}cfg.teams=cfg.teams.slice(0,n);saveCfg();renderSetup();return}
  const map={sStep:'step',sTimer:'timer',sFinalTimer:'finalTimer',sDD:'dd'};
  if(map[el.id]){cfg[map[el.id]]=Number(el.value);saveCfg();return}
  const chk={sFinal:'finalOn',sPenalty:'penalty',sSound:'sound'};
  if(chk[el.id]){cfg[chk[el.id]]=el.checked;saveCfg();if(el.id==='sSound'&&el.checked){ac();SFX.correct()}return}
});
$('#importFile').addEventListener('change',e=>{
  const f=e.target.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=()=>{try{const d=JSON.parse(r.result);
    if(Array.isArray(d.myBank)&&d.myBank.length){const names=new Set(myBank.map(b=>b.name));d.myBank.forEach(b=>{if(b&&Array.isArray(b.clues)&&!names.has(b.name))myBank.push({name:String(b.name||''),clues:b.clues.map(c=>({q:String(c.q||''),a:String(c.a||'')}))})});store.set(LS_BANK,myBank)}
    if(d.bankEdits&&typeof d.bankEdits==='object'){['es','en'].forEach(l=>{if(d.bankEdits[l])Object.assign(edits[l],d.bankEdits[l])});store.set(LS_EDITS,edits)}
    if(Array.isArray(d.boards)){d.boards.forEach(b=>{if(!b||!b.id||!b.cfg)return;const i=boards.findIndex(x=>x.id===b.id);const o={id:String(b.id),name:String(b.name||b.cfg.title||''),updated:+b.updated||Date.now(),cfg:b.cfg};if(i>=0){if(o.updated>=(boards[i].updated||0))boards[i]=o}else boards.push(o)});boards.sort((a,b)=>b.updated-a.updated);saveBoards()}
    delete d.myBank;delete d.bankEdits;delete d.boards;if(d.bid&&!boards.some(x=>x.id===d.bid))delete d.bid;cfg=normalize(d);store.set(LS_CFG,cfg);renderSetup();toast(t('fileOk'))}catch(err){toast(t('fileBad'))}};
  r.readAsText(f); e.target.value='';
});

function b64enc(obj){const bytes=new TextEncoder().encode(JSON.stringify(obj));let s='';for(let i=0;i<bytes.length;i+=8192)s+=String.fromCharCode.apply(null,bytes.subarray(i,i+8192));return btoa(s).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'')}
function b64dec(str){str=str.replace(/-/g,'+').replace(/_/g,'/');while(str.length%4)str+='=';const s=atob(str);return JSON.parse(new TextDecoder().decode(Uint8Array.from(s,c=>c.charCodeAt(0))))}
function shareLink(){
  const url=location.origin+location.pathname+'#j='+b64enc(boardSnap());
  const done=()=>toast(t('linkOk'));
  if(navigator.clipboard&&window.isSecureContext) navigator.clipboard.writeText(url).then(done,()=>prompt(t('copyLink'),url));
  else prompt(t('copyLink'),url);
}
function checkHash(){
  if(!location.hash.startsWith('#j=')) return;
  try{const d=b64dec(location.hash.slice(3));if(confirm(t('confShared',d.title||'Trivia'))&&askSaveCurrent()){delete d.bid;cfg=normalize(d);store.set(LS_CFG,cfg);store.del(LS_GAME);game=null;setTimeout(()=>toast(t('sharedOk')),300)}}
  catch(e){toast(t('sharedBad'))}
  history.replaceState(null,'',location.pathname+location.search);
}

/* =========================================================
   JUEGO
   ========================================================= */
const key=(c,r)=>c+'-'+r;
function startGame(force){
  if(filledCount()===0){toast(t('addOne'));if($('#setup').hidden)return;tab='preguntas';renderSetup();return}
  if(!force&&game&&game.phase&&game.phase!=='done'&&!confirm(t('confNew'))) return;
  closeModal(true); stopConfetti();
  const g=clone(cfg);
  g.teams=g.teams.map((tm,i)=>({...tm,name:tm.name.trim()||t('team',i+1)}));
  const cells=[];g.categories.forEach((c,ci)=>c.clues.forEach((q,ri)=>{if(q.q.trim())cells.push({ci,ri})}));
  const pref=shuffle(cells.filter(x=>x.ri>=2)), rest=shuffle(cells.filter(x=>x.ri<2));
  const dd=pref.concat(rest).slice(0,Math.min(g.dd,cells.length)).map(x=>key(x.ci,x.ri));
  game={cfg:g,scores:g.teams.map(()=>0),used:{},dd,phase:'board',fin:null};
  saveGame(); ac(); showGame(true);
}
function showGame(deal){
  document.body.className='stage';
  showOnly('game');
  applyLang(); window.scrollTo(0,0);
  if(game.phase==='done'){showResults();return}
  renderGame(deal);
  if(game.phase==='final') openFinal();
  sync();
}
function backToSetup(){
  closeModal(true);stopConfetti();
  if(typeof RC!=='undefined'&&RC.mode==='host'){showTV();return}
  showOnly('setup');renderSetup();window.scrollTo(0,0)
}
function remaining(){let n=0;game.cfg.categories.forEach((c,ci)=>c.clues.forEach((q,ri)=>{if(q.q.trim()&&!game.used[key(ci,ri)])n++}));return n}
function renderGame(deal){
  const g=game.cfg, el=$('#game');
  el.innerHTML=`
  <div class="bulbs"></div>
  <header class="ghead">
    <button class="ibtn" id="gMenu" title="${t('backEd')}" aria-label="${t('backEd')}">${ic('back')}</button>
    <h2 class="gtitle">${esc(g.title||t('defTitle'))}</h2>
    <span class="rcchip" id="gRc" hidden></span>
    <span class="left" id="gLeft"></span>
    <button class="ibtn txt" id="gLang" title="${t('lang')}" aria-label="${t('lang')}">${curLang()==='es'?'EN':'ES'}</button>
    <button class="ibtn" id="gSound" title="${t('soundL')}" aria-label="${t('soundL')}">${ic(g.sound?'sound':'mute')}</button>
    <button class="ibtn hide-sm" id="gFull" title="${t('full')}" aria-label="${t('full')}">${ic('expand')}</button>
    <button class="gbtn" id="gEnd">${ic('trophy')}<span>${g.finalOn?t('finalBtn'):t('endBtn')}</span></button>
  </header>
  <main class="board-wrap"><div class="board" id="board"></div></main>
  <footer class="scores" id="scores"></footer>`;
  renderBoard(deal); renderScores();
  if(typeof updateRcChip==='function') updateRcChip();
  if(deal) sfx('deal');
}
function renderBoard(deal,stampKey){
  const g=game.cfg,b=$('#board'); if(!b) return;
  b.style.setProperty('--n',g.categories.length);
  b.innerHTML=g.categories.map((c,ci)=>{
    let h=`<div class="col" style="--cc:${catColor(ci)}"><div class="bh ${deal?'in':''}" style="--d:${ci*70}"><span>${esc(c.name||'—')}</span></div>`;
    for(let r=0;r<5;r++){
      const q=c.clues[r], k=key(ci,r), u=game.used[k], d=deal?`style="--d:${250+(ci+r)*55+Math.random()*40|0}"`:'';
      if(!q.q.trim()){h+=`<div class="cell empty ${deal?'deal':''}" ${d}></div>`;continue}
      if(u){const tm=u.by!=null?g.teams[u.by]:null;h+=`<button class="cell used ${k===stampKey?'stamped':''}" data-c="${ci}" data-r="${r}" aria-label="${esc(c.name)} ${(r+1)*g.step}, ${t('played')}"><span class="stamp ${tm?'':'none'}" ${tm?`style="--tc:${tm.color}"`:''}>${tm?esc(initial(tm.name)):'–'}</span></button>`}
      else h+=`<button class="cell ${deal?'deal':''}" ${d} data-c="${ci}" data-r="${r}" aria-label="${esc(c.name)} ${t('forPts')} ${(r+1)*g.step}">${fmt((r+1)*g.step)}</button>`;
    }
    return h+'</div>';
  }).join('');
  const left=remaining(); const gl=$('#gLeft'); if(gl) gl.textContent=left?t('left',left):t('boardFull');
}
function scoreCards(g,scores){
  return g.teams.map((tm,i)=>`<div class="score" data-i="${i}" style="--tc:${tm.color}">
    <div class="info"><div class="nm">${esc(tm.name)}</div><div class="pts ${scores[i]<0?'neg':''}">${fmt(scores[i])}</div></div>
    <div class="adj"><button data-adj="${i}" data-d="1" aria-label="${t('addN',g.step)}">${ic('plus')}</button><button data-adj="${i}" data-d="-1" aria-label="${t('subN',g.step)}">${ic('minus')}</button></div>
  </div>`).join('');
}
function renderScores(){
  const g=game.cfg,s=$('#scores'); if(!s) return;
  s.style.setProperty('--t',g.teams.length);
  s.innerHTML=scoreCards(g,game.scores);
  markLeader();
}
function markLeader(){const m=Math.max(...game.scores);document.querySelectorAll('#scores .score').forEach((el,i)=>el.classList.toggle('lead',m>0&&game.scores[i]===m))}
function animateScore(i,from,to){
  const card=document.querySelector(`#scores .score[data-i="${i}"]`); if(!card) return;
  const n=card.querySelector('.pts');
  if(RM||document.hidden){n.textContent=fmt(to);n.classList.toggle('neg',to<0);markLeader();return}
  const t0=performance.now(),D=800;
  const step=now=>{const p=Math.min(1,(now-t0)/D),e=1-Math.pow(1-p,3),v=Math.round(from+(to-from)*e);n.textContent=fmt(v);n.classList.toggle('neg',v<0);if(p<1)requestAnimationFrame(step)};
  requestAnimationFrame(step);
  card.classList.remove('up','down');void card.offsetWidth;card.classList.add(to>=from?'up':'down');
  if(to>from) burst(card,game.cfg.teams[i].color);
  markLeader();
}
function adjust(i,dir){if(game.scores[i]==null)return;const from=game.scores[i];game.scores[i]+=(dir>0?1:-1)*game.cfg.step;saveGame();animateScore(i,from,game.scores[i])}
let pendingScores=[];
function flushScores(){pendingScores.forEach(p=>animateScore(p.i,p.from,game.scores[p.i]));pendingScores=[]}
function queueScore(i,from){if(!pendingScores.some(p=>p.i===i))pendingScores.push({i,from})}

function burst(el,color){
  if(RM||document.hidden) return;
  const r=el.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  const cols=[color,'#ffc21a','#f3ead6'];
  for(let k=0;k<20;k++){
    const s=document.createElement('i');s.className='spark';s.style.left=cx+'px';s.style.top=cy+'px';s.style.background=cols[k%3];
    document.body.appendChild(s);
    const a=Math.random()*Math.PI*2,d=50+Math.random()*110;
    s.animate([{transform:'translate(-50%,-50%) scale(1) rotate(0)',opacity:1},{transform:`translate(calc(-50% + ${Math.cos(a)*d}px),calc(-50% + ${Math.sin(a)*d-30}px)) scale(.2) rotate(${Math.random()*540}deg)`,opacity:0}],{duration:700+Math.random()*400,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>s.remove();
  }
}
function toggleSound(){game.cfg.sound=!game.cfg.sound;cfg.sound=game.cfg.sound;saveCfg();saveGame();const b=$('#gSound');if(b)b.innerHTML=ic(game.cfg.sound?'sound':'mute');if(game.cfg.sound)sfx('pop')}
function openCell(c,r,ask){
  if(!game||game.phase!=='board'||modalCtx) return;
  const q=game.cfg.categories[c]?.clues[r]; if(!q||!q.q.trim()) return;
  const k=key(c,r),rect=cellRect(c,r);
  if(game.used[k]){if(ask&&!confirm(t('confReplay')))return;openClue(c,r,{replay:true,rect});return}
  if(game.dd.includes(k)) openDD(c,r,rect); else openClue(c,r,{rect});
}

$('#game').addEventListener('click',e=>{
  const b=e.target.closest('button'); if(!b) return;
  if(b.id==='gMenu'){backToSetup();return}
  if(b.id==='gLang'){setLang(curLang()==='es'?'en':'es');renderGame(false);return}
  if(b.id==='gFull'){if(!document.fullscreenElement)document.documentElement.requestFullscreen?.().catch(()=>{});else document.exitFullscreen?.();return}
  if(b.id==='gSound'){toggleSound();return}
  if(b.id==='gEnd'){const left=remaining();if(left&&!confirm(t('confEnd',left,game.cfg.finalOn)))return;goEnd();return}
  if(b.dataset.adj!==undefined){adjust(+b.dataset.adj,+b.dataset.d);return}
  if(b.classList.contains('cell')) openCell(+b.dataset.c,+b.dataset.r,true);
});

/* ---------- temporizador ---------- */
let tm={id:null};
function stopTimer(){if(tm.id)clearInterval(tm.id);tm={id:null};sync()}
function startTimer(sec){
  if(tm.id)clearInterval(tm.id); tm={id:null};
  const num=$('#tnum'),bar=$('#tbar'); if(!num) return;
  if(!sec){num.hidden=true;bar.hidden=true;sync();return}
  num.hidden=false;bar.hidden=false;
  tm={total:sec,left:sec*1000,last:performance.now(),paused:false,lastSec:sec,id:null};
  const fill=bar.querySelector('i');
  tm.draw=()=>{const s=Math.ceil(tm.left/1000);fill.style.transform=`scaleX(${Math.max(0,tm.left/(tm.total*1000))})`;
    num.textContent=tm.left<=0?t('over'):s;const crit=tm.left<=5000&&tm.left>0;num.classList.toggle('crit',crit&&!tm.paused);num.classList.toggle('paused',tm.paused);num.classList.toggle('over',tm.left<=0);bar.classList.toggle('crit',tm.left<=5000)};
  tm.draw();
  tm.id=setInterval(()=>{const now=performance.now();if(!tm.paused){tm.left-=now-tm.last;const s=Math.ceil(tm.left/1000);if(s!==tm.lastSec&&s<=5&&s>0)sfx('tick');tm.lastSec=s;if(tm.left<=0){tm.left=0;tm.draw();clearInterval(tm.id);tm.id=null;sfx('timeup');sync();return}}tm.last=now;tm.draw()},100);
  num.onclick=togglePause;
  sync();
}
function togglePause(){if(!tm.id)return;tm.paused=!tm.paused;tm.last=performance.now();tm.draw&&tm.draw();sync()}

/* ---------- modal ---------- */
let modalCtx=null, busy=false;
function openModal(html,cls,rect){
  const m=$('#modal');m.classList.remove('out');m.innerHTML=`<div class="sheet ${cls}">${html}</div>`;m.hidden=false;
  const sh=m.firstElementChild;
  if(rect&&!RM&&!document.hidden){
    sh.classList.add('flip');
    const s=sh.getBoundingClientRect();
    const dx=(rect.left+rect.width/2)-(s.left+s.width/2),dy=(rect.top+rect.height/2)-(s.top+s.height/2);
    sh.animate([{transform:`translate(${dx}px,${dy}px) scale(${rect.width/s.width},${rect.height/s.height}) rotateX(-75deg)`,opacity:.5},{transform:'none',opacity:1}],{duration:600,easing:'cubic-bezier(.2,.9,.25,1)'});
  }
  sync();
  return sh;
}
function closeModal(instant,rect,done){
  if(tm.id)clearInterval(tm.id); tm={id:null};
  const m=$('#modal'),sh=m.firstElementChild;
  const fin=()=>{m.hidden=true;m.innerHTML='';m.classList.remove('out');modalCtx=null;busy=false;sync();done&&done()};
  if(instant||RM||!sh||m.hidden||document.hidden){fin();return}
  busy=true; m.classList.add('out');
  let anim;
  if(rect){const s=sh.getBoundingClientRect();const dx=(rect.left+rect.width/2)-(s.left+s.width/2),dy=(rect.top+rect.height/2)-(s.top+s.height/2);
    anim=sh.animate([{transform:'none',opacity:1},{transform:`translate(${dx}px,${dy}px) scale(${rect.width/s.width},${rect.height/s.height}) rotateX(70deg)`,opacity:0}],{duration:380,easing:'cubic-bezier(.5,0,.75,0)',fill:'forwards'});}
  else anim=sh.animate([{transform:'none',opacity:1},{transform:'scale(.92) translateY(20px)',opacity:0}],{duration:260,easing:'ease-in',fill:'forwards'});
  let done1=false;const once=()=>{if(!done1){done1=true;fin()}};
  anim.onfinish=once; setTimeout(once,650);
}
function qClass(s){return s.length>160?'xlong':s.length>85?'long':''}
function cellRect(c,r){const el=document.querySelector(`.cell[data-c="${c}"][data-r="${r}"]`);return el?el.getBoundingClientRect():null}

function openClue(c,r,opt={}){
  const g=game.cfg, cat=g.categories[c], q=cat.clues[r];
  const value=opt.wager!=null?opt.wager:(r+1)*g.step;
  const teams=opt.team!=null?[opt.team]:g.teams.map((_,i)=>i);
  modalCtx={type:'clue',c,r,value,teams,dd:opt.team!=null,replay:!!opt.replay,answered:false,winner:null,wrong:new Set(),revealed:false};
  const sh=openModal(`
    <div class="sh-top"><span class="cchip">${esc(cat.name||t('qDef'))}</span><span class="sp"></span><button class="tnum" id="tnum" title="${t('pause')}" aria-label="${t('timerL')}"></button><span class="sval">${modalCtx.dd?`<span class="dd">${t('wagerTag')}</span>`:''}${fmt(value)}</span></div>
    <div class="tbar" id="tbar"><i></i></div>
    <div class="q ${qClass(q.q)}">${esc(q.q)}</div>
    <div class="ans" id="ans" hidden><small>${t('answer')}</small><div>${esc(q.a||t('noAns'))}</div></div>
    ${opt.replay?`<p class="center" style="color:var(--muted);font-weight:600">${t('replay')}</p>`:`
    <div class="judge">${teams.map(i=>`<div class="jt" id="jt${i}" style="--tc:${g.teams[i].color}"><span class="jn">${esc(g.teams[i].name)}</span><button class="jb ok" data-ok="${i}" aria-label="${esc(t('gotIt',g.teams[i].name))}">${ic('check')}</button><button class="jb no" data-no="${i}" aria-label="${esc(t('missed',g.teams[i].name))}">${ic('x')}</button></div>`).join('')}</div>`}
    <div class="actions">
      <button class="btn" id="btnReveal">${ic('eye')} ${t('revealB')} <kbd>Space</kbd></button>
      <button class="btn" id="btnRestart">${ic('redo')} ${t('timeB')}</button>
      <button class="btn dark" id="btnClose">${ic('grid')} ${t('boardB')} <kbd>Esc</kbd></button>
    </div>`,'card-sheet',opt.rect);
  sh.style.setProperty('--cc',catColor(c));
  if(!modalCtx.dd) sfx('open');
  startTimer(g.timer);
}
function reveal(){if(!modalCtx||modalCtx.type!=='clue'||modalCtx.revealed)return;const a=$('#ans');if(!a)return;a.hidden=false;modalCtx.revealed=true;const b=$('#btnReveal');if(b)b.hidden=true;sfx('reveal');sync()}
function floaty(el,text,color){if(RM)return;const f=document.createElement('span');f.className='floaty';f.textContent=text;f.style.color=color;el.appendChild(f);setTimeout(()=>f.remove(),1200)}
function judge(i,ok){
  const x=modalCtx; if(!x||x.type!=='clue'||x.replay||x.answered||x.wrong.has(i)||!x.teams.includes(i)) return;
  const pen=x.dd||game.cfg.penalty, chip=$('#jt'+i), from=game.scores[i];
  if(ok){
    x.answered=true; x.winner=i; game.scores[i]+=x.value; game.used[key(x.c,x.r)]={by:i};
    if(tm.id){clearInterval(tm.id);tm.id=null} sfx('correct'); reveal();
    document.querySelectorAll('.jt .jb').forEach(b=>b.disabled=true);
    chip.classList.add('won'); floaty(chip,'+'+fmt(x.value),'#1fc77a'); burst(chip,game.cfg.teams[i].color);
    const rs=$('#btnRestart'); if(rs) rs.hidden=true;
  }else{
    x.wrong.add(i); if(pen) game.scores[i]-=x.value;
    sfx('wrong'); chip.classList.add('lost','shake'); chip.querySelectorAll('.jb').forEach(b=>b.disabled=true);
    if(pen) floaty(chip,'−'+fmt(x.value),'#ff3b3b');
    if(x.wrong.size>=x.teams.length){if(tm.id){clearInterval(tm.id);tm.id=null}setTimeout(reveal,450);const rs=$('#btnRestart'); if(rs) rs.hidden=true}
    else startTimer(game.cfg.timer);
  }
  if(game.scores[i]!==from) queueScore(i,from);
  saveGame();
}
function closeClue(){
  if(busy) return;
  const x=modalCtx; if(!x||x.type!=='clue') return;
  const k=key(x.c,x.r);
  if(!x.replay&&!game.used[k]) game.used[k]={by:null};
  const wasNew=!x.replay; store.set(LS_GAME,game);
  closeModal(false,cellRect(x.c,x.r),()=>{
    renderBoard(false,wasNew?k:null); flushScores();
    if(wasNew&&remaining()===0) setTimeout(boardDone,700);
  });
}
function boardDone(){
  if(modalCtx||game.phase!=='board') return;
  modalCtx={type:'info'};
  openModal(`<div class="rays"></div><div class="bulbs"></div><div class="inner">
    <div class="slam" style="font-size:clamp(44px,min(10vw,13vh),110px)"><span>${t('bd1')}</span><span>${t('bd2')}</span></div>
    <p class="sub">${game.cfg.finalOn?t('bdFinal'):t('bdRes')}</p>
    <div class="actions" style="margin-top:18px"><button class="btn gold" id="btnGoEnd">${ic('trophy')} ${game.cfg.finalOn?t('finalBtn'):t('results')}</button><button class="btn" id="btnStay">${t('seeBoard')}</button></div>
  </div><div class="bulbs"></div>`,'stage-sheet');
  sfx('dd');
}

/* ---------- doble o nada ---------- */
function openDD(c,r,rect){
  const g=game.cfg;
  modalCtx={type:'dd',c,r,team:null,rect};
  openModal(`<div class="rays"></div><div class="bulbs"></div><div class="inner">
    <div class="slam"><span>${t('dd1')}</span><span>${t('dd2')}</span></div>
    <p class="sub">${t('ddSub',esc(g.categories[c].name))}</p>
    <div class="picks">${g.teams.map((tm,i)=>`<button class="pick" data-pick="${i}" style="--tc:${tm.color}"><span>${esc(tm.name)}<small>${fmt(game.scores[i])}</small></span></button>`).join('')}</div>
    <div id="ddWager" hidden>
      <p class="hint-s" id="ddHint"></p>
      <div class="wager"><input type="number" id="ddIn" min="0" step="${g.step}" inputmode="numeric" aria-label="${t('wager')}"><button class="btn gold" id="ddGo">${t('seeQ')} ${ic('arrow')}</button></div>
    </div>
  </div><div class="bulbs"></div>`,'stage-sheet');
  sfx('dd');
}
const ddMax=i=>Math.max(game.scores[i],5*game.cfg.step);
function ddPick(i){
  const x=modalCtx; if(!x||x.type!=='dd'||game.scores[i]==null) return; x.team=i;
  document.querySelectorAll('.pick').forEach(p=>p.classList.toggle('sel',+p.dataset.pick===i));
  const m=ddMax(i); $('#ddWager').hidden=false;
  $('#ddHint').textContent=t('range',game.cfg.teams[i].name,fmt(m));
  const inp=$('#ddIn'); inp.max=m; inp.value=Math.min(m,Math.max(game.cfg.step,game.scores[i])); inp.focus({preventScroll:true}); inp.select(); sfx('pop');
  sync();
}
function ddGo(w){
  const x=modalCtx; if(!x||x.type!=='dd'||x.team==null) return false;
  const m=ddMax(x.team); if(w==null) w=Math.round(+$('#ddIn').value||0);
  if(!(w>=0&&w<=m)){toast(t('wBad',fmt(m)));return false}
  closeModal(true); openClue(x.c,x.r,{team:x.team,wager:w,rect:x.rect}); return true;
}

/* ---------- ronda final ---------- */
function goEnd(){
  closeModal(true);
  if(game.cfg.finalOn&&game.cfg.final.q.trim()){game.phase='final';game.fin={step:'wager',wagers:game.cfg.teams.map(()=>0),marks:game.cfg.teams.map(()=>null)};saveGame();openFinal()}
  else{if(game.cfg.finalOn)toast(t('noFinalQ'));finish()}
}
function setFinalWagers(ws){
  const f=game.fin; if(!f||f.step!=='wager') return null;
  for(let i=0;i<game.cfg.teams.length;i++){const m=Math.max(0,game.scores[i]),v=Math.round(+ws[i]||0);if(!(v>=0&&v<=m))return t('fBad',game.cfg.teams[i].name,fmt(m))}
  f.wagers=game.cfg.teams.map((_,i)=>Math.round(+ws[i]||0)); f.step='question'; saveGame(); openFinal(); return null;
}
function finalMark(i,ok){
  const f=game.fin; if(!f||f.step!=='judge'||f.marks[i]===undefined) return;
  f.marks[i]=f.marks[i]===ok?null:ok;
  const el=$('#fj'+i); if(el){el.classList.toggle('sel-ok',f.marks[i]===true);el.classList.toggle('sel-no',f.marks[i]===false);if(f.marks[i]===false){el.classList.remove('shake');void el.offsetWidth;el.classList.add('shake')}}
  if(f.marks[i]!==null)sfx(ok?'correct':'wrong'); saveGame();
}
function finalBack(){if(game.phase!=='final'||game.fin?.step!=='wager')return;game.phase='board';game.fin=null;saveGame();closeModal()}
function openFinal(){
  const g=game.cfg,f=game.fin,F=g.final; closeModal(true); modalCtx={type:'final'};
  if(f.step==='wager'){
    openModal(`<div class="rays"></div><div class="bulbs"></div><div class="inner">
      <div class="slam"><span>${t('f1')}</span><span>${t('f2')}</span></div>
      <p class="sub">${t('fSub',esc(F.category||t('surprise')))}</p>
      <div class="wlist">${g.teams.map((tm,i)=>{const m=Math.max(0,game.scores[i]);return `<div class="wrow" style="--tc:${tm.color}"><div><b>${esc(tm.name)}</b><small>${t('ptsMax',fmt(game.scores[i]),fmt(m))}</small></div><input type="number" min="0" max="${m}" step="${g.step}" data-w="${i}" value="${Math.min(f.wagers[i]||0,m)}" inputmode="numeric" aria-label="${esc(t('wagerOf',tm.name))}"></div>`}).join('')}</div>
      <div class="actions"><button class="btn gold" id="fGoQ">${t('seeQ')} ${ic('arrow')}</button><button class="btn" id="fBack">${ic('back')} ${t('boardB')}</button></div>
    </div><div class="bulbs"></div>`,'stage-sheet');
    sfx('dd');
  }else{
    const judged=f.step==='judge';
    const sh=openModal(`<div class="sh-top"><span class="cchip">${esc(F.category||t('final'))}</span><span class="sp"></span><button class="tnum" id="tnum" ${judged?'hidden':''} aria-label="${t('timerL')}"></button><span class="sval">${t('finalL')}</span></div>
      <div class="tbar" id="tbar" ${judged?'hidden':''}><i></i></div>
      <div class="q ${qClass(F.q)}">${esc(F.q)}</div>
      <div class="ans" id="ans" ${judged?'':'hidden'}><small>${t('answer')}</small><div>${esc(F.a||t('noAns'))}</div></div>
      <div id="fJudge" ${judged?'':'hidden'}>
        <p class="center" style="color:var(--muted);font-weight:600;margin-top:0">${t('markHint')}</p>
        <div class="judge">${g.teams.map((tm,i)=>`<div class="jt ${f.marks[i]===true?'sel-ok':f.marks[i]===false?'sel-no':''}" id="fj${i}" style="--tc:${tm.color}"><span class="jn">${esc(tm.name)} · ${fmt(+f.wagers[i]||0)}</span><button class="jb ok" data-fok="${i}" aria-label="${esc(t('gotIt',tm.name))}">${ic('check')}</button><button class="jb no" data-fno="${i}" aria-label="${esc(t('missed',tm.name))}">${ic('x')}</button></div>`).join('')}</div>
      </div>
      <div class="actions">
        ${judged?`<button class="btn dark" id="fResults">${ic('trophy')} ${t('seeRes')}</button>`:`<button class="btn" id="fReveal">${ic('eye')} ${t('revealB')} <kbd>Space</kbd></button><button class="btn" id="fRestart">${ic('redo')} ${t('timeB')}</button>`}
      </div>`,'card-sheet');
    sh.style.setProperty('--cc','#ffc21a');
    if(!judged){sfx('open');startTimer(g.finalTimer)}
  }
}
function finalReveal(){const f=game.fin;if(!f||f.step!=='question')return;if(tm.id){clearInterval(tm.id);tm.id=null}f.step='judge';sfx('reveal');
  $('#ans').hidden=false;$('#fJudge').hidden=false;$('#tnum').hidden=true;$('#tbar').hidden=true;
  document.querySelector('#modal .actions').innerHTML=`<button class="btn dark" id="fResults">${ic('trophy')} ${t('seeRes')}</button>`;saveGame();}
function finish(){
  const f=game.fin;
  if(game.phase==='final'&&f){game.cfg.teams.forEach((_,i)=>{const w=+f.wagers[i]||0;if(f.marks[i]===true)game.scores[i]+=w;else game.scores[i]-=w})}
  game.phase='done'; store.set(LS_GAME,game); closeModal(true); showResults();
}
function ranking(g,scores){return g.teams.map((tm,i)=>({...tm,s:scores[i]})).sort((a,b)=>b.s-a.s)}
function rankRows(order){const maxS=Math.max(1,...order.map(o=>o.s));return order.map((o,i)=>`<div class="rk" style="--tc:${o.color};--k:${i};--w:${Math.max(4,Math.max(0,o.s)/maxS*100)}%"><span class="bar"></span><span class="pos">${i+1}</span><span class="nm">${esc(o.name)}</span><span class="pts">${fmt(o.s)}</span></div>`).join('')}
function showResults(){
  document.body.className='stage';
  const g=game.cfg, order=ranking(g,game.scores);
  const top=order[0].s, winners=order.filter(o=>o.s===top);
  showOnly('results'); const el=$('#results');
  el.innerHTML=`<div class="rays"></div><div class="bulbs"></div>
    <div class="r-k">${winners.length>1?t('tie'):t('winner')}</div>
    <h2 class="r-name" style="--tc:${winners.length>1?'var(--gold)':order[0].color}">${winners.length>1?winners.map(w=>esc(w.name)).join(' · '):esc(winners[0].name)}</h2>
    <div class="r-pts"><b>${fmt(top)}</b> ${t('points')}</div>
    <div class="rank">${rankRows(order)}</div>
    <div class="actions"><button class="btn gold" id="rAgain">${ic('redo')} ${t('again')}</button><button class="btn" id="rEdit">${ic('back')} ${t('editor')}</button></div>`;
  window.scrollTo(0,0);
  sfx('win'); setTimeout(()=>confetti(order[0].color),500); sync();
}
$('#results').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;
  if(b.id==='rAgain'){stopConfetti();startGame(true)}
  if(b.id==='rEdit'){stopConfetti();game=null;store.del(LS_GAME);sync();backToSetup()}
});

$('#modal').addEventListener('input',e=>{if(e.target.id==='pkQ'&&PK){PK.q=e.target.value;PK.focusQ=true;drawPicker()}});
$('#modal').addEventListener('click',e=>{
  const b=e.target.closest('button')||e.target.closest('[data-pslot]'); if(!b||busy) return;
  const x=modalCtx; if(!x) return;
  if(x.type==='edit'){bankEditorClick(b);return}
  if(x.type==='mix'){mixClick(b);return}
  if(x.type==='pick'){pickerClick(b);return}
  if(x.type==='clue'){
    if(b.id==='btnReveal') reveal();
    else if(b.id==='btnClose') closeClue();
    else if(b.id==='btnRestart') startTimer(game.cfg.timer);
    else if(b.dataset.ok!==undefined) judge(+b.dataset.ok,true);
    else if(b.dataset.no!==undefined) judge(+b.dataset.no,false);
  }else if(x.type==='dd'){
    if(b.dataset.pick!==undefined) ddPick(+b.dataset.pick);
    else if(b.id==='ddGo') ddGo();
  }else if(x.type==='info'){
    if(b.id==='btnGoEnd') goEnd();
    else if(b.id==='btnStay') closeModal();
  }else if(x.type==='final'){
    if(b.id==='fBack'){finalBack();return}
    if(b.id==='fGoQ'){const ws=[...document.querySelectorAll('[data-w]')].map(inp=>inp.value);const err=setFinalWagers(ws);if(err)toast(err);return}
    if(b.id==='fReveal'){finalReveal();return}
    if(b.id==='fRestart'){startTimer(game.cfg.finalTimer);return}
    if(b.dataset.fok!==undefined){finalMark(+b.dataset.fok,true);return}
    if(b.dataset.fno!==undefined){finalMark(+b.dataset.fno,false);return}
    if(b.id==='fResults'){const pend=game.fin.marks.filter(m=>m===null).length;if(pend&&!confirm(t('confPend',pend)))return;finish();return}
  }
});
document.addEventListener('keydown',e=>{
  if($('#modal').hidden||!modalCtx||busy) return;
  const typing=/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName);
  if(e.key==='Escape'){
    if(modalCtx.type==='clue'){e.preventDefault();closeClue()}
    else if(modalCtx.type==='info'||modalCtx.type==='edit'||modalCtx.type==='mix'){if(modalCtx.type==='pick')PK=null;closeModal()}else if(modalCtx.type==='pick'){PK=null;closeModal()}
  }
  if((e.key===' '||e.code==='Space')&&!typing){
    if(modalCtx.type==='clue'){e.preventDefault();reveal()}
    else if(modalCtx.type==='final'&&game.fin?.step==='question'){e.preventDefault();finalReveal()}
  }
  if(e.key==='Enter'&&modalCtx.type==='dd'&&modalCtx.team!=null){e.preventDefault();ddGo()}
});

/* ---------- confeti ---------- */
let confId=null;
function confetti(main){
  if(RM||document.hidden) return;
  const cv=$('#confetti'),cx=cv.getContext('2d');cv.hidden=false;
  const dpr=Math.min(2,devicePixelRatio||1),W=cv.width=innerWidth*dpr,H=cv.height=innerHeight*dpr;cv.style.width=innerWidth+'px';cv.style.height=innerHeight+'px';
  const cols=[main,'#ffc21a','#ff5a36','#2bd49a','#5aa9ff','#ff4fa3','#f3ead6'];
  const P=Array.from({length:240},()=>({x:Math.random()*W,y:-Math.random()*H*.9,w:(7+Math.random()*8)*dpr,h:(9+Math.random()*12)*dpr,vy:(2.2+Math.random()*4)*dpr,vx:(Math.random()-.5)*2*dpr,r:Math.random()*6,vr:(Math.random()-.5)*.22,c:cols[Math.floor(Math.random()*cols.length)]}));
  const t0=performance.now();
  const loop=now=>{cx.clearRect(0,0,W,H);let alive=0;P.forEach(p=>{p.y+=p.vy;p.x+=p.vx+Math.sin((now+p.r*500)/400)*.7;p.r+=p.vr;if(p.y<H+30){alive++;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.fillRect(-p.w/2,-p.h/2,p.w,p.h*Math.abs(Math.cos(p.r*1.5)));cx.restore()}else if(now-t0<4500){p.y=-20;p.x=Math.random()*W}});
    if(alive)confId=requestAnimationFrame(loop);else stopConfetti()};
  stopConfetti();cv.hidden=false;confId=requestAnimationFrame(loop);
}
function stopConfetti(){if(confId)cancelAnimationFrame(confId);confId=null;const c=$('#confetti');if(c)c.hidden=true}
