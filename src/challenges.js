// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 == true && boolean2 == true) {
    return true;
  } else {
    return false;
  }}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence (sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let biggest = -Infinity;
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > biggest) {
      biggest = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (biggest == array[index]) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCats = Math.abs(cat1 - cat2);
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  if (distCats == 0) {
    return 'os gatos trombaram e o rato foge';
  } else if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  } else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArr = [];
  for (let index = 0; index < array.length; index += 1) {
    if ((array[index] % 3 == 0) && (array[index] % 5 == 0)) {
      fizzBuzzArr[index] = 'fizzBuzz';
    } else if (array[index] % 3 == 0) {
      fizzBuzzArr[index] = 'fizz';
    } else if (array[index] % 5 == 0) {
      fizzBuzzArr[index] = 'buzz';
    } else {
      fizzBuzzArr[index] = 'bug!';
    }
  }
  return fizzBuzzArr;
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
