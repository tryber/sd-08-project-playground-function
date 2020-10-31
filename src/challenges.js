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
// console.log (compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(10, 0))

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
// console.log(splitSentence('Rodrigo de Castro'))

// Desafio 4
function concatName(arrayStr) {
  let first = arrayStr[0];
  let last = arrayStr[arrayStr.length - 1];
  return `${last}, ${first}`;
}
// console.log(concatName(['Rodrigo', 'de Castro', 'Bandeira', 'Costa']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// console.log(footballPoints(3, 1));

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
// console.log(highestCount([0, 1, 8, 3, 4, 8, 5, 6, 8, 8, 7, 8, 5, 2, 3]));

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
// console.log(catAndMouse(0, 2, 2));

// Desafio 8
function checkBug(listFizz) {
  let index;
  let listBug = [];
  for (index = 0; index < listFizz.length; index += 1) {
    if ((typeof (listFizz[index])) === 'number') {
      listBug.push('bug!');
    } else {
      listBug.push(listFizz[index]);
    }
  }
  return listBug;
}

function checkFizz(listBuzz) {
  let index;
  let listFizz = [];
  for (index = 0; index < listBuzz.length; index += 1) {
    switch ((listBuzz[index] % 3)) {
      case 0:
        listFizz.push('fizz');
        break;
      default:
        listFizz.push(listBuzz[index]);
    }
  }
  return listFizz;
}

function checkBuzz(listFizzBuzz) {
  let index;
  let listBuzz = [];
  for (index = 0; index < listFizzBuzz.length; index += 1) {
    switch ((listFizzBuzz[index] % 5)) {
      case 0:
        listBuzz.push('buzz');
        break;
      default:
        listBuzz.push(listFizzBuzz[index]);
    }
  }
  return listBuzz;
}

function checkFizzBuzz(arrayNum) {
  let index;
  let listFizzBuzz = [];
  for (index = 0; index < arrayNum.length; index += 1) {
    switch ((arrayNum[index] % 15)) {
      case 0:
        listFizzBuzz.push('fizzBuzz');
        break;
      default:
        listFizzBuzz.push(arrayNum[index]);
    }
  }
  return listFizzBuzz;
}

function fizzBuzz(arrayNum) {
  let listFizzBuzz;
  let listBuzz;
  let listFizz;
  let listBug;
  listFizzBuzz = checkFizzBuzz(arrayNum);
  listBuzz = checkBuzz(listFizzBuzz);
  listFizz = checkFizz(listBuzz);
  listBug = checkBug(listFizz);
  return listBug;
}

// console.log(fizzBuzz([3, 1, 5, 10, 12, 14, 15, 19, 20]))

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
// console.log(encode("observe que essa mensagem ficou oculta"));

function decode(encoded) {
  // return translater(phrase);
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
// console.log(decode('4bs2rv2 q52 2ss1 m2ns1g2m n14 f3c45 4c5lt1 12345'));

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
// console.log(techList([5, 3, 11, 15, 2, 7, 9], 'Digo'))

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
// console.log(generatePhoneNumber([7, 7, 8, 8, 1, 2, 3, 4, 1, 6, 1, 2]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let res;
  let a = lineA;
  let b = lineB;
  let c = lineC;
  let bc = b - c;
  let ac = a - c;
  let ab = a - b;
  let checkA1 = Math.abs(bc) < a;
  let checkB1 = Math.abs(ac) < b;
  let checkC1 = Math.abs(ab) < c;
  let checkA2 = a < (b + c);
  let checkB2 = b < (a + c);
  let checkC2 = c < (a + b);
  let listRes = [checkA1, checkB1, checkC1, checkA2, checkB2, checkC2];
  if (listRes.includes(false)) {
    res = false;
  } else {
    res = true;
  }
  return res;
}
// console.log(triangleCheck(10, 14, 8))

// Desafio 13
function countDrinks(str) {
  let arrayChar = str.split('');
  let count = 0;
  for (let index = 0; index < arrayChar.length; index += 1) {
    switch (arrayChar[index]) {
      case '1':
        count += 1;
        break;
      case '2':
        count += 2;
        break;
      case '3':
        count += 3;
        break;
      case '4':
        count += 4;
        break;
      case '5':
        count += 5;
        break;
      case '6':
        count += 6;
        break;
      case '7':
        count += 7;
        break;
      case '8':
        count += 8;
        break;
      case '9':
        count += 9;
        break;
      default:
        count += 0;
    }
  }
  return count;
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
// console.log(hydrate('1 copo de vinho'))


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
