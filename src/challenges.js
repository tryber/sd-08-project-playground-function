// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  return firstBoolean && secondBoolean === true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return (string = string.split(' '));
}

// Desafio 4
function concatName(array) {
  let firstString = array[0];
  let lastString = array[array.length - 1];

  return `${lastString}, ${firstString}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;

  let points = wins + ties;

  return points;
}

// Desafio 6
function highestCount(array) {
  let number = -Infinity;
  let counter = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > number) {
      number = array[i];
    }
  }

  for (let j = 0; j < array.length; j += 1) {
    if (number === array[j]) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceMouseCat1 = mouse - cat1;
  let distanceMouseCat2 = mouse - cat2;

  if (distanceMouseCat1 < 0) {
    distanceMouseCat1 *= -1;
  }

  if (distanceMouseCat2 < 0) {
    distanceMouseCat2 *= -1;
  }

  if (distanceMouseCat1 > distanceMouseCat2) {
    return 'cat2';
  } else if (distanceMouseCat2 > distanceMouseCat1) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let strings = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      strings.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      strings.push('fizz');
    } else if (array[i] % 5 === 0) {
      strings.push('buzz');
    } else {
      strings.push('bug!');
    }
  }

  return strings;
}

// Desafio 9
function encode(string) {
  let encoded = '';

  let vogals = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }

  for (let i of string) {
    if (vogals[i] === undefined) {
      encoded += i;
    } else {
      encoded += vogals[i];
    }
  }

  return encoded;
}

function decode(string) {
  let decoded = '';

  let numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }

  for (let i of string) {
    if (numbers[i] === undefined) {
      decoded += i;
    } else {
      decoded += numbers[i];
    }
  }

  return decoded;
}

// Desafio 10
function techList(array, name) {
  let techs = [];

  array = array.sort();

  for (i in array) {
    techs.push({ tech: array[i], name });
  }

  return techs;
}

// Desafio 11
function generatePhoneNumber() {}

// Desafio 12
function triangleCheck() {}

// Desafio 13
function hydrate() {}

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
