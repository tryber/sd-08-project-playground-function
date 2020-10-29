// Desafio 1
function compareTrue(valor1, valor2) {
  if (typeof valor1 !== 'boolean' || typeof valor2 !== 'boolean') {
    return 'O valor não é um boolean';
  } else if (valor1 === true && valor2 === true) {
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
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let ultimo = array.length - 1;
  return `${array[ultimo]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  return wins + ties;
}

function highestArrayNumber(array) {
  let bigger = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > bigger) {
      bigger = array[index];
    }
  }
  return bigger;
}

// Desafio 6
function highestCount(array) {
  let bigger = highestArrayNumber(array);
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === bigger) {
      counter += 1;
    }
  }
  return counter;
}

function distanceFromCats(mouse, cat) {
  if (mouse < cat) {
    return cat - mouse;
  }
  return mouse - cat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = distanceFromCats(mouse, cat1);
  let distance2 = distanceFromCats(mouse, cat2);

  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  } else if (distance1 < distance2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[key] % 3 === 0) {
      newArray.push('fizz');
    } else if (array[key] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[key] % 3 !== 0 && array[key] % 5 !== 0) {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

function createObject(array, name) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push({tech: array[index], name: name})
  }
  return newArray;
}

// Desafio 10
function techList(tech, name) {
  let object = createObject(tech, name);
  if (tech.length === 0) {
    return 'Vazio!'
  }

  return object.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    } else if (b.tech > a.tech) {
      return -1;
    }
    return 0;
  });
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'],'Lucas'))

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
