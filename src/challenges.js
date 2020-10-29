// Desafio 1
function compareTrue(val1, val2) {
  if (val1 === true && val2 === true) {
    return true;
  } else {
    return false;
  }
}
// let resultado = compareTrue(true, true);
// console.log(resultado)


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area
}
//  let area = calcArea(40, 10)
//  console.log(area)


// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// let string = splitSentence("go trybe");
// console.log(string)


// Desafio 4
function concatName(itens) {
  let priItem = itens[0];
  let ultItem = itens[itens.length -1];

  return `${ultItem}, ${priItem}`;
}

// let nome = concatName('marcos','paulo');
// console.log(nome);

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let resultadoFinal = vitorias + empates;

  return resultadoFinal;
}

 let reultado = footballPoints(3,1)
  console.log(reultado)

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
