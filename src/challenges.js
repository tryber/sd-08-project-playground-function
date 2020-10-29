// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  return(a && b);
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return(base*height)/2;
}

// Desafio 3
function splitSentence(word) {
  let sentenceArray = [];
  word = word.split(' ');
  for (let i in word) {
    sentenceArray.push(word[i]);
  }
  return sentenceArray;
}

// Desafio 4
function concatName(param1) {
  // seu código aqui
  return param1[param1.length -1]+', '+param1[0];

}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return wins*3 + ties;
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
