function encontraMaior(vetor) {
  let maior = vetor[0];
  for (let index = 0; index < vetor.length; index += 1) {
    if (vetor[index] > maior) {
      maior = vetor[index];
    }
  }
  return maior;
}

function encontraQuantidadeMaior(vetor, maior) {
  let count = 0;
  for (let index = 0; index < vetor.length; index += 1) {
    if (vetor[index] === maior) {
      count += 1;
    }
  }
  return count;
}

function calculaDistancia(pos1, pos2){
  return Math.abs(pos1 - pos2)
}
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
  let pontos = (wins * 3) + ties;
  return pontos;
}
// Desafio 6
function highestCount(vetor) {
  let maior = encontraMaior(vetor);
  return encontraQuantidadeMaior(vetor, maior);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = calculaDistancia(cat1, mouse);
  let distanciaCat2 = calculaDistancia(cat2, mouse);

  if(distanciaCat1 > distanciaCat2) {
    return "cat2";
  } else if(distanciaCat2 > distanciaCat1){
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
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
};
