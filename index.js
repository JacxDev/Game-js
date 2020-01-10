
// Variables para acceder al DOM de cada elemento
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const btnEmpezar = document.getElementById('btnEmpezar')



class Juego {

  
  // constructor -- Aqui se llaman las funciones para ser ejecutadas
  constructor() {
    this.inicializar();
    this.generarSecuencia();
    this.siguienteNivel();
    
  }

  // Esta funcion oculta la ventana de "Iniciar juego" al dar click
  inicializar() {
    btnEmpezar.classList.add('hide');

    //  Nivel inicial
    this.nivel = 1;

    // Variables de colores
    this.colores = {
      celeste: celeste,
      violeta: violeta,
      naranja: naranja,
      verde: verde
    }
  }

  // Se genera un array con "new Array" .fill para asignar el valor iniciar y .map para recorrer el array
  // Se genera un numero aleatorio de 1 al 4 y se asigna el valor a cada elemento del array
  generarSecuencia(){
    this.secuencia = new Array(10).fill(0).map(m => Math.floor(Math.random() * 4))
  }

  siguienteNivel(){
    this.iluminarSecuencia()
  }

  // Se transforma un numero a un color
  transformarNumeroAColor(){
    switch (Number){
      case 0:
        return 'celeste'
      case 1:
        return 'violeta'
      case 2:
        return 'naranja'
      case 3:
        return 'verde'    
    }
  }

  iluminarSecuencia(){
    for (var i = 0; i < this.nivel; i++){
      let color = this.transformarNumeroAColor(this.secuencia[i])
      setTimeout(() => this.iluminarColor(color), 1000 * i)
      
    }
  }

  iluminarColor(color){
    this.colores[color].classList.add('light')
    setTimeout(() => this.apagarColor(color), 350)
  }

  apagarColor(color) {
    this.colores[color].classList.remove('light')
  }
}


//  Funcion para iniciar el juego
function empezarJuego() {
  window.juego = new Juego()
}

