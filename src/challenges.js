// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
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
function splitSentence(str) {
  let array = str.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let str = array[array.length - 1] + ", " + array[0];
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  array = array.sort();
  let highest = [];
  highest.push(array[array.length - 1]);
  for (let key in array) {
    if (array[key] == highest[0]) {
      highest.push(array[key]);
    }
  }
  return highest.length - 1;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 == mouse - cat2) {
    return "os gatos trombam e o rato foge";
  } else if(mouse - cat1 > mouse - cat2){
    return "cat2";
  } else {
    return "cat1";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for(let key in array){
    if(array[key] % 3 === 0 && array[key] % 5 === 0){
      newArray.push("fizzBuzz");
    } else if(array[key] % 3 === 0) {
      newArray.push("fizz");
    } else if (array[key] % 5 === 0){
      newArray.push("buzz");
    } else {
      newArray.push("bug!")
    }
  }
  return newArray;
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
