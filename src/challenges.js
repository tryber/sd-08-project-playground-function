// Desafio 1
function compareTrue(valorX, valorY) {
  let result;
  if(valorX === true && valorY === true){
    result = true;
  }else{
    result = false;
  }
  console.log(result);
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let result;
  result = (base*height)/2
  console.log(result);
}
calcArea(8,10)

// Desafio 3 - as informações referentes ao split() foram retiradas do dev media:https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array. 
function splitSentence(word) {
    let array = []
    array = word.split(" ")
    console.log(array);
}
splitSentence('bruno candido morais');

// Desafio 4
function concatName() {
  // seu código aqui
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
