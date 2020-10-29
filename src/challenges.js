// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let dividido = [];
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === " ") {
      dividido.push(string)
    }
  }
  return dividido;
}
// console.log(splitSentence("go Trybe"))

// Desafio 4
function concatName(nomes) {
  return nomes[nomes.length -1] + ", " + nomes[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let pontos = wins + ties;
  return pontos;
}

// Desafio 6
function highestCount(numeros) {
  let repete = 0;
  let maiorNumero = 0;
  for (i in numeros) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }
  for (j in numeros) {
    if (maiorNumero == numeros[j]) {
      repete += 1;
    }
  }
  return repete;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7,]))

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
  let valores = [];
  for(let index in numeros){
    if(numeros[index] % 3 == 0 && numeros[index] % 5 == 0){
      valores.push('fizzBuzz');
    } else if (numeros[index] % 3 == 0){
      valores.push('fizz');
    } else if(numeros[index] % 5 == 0){
      valores.push('buzz')
    } else {
      valores.push('bug!')
    }
  }
  return valores;
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
