// Desafio 1
function compareTrue(valorLogicoA, valorLogicoB) {
  if(valorLogicoA === true && valorLogicoB === true)
  {
    return true;
  }
  else
  {
    return false;
  }
}

// console.log(compareTrue(true, true));
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

//console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(texto) {
  return texto.split(" ");
}

//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints() {
  // seu código aqui
}

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
