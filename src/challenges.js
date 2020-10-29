// Desafio 1
function compareTrue(b1,b2) {
  if(b1 == true && b2 == true){
    return true
  } else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  let area = ((base*height)/2)
  return area
}

// Desafio 3
function splitSentence(string) {
  let arrayFrase = string.split(' ')
  return arrayFrase
}
// Desafio 4
function concatName(arrayString) {
  let ultimoItem = arrayString[arrayString.length -1],
      primeitoItem = arrayString[0],
      resultado = `${ultimoItem}, ${primeitoItem}`
      return resultado
}

// Desafio 5
function footballPoints(wins,ties) {
  let resultado = (wins * 3) + ties;
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
