// Desafio 1
function compareTrue(a, b) {

    if (a && b){
      return true
    } return false

}

// Desafio 2
function calcArea(base, height) {

    let resultado = (base * height) / 2
    return resultado
}

// Desafio 3
function splitSentence(string) {

    resultado = string.split(" ")
    return resultado
}

// Desafio 4
function concatName(arrayDeString) {

  resultado = arrayDeString[arrayDeString.length -1] + ", " + arrayDeString[0]
  return resultado  
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  resultado = wins * 3 + ties
  return resultado
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
