// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 3;
  return area;
}

// Desafio 3
function splitSentence(fullSentence) {
  let splitWord = "";
  let splitedSentence = [];
  for (index = 0; index <= fullSentence.length; index += 1) {
    if (fullSentence[index] != " " && index != fullSentence.length) {
      splitWord += fullSentence[index];
    } else {
      splitedSentence.push(splitWord);
      splitWord = "";
    }
  }
  return splitedSentence;
}

// Desafio 4
function concatName(namesList) {
  let printedName = namesList[namesList.length - 1] + ", " + namesList[0];
  return printedName;
}
let teste = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
console.log(concatName(teste));

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
};
