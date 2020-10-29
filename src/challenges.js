// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne && booleanTwo) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  var splitString = string.split(" ");
  return splitString;
}

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ", " + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let sortArray = array.sort(function(a, b){return a-b});
  let highestNumber = sortArray[sortArray.length - 1];
  console.log(sortArray);
  let repeatCount = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == highestNumber) {
      repeatCount += 1;
    }
  }
  return repeatCount;
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
