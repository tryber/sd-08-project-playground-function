// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
  return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let spliWord = stringToSplit;
  return spliWord.split(' ')
}

// Desafio 4
function concatName(stringArray) {
  let invertedString = stringArray[stringArray.length - 1] + ', ' + stringArray[0];
  return invertedString
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
function fizzBuzz(arrayNumber) {

  let fizzBuzzCont = [];
  for (let i = 0; i < arrayNumber.length; i += 1) {

    if (arrayNumber[i] % 3 === 0 && arrayNumber[i] % 5 === 0) {
        fizzBuzzCont.push('fizzBuzz');
    } else if (arrayNumber[i] % 3 === 0) {
        fizzBuzzCont.push('fizz');
    } else if (arrayNumber[i] % 5 === 0) {
        fizzBuzzCont.push('buzz');
    } else {
        fizzBuzzCont.push('bug!');
    }
  }
  return fizzBuzzCont
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
