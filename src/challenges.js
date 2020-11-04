// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let palavras = [];
  let palavra = '';
  for (let index = 0; index <= frase.length; index += 1) {
    if (frase[index] === ' ') {
      palavras.push(palavra);
      palavra = '';
    } else if (index === frase.length - 1) {
      palavra += frase[index];
      palavras.push(palavra);
    } else {
      palavra += frase[index];
    }
  }
  return palavras;
}

// Desafio 4
function concatName(stringArray) {
  let primeiro = stringArray[0];
  let ultimo = stringArray[stringArray.length - 1];
  let result = `${ultimo}, ${primeiro}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(numberArray) {
  let maior = 0;
  let count = 0;
  for (let index = 0; index <= numberArray.length; index += 1) {
    if (numberArray[index] > maior) {
      maior = numberArray[index];
      count = 1;
    } else if (numberArray[index] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1dist = mouse - cat1;
  if (cat1dist < 0) {
    cat1dist *= -1;
  }
  let cat2dist = mouse - cat2;
  if (cat2dist < 0) {
    cat2dist *= -1;
  }
  let result;
  if (cat1dist < cat2dist) {
    result = 'cat1';
  } else if (cat2dist < cat1dist) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(numberArray) {
  let resultArray = [];
  for (let index = 0; index <= numberArray.length - 1; index += 1) {
    if (numberArray[index] % 3 === 0 && numberArray[index] % 5 === 0) {
      resultArray[index] = 'fizzBuzz';
    } else if (numberArray[index] % 5 === 0) {
      resultArray[index] = 'buzz';
    } else if (numberArray[index] % 3 === 0) {
      resultArray[index] = 'fizz';
    } else {
      resultArray[index] = 'bug!';
    }
  }
  return resultArray;
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
