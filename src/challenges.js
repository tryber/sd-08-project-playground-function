// Desafio 1
let b= false;
function compareTrue(bool1, bool2) {
  if (bool1 ===true && bool2 === true) {
    b = true;
  }
  return b;
}

// Desafio 2
let area = 0;
function calcArea(base, height) {
area = (base * height) / 2;
  return area;
}

// Desafio 3
let str = [];
function splitSentence(string) {
  str= string.split(' ');
return str
}

// Desafio 4
let nomes = "";
function concatName(arrayNomes) {
  nomes = arrayNomes[arrayNomes.length - 1];
  nomes += ", ";
  nomes += arrayNomes[0];
  return nomes;
}
console
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
