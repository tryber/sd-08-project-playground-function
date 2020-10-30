// Desafio 1
function compareTrue(boolean01, boolean02) {
  // seu código aqui
  if (boolean01 && boolean02) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let first = array[0];
  let secondary = array[array.length - 1];
  return `${secondary}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointVictorias = 0;
  let pointDraw = 0;
  pointVictorias = wins * 3;
  pointDraw = ties * 1;
  return pointVictorias + pointDraw;
}

// Desafio 6
function highestCount(arrayNum) {
  let maxNum = 0;
  let countRepet = 0;
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (maxNum < arrayNum[i]) maxNum = arrayNum[i];
  }
  for (let x = 0; x < arrayNum.length; x += 1) {
    if (maxNum === arrayNum[x]) countRepet += 1;
  }
  return countRepet;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = mouse - cat1;
  let cat2Position = mouse - cat2;
  if ((cat1Position ** 2) < (cat2Position ** 2)) {
    return 'cat1';
  } else if ((cat1Position ** 2) > (cat2Position ** 2)) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arr = [];
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
      arr.push('fizzBuzz');
    } else if (arrayNum[index] % 3 === 0) {
      arr.push('fizz');
    } else if (arrayNum[index] % 5 === 0) {
      arr.push('buzz');
    } else {
      arr.push('bug!');
    }
  }
  return arr;
}

// Desafio 9
function encode(str) {
  let encodeStr = str.split('');
  for (let i = 0; i < encodeStr.length; i += 1) {
    switch (encodeStr[i]) {
      case 'a':
        encodeStr[i] = '1';
        break;
      case 'e':
        encodeStr[i] = '2';
        break;
      case 'i':
        encodeStr[i] = '3';
        break;
      case 'o':
        encodeStr[i] = '4';
        break;
      case 'u':
        encodeStr[i] = '5';
        break;
      default:
        break;
    }
  }
  return encodeStr.join('');
}

function decode(str) {
  let decodeStr = str.split('');
  for (let i = 0; i < decodeStr.length; i += 1) {
    switch (decodeStr[i]) {
      case '1':
        decodeStr[i] = 'a';
        break;
      case '2':
        decodeStr[i] = 'e';
        break;
      case '3':
        decodeStr[i] = 'i';
        break;
      case '4':
        decodeStr[i] = 'o';
        break;
      case '5':
        decodeStr[i] = 'u';
        break;
      default:
        break;
    }
  }
  let arrStr = decodeStr.join('');
  return arrStr;
}

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }
  let str = [];
  tech = tech.sort();
  for (let i = 0; i < tech.length; i += 1) {
    str[i] = {
      tech: tech[i],
      nome: name,
    };
  }
  return str;
}

console.log(techList([], 'Lucas'));

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
