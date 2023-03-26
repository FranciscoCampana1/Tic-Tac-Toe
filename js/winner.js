
//funcion para pintar ganador

const renderWinner = (playerWinner) => {
  return `<div class="containerWinner">
    <div class="cartel">
      <h1 class="congratulations">
        FELICITACIONES!! <br />
        EL GANADOR ES <br> ${playerWinner}!!
      </h1>
      <div class="containerButton">
        <div class="botones">
          <button class="boton" type="button" id="btnPlayAgain">Play again</button>
         <button class="boton" type="button" id="btnHome">Home</button>
        </div>
      </div>
    </div>
  </div>`;
};

//funcion para pintar empate

const uiRenderEmpate = () => {
  return `<div class="containerWinner">
    <div class="cartel">
      <h1 class="congratulations">
        La partida ha finalizado en empate!
      </h1>
      <div class="containerButton">
        <div class="botones">
          <button class="boton" type="button" id="btnPlayAgain">Play again</button>
         <button class="boton" type="button" id="btnHome">Home</button>
        </div>
      </div>
    </div>
  </div>`;
};

const uiRenderHome = () => {
  const backToHome = document.getElementById("btnHome");
  backToHome.addEventListener("click", () => {
    root.innerHTML = renderIndex();
    showBoard();
  });
};

const uiRenderPlayAgain = () => {
  const backPlayAgain = document.getElementById("btnPlayAgain");
  backPlayAgain.addEventListener("click", () => {
    root.innerHTML = renderTablero();
    pintCell();
    showBoard();
  });
};

//Funcion para chequear ganador o empate

const checkWinner = (player, positionArray) => {
  const condicionEmpate =
    positionArray[0] != undefined &&
    positionArray[1] != undefined &&
    positionArray[2] != undefined &&
    positionArray[3] != undefined &&
    positionArray[4] != undefined &&
    positionArray[5] != undefined &&
    positionArray[6] != undefined &&
    positionArray[7] != undefined &&
    positionArray[8] != undefined;

  const uiRenderWinner = () => {
    if (player == "x") {
      root.innerHTML = renderWinner(game.player2.name);
    } else {
      root.innerHTML = renderWinner(game.player1.name);
    }
  };
  if (
    positionArray[0] == player &&
    positionArray[1] == player &&
    positionArray[2] == player
  ) {
    uiRenderWinner();
  }
  if (
    positionArray[3] == player &&
    positionArray[4] == player &&
    positionArray[5] == player
  ) {
    uiRenderWinner();
  }
  if (
    positionArray[6] == player &&
    positionArray[7] == player &&
    positionArray[8] == player
  ) {
    uiRenderWinner();
  }
  if (
    positionArray[0] == player &&
    positionArray[3] == player &&
    positionArray[6] == player
  ) {
    uiRenderWinner();
  }
  if (
    positionArray[1] == player &&
    positionArray[4] == player &&
    positionArray[7] == player
  ) {
    uiRenderWinner();
  }
  if (
    positionArray[2] == player &&
    positionArray[5] == player &&
    positionArray[8] == player
  ) {
    uiRenderWinner();
  }
  if (
    positionArray[0] == player &&
    positionArray[4] == player &&
    positionArray[8] == player
  ) {
    uiRenderWinner();
  }
  if (
    positionArray[2] == player &&
    positionArray[4] == player &&
    positionArray[6] == player
  ) {
    uiRenderWinner();
  }
  if (condicionEmpate) {
    root.innerHTML = uiRenderEmpate();
  }
};
