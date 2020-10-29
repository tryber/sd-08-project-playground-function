// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(names) {
  const last = names.length - 1;
  return `${names[last]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let counter = {};

  for (let i = 0; i < numbers.length; i++) {
    let cur = numbers[i];
    if (!counter[cur]) {
      counter[cur] = 1;
    } else {
      counter[cur] += 1;
    }
  }

  let highest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
 
  return counter[highest];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let distCat2 = cat2 - mouse;

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1 ) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let cur = numbers[i];
    let str = '';

    if (cur % 3 == 0) {
      str += 'fizz';
    }

    if (cur % 5 == 0) {
      str += 'buzz'
    };

    if (str === 'fizzbuzz') {
      str = 'fizzBuzz';
    }

    if (str === '') {
      str = 'bug!';
    }

    result.push(str);
  }
  return result;
}

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
