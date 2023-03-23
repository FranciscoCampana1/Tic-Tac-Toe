const root = document.getElementById("root");
const game = {
  player1:{
      name: null,
      mark: "",

  },
  player2:{
    name: null,
    mark: "o",

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
        <div class="botones">
          
          <button class="boton" type="button" id="buttonPlayer">Player vs Player</button>
        
          <button class="boton" type="button">Player vs Pc</button>
        </div>
      </div>
    </div>
  `;
};

//Principal LLamdas a funciones

root.innerHTML = renderIndex();

