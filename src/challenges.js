// Desafio 1
function compareTrue(passei, trybe) {
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
}

// Desafio 3
function splitSentence(texto) {
  // seu código aqui
}

// Desafio 4
function concatName(nome) {
  // seu código aqui
}
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numbers) {
  let newArray = [];
  numbers.forEach(elem => {
    if (elem % 3 === 0 && elem % 5 !== 0) {
      newArray.push('fizz');
    }
    if (elem % 5 === 0 && elem % 3 !== 0) {
      newArray.push('buzz');
    }
    if (elem % 3 === 0 && elem % 5 === 0) {
      newArray.push('fizzBuzz')
    } else {
      newArray.push('bug!')
    }
  });
  return newArray;
}
// Desafio 9
function encode(string) {

  string = string.replace(/a/g , 1);
  string = string.replace(/e/g , 2);
  string = string.replace(/i/g , 3);
  string = string.replace(/o/g , 4);
  string = string.replace(/u/g , 5);

  return string;
}

function decode(string2) {
  string2 = string2.replace(/1/g, 'a');
  string2 = string2.replace(/2/g , 'e');
  string2 = string2.replace(/3/g , 'i');
  string2 = string2.replace(/4/g , 'o');
  string2 = string2.replace(/5/g , 'u');
  return string2;
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
