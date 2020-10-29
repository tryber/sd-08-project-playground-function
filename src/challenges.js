// Desafio 1 VAMBORA!!!
function compareTrue(bool1, bool2) {
  let isTrue = false; 
  if (bool1 && bool2) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  return isTrue;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  return areaTriangulo;
}

// Desafio 3
// Precisei pesquisar na internet, fonte: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
function splitSentence(entrada) {
 let retorno = entrada.split(" ");
 return retorno;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let primeiraString = arrayDeStrings[0];
  let ultimaPosicao = arrayDeStrings.length - 1;
  let ultimaString = arrayDeStrings[ultimaPosicao];
  let retorno = [ultimaString, primeiraString];
  return retorno;
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
