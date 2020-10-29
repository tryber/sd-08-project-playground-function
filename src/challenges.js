// Desafio 1
// let comprar = true;
// let pagar = true;

function compareTrue(comprar, pagar) {
  // seu código aqui
  if (comprar === true && pagar === true) {
    return true;
  } return false;
}
// console.log (compareTrue(comprar, pagar));

// Desafio 2
// let base = 2;
// let height = 10;
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// console.log(calcArea(base, height));

// Desafio 3
// let frase = 'go Trybe'
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ')
}
// console.log(splitSentence(frase));

// Desafio 4
let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo', 'Ana', 'Luiz Fernando', 'José']
function concatName(array) {
  // seu código aqui
  for (let i = 0; i < array.length -1; i += 1) {
    return (array[array.length-1] + ", " + array[0])
  }
}
// console.log(concatName(array));

// Desafio 5
// let wins = 0;
// let ties = 9;
function footballPoints(wins, ties) {
  // seu código aqui
  let total = wins * 3 + ties * 1;
  return total
}
// console.log(`O total de pontos conquistados é ${footballPoints(wins,ties)}.`);

// Desafio 6
function highestCount() {
  // seu código aqui
}

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
