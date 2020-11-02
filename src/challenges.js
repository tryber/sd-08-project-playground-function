// Desafio 1
function compareTrue(param1, param2) {
 if (param1 === true && param2 === true) {
   return true;
} else {
  return false;
}
}
compareTrue (false, true)

// Desafio 2
function calcArea(base, height) {
 let areaTriangulo = ((base * height)/2);
 return areaTriangulo;
}
calcArea(50, 10)

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}
splitSentence("Yago Rocha de Souza Lima");

// Desafio 4
function concatName(nomes) {
 let lastName = nomes[nomes.length - 1];
 let resultado = lastName + ',' + ' ' + nomes[0];
  return resultado;
 }
concatName(['Patricia', 'Carlin', 'Martins']);

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
  }
footballPoints(10, 5);

// Desafio 6
function highestCount(array) {
array.sort();
}  
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
console.log(array);
let showWord = [];
  for (index = 0; index < array.length; index += 1){
  if (array[index] % 3 === 0){
    showWord[index] = 'fizz';
  }else if (array[index] % 5 === 0){
    showWord[index] = 'buzz';
  }else if (array[index] % 3 === 0 && array[index] % 5 === 0){
    showWord[index] = 'fizzBuzz';
  }else {
    showWord[index] = 'bug!'
  }
}
return showWord;  
}
fizzBuzz([2,15,7,9,45])

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
