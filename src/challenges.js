// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  return valor1 == true && valor2 == true ? true : false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let arrayString = [];
  arrayString = palavra.split(" ");
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let index = arrayString.length - 1;
  let stringPalavras = arrayString[index] + ', ' + arrayString[0];  

  return stringPalavras;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  // Escreva uma função com o nome footballPoints que receba o número de vitórias 
  // (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) 
  // e retorne a quantidade de pontos que o time marcou em um campeonato.
  // Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
  let points = 0;
  if (wins >= 1) {
    points = wins * 3;
  }
  if (ties >= 1) {
    points += ties;
  }

  return points;
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
