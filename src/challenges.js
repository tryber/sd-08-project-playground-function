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
