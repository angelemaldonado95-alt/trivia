# Tablero de Trivia

Juego de trivia por equipos, estilo tablero de categorías, para jugar en compu, proyector, TV o celular.

**Jugar:** https://angelemaldonado95-alt.github.io/trivia/

## Qué trae

- Tablero de 3 a 6 categorías × 5 preguntas, de 2 a 6 equipos.
- Base de datos de preguntas en español e inglés (`bank.js`): 21 categorías con 10 preguntas cada una. El tablero elige una al azar por nivel, así que cada partida sale distinta.
- Todo es editable: preguntas del tablero, categorías del banco, categorías propias y ronda final.
- Casillas ocultas de "Doble o nada", ronda final con apuestas, temporizador, sonidos y animaciones.
- **Control desde el cel:** abre `…/trivia/?tv` en la TV o proyector, escanea el QR con el cel y controla todo desde ahí; la respuesta solo la ves tú.

## Archivos

- `index.html`: estilos y estructura.
- `bank.js`: base de datos de preguntas (edítala aquí en GitHub para cambiar el banco de fábrica).
- `app.js`: el juego y el editor.
- `remote.js`: modo pantalla y control con cel (WebRTC con PeerJS).
