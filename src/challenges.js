// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(arr) {
  return arr.slice(0, 1) + " " + arr.slice(-1);
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;
  while (wins > 0) {
    total += 3;
    wins--;
  }
  while (ties > 0) {
    total += 1;
    ties--;
  }
  return total;
}

// Desafio 6
function highestCount(arr) {
  let largest = 0;
  let number = 0;
  arr.forEach(value => {
    if (value > largest) largest = value;
  });
  arr.forEach(value => value == largest && number++ );
  return number;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return Math.abs(cat1 - mouse) == Math.abs(cat2 - mouse)? "os gatos trombam e o rato foge": Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)? "cat2": "cat1";
}

// Desafio 8
function fizzBuzz(arr) {
  arr.forEach(function (value) {
    if(value % 3 == 0 && value % 5 == 0) {
      console.log("fizzBuzz");
    } else if(value % 3 == 0) {
      console.log("fizz");
    } else if(value % 5 == 0) {
      console.log("buzz");
    } else {
      console.log("bug!");
    }
  });
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
