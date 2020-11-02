// Desafio 1
function compareTrue(boolean01, boolean02) {
  if (boolean01 && boolean02) return true;
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

function numberHighest(arrayNum) {
  let maxNum = 0;
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (maxNum < arrayNum[i]) maxNum = arrayNum[i];
  }
  return maxNum;
}

function repeatedNum(arrayNum, number) {
  let countRepet = 0;
  for (let index = 0; index < arrayNum.length; index += 1) {
    if (number === arrayNum[index]) countRepet += 1;
  }
  return countRepet;
}

// Desafio 6
function highestCount(arrayNum) {
  return repeatedNum(arrayNum, numberHighest(arrayNum));
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = mouse - cat1;
  let cat2Position = mouse - cat2;
  if (cat1Position ** 2 < cat2Position ** 2) {
    return ('cat1');
  } else if (cat1Position ** 2 > cat2Position ** 2) {
    return ('cat2');
  }
  return ('os gatos trombam e o rato foge');
}

function isFizzBuzz(arrayNum, index) {
  if (arrayNum[index] % 3 === 0 && arrayNum[index] % 5 === 0) {
    return ('fizzBuzz');
  } else if (arrayNum[index] % 3 === 0) {
    return ('fizz');
  } else if (arrayNum[index] % 5 === 0) {
    return ('buzz');
  }
  return ('bug!');
}

// Desafio 8
function fizzBuzz(arrayNum) {
  let arr = [];
  for (let index = 0; index < arrayNum.length; index += 1) {
    arr.push(isFizzBuzz(arrayNum, index));
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
  for (let count = 0; count < str.length; count += 1) {
    str = str.replace('1', 'a');
    str = str.replace('2', 'e');
    str = str.replace('3', 'i');
    str = str.replace('4', 'o');
    str = str.replace('5', 'u');
  }
  return str;
}

// Desafio 10
function techList(tech, name) {
  let sortedArray = tech.sort();
  let listEnd = [];
  for (let i = 0; i < tech.length; i += 1) {
    listEnd.push({ tech: `${sortedArray[i]}`, name: `${name}` });
  }
  if (listEnd.length === 0) {
    return ('Vazio!');
  }
  return listEnd;
}

// Desafio 11
function verifyCounterRepeatedNumber(numbers) {
  let object = {};
  let repeatedNumber = 0;
  numbers.forEach((element) => {
    if (!object[element]) {
      object[element] = 0;
    }
    object[element] += 1;
  });
  for (let count in object) {
    if (object[count] > 2) {
      repeatedNumber = object[count];
    }
  }
  return repeatedNumber;
}

function generateCompletePhoneNumber(numbers) {
  let phoneNumber = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    phoneNumber = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  }
  return phoneNumber;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  let counterRepeatedNumber = verifyCounterRepeatedNumber(numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9 || counterRepeatedNumber > 2) {
      return ('não é possível gerar um número de telefone com esses valores');
    }
  }
  return generateCompletePhoneNumber(numbers);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    return true;
  }
  return false;
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
