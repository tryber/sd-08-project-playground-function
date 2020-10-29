// Desafio 1
function compareTrue(value1 = false, value2 = false) {
  if (value1 && value2) return true;
  return false;
}

// Desafio 2
function calcArea(base = 0, height = 0) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text = "") {
  return text.split(" ");
}

// Desafio 4
function concatName(arr = []) {
  let result = arr.toString();
  result = result.split(",").join(", ").trim();
  return result;
}

// Desafio 5
function footballPoints(win = 0, ties = 0) {
  return win * 3 + ties * 1;
}

// Desafio 6
function highestCount(arr = []) {
  const max = arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return arr.filter((x) => x == max).length;
}

// Desafio 7
function catAndMouse(mouse = 0, cat1 = 0, cat2 = 0) {
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
  // Default Error Message
  const errorMsg =
    "não é possível gerar um número de telefone com esses valores";
  // Validation
  if (arr.length === 0) return errorMsg;
  if (arr.length > 12) return errorMsg;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 10) return errorMsg;
    if (arr.filter((x) => x == arr[i]).length > 3) return errorMsg;
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
