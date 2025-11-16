class Personaje {
  constructor(x, carrilInicial, carriles, magias, piedras) {
    this.posX= x;
    this.carriles = carriles;
    this.carrilActual = carrilInicial;
    this.posY = this.carriles[this.carrilActual];
    this.magias = magias;
    this.piedras = piedras;
    this.profundidad = 95;
    this.vida =65;
  }

  dibujar () {
    let s = int (millis ()/1000);
    if (s%2===0) {
      image(sprites[0], this.posX, this.posY);
    } else {
      image(sprites[1], this.posX, this.posY)
    }//la animacion del pony

    //VIDA
    fill(150)
      rect (10, 20, 65, 15);
    if (this.vida>30) {
      fill(105, 255, 0);
    } else {
      fill(255, 68, 0);
    }
    rect (10, 20, this.vida, 15);
    //text ("vida: "+this.vida, 600,10);
  }

  mover() {
    this.posY = this.carriles[this.carrilActual];
  }

  teclaPresionada(keyCode) {
    if (keyCode === UP_ARROW && this.carrilActual > 0) {
      this.moverArriba();
    } else if (keyCode === DOWN_ARROW && this.carrilActual < this.carriles.length - 1) {
      this.moverAbajo();
    }//mueve el personaje de arriba abajo
  }


  moverArriba() {
    this.carrilActual --;
  }

  moverAbajo() {
    this.carrilActual ++;
  }

  colisionar () {
    for (let i = 0; i<this.magias.length; i++) {
      let m = this.magias[i];
      if (this.carrilActual === m.carrilActual ) {
        if (  this.posX < m.posX + this.profundidad && this.posX + this.profundidad > m.posX) {
          console.log("COLISION con magia en carril " + this.carrilActual + "!");
          this.vida -= 1;
          console.log (this.vida);
        }
      }
    }

    for (let i = 0; i<this.piedras.length; i++) {
      let p = this.piedras[i];
      if (this.carrilActual === p.carrilActual ) {
        if (  this.posX < p.posX + this.profundidad && this.posX + this.profundidad > p.posX) {
          console.log("COLISION con piedra en carril " + this.carrilActual + "!");
          this.vida -= 1;//SE LE BAJA LA VIDA AL PERSONAJE SEGUN CUANTO LO TOQUE UN OBJETO
          console.log (this.vida);
        }
      }
    }
    if (this.vida <= 0) {
      sistema.pantallas = 4; // Cambia a la pantalla PERDISTE
    }
  }
}
