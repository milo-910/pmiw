//https://youtu.be/xmjSb_i1_uM VIDEO MILO BRAIDOT

let sistema;
let menu;
var sprites= [];
var imgPiedra;
var imgMagia;
var fondoJuego;
var fondoPerder;
var fondoGanar;
var fondoIntro;
var fondoCreditos;
var musicaIntro;
var musicaJuego;
var efectoMagia;
var fuente1;

function preload () {
  //fondos
  fondoJuego = loadImage ("./data/fondo.jpg");
  fondoCreditos = loadImage ("./data/p_creditos.png");
  fondoIntro = loadImage ("./data/p_intro.png");
  fondoGanar = loadImage ("./data/p_ganar.png");
  fondoPerder = loadImage ("./data/p_perder.png");
  //sprites
  sprites = [loadImage("./data/sprite1.png"), loadImage("./data/sprite2.png")];
  imgPiedra = loadImage ("./data/piedra.png");
  imgMagia= loadImage ("./data/magia.png");
  //sonido
  musicaIntro = loadSound ("./data/happy_song.mp3");
  musicaJuego = loadSound ("./data/musica_tension.mp3");
  efectoMagia = loadSound ("./data/ruido_magia.mp3");
  //fuentes
  fuente1 = loadFont ("./data/04B.TTF");
}

function setup() {
  createCanvas (640, 480);

  sistema = new Sistema();
  menu = new Menu();
}


function draw() {
  background(30);
  menu.escenas();
  sistema.ruidos();
}

function keyPressed() {
  sistema.jugarMover();
}
