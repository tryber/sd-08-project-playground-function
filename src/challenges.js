const helper = require("./helpers");

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(" ");
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(win, ties) {
  const winPoints = win * 3 || 0;
  const tiesPoints = ties * 1 || 0;
  return winPoints + tiesPoints;
}

// Desafio 6
function highestCount(arr) {
  return helper.countValueInArray(helper.greaterValueInArray(arr), arr);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return helper.catAndMouseEval(mouse, cat1, cat2);
}

// Desafio 8
function fizzBuzz(arr) {
  return helper.fizzBuzzFactory(arr);
}

// Desafio 9
function encode(text) {
  return helper.encodeText(text);
}

function decode(text) {
  return helper.decodeText(text);
}

// Desafio 10
function techList(list, name) {
  return helper.techListFactory(list, name);
}

// Desafio 11
function generatePhoneNumber(arr) {
  return helper.phoneNumberGeneratorFacade(arr);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return helper.triangleCheckEval(lineA, lineB, lineC);
}

// Desafio 13
function hydrate(text) {
  return helper.hydrateFacade(text);
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
