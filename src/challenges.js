// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let counter = 0;
  for (let pos in array) {
    if (array[pos] === maior) {
      counter += 1;
    }
    if (array[pos] > maior) {
      maior = array[pos];
      counter = 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    return 'cat1';
  } else if ((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse))) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  const newArray = array.map (function(fb) {
    if (fb % 3 === 0 && fb % 5 === 0) return 'fizzBuzz';
    if (fb % 3 === 0) return 'fizz';
    if (fb % 5 === 0) return 'buzz';
    return 'bug!';
  });
  return newArray;
}

// Desafio 9
function encode() {
  // seu código aqui FUNÇÃO REPLACE
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
