// Desafio 1

function compareTrue (valor1, valor2) {
  if (valor1 && valor2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2

function calcArea (base, height) {
  let area = base * height / 2;
  return area;  
}

// Desafio 3

function splitSentence (literal) {
  let split = literal.split(" ");
  return split;
}

// Desafio 4
function concatName(array) {
  let string;
  for (i in array){
      if(i == array.length - 1){
          string = array[i];
      }
  }
  if(array[0]){
      string += ", " + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints (wins, ties) {
  let pontos = 0;
  for(i = 0; i < wins; i++) {
      pontos = wins * 3;
  }
  for(i = 0; i < ties; i++) {
      pontos += 1;
  }
  return pontos;
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
