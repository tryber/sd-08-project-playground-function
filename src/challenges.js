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
  let name = last + ', ' + first;
  return name;
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
function fizz(Num) {
  if ((Num % 3) === 0) {
    return true;
  }
}
function buzz(Num) {
  if ((Num % 5) === 0) {
    return true;
  }
}
function fizzBuzz(arrayNum) {
  let result = [];
  let key;
  for (key = 0; key < arrayNum.length; key += 1) {
    if (fizz(arrayNum[key]) && buzz(arrayNum[key])) {
      result.push('fizzBuzz');
    } else if (fizz(arrayNum[key]) && !buzz(arrayNum[key])) {
      result.push('fizz');
    } else if (!fizz(arrayNum[key]) && buzz(arrayNum[key])) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}
// console.log(fizzBuzz([3, 1, 5, 10, 12, 14, 15, 19, 20]))

// Desafio 9
function encode() {
  // NADA
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
