function preload () {
  imagen1 = loadImage ("fondo.jpg");
}

function colorAleatorio(transparencia) {
  return color(random(255), random(255), random(255), transparencia);
}

function actualizarGrosor() {
  grosor++;
  if (grosor > 7) {
    grosor = 1;
  }
}


function reiniciar() {                            
  grosor = 1;
  tono   = color(255);
}





function dibujarCirculos (x, y) {
  for (var i = 6; i > 0; i--) {
    var tamanio = i*15;
    var peso = grosor * (i / 6.0);  // Mayor en el exterior (i grande), menor en el centro (i pequeño)
    strokeWeight(peso);
    stroke(0);
    ellipse(x, y, tamanio, tamanio);
  }
}



function keyPressed () {
  if (key == ' ') {
    actualizarGrosor();
    tono = colorAleatorio(70);
  }
    if (key == 'r') {
      reiniciar();
    }
    if (key == 'R') {
      reiniciar();
    }
  }
