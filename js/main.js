const root = document.getElementById("root");
const game = {
  player1:{
      name: null,
      mark: '<img src="images/coin.png" alt="ficha-moneda" class="fichaMoneda">',

  },
  player2:{
    name: null,
    mark: '<img src="images/espada.png" alt="imagen-espadas" class="fichaEspada">',

  }
}
const renderIndex = () => {
  return `
  <div class="containerGeneral">
      <div class="contenedor">
        <div class="titulo">
          <h1>TIC TAC TOE</h1>
        </div>
      </div>
      <div class="contenedorBotones">
        <div class="botonStart">
          <button class="boton" type="button" id="buttonPlay">Player vs Player</button>
        </div>
      </div>
    </div>
  `;
};

// llamado a render index para pintar la pagina principal

root.innerHTML = renderIndex();

