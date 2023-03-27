//pint board-game
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
    <p id="turno">Turno de </p>
    <p class="winner"></p>
  </div>
</div>
  `;
};

//Obtener valor de los input y volcarlos en el h2 del tablero
const confirmName1 = () => {
  const playerName1 = document.getElementById("playerName1");
  const inputName1 = document.getElementById("player1").value;
  
  game.player1.name = inputName1;
  playerName1.innerHTML = game.player1.name;
};

const confirmName2 = () => {
  const playerName2 = document.getElementById("playerName2");
  const inputName2 = document.getElementById("player2").value;
  game.player2.name = inputName2;
  playerName2.innerHTML = game.player2.name;
};

//Pintar celdas y mapear el tablero
const pintCell = () => {
  const turno = document.getElementById("turno");
  const casillas = document.querySelectorAll(".cell");
  const arrayTablero = [];
  let turno1 = false;

  const manageClick = (celda) => {
    if (celda.innerHTML == "") {
      if (turno1) {
        celda.innerHTML = game.player1.mark;
        arrayTablero[celda.id] = "x";
        turno.innerHTML = "Turno de " + game.player1.name;
      } else {
        celda.innerHTML = game.player2.mark;
        arrayTablero[celda.id] = "o";
        turno.innerHTML = "Turno de " + game.player2.name;
      }
      turno1 = !turno1;
    }
    checkWinner(arrayTablero[celda.id], arrayTablero);
    uiRenderHome();
    uiRenderPlayAgain();
  };

  for (let i = 0; i < casillas.length; i++) {
    casillas[i].addEventListener("click", (event) => {
      const celda = event.target;
      manageClick(celda);
    });
    casillas[i].id = i;
  }
};

//Agregar eventos a los botones de name y llamar a la funcion que pinta las celdas
const showBoard = () => {
  const buttonPlayer = document.getElementById("buttonPlay");
  buttonPlayer.addEventListener("click", () => {
    root.innerHTML = renderTablero();
    //botones
    const btnPlayer1 = document.getElementById("btn-name");
    const btnPlayer2 = document.getElementById("btn-name2");
    const inputName1 = document.getElementById("player1");
    const inputName2 = document.getElementById("player2");

    pintCell();

    btnPlayer1.addEventListener("click", () => {
      confirmName1();
      btnPlayer1.style.display = "none";
      inputName1.style.display = "none";
    });
    btnPlayer2.addEventListener("click", () => {
      confirmName2();
      btnPlayer2.style.display = "none";
      inputName2.style.display = "none";
      const turno = document.getElementById("turno");
      turno.innerHTML = "Turno de " + game.player1.name;
    });
  });
};
showBoard();


