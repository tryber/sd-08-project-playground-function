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
  return `${array[array.length - 1]}, ${array[0]}`;
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
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index in array) {
    if (array[index] % 15 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(message) {
  let auxArray = [];
  let encodedMessage = '';

  for (let i in message) {
    if (message[i] === 'a') {
      auxArray.push(1);
    } else if (message[i] === 'e') {
      auxArray.push(2);
    } else if (message[i] === 'i') {
      auxArray.push(3);
    } else if (message[i] === 'o') {
      auxArray.push(4);
    } else if (message[i] === 'u') {
      auxArray.push(5);
    } else {
      auxArray.push(message[i]);
    }
  }
  for (let j in auxArray) {
    encodedMessage += auxArray[j];
  }
  return encodedMessage;
}

function decode(message) {
  let auxArray = [];
  let decodedMessage = '';

  for (let i in message) {
    if (message[i] === '1') {
      auxArray.push('a');
    } else if (message[i] === '2') {
      auxArray.push('e');
    } else if (message[i] === '3') {
      auxArray.push('i');
    } else if (message[i] === '4') {
      auxArray.push('o');
    } else if (message[i] === '5') {
      auxArray.push('u');
    } else {
      auxArray.push(message[i]);
    }
  }
  for (let j in auxArray) {
    decodedMessage += auxArray[j];
  }
  return decodedMessage;
}

// Desafio 10
function techList(tech, name) {
  let newObject = [];
  if (tech == null || tech.length === 0) {
    return 'Vazio!';
  } else {
    tech.sort();
    for (let cont in tech) {
      newObject.push({
        tech: tech[cont],
        name: name
      })
    }
  }
  return newObject;
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
