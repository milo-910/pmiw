// https://youtu.be/Oz1lq40drio VIDEO MILO BRAIDOT

let estadoActual = 'pan1';
let flecha, fleActiva;
let imagenes = [];
let textos = [];
let explosion, tension, ambiente, magia;
let isAmbientePlaying = false;

function preload() {
  cargarSonidos();
  cargarImagenes();
  cargarTextos();
}

function cargarSonidos() {
  explosion = loadSound('data/explosion.mp3');
  tension = loadSound('data/musica_ tension.mp3');
  ambiente = loadSound('data/happy_song1.mp3');
  magia = loadSound('data/ruido_magia.mp3');
}

function cargarImagenes() {
  fleActiva = loadImage('data/FlechaAct.png');
  flecha = loadImage('data/flechaInac.png');
  
  let nombresImg = ['PANTALLA1.png', 'PANTALLA2.png', 'PANTALLA3.png', 'PANTALLA4.png', 
    'PANTALLA5.png', 'twi_habla_con_Star.png', 'Cañon.png', 'publico.png', 'quimera.png',
    'GE1.png', 'GE2.png', 'biblioteca.jpg', 'PANTALLA7.png', 'PANTALLA8.jpg',
    'no_puede_terminar.png', 'final_malo.png', 'final_verdadero1.png', 
    'final_verdadero2.png', 'final_verdadero3.png', 'final_verdadero4.png'];
  
  for (let i = 0; i < nombresImg.length; i++) {
    imagenes[i] = loadImage('data/' + nombresImg[i]);
  }
}

function cargarTextos() {
  let nombresTxt = ['diaInicio.txt', 'txtTrixie.txt', 'txtTwi.txt', 'txtFlutter.txt', 'txtRainbow.txt'];
  for (let i = 0; i < nombresTxt.length; i++) {
    textos[i] = loadStrings('data/' + nombresTxt[i]);
  }
}

function setup() {
  createCanvas(640, 480);
  configurarTexto(22, 'Candara', CENTER, CENTER);
}

function configurarTexto(tam, fuente, alignH, alignV) {
  textSize(tam);
  textFont(fuente);
  textAlign(alignH, alignV);
}

function draw() {
  if (estadoActual === 'pan1') drawPan1();
  else if (estadoActual === 'pan2') drawPan2();
  else if (estadoActual === 'pan3') drawPan3();
  else if (estadoActual === 'pan4') drawPan4();
  else if (estadoActual === 'Mains1') drawMains1();
  else if (estadoActual.startsWith('Trixie')) drawTrixiePath();
  else if (estadoActual.startsWith('Flutter')) drawFlutterPath();
  else if (estadoActual.startsWith('Apple')) drawApplePath();
  else if (estadoActual.startsWith('Twi') || estadoActual.startsWith('Rar') || estadoActual.startsWith('FinalTwi')) drawTwiPath();
}

function mousePressed() {
  if (estadoActual === 'pan1') mousePan1();
  else if (estadoActual === 'pan2') mousePan2();
  else if (estadoActual === 'pan3') mousePan3();
  else if (estadoActual === 'pan4') mousePan4();
  else if (estadoActual === 'Mains1') mouseMains1();
  else if (estadoActual.startsWith('Trixie')) mouseTrixiePath();
  else if (estadoActual.startsWith('Flutter')) mouseFlutterPath();
  else if (estadoActual.startsWith('Apple')) mouseApplePath();
  else if (estadoActual.startsWith('Twi') || estadoActual.startsWith('Rar') || estadoActual.startsWith('FinalTwi')) mouseTwiPath();
}

function botoncito(posX, posY, tamX, tamY, textoB) {
  let colorFondo = overMouse(posX, posY, tamX, tamY) ? [100, 100, 100, 200] : [50, 50, 50, 200];
  fill(colorFondo[0], colorFondo[1], colorFondo[2], colorFondo[3]);
  stroke(255);
  rect(posX, posY, tamX, tamY, 10);
  noStroke();
  fill(255);
  text(textoB, posX + tamX / 2, posY + tamY / 2);
}

function overMouse(posX, posY, tamX, tamY) {
  return mouseX > posX && mouseX < posX + tamX && mouseY > posY && mouseY < posY + tamY;
}

