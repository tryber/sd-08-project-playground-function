// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }
  else {
    return false;
  }
}
// console.log (compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(10, 0))

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}
// console.log(splitSentence("Rodrigo de Castro"))

// Desafio 4
function concatName(arrayStr) {
  let first = arrayStr[0];
  let last = arrayStr[arrayStr.length - 1];
  return last + ', ' + first;
}
// console.log(concatName(['Rodrigo', 'de Castro', 'Bandeira', 'Costa']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// console.log(footballPoints(3, 1));

// Desafio 6
function highestCount(arrayNum) {
  let count = 0, max = 0;
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] > max) {
      max = arrayNum[i];
    }
  }
  for (let i = 0; i < arrayNum.length; i += 1) {
    if (arrayNum[i] === max) {
      count += 1;
    }
  }
  return count;
}
// console.log(highestCount([0, 1, 8, 3, 4, 8, 5, 6, 7, 8, 5, 2, 3]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = mouse - cat1;
  let dist2 = mouse - cat2;
  if ((Math.abs(dist1) < (Math.abs(dist2)))) {
    return 'cat1';
  }
  else if ((Math.abs(dist1) > (Math.abs(dist2)))) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge';
  }
}
// console.log(catAndMouse(0, 2, 2));

// Desafio 8
function fizzBuzz(arrayNums) {
  let res = [];
  for (key in arrayNums) {
    if (((arrayNums[key] % 3) === 0) && ((arrayNums[key] % 5) != 0)) {
      res.push('fizz');
    }
    else if (((arrayNums[key] % 5) === 0) && ((arrayNums[key] % 3) != 0)) {
      res.push('buzz');
    }
    else if (((arrayNums[key] % 3) === 0) && ((arrayNums[key] % 5) === 0)) {
      res.push('fizzBuzz');
    }
    else {
      res.push('bug!');
    }
  }
  return res;
}
// console.log(fizzBuzz([3, 1, 5, 10, 12, 14, 15, 19, 20]))

// Desafio 9
function encode(str) {
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
