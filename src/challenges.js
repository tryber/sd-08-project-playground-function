//Feliz aniversário Lucas Cassiano Ferraz Paolillo

// Desafio 1
function compareTrue(status1, status2) {
  return status1 && status2;
  }
//console.log(compareTrue('true', 'true'));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}
//console.log(calcArea(20, 50));

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array; 
}
//console.log(splitSentence('Feliz aniversário Lucas Cassiano Ferraz Paolillo'));

// Desafio 4
function concatName(arrayStrig) {
  return `${arrayStrig[arrayStrig.length-1]}, ${arrayStrig[0]}`
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return pontos;
}
console.log(footballPoints(5, 2));

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
