// Desafio 1
function compareTrue(a, b) {
  if ( a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(2, 4));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
console.log(calcArea(10, 8));

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(names) {
  return `${names[names.length - 1]}, ${names[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
console.log(footballPoints(5, 3));

// Desafio 6
function highestCount(array) {
  let biggerNumber = 0;
  let repeatedNumber = 0;
  for (let index in array) {
    if (array[index] > biggerNumber) {
      biggerNumber = array[index];
    }
  }
  for (let index2 in array) {
    if (biggerNumber === array[index2]) {
      repeatedNumber += 1;
    }
  }
  return repeatedNumber;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let case1 = Math.abs(cat1 - mouse);
  let case2 = Math.abs(cat2 - mouse);
  if (case1 < case2) {
    return 'cat1';
  } else if (case2 < case1) {
    return 'cat2';
  } else if (case1 == case2) {
    return 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(1, 3, 5));

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index in array) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (array[index] % 3 == 0) {
        arrayFizzBuzz.push('fizz');
      } else if (array[index] % 5 == 0 && array[index] % 5 == 0) {
        arrayFizzBuzz.push('buzz');
      } else {
        arrayFizzBuzz.push('bug!');
      }    
  }
  return arrayFizzBuzz;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
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
