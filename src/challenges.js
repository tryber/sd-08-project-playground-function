// Guilherme Ribeiro
// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  if (a && b == true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let string = "";
  let array = [];

  for (i=0 ; i<frase.length ; i+=1) {
    if (frase[i] === " ") {
      array.push(string);
      string = "";
    } else {
      string = string + frase[i];
    }
  }

  array.push(string);

  return array;
}

// Desafio 4
function concatName(name) {
  // seu código aqui
  let string = '';
  
  string = string + name[name.length-1] + ', ' + name[0];

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins*3+ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let maior = arrayNumbers[0];
  let cont = 0;

  for (i=0;i<arrayNumbers.length;i+=1) {
    if (arrayNumbers[i] > maior) {
      maior = arrayNumbers[i];
      cont = 1;
    } else if (arrayNumbers[i] == maior) {
      cont = cont + 1;
    }
  }

  return cont;
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
