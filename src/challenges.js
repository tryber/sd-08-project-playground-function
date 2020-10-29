// Desafio 1
function compareTrue(bollean,bollean2) {
  // seu código aqui
   if(bollean && bollean2 === true){
      return true;
   }
   else {
     return false;
   }
}
// Desafio 2
function calcArea(base,heigth) {
  // seu código aqui
  return (base * heigth)/2
}

// Desafio 3
function splitSentence(array) {
  // seu código aqui
  let trocaString = (array[array.length - 1] + ', ' + array[0])
  return trocaString

}

// Desafio 4
function concatName(xablau) {
  // seu código aqui
  let juntaNome = `${xablau[xablau.length -1]},${xablau[0]}`;
  return juntaNome;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let totalPontos = wins *3 + ties;
  return totalPontos
}
//console.log(footballPoints(3,1))

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let numbers = arrayNumbers.sort();
  console.log (numbers)
  let quantidadeDeVezesDoMaior = 0;
  for (let a = 0; a < numbers.length; a += 1) {
    if (numbers[numbers.length - 1] === numbers[a]) {
      quantidadeDeVezesDoMaior += 1;
      
    }
  }
  return quantidadeDeVezesDoMaior;
}
//console.log(highestCount([1,9, 2, 3, 9, 5, 7, 9, 10,9]))

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
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
