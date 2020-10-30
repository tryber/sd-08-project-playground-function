// Desafio 1
function compareTrue(valor1,  valor2) {

 
if (valor1  &&  valor2 ) { 

  return true 
} else {
  return false 
}
}

// Desafio 2
function calcArea(base, height) {

  let calculo = (base * height /2)

  return calculo
}

// Desafio 3
function splitSentence(string ) {
  
  return string.split(" ", string.length)
}

// Desafio 4
function concatName(string) {
  let primeiroB = string[0]; 
  let ultimoA  =  (string.reverse());
  let ultimoB = ultimoA[0];

  return ultimoB + "," + " " + primeiroB
}

// Desafio 5
function footballPoints(wins, ties) {
 let vitoria = 3
  let impate = 1
let numerodePontos = (wins*vitoria+ties*impate)
return numerodePontos
}

// Desafio 6
function highestCount(array) {

let conta = 0 ;
let contrep= 0; 

  for ( index1 = 0; index1 < array.length; index1 +=1) {
    for ( index2 = index1 + 1; index2 < array.length; index2 +=1 ) {

      if ( array[index1] == array[index2]){
        conta ++
        break;
      } if (conta < contrep) {
        contrep = conta ;

      }
    }

    return conta 
  }
 
}
console.log( highestCount [[9, 1, 2, 3, 9, 5, 7]])

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  generatePhoneNumber,
  techList,
  highestCount,
  hydrate,
  splitSentence,
  triangleCheck,
}
