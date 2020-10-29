// Desafio 1
function compareTrue(val1, val2) {
  if (val1 && val2) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(true, true));
//console.log(compareTrue(false, true));
//console.log(compareTrue(true, false));
//console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}
//console.log(calcArea(5, 10));

// Desafio 3
function splitSentence(string) {
  let stringSplit = [];
  stringSplit = string.split(/[ ]/);
  return stringSplit;
}
//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(nomes) {
  let nameConcat = [];
  nameConcat = nomes[nomes.length - 1] + ", " + nomes[0];
  return nameConcat;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(winns, ties) {
  let victories = [];
  let empate = [];
  let pontos = [];
  victories = 3 * winns;
  empate = 1 * ties;
  pontos = victories + empate;
  return pontos;
}
//console.log(footballPoints(4, 3))


// Desafio 6
function highestCount(numeros) {
  let contNum = 0;
  let maiorNum = numeros[0];
  for (let cont = 0; cont < numeros.length; cont++) {
    if (numeros[cont] > maiorNum) {
      maiorNum = numeros[cont];
    }
  }
  for (let cont = 0; cont < numeros.length; cont++) {
    if (maiorNum === numeros[cont]) {
      contNum++;
    }
  }
  return contNum;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
