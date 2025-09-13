// https://youtu.be/4n9hYQKlJX8


let imagen1;
var grosor = 1; //el grosor del circulo
var tono = 255 //el color

  function setup() {
  createCanvas (800, 400);
}



function draw() {
  background(255);
  strokeWeight(grosor);
  fill(tono);
  
    for (let y = 0-40; y < 500; y += 85) {
    for (let x = 360; x < 900; x += 85) {
      dibujarCirculos(x, y);
        //estos son los circulos del fondo
      
    }
  }
  for (let y = 0; y < 500; y += 85) {
    for (let x = 400; x < 900; x += 85) {
      dibujarCirculos(x, y);
        //estos son los del frente, los cuales cambie de posicion ligeramente
      
    }
  }


  image (imagen1, 0-200, 0, 620, 400);
}
