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
  let vitoria = (wins * 3);
  let empates = (ties * 1);
  let points = (vitoria + empates);
  return points;
}
footballPoints(10, 5);
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
