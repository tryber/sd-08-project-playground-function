// Desafio 1
function compareTrue(boo, lean) {
  if (boo === true && lean === true) {
    return true
  } else {
    return false
  }
}//console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo
}//console.log(calcArea(7,5))

// Desafio 3
function splitSentence(string) {
  let frase = string
  let array = frase.split(' ')
  return array
}//console.log(splitSentence('Ai que vida maravilhosa'))

// Desafio 4
//let arrayGordim = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(array) {
  let palavras = array
  let lastWord = palavras[palavras.length - 1]
  let firstWord = palavras[0]
  return lastWord + ", " + firstWord
}//console.log(concatName(arrayGordim))

// Desafio 5
function footballPoints(wins, ties) {
  let qtdVitorias = wins
  let qtdEmpates = ties
  let pontos = (qtdVitorias * 3) + qtdEmpates
  return pontos
}console.log(footballPoints(9, 10))

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
