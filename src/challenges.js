// Desafio 1
function compareTrue(param1, param2) {
 if(param1 == true && param2 == true){
   return true;
 }else{
   return false;
 }
}
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base*height)/2;
  return triangulo;
}
// console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(param) {
  sentence = [];
  sentence.push(param.split(' '));
  return sentence;
}
// console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(param) {
  let resultado = "";
  resultado += param[param.length -1];
  resultado += ", ";
  resultado += param[0];
  return resultado;
}
// let teste = ["Murilo", "Batista", "da", "Silva"];
// console.log(concatName(teste));

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
