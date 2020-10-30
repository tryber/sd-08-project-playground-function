// Desafio 1
function compareTrue(param1,param2) {
  if (param1 && param2 === true) {
      return true;
  }
      return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
    let end = [];
    end = str.split(' ');
    return end;
}

// Desafio 4
function concatName(array) {
    let novoArray = [];
    novoArray = array[array.length - 1] + ', ' + array[0];
    return novoArray;
}

// Desafio 5
function footballPoints(wins, ties) {
    let totWins = wins * 3;
    let totTies = ties * 1;
    let total = totTies + totWins;
    return total;
}

// Desafio 6
function highestCount(arrayNumber) {
  let maxNumber = arrayNumber[0];
  let repet = 0;
  for (let index = 0; index < arrayNumber.length; index += 1){
      if (arrayNumber[index] > maxNumber) {
          maxNumber = arrayNumber[index];
      }
  }
  for (let index = 0; index < arrayNumber.length; index += 1){
      if (arrayNumber[index] === maxNumber) {
          repet += 1;
      }
  }
  return repet;
}
console.log(highestCount([9, 1, 9, 3, 9, 5, 5]));

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
