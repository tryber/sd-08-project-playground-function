// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
// Estudei mais sobre .split no site https://www.w3schools.com/
function splitSentence(frase) {
  return frase.split(" ");
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  return pointsWins + pointsTies;
}

// Desafio 6
// Estudei mais sobre contador no site https://pt.stackoverflow.com/
function highestCount(arraydeNumero) {
  let maiorNumero = 0;
  let contador = 0;
  for (let index = 0; index < arraydeNumero.length; index += 1) {
    if (arraydeNumero[index] > maiorNumero){
      maiorNumero = arraydeNumero[index];
      contador = 0;
    }
    if(arraydeNumero[index] === maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);
  if (distanciaCat1 < distanciaCat2) {
    return "cat1";
  } else if (distanciaCat2 < distanciaCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arraydeNumero) {
  for (let index = 0; index < arraydeNumero.length; index += 1){
    let retornoArray = [];
    if (arraydeNumero[index] % 3 == 0) {
      return retornoArray.push ("fizz");
    } else if (arraydeNumero[index] % 5 == 0) {
      return retornoArray.push ("buzz");
    } else if (arraydeNumero[index] % 3 == 0 && arraydeNumero[index] % 5 == 0) {
      return retornoArray.push ("fizzbuzz");
    } else {
      return retornoArray.push("bug!");
    }
  }
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
