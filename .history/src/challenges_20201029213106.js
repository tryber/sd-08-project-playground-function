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
  const max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return arr.filter((x) => x == max).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distRelative = {
    cat1: Math.abs(cat1 - mouse),
    cat2: Math.abs(cat2 - mouse),
  };
  if (distRelative.cat1 < distRelative.cat2) return "cat1";
  if (distRelative.cat2 < distRelative.cat1) return "cat2";
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(arr = []) {
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
  techList.sort().forEach((tech) => {
    result.push({ tech: tech, name: name });
  });
  return result;
}

// Desafio 11
function generatePhoneNumber(arr = []) {
  // Validation
  if (arr.length === 0) return "Array com tamanho incorreto.";
  if (arr.length > 12) return "Array com tamanho incorreto.";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) return errorMsg;
    if (arr.filter((x) => x == arr[i]).length > 3)
      return "não é possível gerar um número de telefone com esses valores";
  }
  // Format Telefone
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}

// Desafio 12
function triangleCheck(lineA = 0, lineB = 0, lineC = 0) {
  // Checks
  if (lineA < lineB + lineC && lineA > Math.abs(lineB + lineC)) return false;
  if (lineB < lineA + lineC && lineB > Math.abs(lineA + lineC)) return false;
  if (lineC < lineA + lineB && lineC > Math.abs(lineA + lineB)) return false;
  return true;
}

// Desafio 13
function hydrate(text = "") {
  let arr = text.replace(/\D/g, "").split("");
  let sum =
    arr.reduce(function (acc, val) {
      return parseInt(acc) + parseInt(val);
    }, 0) || 0;
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