function botonparacontinuar(posX, posY) {
  let imgFlecha = overMouse(posX, posY, flecha.width, flecha.height) ? fleActiva : flecha;
  image(imgFlecha, posX, posY);
}

function dibujarTexto(contenido, x, y, w, h) {
  fill(0, 0, 0, 150);
  rect(x, y, w, h, 10);
  fill(255);
  text(contenido, x + 5 / 2, y + h / 2, width - 40);
}

function mostrarPantalla(imgIdx, txtIdx, txtArreglo, x, y, w, h, conFlecha) {
  image(imagenes[imgIdx], 0, 0, width, height);
  dibujarTexto(textos[txtArreglo][txtIdx], x, y, w, h);
  if (conFlecha) botonparacontinuar(520, 20);
}

function clickFlecha(x, y) {
  return overMouse(x, y, flecha.width, flecha.height);
}

function cambiarEstado(nuevoEstado) {
  estadoActual = nuevoEstado;
}

function controlarAmbiente(iniciar) {
  if (iniciar && !isAmbientePlaying) {
    ambiente.loop();
    isAmbientePlaying = true;
  } else if (!iniciar && isAmbientePlaying) {
    ambiente.stop();
    isAmbientePlaying = false;
  }
}

function volverMenu() {
  cambiarEstado('pan1');
  controlarAmbiente(false);
  tension.stop();
}

// Pantallas iniciales
function drawPan1() {
  mostrarPantalla(0, 0, 0, 20, 80, 600, 320, true);
}

function mousePan1() {
  if (clickFlecha(520, 20)) {
    cambiarEstado('pan2');
    controlarAmbiente(true);
  }
}

function drawPan2() {
  mostrarPantalla(1, 1, 0, 20, 300, 600, 160, true);
}

function mousePan2() {
  if (clickFlecha(520, 20)) cambiarEstado('pan3');
}

function drawPan3() {
  mostrarPantalla(1, 2, 0, 20, 300, 600, 160, true);
}

function mousePan3() {
  if (clickFlecha(520, 20)) cambiarEstado('pan4');
}

function drawPan4() {
  image(imagenes[1], 0, 0, width, height);
  dibujarTexto(textos[0][3], 20, 300, 600, 160);
  botoncito(80, 400, 190, 50, "ir al spa");
  botoncito(340, 400, 240, 50, "Adelantar las lecciones");
}

function mousePan4() {
  if (overMouse(80, 400, 190, 50)) cambiarEstado('Trixie1');
  if (overMouse(340, 400, 240, 50)) cambiarEstado('Mains1');
}

function drawMains1() {
  image(imagenes[1], 0, 0, width, height);
  dibujarTexto("¡Debería de pedirle ayuda a mis amigas!\nEllas sabrán como ayudarme. Hm...\n¿pero a cuales les pido ayuda?", 20, 200, 600, 100);
  botoncito(40, 390, 150, 60, "Twilight y\nRarity");
  botoncito(240, 390, 150, 60, "Pinkie Pie y\nFluttershy");
  botoncito(440, 390, 150, 60, "Rainbow y\nApplejack");
}

function mouseMains1() {
  if (overMouse(40, 390, 150, 60)) cambiarEstado('Twi1');
  if (overMouse(240, 390, 150, 60)) cambiarEstado('Flutter1');
  if (overMouse(440, 390, 150, 60)) cambiarEstado('Apple1');
}

