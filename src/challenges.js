// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
//  let frase = "go Trybe aleluia Irmao"
let palavra = ''
let pos
let indice = 0
function splitSentence(sentence) {
  let array = []
  for (pos = 0; pos < sentence.length; pos += 1) {
    if (sentence[pos] === ' ') {
      for (indice; indice < pos; indice += 1) {
        palavra += sentence[indice]
      }
      array.push(palavra)
      palavra = ''
      indice = pos + 1
    }
  }
  if (pos === sentence.length && sentence[pos - 1] !== ' ') {
    for (indice; indice < pos; indice += 1) {
      palavra += sentence[indice]
    }
    array.push(palavra)
  }
  return array
}
//  splitSentence(frase)

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
