// Desafio 1

function compareTrue (valor1, valor2) {
  if (valor1 && valor2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2

function calcArea (base, height) {
  let area = base * height / 2;
  return area;  
}

// Desafio 3

function splitSentence (literal) {
  let split = literal.split(" ");
  return split;
}

// Desafio 4
function concatName(array) {
  let string;
  for (i in array){
      if(i == array.length - 1){
          string = array[i];
      }
  }
  if(array[0]){
      string += ", " + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints (wins, ties) {
  let pontos = 0;
  for(i = 0; i < wins; i++) {
      pontos = wins * 3;
  }
  for(i = 0; i < ties; i++) {
      pontos += 1;
  }
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let numero, maiorNumero;
  let cont = 0;
  for (let i = 0; i < array.length; i++){
    numero = array[i];
    for(let j = 1; j < array.length; j++){
      if(numero < array[j]){
        maiorNumero = array[j];
      }
    }
  }
  for(let k = 0; k < array.length; k++){
    if(maiorNumero === array[k]){
      cont++;
    }
  }
  return cont;
}
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2){
    return "cat1";
  } else {
    return "cat2";
  }
}

//console.log(catAndMouse(5, 2, 3)); 

// Desafio 8
function fizzBuzz(array) {
  let a = [];
  
  for (let i = 0; i < array.length; i++){
    if(array[i] % 3 == 0){
      if(array[i] % 5 == 0){
        a[i] = "fizzBuzz";
      } else {
        a[i] = "fizz";
      }
    } else if (array[i] % 5 == 0) {
      a[i] = "buzz";
    }  else {
      a[i] = "bug";
    }
  }
  return a;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
