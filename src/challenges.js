//Maaaaaaravilhosooooo
// Desafio 1
function compareTrue(val1, val2) {
  let result = false;
  if ((val1===true) && (val2===true)){
      result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height){
  return (base*height)/2;
}

// Desafio 3
function splitSentence(string){
  let index = 0;
  let array = [];
  for (let i = 0; i < string.length; i += 1){    
    if (string[i]!==" "){
      array[index] = '';
    } else {
      index += 1;
    }
  }
  index = 0;
  for (let i = 0; i < string.length; i += 1){    
    if (string[i]!==" "){
        array[index] += string[i];
    } else {
        index += 1;
    }
  }
  return array;
}

// Desafio 4
function concatName(array){
  return array[array.length-1]+', '+array[0];
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
