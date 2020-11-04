// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base = 10, height = 50) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(a = "go Trybe") {
  return a.split(" ");
}

// Desafio 4
function concatName(param = ["tudo bem?", "sei la", "como vai?", "oi"]) {
  return [param[param.length - 1], param[0]].join(", ");
}

// Desafio 5
function footballPoints(wins = 6, ties = 3) {
  return (3 * wins) + (1 * ties);
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
function fizzBuzz(param1 = [1, 2, 5, 8, 9, 12, 6984]) {
  let stringArray = [];
    if ((param1 % 3 === 0) && (param1 % 5 === 0)) {
      stringArray.push("fizzBuzz");
    }
    else if (param1% 3 === 0) {
      stringArray.push("fizz");
    } else if (param1 % 5 === 0) {
      stringArray.push("buzz");
    } else {
      stringArray.push("bug!");
    }
  }
  return stringArray;
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
