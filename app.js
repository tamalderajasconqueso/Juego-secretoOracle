/*
let numeroSecreto;
let intentos; 
let listaNumeroSorteados = [];
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto){//Aqui se asigna una declaracion
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return; 
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
    console.log('lista:', listaNumeroSorteados);
    //Para cerrar el juego al acabarse los numeros
    if (listaNumeroSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles Wey');
    } else {
    if (listaNumeroSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}
}

function verificarEvento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //parseInt sirve para decir que un valor es un numero 
    //console.log(typeof(numeroSecreto));
    //console.log(numeroSecreto);
    //console.log(typeof(numeroDeUsuario));
    //console.log('Numero introducido:', numeroDeUsuario); 
    //console.log(numeroDeUsuario === numeroSecreto);
    console.log('Intentos:', intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `El numero secreto es ${numeroSecreto} !!! Lo adivinazte con solo  ${intentos} ${(intentos === 1 ? 'vez' : 'veces')} !!!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero es menor') 
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor'); 
        }
        intentos++;
        limpiar();
    }
    return;
}

function limpiar(){
    document.querySelector('#valorUsuario').value = '';
    
}


function condicionesinciales() {
    //En estos dos se invoca la declaracion y se indica en que parte del html va seguido del texto a indicar.
    asignarTextoElemento('h1', 'Juego del numero Secreto!!!');
    asignarTextoElemento('p', `Dime un numero perro del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1; 
    console.log('Numero secreto', numeroSecreto);

}

function reiniciarjuego() {
    limpiar(); 
    condicionesinciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
}

condicionesinciales();
*/










/*
//let listaGenerica = [];
// Desafio 4 4 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
let listaDEProgramacion= ['Java Script', 'C', 'C++', 'Kotlin', 'Phyton'];
listaDEProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(listaDEProgramacion);
console.log(listaDEProgramacion.length); 
for ( let i = 0; i <= listaDEProgramacion.length; i++) {
    console.log(listaDEProgramacion[i]);
}*/
/*
// Desaio 4 5 Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
let listaDEProgramacion= ['Java Script', 'C', 'C++', 'Kotlin', 'Phyton'];
listaDEProgramacion.push('Java', 'Ruby', 'GoLang');
console.log(listaDEProgramacion);
console.log(listaDEProgramacion.length); 
for ( let i = listaDEProgramacion.length-1; i >= 0; i--){
    console.log(listaDEProgramacion[i]);
}
*/
/*
// Desafio 4 6
let numeros = [1, 2, 3, 4, 5, 6];
let media = calcularMedia(numeros);
calcularMedia(numeros);
console.log(numeros);
function calcularMedia(numer) {
    let suma = 0;
    for (let i = 0; i < numer.length; i++){
        suma += numer[i]; 
    }
    return suma / numer.length; 
} 
console.log(media);
*/

// Operadores

/*
//Contar del 1 al 100
for ( let i = 1; i <= 100; i++) {
    console.log(i);
}
*/




 let extraer = 3;
 let array =[];
 let frutas = ['Peras', 'Manzanas', 'Platano', 'Sandia'];
 let aleatorio = Math.floor(Math.random()*4);
 console.log(frutas[aleatorio]);
 








/*
//Aqui es para que cuente lo que hay dentro de la caja. 
let inicial = 1; 
let caj = [1, 2, 3, 4, 5];
let caja = 52; 

function conteo() {
    for ( let i = 1; i <= caj.length; i++) {
        console.log(caj [i]);
    }
}

conteo();*/


/*
function Mastrarlista() {
    for (let listaIndividual = 1; listaIndividual < listaDEProgramacion.length; listaIndividual++) {
        console.log(listaDEProgramacion(listaIndividual)); 
    }
}
 Mastrarlista();*/

































/*
function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);
*/
/*
function convertirDolaresapesos(dolares) {
    var cotizaciondolar = 15.50;
    var pesos = dolares * cotizaciondolar; 
    return pesos; 
}

let valordolar = 5;
let valorpesos = convertirDolaresapesos(valordolar);
console.log(`${valordolar} dolares es ${valorpesos} pesos`);*/
/*
let anchura = 5;
let altura = 5;

function area(valora, valorb ) {
    let areas = valora * valorb;
    return areas; 
}

function perimeto(valora, valorb) {
    let perimetro = valora + valora + valorb + valorb;
    return perimetro; 
}

let areafinal = area(anchura, altura);
let perimetrofinal = perimeto(anchura, altura);

console.log(`El are es ${areafinal} y el perimetro es ${perimetrofinal}`);
*/
/*
let pi = 3.14;
let radio = 5;
function radiogaga(ridio) {
    let calculor = (ridio * ridio) * pi;
    console.log(calculor)
}
function diametrogaga(redio) {
    let caldulod = 2 * pi * redio;
    console.log(caldulod);
}

radiogaga(radio);
diametrogaga(radio);
*/

/*
//aqui pregunta el numero a multiplicar
let numero = prompt('Number please');

function tablamultiplicar(multiplo) {
    for ( let i = 1; i <= 10; i++) {
        let resultado = i*multiplo
        
        console.log(numero, 'x', i, '=', resultado);
    }
}

tablamultiplicar(numero);
*/











/*
saludo();
function saludo() {
    console.log('Hola Mundo');
}*/

/*
function nombre(usuario) {
    console.log(`Hola ${usuario}!`);
}
nombre('alisa');*/
/*
function multiplicar(numero){
    let resultado = parseInt(numero*2);
    console.log(resultado);
}
multiplicar(2);*/
/*
function promedio(a, b, c) {
    let num1 = a;
    console.log(num1);
    let num2 = b; 
    console.log(num2);
    let num3 = c;
    console.log(num3);

    let operacion = parseInt(num1+num2+num3);
    let division = operacion/3; 

    console.log(`Su promedio es ${division}!`);
}
promedio(5, 16, 7);*/

/*
function mayornumero(a, b) {
        return a > b ? a : b;
    }
let numerogrande = mayornumero(17, 6);
console.log(numerogrande);*/
/*
function numero(a) {
    return a*a;
}
let resultado = numero(5);
console.log(resultado);*/

