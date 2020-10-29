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
// let frase = "go Trybe aleluia Irmao"
let palavra = ''
let pos = 0
function splitSentence(sentence) {
  let array = []
  for (pos = 0; pos < sentence.length; pos += 1) {
    if (sentence[pos] !== ' ') {
      palavra += sentence[pos]
    } else {
      array.push(palavra)
      palavra = ''
    }
  }
  if (pos === sentence.length) {
    array.push(palavra)
    palavra = ''
  }
  console.log(array)
  return array
}
// splitSentence(frase)

// Desafio 4
//  array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(arrayString) {
  let concated = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`
  return concated
}
//  console.log(concatName(array))

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties)
  return pontos
}

// Desafio 6
// let array = [9, 1, 2, 3, 9, 5, 7, 10]
let maiorValor = 0
let repeticoes = 0
function highestCount(array) {
  for (let index in array){
    if (array[index] > maiorValor){
      maiorValor = array[index]
    }
  }
  for (let index in array){
    if (array[index] === maiorValor){
      repeticoes += 1
    }
  }
  return repeticoes
}

// console.log(highestCount(array))

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
