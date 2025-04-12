// selecciono las partes del pinguino
// cuerpo
const pinguinoDiv = document.querySelector('.pinguino-inferior');
const pinguinoDivSuperior = document.querySelector('.pinguino-superior');
// manos
const manoIzquierda = document.getElementById('mano-izquierda');
const manoDerecha = document.getElementById('mano-derecha');
// pies
const pieDerecho = document.getElementById('pie-derecho');
const pieIzquierdo = document.getElementById('pie-izquierdo');
// pico
const picoSuperior = document.getElementById('pico-superior');
const picoInferior = document.getElementById('pico-inferior');
// ojos
const ojoDerecho = document.getElementById('ojo-derecho');
const ojoIzquierdo = document.getElementById('ojo-izquierdo');
// barriga
const barriga = document.getElementById('barriga');
// rostro
const mejillaDerecha = document.getElementById('mejilla-derecha');
const mejillaIzquierda = document.getElementById('mejilla-izquierda');

//Selecciono los botones
const boton = document.querySelector('#boton-color'); 
const botonFondo = document.getElementById('boton-fondo');
const botonPies = document.getElementById('boton-pies');
const botonPico = document.getElementById('boton-pico');
const botonOjos = document.getElementById('boton-ojos');
const botonBarriga = document.getElementById('boton-barriga');
const botonMejillas = document.getElementById('boton-mejillas');

function generarColorAleatorio(){
  let digitos = '0123456789ABCDEF'; // defino la variable para luego seleccionar un valor aleatorio (string)
  let colorHex = '#';
    
  for (let i = 0; i < 6 ; i++){
    let indiceAleatorio = Math.floor(Math.random() * 16); //genero un indice aleatorio
    colorHex += digitos[indiceAleatorio]; // a colorHex le voy agregando el valor que haya tomado por indice de mi string
  }

  return colorHex;
}


// cambia de color el cuerpo
boton.addEventListener('click', function(){
  const colorPinguinoAleatorio = generarColorAleatorio();
  //Actualiza el color de cuerpo del pinguino
  pinguinoDiv.style.backgroundColor = colorPinguinoAleatorio;
  pinguinoDivSuperior.style.backgroundColor = colorPinguinoAleatorio;
  //Actualiza el color de manos del pinguino
  manoIzquierda.style.backgroundColor = colorPinguinoAleatorio;
  manoDerecha.style.backgroundColor = colorPinguinoAleatorio;
});


// cambia el color del fondo por uno aleatorio
botonFondo.addEventListener('click', () =>{
  //guardo en color aleatorio el array que me retorna la funcion "generarColorAleatorio"
  const colorAleatorio = generarColorAleatorio();
  // Actualiza el color de fondo del body 
  document.body.style.backgroundColor = colorAleatorio;
});

//  Actualiza el color de pies del pinguino
botonPies.addEventListener('click',() => {
  // genero color colorAleatorio para usarlo en los pies
  const colorPiesAleatorios = generarColorAleatorio(); 
  
  pieDerecho.style.backgroundColor = colorPiesAleatorios;
  pieIzquierdo.style.backgroundColor = colorPiesAleatorios;
});

// cambia de color el pico
botonPico.addEventListener('click', ()=>{
  // genero color aleatorio para el pico
  const colorPicoAleatorios = generarColorAleatorio();

  picoSuperior.style.backgroundColor = colorPicoAleatorios
  picoInferior.style.backgroundColor = colorPicoAleatorios
});

// cambia de color los ojos
botonOjos.addEventListener('click',()=>{
    // genero color aleatorio para los ojos
  const colorOjos = generarColorAleatorio();

  ojoDerecho.style.backgroundColor = colorOjos;
  ojoIzquierdo.style.backgroundColor = colorOjos;
});


// cambia el color de la barriga del pinguino
botonBarriga.addEventListener('click',()=>{
  const colorBarriga = generarColorAleatorio();

  barriga.style.backgroundColor = colorBarriga;
});

// cambia el color del restro
botonMejillas.addEventListener('click', ()=>{
  const colorMejillas = generarColorAleatorio();

  mejillaDerecha.style.backgroundColor = colorMejillas;
  mejillaIzquierda.style.backgroundColor = colorMejillas;
})