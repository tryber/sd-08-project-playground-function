// Desafio 1  // commit inicial 2
function compareTrue(a , b) {
  if (a && b === true) {
    return true;
  }
    else {
      return false;
    }  
}

// Desafio 2
function calcArea(base , altura) {

  return (base * altura)/2;
}

// Desafio 3
function splitSentence(string) {
  
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let first;
  let last;

  first=array[0];
  last=array[array.length-1];

  return last + ", " + first;

}

// Desafio 5
function footballPoints() {
  let wins;
  let ties;

  return (wins*3)+ties;

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
