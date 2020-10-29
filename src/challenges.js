// Desafio 1
function compareTrue(var1, var2) {
  if (var1 == true && var2 == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let palavra;
  let ultimaPosicao = arrayString.length;
  for (let i = ultimaPosicao - 1; i >= 0; i -= 1){
    if (i == ultimaPosicao - 1) {
      palavra = arrayString[i] + ',';
    } else if (i == 0){
      palavra += ' ' + arrayString[i];
    }
  } 
  return palavra;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = 0;
  for (let i = 0; i < wins; i += 1){
    resultado += + 3;
  }
  for (let j = 0; j < ties; j += 1){
    resultado += +1;
  }
  return resultado;
}

// Desafio 6
function highestCount(arrayNum) {
  let maior = arrayNum[0];
  let repete = 0;
  for (let i = 0; i < arrayNum.length; i += 1){
   if (arrayNum[i] >= maior){
     maior = arrayNum[i];
   }
   for (let j = 0; j < arrayNum.length; j += 1){
    if (maior == arrayNum[j]){
      repete += + 1;
    }
   }
   return repete;
  }
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
