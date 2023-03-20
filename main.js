const htmlCasillas = document.querySelectorAll(".cell");
const mapCasillas = [];
let turno1 = false;

const manageClick = (element) => {
  console.log(element.innerHTML);

  if ((element.innerHTML = " ")) {
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