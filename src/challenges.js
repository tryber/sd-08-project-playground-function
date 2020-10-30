// Desafio 1
function compareTrue(pA, pB) {
  if (pA === true && pB === true) {
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
  let sentence = string;
  return sentence.split(' ');
}

// Desafio 4
function concatName(fullName) {
  let firstName = fullName[0];
  let lastName = fullName[fullName.length - 1];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arr) {
  let numberOfReptitions = 0;
  let biggestValue = Math.max(...arr);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === biggestValue) {
      numberOfReptitions += 1;
    }
  }
  return numberOfReptitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let dist1 = Math.abs(distCat1);
  let distCat2 = cat2 - mouse;
  let dist2 = Math.abs(distCat2);

  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge'
  }
  if (dist1 < dist2) {
    return 'cat1'
  }
  return 'cat2'
}

// Desafio 8
function fizzBuzz(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i] % 3 === 0) && (arr[i] % 5 !== 0)) {
      newArray.push('fizz');
    } else if ((arr[i] % 3 !== 0) && (arr[i] % 5 === 0)) {
      newArray.push('buzz');
    } else if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let newString = '';
  let encodeString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == 'a') {
      newString[i] == 1;
    }
    if (string[i] == 'e') {
      newString[i] == 2;
    }
    if (string[i] == 'i') {
      newString[i] == 3;
    }
    if (string[i] == 'o') {
      newString[i] == 4;
    }
    if (string[i] == 'u') {
      newString[i] == 5;
    } else {
      newString[i] == string[i];
    }
    encodeString += newString[i];
  }
  return encodeString;
}

function decode() {
  let newString = '';
  let decodeString = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] == 1) {
      newString[i] == 'a';
    }
    if (string[i] == 2) {
      newString[i] == 'e';
    }
    if (string[i] == 3) {
      newString[i] == 'i';
    }
    if (string[i] == 4) {
      newString[i] == 'o';
    }
    if (string[i] == 5) {
      newString[i] == 'u';
    } else {
      newString[i] == string[i];
    }
    decodeString += newString[i];
  }
  return newString;
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
