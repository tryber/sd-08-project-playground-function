// Desafio 1
function compareTrue(n1,n2) {
  if(n1 && n2) {
    return true
  } else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
/*Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].*/


function splitSentence(frase) {
  let palavra ="";
  let fraseSeparada = [];
  for(let indice = 0; indice < frase.length; indice += 1) {
    fraseSeparada = fraseSeparada[indice];
  } 
  return fraseSeparada
}
console.log(splitSentence("Marconi Moreira"));
// Desafio 4
function concatName(nome) {
  let nome = [Lucas, Cassiano, Ferraz, Paolilo];
  for(let i = 0; i < nome.length; i += 1) {
    let 
  }

  // seu código aqui
}

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
