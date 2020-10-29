// Desafio 1
function compareTrue(x, y) {
  let result;
  if (x === true && y === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(string) {
  return string[string.length - 1] + ', ' + string[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let contRepeticao = 0;
  let maiorNumero = numeros[0];
  for (let i in numeros) {
    if (maiorNumero < numeros[i]) {
      maiorNumero = numeros[i];
      contRepeticao = 0;
    }
    if (maiorNumero === numeros[i]) {
      contRepeticao += 1
    }
  }
  return contRepeticao;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let result;
  if (Math.abs(cat1 - mouse) < (Math.abs(cat2 - mouse))) {
    result = 'cat1'
  } else if (Math.abs(cat1 - mouse) > (Math.abs(cat2 - mouse))) {
    result = 'cat2'
  } else {
    result = 'os gatos trombam e o rato foge'
  }
  return result;
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