// Camino Trixie 
function drawTrixiePath() {
  if (estadoActual === 'Trixie1') {
    mostrarPantalla(2, 0, 1, 20, 300, 600, 160, true);
  } else if (estadoActual === 'Trixie2') {
    mostrarPantalla(2, 1, 1, 20, 300, 600, 160, true);
  } else if (estadoActual === 'Trixie3') {
    mostrarPantalla(3, 2, 1, 20, 300, 600, 160, true);
  } else if (estadoActual === 'Trixie4') {
    mostrarPantalla(3, 3, 1, 20, 300, 600, 160, true);
  } else if (estadoActual === 'Trixie5') {
    mostrarPantalla(3, 4, 1, 20, 270, 600, 200, true);
  } else if (estadoActual === 'Trixie6') {
    mostrarPantalla(4, 5, 1, 20, 300, 600, 160, true);
  } else if (estadoActual === 'Trixie7') {
    mostrarPantalla(4, 6, 1, 20, 270, 600, 200, true);
  } else if (estadoActual === 'Trixie8') {
    mostrarPantalla(4, 7, 1, 20, 270, 600, 200, true);
  } else if (estadoActual === 'Trixie9') {
    image(imagenes[5], 0, 0, width, height);
    dibujarTexto(textos[1][9], 20, 15, 600, 210);
    botoncito(80, 400, 220, 50, 'Si');
    botoncito(340, 400, 220, 50, "No");
  } else if (estadoActual === 'Trixie10') {
    mostrarPantalla(6, 10, 1, 20, 270, 600, 200, true);
  } else if (estadoActual === 'Trixie11') {
    mostrarPantalla(6, 10, 1, 20, 270, 600, 200, true);
  } else if (estadoActual === 'Trixie12') {
    image(imagenes[8], 0, 0, width, height);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie13') {
    image(imagenes[8], 0, 0, width, height);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie14') {
    image(imagenes[7], 0, 0, width, height);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie15') {
    image(imagenes[7], 0, 0, width, height);
    botoncito(220, 400, 200, 50, "Volver al menu");
  } else if (estadoActual === 'Trixie16') {
    image(imagenes[9], 0, 0, width, height);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Trixie17') {
    image(imagenes[10], 0, 0, width, height);
    dibujarTexto(textos[1][11], 20, 20, 600, 100);
    botoncito(220, 400, 200, 50, "Volver al menu");
  }
}

function mouseTrixiePath() {
  if (estadoActual === 'Trixie1') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie2');
  } else if (estadoActual === 'Trixie2') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie3');
  } else if (estadoActual === 'Trixie3') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie4');
  } else if (estadoActual === 'Trixie4') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie5');
  } else if (estadoActual === 'Trixie5') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie6');
  } else if (estadoActual === 'Trixie6') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie7');
  } else if (estadoActual === 'Trixie7') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie8');
  } else if (estadoActual === 'Trixie8') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie9');
  } else if (estadoActual === 'Trixie9') {
    if (overMouse(80, 400, 220, 50)) cambiarEstado('Trixie10');
    if (overMouse(340, 400, 220, 50)) cambiarEstado('Trixie11');
  } else if (estadoActual === 'Trixie10') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie12');
  } else if (estadoActual === 'Trixie11') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie13');
  } else if (estadoActual === 'Trixie12') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie14');
  } else if (estadoActual === 'Trixie13') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie15');
  } else if (estadoActual === 'Trixie14') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie16');
  } else if (estadoActual === 'Trixie15') {
    if (overMouse(220, 400, 200, 50)) volverMenu();
  } else if (estadoActual === 'Trixie16') {
    if (clickFlecha(520, 20)) cambiarEstado('Trixie17');
  } else if (estadoActual === 'Trixie17') {
    if (overMouse(220, 400, 200, 50)) volverMenu();
  }
}

