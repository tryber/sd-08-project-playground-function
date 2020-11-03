// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let newArrayString = [];
  let newString = '';

  for (let word in string) {
    if (string[word] !== ' ') {
      newString += string[word];
    } else {
      newArrayString.push(newString);
      newString = '';
    }
  }
  newArrayString.push(newString);
  return newArrayString;
}

// Desafio 4
function concatName(arrayDeStrings) {
  return `${arrayDeStrings[arrayDeStrings.length - 1]}, ${arrayDeStrings[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayDeNumeros) {
  let arrayOrdenado = arrayDeNumeros.sort((a, b) => b - a);
  let contador = 0;

  for (let numero in arrayOrdenado) {
    if (arrayOrdenado[numero] === arrayDeNumeros[0]) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzzPusher(n, array) {
  if (n % 3 === 0 && n % 5 === 0) {
    array.push('fizzBuzz');
  } else if (n % 3 === 0) {
    array.push('fizz');
  } else if (n % 5 === 0) {
    array.push('buzz');
  } else {
    array.push('bug!');
  }
}

function fizzBuzz(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    fizzBuzzPusher(array[i], newArray);
  }
  return newArray;
}

// Desafio 9


function encode(string) {
  return 
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
function hydrate(string) {
  let numString = string.replace(/\D/g, '');
  let copos = 0;

  for (let i = 0; i < numString.length; i += 1) {
    copos += parseInt(numString[i], 10);
  }

  if (copos === 1) {
    return '1 copo de água';
  }
  return `${copos} copos de água`;
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
