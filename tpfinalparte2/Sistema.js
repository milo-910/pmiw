class Sistema {
  constructor() {
    this.pantallas = 0;
    this.juego = new Juego();
  }

  pantalla0() {
    imageMode(CENTER);
    image (fondoIntro, width/2, 240)
      fill(0);
    textFont (fuente1);
    textAlign(CENTER, CENTER);
    textSize(24);
    text("Presiona ESPACIO para empezar", width/2, height/2);
  }

  introduccion() {
    image (fondoIntro, width/2, 240)
      textFont (fuente1);
    textSize (40);
    fill(233, 161, 245);
    text ("STARLIGHT VS", width/2, 50);
    textSize(30);
    fill (0);
    text ("EL PONY DE LAS SOMBRAS", width/2, 100);
    textSize(20);
    fill(255, 68, 0)
      text("Sobrevive durante 30", width/2, 250);
    text ("segundos sin ser", width/2, 270);
    text ("golpeadx por una piedra", width/2, 290);
    text("o una particula de magia.", width/2, 310);
    text("Muevete de arriba a", width/2, 330);
    text("abajo con las flechas.", width/2, 350);
    textSize(24);
    fill(105, 255, 0);
    text("Presiona ENTER para empezar", width/2, 400);
    textSize(15);
    text ("Presiona C para ver los creditos", width/2, 420);
    fill(0);
  }

  perdiste() {
    textSize(30);
    fill(255, 68, 0);
    image (fondoPerder, width/2, 240)
      text ("PERDISTE??", width/2, 20);
    textSize(10);
    text ("era mas facil hacer lo que tenias que", width/2, 50);
    text ("tenias que hacer que lo que hiciste", width/2, 70);
    textSize(24);
    text ("Presiona R para ver los reinicar", width/2, 420);
    text ("Presiona C para ver los creditos", width/2, 450);
  }

  ganaste() {
    textSize(30);
    image (fondoGanar, width/2, 240)
      fill(105, 255, 0);
    text ("GANASTE", width/2, width/2);
    textSize(24);
    text ("Presiona R para ver los reinicar", width/2, 420);
    text ("Presiona C para ver los creditos", width/2, 450);
  }

  creditos() {
    image (fondoCreditos, width/2, 240)
      textSize (30);
    fill(196, 106, 224);
    text("Juego hecho por:", width/2, 200);
    text("Ornella Lucia Tullio", width/2, 230);
    text("Milo Camilo Braidot", width/2, 260);
    text("Comision 2", width/2, 290);
    text("Profesor:", width/2, 320);
    text("Matias Jauregui Lorda", width/2, 350);
  }


  jugar() {
    this.juego.dibujar();
    this.juego.actualizar();
    this.juego.funcionGanar();
  }

  jugarMover() {//ACA ESTAN TODAS LAS FUNCIONALIDADES DE TECLAS
    if (this.pantallas === 0 && key === ' ') {
      this.pantallas = 1; //  PANTALLA JUEGO
    }

    if (this.pantallas === 1 && keyCode === ENTER) {
      this.pantallas = 2; //  PANTALLA JUEGO
      // SE INICIA EL TIMER
      sistema.juego.timerIniciado = true;
      sistema.juego.timer = millis();
    }

    if ((this.pantallas === 1 ||this.pantallas === 4||this.pantallas === 5) && key === 'C') {
      this.pantallas = 3; // PANTALLA CREDITOS
      efectoMagia.play();//LE AÑADE UN EFECTO DE SONIDO AL CAMBIAR DE PANTALLA
    }

    if ((this.pantallas === 3 ||this.pantallas === 4||this.pantallas === 5) && key === 'R') {
      this.pantallas = 1; //pantalla intro
      sistema.juego.timer = 0;//REINICIA EL TIMER
      sistema.juego.personaje.vida=65;//REINICIA LA VIDA
      efectoMagia.play();//LE AÑADE UN EFECTO DE SONIDO AL CAMBIAR DE PANTALLA
    }

    if (this.pantallas === 2) {//SI ESTA EL JUEGO EN MOVIMIENTO, FUNCIONAN LAS TECLAS QUE MUEVE EL PERSONAJE
      this.juego.teclaPresionada(keyCode);
    }
  }

  ruidos() {
    //INTRO, CRÉDITOS, GANASTE, PERDISTE
    if (this.pantallas == 1 || this.pantallas == 3 ||this.pantallas == 4 ||this.pantallas == 5) {
      musicaJuego.stop();

      if (!musicaIntro.isPlaying()) {
        musicaIntro.loop();
      }
    }

    // JUEGO
    if (this.pantallas === 2) {
      musicaIntro.stop();

      if (!musicaJuego.isPlaying()) {
        musicaJuego.loop();
      }
    }
  }
}
