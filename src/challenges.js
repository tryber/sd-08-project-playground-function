// Desafio 1
function compareTrue(p1,p2) {
  if(p1 && p2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return(base*height/2);
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let array = [];
  let palavra = '';
  for(char in frase){
    if(frase[char] !== ' '){
      palavra += frase[char];
    } else {
      array.push(palavra);
      palavra = '';
    }
  }
  array.push(palavra);
  return(array);
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}


// Desafio 5
function footballPoints() {
  // seu código aqui
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
