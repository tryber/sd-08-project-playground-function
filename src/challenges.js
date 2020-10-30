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
function highestCount(arraye) {

  let maiorNumero = arraye[index]; 
  let conta = 0;
  let maior = 0
  for ( index =0; index < arraye.length; index += 1) {
   
      if ( arraye[index] > maiorNumero) {
  
          maior = arraye[index]
  
      } if ( maiorNumero === arraye[index]) {
          conta++
      } 
  }
  
  return conta ;
 
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
