// Desafio 1
function compareTrue(proposition1, proposition2) {
  return proposition1 && proposition2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let splitedSentence = [''];
  let currentPosition = 0;

  for (let i = 0; i < sentence.length; i += 1) {
    if (sentence[i] === ' ') {
      currentPosition += 1;
      splitedSentence[currentPosition] = '';
    } else {
      splitedSentence[currentPosition] += sentence[i];
    }
  }

  return splitedSentence;
}

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let highest = numbers[0];
  let counter = 0;

  for (index in numbers) {
    if (highest < numbers[index]) {
      highest = numbers[index];
      counter = 1;
    } else if (highest === numbers[index]) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 < distance2) {
    return 'cat1';
  } else if (distance2 < distance1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];

  for (let index in numbers) {
    if (numbers[index] % 15 === 0) {
      result.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }

  return result;
}

// Desafio 9
function encode(text) {
  let encoded = '';

  for (let index in text) {
    switch (text[index]) {
      case 'a':
        encoded += '1';
        break;
      case 'e':
        encoded += '2';
        break;
      case 'i':
        encoded += '3';
        break;
      case 'o':
        encoded += '4';
        break;
      case 'u':
        encoded += '5';
        break;
      default:
        encoded += text[index];
    }
  }

  return encoded;
}

function decode(text) {
  let decoded = '';

  for (let index in text) {
    switch (text[index]) {
      case '1':
        decoded += 'a';
        break;
      case '2':
        decoded += 'e';
        break;
      case '3':
        decoded += 'i';
        break;
      case '4':
        decoded += 'o';
        break;
      case '5':
        decoded += 'u';
        break;
      default:
        decoded += text[index];
    }
  }

  return decoded;
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
