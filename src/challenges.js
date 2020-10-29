// Desafio 1
function compareTrue(num1, num2) {
  if (num1 == true && num2 == true) {
    return true;
  };
  
}
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = base * height / 2
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  
}

// Desafio 4
function concatName(arrayDeStrings) {
  let size = arrayDeStrings.length - 1;
  let string ='';
  string = arrayDeStrings[0] + ', ' + arrayDeStrings[size];
  return string;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return  winsPoints + tiesPoints;
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
function fizzBuzz() {
  
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
