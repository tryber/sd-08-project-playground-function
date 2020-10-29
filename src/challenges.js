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
function splitSentence(str) {
  let newStrStorage = [];
  let newStr = '';

  for (let i in str) {
    if (str[i] !== ' ') {
      newStr += str[i];
    } else {
      newStrStorage.push(newStr);
      newStr = '';
    }
  }
  newStrStorage.push(newStr);
  return newStrStorage;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6 - Método de sort retirado de https://stackoverflow.com/a/1063027/14424360
function highestCount(array) {
  let sortedArray = array.sort((a, b) => b - a);
  let numCount = 0;

  for (let i in sortedArray) {
    if (sortedArray[i] === sortedArray[0]) {
      numCount += 1;
    }
  }
  return numCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzzPusher(n, array) {
  if (n % 3 === 0 && n % 5 === 0) {
    array.push('fizzBuzz');
  } else if (n % 3 === 0) {
    array.push('fizz');
  } else if (n % 5 === 0) {
    array.push('buzz');
  } else {
    array.push('bug!');
  }
}

function fizzBuzz(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    fizzBuzzPusher(array[i], newArray)
  }
  return newArray;
}

// Desafio 9 - Fontes de estudo:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// Ajuda com para refatoramento: Fernando Soares.
function generalEncrypter(str, arrayToBeReplaced, arrayToReplace) {
  let encryptedStr = str;

  for (let i = 0; i < arrayToBeReplaced.length; i += 1) {
    encryptedStr = encryptedStr.replace(new RegExp(arrayToBeReplaced[i], 'g'), arrayToReplace[i]);
  }
  return encryptedStr;
}

let vogals = ['a', 'e', 'i', 'o', 'u'];
let numerals = ['1', '2', '3', '4', '5'];

function encode(str) {
  return generalEncrypter(str, vogals, numerals);
}
function decode(str) {
  return generalEncrypter(str, numerals, vogals);
}

console.log(decode(encode('hello, my name is silvio')));
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
