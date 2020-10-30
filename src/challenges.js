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
  for (key in arrayNum) {
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
function checkFizz(Num) {
  let check;
  if ((Num % 3) === 0) {
    check = true;
  }
  return check;
}
function checkBuzz(Num) {
  let check;
  if ((Num % 5) === 0) {
    check = true;
  }
  return check;
}
function fizzBuzz(arrayNum) {
  let result = [];
  let key;
  for (key in arrayNum) {
    if (checkFizz(arrayNum[key]) && checkBuzz(arrayNum[key])) {
      result.push('fizzBuzz');
    } else if (checkFizz(arrayNum[key]) && !checkBuzz(arrayNum[key])) {
      result.push('fizz');
    } else if (!checkFizz(arrayNum[key]) && checkBuzz(arrayNum[key])) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
// console.log(fizzBuzz([3, 1, 5, 10, 12, 14, 15, 19, 20]))

// Desafio 9
function funcArray1(array) {
  let key;
  let array1 = [];
  for (key in array) {
    if (array[key] === 'a') {
      array1.push('1');
    } else if (array[key] === '1') {
      array1.push('a');
    } else {
      array1.push(array[key]);
    }
  }
  return array1;
}

function funcArray2(array) {
  let key;
  let array2 = [];
  for (key in array) {
    if (array[key] === 'e') {
      array2.push('2');
    } else if (array[key] === '2') {
      array2.push('e');
    } else {
      array2.push(array[key]);
    }
  }
  return array2;
}

function funcArray3(array) {
  let key;
  let array3 = [];
  for (key in array) {
    if (array[key] === 'i') {
      array3.push('3');
    } else if (array[key] === '3') {
      array3.push('i');
    } else {
      array3.push(array[key]);
    }
  }
  return array3;
}

function funcArray4(array) {
  let key;
  let array4 = [];
  for (key in array) {
    if (array[key] === 'o') {
      array4.push('4');
    } else if (array[key] === '4') {
      array4.push('o');
    } else {
      array4.push(array[key]);
    }
  }
  return array4;
}

function funcArray5(array) {
  let key;
  let array5 = [];
  for (key in array) {
    if (array[key] === 'u') {
      array5.push('5');
    } else if (array[key] === '5') {
      array5.push('u');
    } else {
      array5.push(array[key]);
    }
  }
  return array5;
}

function translater(phrase) {
  let arrayChar = phrase.split('');
  let array1 = funcArray1(arrayChar);
  let array2 = funcArray2(array1);
  let array3 = funcArray3(array2);
  let array4 = funcArray4(array3);
  let array5 = funcArray5(array4);
  let newPhrase = array5.join('');
  return newPhrase;
}

function encode(phrase) {
  return translater(phrase);
}
// console.log(encode("observe que essa mensagem ficou oculta"));

function decode(phrase) {
  return translater(phrase);
}
// console.log(decode('4bs2rv2 q52 2ss1 m2ns1g2m n14 f3c45 4c5lt1 12345'));

// Desafio 10
function makeObject(tech, name) {
  let objTech = new Object();
  objTech.tech = tech;
  objTech.name = name;
  return objTech;
}

function techList(array, name) {
  if (array.length !== 0) {
    let key;
    let newArray = [];
    for (key in array) {
    newArray.push(makeObject(array[key], name));
    }
    return newArray;
  } else {  
    return "Vazio!";
  }
}
// console.log(techList([], 'Digo'))

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
