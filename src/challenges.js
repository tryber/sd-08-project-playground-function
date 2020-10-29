// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let arraySize = array.length - 1;
  let result = `${array[arraySize]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = wins * 3 + ties * 1;
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let count = 0;
  let highest = Math.max.apply(null, array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      result[i] = 'fizzBuzz';
    } else if (array[i] % 3 == 0) {
      result[i] = 'fizz';
    } else if (array[i] % 5 == 0) {
      result[i] = 'buzz';
    } else {
      result[i] = 'bug!';
    }
  }
  return result;
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
};
