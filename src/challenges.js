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
  let area = (base * height) / 2;
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

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numbersList) {
  let highestNumber = 0;
  let highestNumberCounter = 0;
  for (index = 0; index < numbersList.length; index += 1) {
    for (index2 = 0; index2 < numbersList.length; index2 += 1) {
      if (index != index2) {
        if (numbersList[index] > highestNumber) {
          highestNumber = numbersList[index];
        }
      }
    }
  }
  for (index = 0; index < numbersList.length; index += 1) {
    if (highestNumber == numbersList[index]) {
      highestNumberCounter += 1;
    }
  }
  return highestNumberCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 - mouse > cat2 - mouse) {
    return "cat1";
  } else if (cat1 - mouse < cat2 - mouse){
    return "cat2";
  } else if (cat1 == cat2) {
    return "os gatos trombam e o rato foge";
  }
}

let gato1 = 6;
let gato2 = 6;
let rato = 2;
console.log(catAndMouse(rato, gato1, gato2));

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
