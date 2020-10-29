// Desafio 1
function compareTrue(a, b) {
  if ( a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(2, 4));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 8));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(5, 3));

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
