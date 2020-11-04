// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let arr;
  arr = frase.split(' ');
  return arr;
}

// Desafio 4
function concatName(array) {
  let result = '';
  result = array[array.length - 1] + ',' + array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let count = 0;
  for (i = 1; i < array.length; i++) {
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  for (j = 0; j < array.length; j++) {
    if (highest === array[j]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let closestCat = "";
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    closestCat = "cat1";
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    closestCat = "cat2";
  } else {
    closestCat = "os gatos trombam e o rato foge";
  }
  return closestCat;
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
