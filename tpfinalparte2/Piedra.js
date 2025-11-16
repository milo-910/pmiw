class Piedras {
  constructor(x, carrilActual, carriles) {
    this.posX = x;
    this.carriles = carriles;
    this.carrilActual = carrilActual;
    this.posY = this.carriles[this.carrilActual];
    this.profundidad = 100;
    this.velocidad = 6;
  }

  dibujar() {
    image(imgPiedra,this.posX, this.posY);
  }

  mover() {
    this.posX -= this.velocidad;
  }
}
