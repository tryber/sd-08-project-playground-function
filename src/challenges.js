// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let biggest = array[0];
  let repeat = 0;
  for (let number of array) {
    if (number > biggest) {
      biggest = number;
    }
  }
  for (let index of array) {
    if (biggest === index) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCats = Math.abs(cat1 - mouse) - Math.abs(cat2 - mouse);
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  if (distCats === 0) {
    return 'os gatos trombam e o rato foge';
  }
  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArr = [];
  for (let index in array) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      fizzBuzzArr[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      fizzBuzzArr[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      fizzBuzzArr[index] = 'buzz';
    } else {
      fizzBuzzArr[index] = 'bug!';
    }
  }
  return fizzBuzzArr;
}

// Desafio 9
function encode(string) {
  let phrase = '';
  let vogals = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for (let letter of string) {
    if (vogals[letter] === undefined) {
      phrase += letter;
    } else {
      phrase += vogals[letter];
    }
  }
  return phrase
}

function decode(string) {
  let phrase = '';
  let numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  for (let character of string) {
    if (numbers[character] === undefined) {
      phrase += character;
    } else {
      phrase += numbers[character];
    }
  }
  return phrase
}

// Desafio 10
function techList(tech, name) {
  let techLearn = [];
  for (let techName of tech) {
    techLearn.push({
      tech: techName,
      name: name,
    });
  }
  return techLearn;
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
