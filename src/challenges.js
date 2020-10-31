// Desafio 1
function compareTrue(a, b) {
  let result = false;
  if (a && b === true) {
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
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(arrayStr) {
  let first = arrayStr[0];
  let last = arrayStr[arrayStr.length - 1];
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNum) {
  let maxNum = Math.max(...arrayNum);
  let key;
  let count = 0;
  for (key = 0; key < arrayNum.length; key += 1) {
    if (maxNum === arrayNum[key]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;
  let result;
  if ((Math.abs(dist1)) < (Math.abs(dist2))) {
    result = 'cat1';
  } else if ((Math.abs(dist1)) > (Math.abs(dist2))) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function checkFizzBuzz(num) {
  let res
  if (num % 15 === 0) {
    res = 'fizzBuzz'
  } else if (num % 15 !== 0 && num % 3 === 0) {
    res = 'fizz'
  } else if (num % 15 !== 0 && num % 5 === 0) {
    res = 'buzz'
  }
  return res;
}

function fizzBuzz(arr) {
  let list = [];
  for (let key = 0; key < arr.length; key += 1) {
    let fb = checkFizzBuzz(arr[key]);
    switch (fb) {
      case 'fizzBuzz':
        list.push(fb);
        break;
      case 'fizz':
        list.push(fb);
        break;
      case 'buzz':
        list.push(fb);
        break;
      default:
        list.push('bug!');
    }
  }
  return list;
}

// Desafio 9
function encode(phrase) {
  let arrayChar = phrase.split('');
  let key;
  let arrayEncoded = [];
  for (key = 0; key < arrayChar.length; key += 1) {
    switch (arrayChar[key]) {
      case 'a':
        arrayEncoded.push('1');
        break;
      case 'e':
        arrayEncoded.push('2');
        break;
      case 'i':
        arrayEncoded.push('3');
        break;
      case 'o':
        arrayEncoded.push('4');
        break;
      case 'u':
        arrayEncoded.push('5');
        break;
      default:
        arrayEncoded.push(arrayChar[key]);
    }
  }
  return arrayEncoded.join('');
}

function decode(encoded) {
  let arrayCharCod = encoded.split('');
  let key;
  let arrayDecoded = [];
  for (key = 0; key < arrayCharCod.length; key += 1) {
    switch (arrayCharCod[key]) {
      case '1':
        arrayDecoded.push('a');
        break;
      case '2':
        arrayDecoded.push('e');
        break;
      case '3':
        arrayDecoded.push('i');
        break;
      case '4':
        arrayDecoded.push('o');
        break;
      case '5':
        arrayDecoded.push('u');
        break;
      default:
        arrayDecoded.push(arrayCharCod[key]);
    }
  }
  return arrayDecoded.join('');
}

// Desafio 10
function makeObject(tech, name) {
  let objTech = { tech, name };
  return objTech;
}

function techList(array, name) {
  let res;
  let list = array.sort();
  if (list.length !== 0) {
    let key;
    let newArray = [];
    for (key = 0; key < list.length; key += 1) {
      newArray.push(makeObject(list[key], name));
    }
    res = newArray;
  } else {
    res = 'Vazio!';
  }
  return res;
}

// Desafio 11
function searchCopies(arrayNum, num) {
  let key;
  let res;
  let count = 0;
  for (key = 0; key < arrayNum.length; key += 1) {
    if (arrayNum[key] === num) {
      count += 1;
    }
  }
  if (count >= 3) {
    res = 'block';
  } else {
    res = 'ok';
  }
  return res;
}

function checkNum(num) {
  let res;
  if (num < 0 || num > 9) {
    res = 'block';
  } else {
    res = 'ok';
  }
  return res;
}

function generatePhoneNumber(arrayNum) {
  let res;
  let key;
  if (arrayNum.length !== 11) {
    res = 'Array com tamanho incorreto.'
  } else {
    let listCopies = [];
    let listNumInvalid = [];
    for (key = 0; key < arrayNum.length; key += 1) {
      let num = arrayNum[key];
      listCopies.push(searchCopies(arrayNum, num));
      listNumInvalid.push(checkNum(num));
      if (listNumInvalid.includes('block') || listCopies.includes('block')) {
        res = 'não é possível gerar um número de telefone com esses valores';
      } else {
        res = `(${arrayNum[0]}${arrayNum[1]}) ${arrayNum[2]}${arrayNum[3]}${arrayNum[4]}${arrayNum[5]}${arrayNum[6]}-${arrayNum[7]}${arrayNum[8]}${arrayNum[9]}${arrayNum[10]}`;
      }
    }
  }
  return res;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let res;
  let checkA1 = Math.abs((lineB - lineC)) < lineA;
  let checkB1 = Math.abs((lineA - lineC)) < lineB;
  let checkC1 = Math.abs((lineA - lineB)) < lineC;
  let checkA2 = lineA < (lineB + lineC);
  let checkB2 = lineB < (lineA + lineC);
  let checkC2 = lineC < (lineA + lineB);
  let listRes = [checkA1, checkB1, checkC1, checkA2, checkB2, checkC2];
  if (listRes.includes(false)) {
    res = false;
  } else {
    res = true;
  }
  return res;
}

// Desafio 13
function countDrinks(str) {
  let regex = /\d+/g;
  let list = str.match(regex);
  let sum = 0;
  for (let i = 0; i < list.length; i += 1) {
    sum += parseInt(list[i], 10);
  }
  return sum;
}

function hydrate(str) {
  let res;
  let drinks = countDrinks(str);
  if (drinks === 1) {
    res = `${drinks} copo de água`
  } else {
    res = `${drinks} copos de água`
  }
  return res;
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
