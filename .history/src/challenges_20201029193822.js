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
function splitSentence(text = "") {
  return text.split(" ");
}

// Desafio 4
function concatName(arr = []) {
  let result = arr.toString();
  result = result.split(",").join(", ");
  return result;
}

// Desafio 5
function footballPoints(win = 0, ties = 0) {
  return win * 3 + ties * 1;
}

// Desafio 6
function highestCount(arr) {
  const max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return arr.filter((x) => x == max).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 == cat2) return "os gatos trombam e o rato foge";
  if (cat1 < cat2) return "cat1";
  if (cat2 < cat1) return "cat2";
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = "bug!";
    if (arr[i] % 3 == 0) result[i] = "fizz";
    if (arr[i] % 5 == 0) result[i] = "buzz";
    if (arr[i] % 3 == 0 && arr[i] % 5 == 0) result[i] = "fizzBuzz";
  }
  return result;
}

// Desafio 9
function encode(text = "") {
  return text
    .split("a")
    .join("1")
    .split("e")
    .join("2")
    .split("i")
    .join("3")
    .split("o")
    .join("4")
    .split("u")
    .join("5");
}

function decode(text = "") {
  return text
    .split("1")
    .join("a")
    .split("2")
    .join("e")
    .split("3")
    .join("i")
    .split("4")
    .join("o")
    .split("5")
    .join("u");
}

// Desafio 10
function techList(techList = [], name = "") {
  if (techList.length === 0) return "Vazio!";
  let result = [];
  techList.forEach((tech) => {
    result.push({ tech: tech, name: name });
  });
  return result;
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
