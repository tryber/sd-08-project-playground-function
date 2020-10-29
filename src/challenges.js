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
function catAndMouse(mouse, cat1, cat2) {
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
function fizzBuzz(numeros) {
  let result = [];
  for (let i in numeros) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      result.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(frase) {
  frase.split = '';
  let result = '';
  for (let i in frase) {
    if (frase[i] === 'a') {
      result += 1;
    } else if (frase[i] === 'e') {
      result += 2;
    } else if (frase[i] === 'i') {
      result += 3;
    } else if (frase[i] === 'o') {
      result += 4;
    } else if (frase[i] === 'u') {
      result += 5;
    } else {
    result += frase[i];
    }
  }
  return result
}

function decode(frase) {
  frase.split = '';
  let result = '';
  for (let i in frase) {
    if (frase[i] === '1') {
      result += 'a';
    } else if (frase[i] === '2') {
      result += 'e';
    } else if (frase[i] === '3') {
      result += 'i';
    } else if (frase[i] === '4') {
      result += 'o';
    } else if (frase[i] === '5') {
      result += 'u';
    } else {
    result += frase[i];
    }
  }
  return result
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