// Camino Flutter
function drawFlutterPath() {
  image(imagenes[12], 0, 0, width, height);
  
  if (estadoActual === 'Flutter1' || estadoActual === 'Flutter2') {
    let idx = estadoActual === 'Flutter1' ? 0 : 1;
    dibujarTexto(textos[3][idx], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Flutter3') {
    dibujarTexto(textos[3][2], 20, 180, 600, 120);
    botoncito(80, 400, 220, 50, 'Es demasiado lenta');
    botoncito(340, 400, 220, 50, "Logra atraparlos");
  } else if (estadoActual === 'FlutterBE1') {
    dibujarTexto(textos[3][3], 20, 180, 600, 120);
    botoncito(80, 400, 220, 50, 'Si, pobre desgraciada');
    botoncito(340, 400, 220, 50, "NO");
  } else if (estadoActual === 'FlutterBE2') {
    dibujarTexto(textos[3][4], 20, 20, 600, 100);
    botoncito(220, 400, 200, 50, "Volver al menu");
  } else if (estadoActual === 'FlutterGE1' || estadoActual === 'FlutterGE2') {
    let idx = estadoActual === 'FlutterGE1' ? 5 : 6;
    dibujarTexto(textos[3][idx], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'FlutterGE3') {
    dibujarTexto(textos[3][7], 20, 20, 600, 100);
    botoncito(220, 400, 200, 50, "Volver al menu");
  }
}

function mouseFlutterPath() {
  if (clickFlecha(520, 20)) {
    if (estadoActual === 'Flutter1') cambiarEstado('Flutter2');
    else if (estadoActual === 'Flutter2') {
      cambiarEstado('Flutter3');
      controlarAmbiente(false);
      explosion.play();
    }
    else if (estadoActual === 'FlutterGE1') cambiarEstado('FlutterGE2');
    else if (estadoActual === 'FlutterGE2') cambiarEstado('FlutterGE3');
  } else if (estadoActual === 'Flutter3') {
    if (overMouse(80, 400, 220, 50)) cambiarEstado('FlutterBE1');
    if (overMouse(340, 400, 220, 50)) cambiarEstado('FlutterGE1');
    controlarAmbiente(true);
  } else if (estadoActual === 'FlutterBE1') {
    if (overMouse(80, 400, 220, 50)) cambiarEstado('FlutterGE1');
    if (overMouse(340, 400, 220, 50)) cambiarEstado('FlutterBE2');
  } else if (estadoActual === 'FlutterBE2' || estadoActual === 'FlutterGE3') {
    if (overMouse(220, 400, 200, 50)) volverMenu();
  }
}

// Camino Apple
function drawApplePath() {
  image(imagenes[13], 0, 0, width, height);
  
  if (estadoActual === 'Apple1') {
    dibujarTexto(textos[4][0], 20, 280, 600, 180);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Apple2') {
    dibujarTexto(textos[4][1], 20, 180, 600, 120);
    botoncito(80, 400, 220, 50, 'Se tropieza');
    botoncito(340, 400, 220, 60, "Si, a pesar de\nsu velocidad");
  } else if (estadoActual === 'AppleBE1') {
    dibujarTexto(textos[4][2], 20, 180, 600, 120);
    botoncito(80, 400, 220, 50, 'Que siga intentándolo');
    botoncito(340, 400, 220, 50, "Que se vuelva a casa");
  } else if (estadoActual === 'AppleBE2') {
    dibujarTexto(textos[4][3], 20, 20, 600, 120);
    botoncito(220, 400, 200, 50, "Volver al menu");
  } else if (estadoActual === 'AppleGE1') {
    dibujarTexto(textos[4][4], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'AppleGE2') {
    dibujarTexto(textos[4][5], 20, 20, 600, 150);
    botoncito(220, 400, 200, 50, "Volver al menu");
  }
}

function mouseApplePath() {
  if (clickFlecha(520, 20)) {
    if (estadoActual === 'Apple1') cambiarEstado('Apple2');
    else if (estadoActual === 'AppleGE1') cambiarEstado('AppleGE2');
  } else if (estadoActual === 'Apple2') {
    if (overMouse(80, 400, 220, 50)) cambiarEstado('AppleBE1');
    if (overMouse(340, 400, 220, 60)) cambiarEstado('AppleGE1');
  } else if (estadoActual === 'AppleBE1') {
    if (overMouse(80, 400, 220, 50)) cambiarEstado('AppleGE1');
    if (overMouse(340, 400, 220, 50)) cambiarEstado('AppleBE2');
  } else if (estadoActual === 'AppleBE2' || estadoActual === 'AppleGE2') {
    if (overMouse(220, 400, 200, 50)) volverMenu();
  }
}

// Camino Twi
function drawTwiPath() {
  seleccionarImagenTwi();
  
  if (estadoActual === 'Twi1') {
    dibujarTexto(textos[2][1], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Twi2') {
    dibujarTexto(textos[2][2], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Twi3') {
    dibujarTexto(textos[2][3], 20, 250, 600, 210);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Twi4') {
    dibujarTexto("¿Qué elegira Starlight?", 20, 300, 600, 160);
    botoncito(80, 400, 200, 50, "Hechizos de costura");
    botoncito(340, 400, 240, 50, "Hechizos antiguos");
  } else if (estadoActual === 'Twi5') {
    dibujarTexto(textos[2][6], 20, 15, 600, 330);
    botoncito(80, 400, 200, 50, 'No llega a tiempo');
    botoncito(340, 400, 240, 50, "Ella logra conseguirlos");
  } else if (estadoActual === 'Rar1') {
    dibujarTexto(textos[2][4], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'Rar2') {
    dibujarTexto(textos[2][5], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'TwiBD1') {
    dibujarTexto(textos[2][7], 20, 300, 600, 160);
    botoncito(80, 400, 220, 50, 'Sigue intentandolo');
    botoncito(340, 380, 220, 70, "El cansancio se\napodera de Starlight");
  } else if (estadoActual === 'TwiBD2') {
    dibujarTexto(textos[2][8], 20, 20, 600, 140);
    botoncito(220, 400, 200, 50, "Volver al menu");
  } else if (estadoActual === 'TwiTE1') {
    dibujarTexto(textos[2][9], 20, 290, 600, 180);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'TwiTE2') {
    dibujarTexto(textos[2][10], 20, 75, 600, 340);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'TwiTE3') {
    dibujarTexto(textos[2][11], 20, 300, 600, 160);
    botonparacontinuar(520, 20);
  } else if (estadoActual === 'FinalTwi') {
    dibujarTexto(textos[2][12], 20, 20, 600, 100);
    botoncito(220, 400, 200, 50, "Volver al menu");
  }
}

function seleccionarImagenTwi() {
  let imgIdx = 11; // imagen por defecto (biblioteca)
  
  if (estadoActual === 'Twi4') imgIdx = 1;
  else if (estadoActual === 'Twi5') imgIdx = 14;
  else if (estadoActual === 'TwiBD1') imgIdx = 15;
  else if (estadoActual === 'TwiBD2') imgIdx = 15;
  else if (estadoActual === 'TwiTE1') imgIdx = 16;
  else if (estadoActual === 'TwiTE2') imgIdx = 17;
  else if (estadoActual === 'TwiTE3') imgIdx = 18;
  else if (estadoActual === 'FinalTwi') imgIdx = 19;
  
  image(imagenes[imgIdx], 0, 0, width, height);
}

function mouseTwiPath() {
  if (clickFlecha(520, 20)) {
    if (estadoActual === 'Twi1') cambiarEstado('Twi2');
    else if (estadoActual === 'Twi2') cambiarEstado('Twi3');
    else if (estadoActual === 'Twi3') cambiarEstado('Twi4');
    else if (estadoActual === 'Rar1') cambiarEstado('Rar2');
    else if (estadoActual === 'Rar2') {
      cambiarEstado('Twi5');
      controlarAmbiente(false);
      magia.play();
      tension.loop();
    }
    else if (estadoActual === 'TwiTE1') cambiarEstado('TwiTE2');
    else if (estadoActual === 'TwiTE2') cambiarEstado('TwiTE3');
    else if (estadoActual === 'TwiTE3') cambiarEstado('FinalTwi');
  } else if (estadoActual === 'Twi4') {
    if (overMouse(80, 400, 200, 50)) cambiarEstado('Rar1');
    if (overMouse(340, 400, 240, 50)) {
      cambiarEstado('Twi5');
      controlarAmbiente(false);
      magia.play();
      tension.loop();
    }
  } else if (estadoActual === 'Twi5') {
    if (overMouse(80, 400, 200, 50)) cambiarEstado('TwiBD1');
    if (overMouse(340, 400, 240, 50)) cambiarEstado('TwiTE1');
  } else if (estadoActual === 'TwiBD1') {
    if (overMouse(80, 400, 220, 50)) cambiarEstado('TwiTE1');
    if (overMouse(340, 380, 220, 70)) cambiarEstado('TwiBD2');
  } else if (estadoActual === 'TwiBD2' || estadoActual === 'FinalTwi') {
    if (overMouse(220, 400, 200, 50)) volverMenu();
  }
}

//atajos
function keyPressed() {
  if (key === 'q' || key === 'Q') {
    estadoActual = 'Trixie5';
  }
  if (key === 'o' || key === 'o') {
    estadoActual = 'Twi5';
  }
  if (key === 'T' || key === 't') {
    estadoActual = 'Mains1';
  }
}