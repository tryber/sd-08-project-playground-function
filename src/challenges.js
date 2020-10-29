// Desafio 1
function compareTrue(proposition1, proposition2) {
  return proposition1 && proposition2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let splitedSentence = [''];
  let currentPosition = 0;

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      currentPosition += 1;
      splitedSentence[currentPosition] = '';
    } else {
      splitedSentence[currentPosition] += sentence[i];
    }
  }

  return splitedSentence;
}

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let numberCounter = {};
  let highest = numbers[0];
  
  for (let index in numbers) {
    if (numberCounter[numbers[index]]) {
      numberCounter[numbers[index]] += 1;
    } else {
      numberCounter[numbers[index]] = 1;
    }
  }

  for (let key in numberCounter) {
    if (highest < numberCounter[key]) {
      highest = numberCounter[key];
    }
  }
  
  return highest;
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
