//Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return false;
  }
  return true;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = base * height / 2;
  return areaTriangulo;
}

console.log(calcArea(5, 2));

// Desafio 3
function splitSentence(frase) {
  let transformacao = frase.split(' '); 
  return transformacao; 
}
splitSentence('Para o alto e avante andre');


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
