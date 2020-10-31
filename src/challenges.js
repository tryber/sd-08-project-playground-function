// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true
  }
  return false
}
// Ok!

// Desafio 2
function calcArea(base, height) {
  let area = ((base * height) / 2)
  return area
}
// Ok!

// Desafio 3
function splitSentence(str) {
  return str.split(' ')
}
// Ok! (?)

// Desafio 4
function concatName(array) {
  let concat1 = [array.pop(), array[0]];
  return concat1.join(', ')
}
// Ok!

// Desafio 5
function footballPoints(win, ties) {
  let wins = win * 3;

  return (wins + ties)
}
// Ok!

// Desafio 6
function highestCount(arrayNumber) {
  let totalLength = [];
  let maiorNumero = [0];
  let contador = 1;
  for(let i1 = 1; i1 < arrayNumber.length; i1+=1) {
   if(arrayNumber[i1] >= maiorNumero) {
    maiorNumero = arrayNumber[i1]
    }
  }
    for (let i2 = 0; i2 < arrayNumber.length; i2+=1) {
     if(maiorNumero === arrayNumber[i2]) {
       totalLength.push(arrayNumber[i2])
     }
    }
  return totalLength.length
}
// Ok!!

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {

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
