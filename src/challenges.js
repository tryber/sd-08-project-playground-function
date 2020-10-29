// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return (string = string.split(' '));
}

// Desafio 4
function concatName(array) {
  let firstString = array[0];
  let lastString = array[array.length - 1];

  return `${lastString}, ${firstString}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;

  let points = wins + ties;

  return points;
}

// Desafio 6
function highestCount(array) {
  let number = 0;
  let counter = 0;

  for (let i = 0; i < array.length; i += 1) {
    let repetitions = 0;

    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]) {
        repetitions += 1;
      }
    }

    if (repetitions > counter) {
      number = array[i];
      counter = repetitions;
    }
  }

  return number;
}

// Desafio 7
function catAndMouse() {}

// Desafio 8
function fizzBuzz() {}

// Desafio 9
function encode() {}
function decode() {}

// Desafio 10
function techList() {}

// Desafio 11
function generatePhoneNumber() {}

// Desafio 12
function triangleCheck() {}

// Desafio 13
function hydrate() {}

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
};
