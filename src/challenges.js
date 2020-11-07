// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) return true;
  return false;
}
console.log(compareTrue(4, 3));
// Desafio 2
function calcArea(base, height) {
let result = (base * height) / 2
return result;
}
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName() {
  let string = [];
  for(let index = 0; index < concatName.length; index += 1){

  }
}
concatName('robson', 'batista', 'widnef');
console.log(strings);

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount(numeros) {
  return repeat(numeros, maiorNumeroArray(numeros));
}
  console.log(highestCount([1, 2, 3, 9, 5, 7]));

  function maiorNumeroArray(array){
    let maiorNumero = 0;
    for(let index in array){
      if(array[index] > maiorNumero){
        maiorNumero = array[index];
      }
    }
    return maiorNumero;
  }
  console.log(maiorNumeroArray([9, 1, 2, 3, 9, 5, 7]));

  function repeat(array, number){
    let numeroRepete = 0;
    for(let index in array){
      if(array[index] == number){
        numeroRepete += 1
      }
    }
    return numeroRepete;
  }
  console.log(repeat([9, 1, 2, 3, 9, 5, 7], 9));


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
};
