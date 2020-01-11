
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
    this.elegirColor = this.elegirColor.bind(this)
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
    this.agregarEventosClick()
  }

  // Se transforma un numero a un color
  transformarNumeroAColor(numero){
    switch (numero){
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

  // Se crea la secuencia de iluminacion con un ciclo for
  // por cada nivel se iluminara el mismo numero de veces
  iluminarSecuencia(){
    for (let i = 0; i < this.nivel; i++){
      const color = this.transformarNumeroAColor(this.secuencia[i])
      // Un tiempo de espera por cada iluminacion de 1seg
      // Para evitar que se iluminen todos en el mismo momento
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

  agregarEventosClick(){
    // Metodo bind, ata a un metodo a su objeto para hacer referencia a su this
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
  }

  elegirColor(ev){
    console.log(this)
  }
}


//  Funcion para iniciar el juego
function empezarJuego() {
  window.juego = new Juego()
}

setTimeout(() => console.log(1), 1000)
     setTimeout(() => console.log(2), 300)
     setTimeout(() => console.log(3), 0)
     console.log(4)