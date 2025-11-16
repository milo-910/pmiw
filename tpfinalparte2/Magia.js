class Magias {
  constructor(x, carrilActual, carriles) {
    this.posX = x;
    this.carriles = carriles;
    this.carrilActual = carrilActual;
    this.posY = this.carriles[this.carrilActual];
    this.profundidad = 195;
    this.velocidad = 8;

  }

  dibujar() {
    image(imgMagia,this.posX, this.posY);
  }

  mover() {
    this.posX -= this.velocidad;
  }
}
