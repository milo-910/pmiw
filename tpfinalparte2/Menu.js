class Menu { //SE USA ESTO PARA LLAMAR A OTRAS PANTALLAS
  escenas() {
    if (sistema.pantallas === 0) {
      sistema.pantalla0();
    } else if (sistema.pantallas === 1) {
      sistema.introduccion();
    } else if (sistema.pantallas === 2) {
      sistema.jugar();
    } else if (sistema.pantallas === 3) {
      sistema.creditos();
    } else if (sistema.pantallas === 4) {
      sistema.perdiste();
    } else if (sistema.pantallas === 5) {
      sistema.ganaste();
    }
  }
}
