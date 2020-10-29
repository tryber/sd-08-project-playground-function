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
function highestCount(arrayNumbers) {
  // seu código aqui
  // Escreva uma função chamada highestCount que, ao receber uma array de números, 
  // retorne a quantidade de vezes que o maior deles se repete.
  // Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], 
  // a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.
  let maior = 0;
  let repete = 0;

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] > maior){
      maior = arrayNumbers[x];
    }
  }

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] == maior){
      repete += 1;
    }
  }
  return repete;
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
