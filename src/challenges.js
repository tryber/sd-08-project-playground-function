// Desafio 1
function compareTrue(n1 , n2) {
  if(n1 % 2 == 1 && n2 % 2 == 1){
    return true;
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  calcArea = (base * height) / 2;
  return calcArea;

}

// Desafio 3
function splitSentence(frase) {
splitSentence = frase.split(' ') ;
return splitSentence
}

// Desafio 4
function concatName (arrayString) {
  let primeiraUltima = arrayString[0] + " , "+ arrayString[arrayString.length - 1]+ " . ";
  return primeiraUltima;
}


// Desafio 5
function footballPoints(wins, ties) {
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
