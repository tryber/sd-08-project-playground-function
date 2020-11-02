// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
} 

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  return areaTriangulo;
}

// Desafio 3
function splitSentence(stringToSplit) {
  return stringToSplit.split(' '); 
}


// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max(...array);
  let repeat = 0;
  for (let i of array) {
    if (maiorNumero === i) {
      repeat += 1;
    }
  } 
 return repeat
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArray = [];
  for (let index in array) {
    if ((array % 3 === 0) && (array % 5 === 0)) {
      return fizzBuzz
    } else if (array % 3 === 0) {
      return fizz;
    } else if ((array % 5) === 0) {
      return buzz;
    } else {
      return bug;
    }
  }
  return fizzBuzzArray;
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
