// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let spliWord = stringToSplit;
  return spliWord.split(' ')
}

// Desafio 4
function concatName(stringArray) {
  let invertedString = `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
  return invertedString
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  points += (wins * 3) + ties;
  return points
}

// Desafio 6
function highestCount(arrayNumber) {
  let highestNumber = [0];
  let numberOfRepeat = 0;
for (let j = 0; j < arrayNumber.length; j += 1) { 
  for (let i = 0; i < arrayNumber.length; i += 1) {
    if (arrayNumber[i] > highestNumber) {
      highestNumber = arrayNumber[i];
    }
  }  
    if (arrayNumber[j] === highestNumber) {
      numberOfRepeat += 1;
    }
  }
  return numberOfRepeat
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catCloser = '';
    let distanciaGato1 = cat1 - mouse;
    let distanciaGato2 = cat2 - mouse;

    if (distanciaGato1 < 0) {
      distanciaGato1 = distanciaGato1 * (-1)
    }
    if (distanciaGato2 < 0) {
       distanciaGato2 = distanciaGato2 * (-1)
    }

    if (distanciaGato1 < distanciaGato2) {
        catCloser = 'cat1';
    } else if (distanciaGato1 > distanciaGato2) {
        catCloser = 'cat2';
    } else {
        catCloser = 'os gatos trombam e o rato foge';
    }
    return catCloser
}

// Desafio 8
function fizzBuzz(arrayNumber) {

  let newArray = [];
  for (let i = 0; i < arrayNumber.length; i += 1) {

    if (arrayNumber[i] % 3 === 0 && arrayNumber[i] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (arrayNumber[i] % 3 === 0) {
      newArray.push('fizz');
    } else if (arrayNumber[i] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray
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
