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
    return ('cat1');
  } else if ((cat1Position ** 2) > (cat2Position ** 2)) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
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
  let sortList = tech.sort();
  let newTech = [];
  for (i = 0; i < sortList.length; i += 1) {
    let tech = sortList[i];
    newTech.push ({tech, name,});
  }
  if (newTech.length === 0) {
    return 'Vazio!';
  }
  return newTech;
}

// Desafio 11
function generatePhoneNumber(arr) {
  let phoneNumber = '';
  if (phoneArray.length !== 11) {
    return "Array com tamanho incorreto."
  }
  for (index in phoneArray){
    let repeatcounter = 0;
    for (indexTwo in phoneArray) {
      if (phoneArray[index] === phoneArray[indexTwo]) {
        repeatcounter += 1;
      }
      if (repeatcounter >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  for (let index = 0; index < phoneArray.length; index += 1) {
    if (phoneArray[index] < 0 || phoneArray[index] > 9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  for (index in phoneArray){
    phoneNumber = '(' + phoneArray.slice(0,2) + ')' + ' ' + phoneArray.slice(2,7) + '-' + phoneArray.slice(7,11);
    break;
  }
  return phoneNumber.replace(/,/g, '');
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  }
  else if (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 13
function hydrate(alcoolDrink) {
  let resultNumbers = alcoolDrink.match(/\d/g);
  let sum = 0;
  for (let index = 0; index < resultNumbers.length; index += 1) {
    sum += Number(resultNumbers[index]);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
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
