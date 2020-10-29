// Desafio 1
function compareTrue(a, b) {
  return a && b;
  // seu código aqui
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
  // seu código aqui
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
  // seu código aqui
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
  // seu código aqui
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
  // seu código aqui
}

let biggestNumber = (numbers) => {
  let biggest = numbers[0];
  for (number of numbers) {
    if (number > biggest) {
      biggest = number;
    }
  }
  return biggest;
}

let countElement = (container, element) => {
  let count = 0;
  for (let index = 0; index < container.length; index += 1) {
    if (container[index] == element) {
      count += 1;
    }
  }
  return count;
}

// Desafio 6
function highestCount(numbers) {
  return countElement(numbers, biggestNumber(numbers));
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance == cat2Distance) {
    return "os gatos trombam e o rato foge";
  } else {
    return cat1Distance > cat2Distance ? 'cat2' : 'cat1';
  }
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzArray = [];
  for (number of numbers) {
    let fizz = (number % 3) == 0;
    let buzz = (number % 5) == 0;
    fizzBuzzArray.push(fizz ? buzz ? 'fizzBuzz' : 'fizz' : buzz ? 'buzz' : 'bug!');
  }
  return fizzBuzzArray;
  // seu código aqui
}

let vogaisEncode = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
};

let vogaisDecode = {
  '1': a,
  '2': e,
  '3': i,
  '4': o,
  '5': u
};

function generalEncode(word, dictionary) {
  let coded = '';
  for (letter of word) {
    if (dictionary.hasOwnProperty(letter)) {
      coded += dictionary[letter];
    } else {
      coded += letter;
    }
  }
  return coded;
}

// Desafio 9
function encode(word) {
  return generalEncode(word, vogaisEncode);
  // seu código aqui
}
function decode(word) {
  return generalEncode(word, vogaisDecode);
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
//