// Desafio 1
function compareTrue(v1, v2) {
  let result = true;
  if (v1 === true && v2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(nome) {
  let pNome;
  let uNome;
  let cont;
  pNome = nome[0];
  uNome = nome[nome.length - 1];
  cont = uNome + ', ' + pNome;
  return cont;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins > 0) {
    points += wins + 3;
  }
  if (ties > 0) {
    points += ties + 1;
  }
  return points;
}

// Desafio 6
function highestCount() {

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
