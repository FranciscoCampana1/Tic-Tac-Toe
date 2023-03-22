const checkWinner = (array) => {
  let contadorx = 0;
  let contadoro = 0;
  for (let i = 0; i < 3; i++) {
    if (array[i] == "x") {
      contadorx++;
    }
    if (array[i] == "o") {
      contadoro++;
    }
    if (contadorx[i] == 3) {
      alert("el ganador es x");
    } else if (contadoro[i] == 3) {
      alert("el ganador es o");
    }
  }
  for (let i = 3; i < 6; i++) {
    if (array[i] == "x") {
      contadorx++;
    }
    if (array[i] == "o") {
      contadoro++;
    }
  }
  for (let i = 6; i < 9; i++) {
    if (array[i] == "x") {
      contadorx++;
    }
    if (array[i] == "o") {
      contadoro++;
    }
  }
  if (contadorx == 3) {
    alert("gano player x");
  }
  if (contadoro == 3) {
    alert("gano player o");
  }
};

const root = document.getElementById("root");

const renderIndex = () => {
  return `
  <div class="containerGeneral">
      <div class="contenedor">
        <div class="titulo">
          <h1>TIC TAC TOE</h1>
        </div>
      </div>
      <div class="contenedorBotones">
        <div class="botones">
          
          <button class="boton" type="button" id="buttonPlayer">Player vs Player</button>
        
          <button class="boton" type="button">Player vs Pc</button>
        </div>
      </div>
    </div>
  `;
};
const renderTablero = () => {
  return `
  <div id="fondo">
  <div class="contenedor">
    <div class="titulo">
      <h1>TIC TAC TOE</h1>
    </div>
  </div>
  <div class="game-container">
    <div class="player-info">
      <h2 id="playerName1">Player 1</h2>
      <input id="player1" type="text" placeholder="Nombre del Jugador 1">
      <button id="btn-name">Confirm name</button>
      </div>
      <div class="game-board">
      <div class="row">
      <div class="cell" id="0"></div>
      <div class="cell" id="1"></div>
      <div class="cell" id="2"></div>
      </div>
      <div class="row">
      <div class="cell" id="3"></div>
      <div class="cell" id="4"></div>
      <div class="cell" id="5"></div>
      </div>
      <div class="row">
      <div class="cell" id="6"></div>
      <div class="cell" id="7"></div>
      <div class="cell" id="8"></div>
      </div>
      </div>
      <div class="player-info">
      <h2 id="playerName2">Player 2</h2>
      <input id="player2" type="text" placeholder="Nombre del Jugador 2" class="name">
      <button id="btn-name2">Confirm name</button>
    </div>
  </div>
  <div class="game-info">
    <p>Turno de..</p>
    <p class="winner"></p>
  </div>
</div>
  `;
};

const confirmName1 = () => {
  const playerName1 = document.getElementById("playerName1");
  const inputName1 = document.getElementById("player1").value;

  playerName1.innerHTML = inputName1;
};

const confirmName2 = () => {
  //h2
  const playerName2 = document.getElementById("playerName2");
  //inputs
  const inputName2 = document.getElementById("player2").value;

  playerName2.innerHTML = inputName2;
};
//Principal LLamdas a funciones

root.innerHTML = renderIndex();

const buttonPlayer = document.getElementById("buttonPlayer");

buttonPlayer.addEventListener("click", () => {
  root.innerHTML = renderTablero();
  //botones
  const btnPlayer1 = document.getElementById("btn-name");
  const btnPlayer2 = document.getElementById("btn-name2");
  const inputName1 = document.getElementById("player1");
  const inputName2 = document.getElementById("player2");

  btnPlayer1.addEventListener("click", () => {
    confirmName1();
    btnPlayer1.style.display = "none";
    inputName1.style.display = "none";
  });
  btnPlayer2.addEventListener("click", () => {
    confirmName2();
    btnPlayer2.style.display = "none";
    inputName2.style.display = "none";
  });
  const htmlCasillas = document.querySelectorAll(".cell");
  const mapCasillas = [];
  let turno1 = false;

  const manageClick = (element) => {
    console.log(element.innerHTML);

    if (element.innerHTML == "") {
      if (turno1) {
        element.innerHTML = "🥝";

        mapCasillas[element.id] = "x";
      } else {
        element.innerHTML = "🍓";
        mapCasillas[element.id] = "o";
      }
      turno1 = !turno1;
    }

    manageBoard(mapCasillas);
    checkWinner(mapCasillas);
  };

  const manageBoard = (casillas) => {
    for (let casilla of casillas) {
      console.log(casilla);
    }
  };

  for (let i = 0; i < htmlCasillas.length; i++) {
    htmlCasillas[i].addEventListener("click", (event) => {
      const element = event.target;
      manageClick(element);
    });

    htmlCasillas[i].id = i;
  }
});
