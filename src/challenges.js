// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 == true && boolean2 == true) {
    return true;
  }else {
    return false;
  }
}
let boolean1 = true;
let boolean2 = true;
console.log(compareTrue(boolean1, boolean2))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base * height) / 2;
  return area
}
console.log(calcArea(10, 10))

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arraysrt = string.split(' ')
  return arraysrt
}
console.log(splitSentence('go trybe'))

// Desafio 4
function concatName() {
  // seu código aqui
}

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
