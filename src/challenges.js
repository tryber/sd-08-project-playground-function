// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separate = [];
  separate = string.split(' ');
  return separate;
}

// Desafio 4
function concatName(string) {
  // seu código aqui
  let first = string[0];
  let last = string[string.length - 1];
  let reverse = last + ', ' + first;
  return reverse;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  ties = ties * 1;
  points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maior = 0;
  let cont = 0;
  for (let x = 1; x < numbers.length; x++) {
    if (numbers[x] > maior) {
      maior = numbers[x];
    }
  }
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] == maior) {
      cont++;
    }
  }
  return cont;
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
