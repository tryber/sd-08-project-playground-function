// Desafio 1
function compareTrue(parametro1, parametro2) {
  return parametro1 && parametro2;
}
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  let vetor = frase.split(' ');
  return vetor;
}
// Desafio 4
function concatName(vetor) {
  let primeiraPalavra = vetor[0];
  let ultimaPalavra = vetor[vetor.length - 1];
  return `${ultimaPalavra}, ${primeiraPalavra}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}
// Desafio 6
function highestCount(vetor) {
  let maior = encontraMaior(vetor);
  return encontraQuantidadeMaior(vetor, maior);
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

function encontraMaior(vetor) {
  let maior = vetor[0];
  for (let index = 0; index < vetor.length; index++) {
    if (vetor[index] > maior) {
      mairo = vetor[index];
    }
  }
  return maior;
}

function encontraQuantidadeMaior(vetor, maior) {
  let count = 0;
  for (let index = 0; index < vetor.length; index++) {
    if (vetor[index] === maior) {
      count += 1;
    }
  }
  return count;
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
};
