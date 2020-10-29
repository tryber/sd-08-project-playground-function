// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTriangulo = 0;
  areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
// conhecimento sobre split pesquisado
// referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  // seu código aqui
  let stringArray = string.split(' ');
  return stringArray;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = array[array.length - 1] + ", " + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = ties + (wins * 3);
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numeroMaior = array[0];
  let contador = 0;

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > numeroMaior) {
      numeroMaior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1){
    if (numeroMaior === array[index]){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let animal ={
    alvo : mouse,
    distancia1 : cat1 - mouse,
    distancia2 : cat2 - mouse
  };
  
  if (animal.distancia1 < animal.distancia2) {
    distanciaMenor = "cat1";
  } else if (animal.distancia2 < animal.distancia1) {
    distanciaMenor = "cat2";
  } else {
    distanciaMenor = "os gatos trombam e o rato foge"
  }

  return distanciaMenor;
}
console.log(catAndMouse(1,2,3));

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
