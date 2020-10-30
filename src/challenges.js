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
  return win * 3 + ties * 1;
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
  if (list.length === 0) return "Vazio!";
  // const result = [];
  // list.sort().forEach((item) => {
  //   result.push({ tech: item, name });
  // });
  return helper.techListFactory(list, name);
}

// Desafio 11
function generatePhoneNumber(arr) {
  // Validation
  // if (arr.length !== 11) return "Array com tamanho incorreto.";
  // for (let i = 0; i < arr.length; i += 1) {
  //   if (arr[i] < 0 || arr[i] >= 10) {
  //     return "não é possível gerar um número de telefone com esses valores";
  //   }
  //   if (arr.filter((x) => x === arr[i]).length >= 3) {
  //     return "não é possível gerar um número de telefone com esses valores";
  //   }
  // }
  // // Format Telefone
  return helper.phoneNumberGeneratorFacade(arr);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const check = {
    a: lineA < lineB + lineC && lineA > Math.abs(lineB - lineC),
    b: lineB < lineA + lineC && lineB > Math.abs(lineA - lineC),
    c: lineC < lineA + lineB && lineC > Math.abs(lineA - lineB),
  };
  if (check.a && check.b && check.c) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(text) {
  const arr = text.replace(/\D/g, "").split("");
  const sum =
    arr.reduce(function (acc, val) {
      return parseInt(acc, 10) + parseInt(val, 10);
    }, 0) || 0;
  if (sum < 2) return `${sum} copo de água`;
  return `${sum} copos de água`;
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
