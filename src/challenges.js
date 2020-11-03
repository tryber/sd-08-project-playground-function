// Desafio 1
function compareTrue(varTrue, varFalse) {
  if (varTrue == true && varFalse == false) {
    return(true); 
  } else 
  return(false);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2) {
    return("cat1");
  } else if (mouse - cat1 > mouse - cat2) {
    return("cat2");
  } else if (mouse - cat1 == mouse - cat2) {
    return("os gatos trombam e o rato foge")
  }
}

// Desafio 8
let arrayResult = [];

function fizzBuzz(inArray) {
  for (index = 0; index < inArray.length; index++) {
    if (inArray.length(index) % 3 == 0 && inArray.length(index) % 5 == 0) {
      arrayResult.push("fizzbuzz");
    } else if (inArray.length(index) % 3 == 0 && inArray.length(index) % 5 != 0) {
      arrayResult.push("fizz");
    } else if (inArray.length(index) % 3 != 0 && inArray.length(index) % 5 == 0) {
      arrayResult.push("buzz");
    } else if (inArray.length(index) % 3 != 0 && inArray.length(index) % 5 != 0) {
      arrayResult.push("bug!");
    }
  }
  return arrayResult;
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
