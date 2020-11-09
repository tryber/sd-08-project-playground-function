// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}
// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName() {}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6  -   Colega Ediberto ajudou neste raciocínio.
function highestCount(numeros) {
  return repeat(numeros, maiorNumeroArray(numeros));
}

function maiorNumeroArray(array) {
  let maiorNumero = 0;
  for (let index in array) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
}

function repeat(array, maiorNumero) {
  let numeroRepete = 0;
  for (let index in array) {
    if (array[index] == maiorNumero) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
}

// Desafio 7
function catAndMouse(mouse, positionCat1, positionCat2) {
  let cat1 = positionCat1 - mouse;
  let cat2 = positionCat2 - mouse;
    if(cat1 < cat2){
      return "cat1";
    }else if(cat2 < cat1){
      return "cat2";
    }else{
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
