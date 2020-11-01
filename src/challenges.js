// Project Playground Function
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, heigth) {
  area = (base * heigth) / 2;
  return area;
}
// Desafio 3
function splitSentence(string) {
  array = string.split(" ");
  return array;
}
// Desafio 4
function concatName(strings) {
  let lastString = strings[strings.length - 1];
  let strfinal = lastString + ", " + strings[0];
  return strfinal;
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}
// Desafio 6
function highestCount(meuArray) {
  let maior = 0;
  let arrayMaior = [];
  for (var index = 0; index < meuArray.length; index += 1) {
    if (meuArray[index] > maior) {
      maior = meuArray[index];
    }
  }
  for (i = 0; i < meuArray.length; i += 1) {
    if (meuArray[i] === maior) {
      arrayMaior.push(meuArray);
    }
  }
  return arrayMaior.length;
}
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      arrayFizzBuzz.push("fizzBuzz");
    } else if (array[index] % 5 == 0) {
      arrayFizzBuzz.push("buzz");
    } else if (array[index] % 3 == 0) {
      arrayFizzBuzz.push("fizz");
    } else {
      arrayFizzBuzz.push("bug!");
    }
  }
  return arrayFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
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
};
