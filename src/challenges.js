// Desafio 1
function compareTrue(x,y) {
  if (x===true && y === true){
    return true;
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;

}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  let lastItem = array[array.length -1];
  let firstItem = array[0];
  let lastFirst = `${lastItem}, ${firstItem}`;
  return lastFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arrayNumber) {
  
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  if (positionCat1 > positionCat2) {
    return "cat2";
  } else if (positionCat1 === positionCat2) {
    return "os gatos trombam e o rato foge";
  }
  return "cat1";
}

// Desafio 8
function fizzBuzz(arrayNumber) {
  let arrayString = []
  for (i = 0; i < arrayNumber.length; i += 1) {
  if ((arrayNumber[i] % 5 !== 0) && (arrayNumber[i] % 3 === 0)) {
    arrayString[i] = ("fizz");
  }else if ((arrayNumber[i] % 5 === 0) && (arrayNumber[i] % 3 !== 0)) {
    arrayString[i] = ("buzz");
  }else if ((arrayNumber[i] % 3 === 0) && (arrayNumber[i] % 5 === 0)) {
    arrayString[i] = ("fizzBuzz");
  }else{
    arrayString[i] = ("bug!");
  }
}
return arrayString;
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
