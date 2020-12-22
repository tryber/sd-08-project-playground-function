// Desafio 1
const compareTrue = (bool1, bool2) => {return bool1 && bool2};

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = stringToSplit => stringToSplit.split(' ');

// Desafio 4
const concatName = stringArray => `${stringArray[stringArray.length -1]}, ${stringArray[0]}`;

// Desafio 5
const footballPoints = (wins, ties) =>  (wins * 3) + ties;

// Desafio 6
const highestCount = (arrayNumber) =>
  arrayNumber.filter((element) =>
    element == arrayNumber.reduce((acc, curr) => (acc < curr ? (acc = curr) : acc))
  ).length;
    
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
function encode(stringToChange) {
  let encodedString = '';
  for (index in stringToChange) {
    if (stringToChange[index] === 'a') {
      encodedString += '1';
    } else if (stringToChange[index] === 'e') {
      encodedString += '2';
    } else if (stringToChange[index] === 'i') {
      encodedString += '3';
    } else if (stringToChange[index] === 'o') {
      encodedString += '4';
    } else if (stringToChange[index] === 'u') {
      encodedString += '5';
    } else {
      encodedString += stringToChange[index]
    }
  }
  return encodedString
}
function decode(stringToDecode) {
  let decodedString = '';
  for (index in stringToDecode) {
    if (stringToDecode[index] === '1') {
      decodedString += 'a';
    } else if (stringToDecode[index] === '2') {
      decodedString += 'e';
    } else if (stringToDecode[index] === '3') {
      decodedString += 'i';
    } else if (stringToDecode[index] === '4') {
      decodedString += 'o';
    } else if (stringToDecode[index] === '5') {
      decodedString += 'u';
    } else {
      decodedString += stringToDecode[index]
    }
  }
  return decodedString
}

// Desafio 10
const techList = (tech, name) =>
  tech == undefined ? "Vazio!"
    : tech.sort().map((element) => ({ tech: element, name }));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if((lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) &&
    (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) &&
    (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineC))) {
      isTriangle = true
    }
  return isTriangle
}

// Desafio 13
function hydrate(str) {
  let soNumero = str.replace(/\D/gim, '').split("")
  let strToNam = 0;
  for (let i = 0; i < soNumero.length; i += 1 ) {
    strToNam += parseInt(soNumero[i], 10)
  }
  if (strToNam === 1) {
    return `${strToNam} copo de água`
  }
  return `${strToNam} copos de água`;
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
