// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 50))

// Desafio 3
function splitSentence(a) {
  return a.split(" ");
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(param = ["tudo bem?", "sei la", "como vai?", "oi"]) {
  return [param[param.length - 1], param[0]].join(", ");
}

// Desafio 5
function footballPoints(wins = 6, ties = 3) {
  return (3 * wins) + (1 * ties);
}

// Desafio 6
function highestCount(numbers) {
  numbers.sort();
  let numberMax = numbers[numbers.length - 1];
  let maxCount = 0;
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] == numberMax) {
      maxCount++
    }
  }
  return maxCount;
}
console.log(highestCount([2, 1, 5, 9, 9, 5, 9, 9, 6]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(param1) {
  let stringArray = [];
  for (let i = 0; i < param1.length; i += 1) {
    if ((param1[i] % 3 === 0) && (param1[i] % 5 === 0)) {
      stringArray.push("fizzBuzz");
    }
    else if (param1[i] % 3 === 0) {
      stringArray.push("fizz");
    } else if (param1[i] % 5 === 0) {
      stringArray.push("buzz");
    } else {
      stringArray.push("bug!");
    }
  }
  return stringArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));


// Desafio 9
function encode(stringToEncode) {
  stringToEncode = stringToEncode.replace(/a/g, "1");
  stringToEncode = stringToEncode.replace(/e/g, "2");
  stringToEncode = stringToEncode.replace(/i/g, "3");
  stringToEncode = stringToEncode.replace(/o/g, "4");
  stringToEncode = stringToEncode.replace(/u/g, "5");
return stringToEncode
}
console.log(encode("Dantas o mestre"));

function decode(stringToDecode) {
  stringToDecode = stringToDecode.replace(/1/g, "a");
  stringToDecode = stringToDecode.replace(/2/g, "e");
  stringToDecode = stringToDecode.replace(/3/g, "i");
  stringToDecode = stringToDecode.replace(/4/g, "o");
  stringToDecode = stringToDecode.replace(/5/g, "u");
  return stringToDecode;
}
console.log(decode("D1nt1s 4 m2str2"))

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
