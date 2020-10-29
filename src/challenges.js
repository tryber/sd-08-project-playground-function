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
}//console.log(footballPoints(9, 10))

// Desafio 6
let arrayGG = [9, 1, 2, 3, 9, 5, 7]
function highestCount(array) {
  let numbers = array
  let maiorNum = numbers[0]
  let contador = 0
  for (i in numbers){
    if (numbers[i] > maiorNum){
      maiorNum = numbers[i]
    }
  }for (k in numbers){
    if (numbers[k] === maiorNum){
      contador += 1
    }
  }
  return contador
}console.log(highestCount(arrayGG))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse
  let gato1 = cat1
  let gato2 = cat2
  let answer = ""
  let dist1 = mouse - (gato1)
  let dist2 = mouse - (gato2)
  distRatGat1 = Math.abs(dist1)
  distRatGat2 = Math.abs(dist2)
  if(distRatGat1 < distRatGat2){
    answer = 'cat1'
  }else if (distRatGat2 < distRatGat1){
    answer = 'cat2'
  }else {
    answer = "os gatos trombam e o rato foge"
  }return answer
}//console.log(catAndMouse(3, 2 ,2))

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
