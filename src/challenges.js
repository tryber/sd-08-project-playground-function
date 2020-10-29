// Project Playground Functions
// Gabriel Lennox
// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2 === true) {
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
function concatName(stringsArray) {
  return stringsArray[stringsArray.length - 1] + ', ' + stringsArray[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numbersArray) {
  let highest = numbersArray[0];
  let counter = 0;

  for (let index1 in numbersArray) {
    if (numbersArray[index1] > highest) {
      highest = numbersArray[index1];
    }
  }

  for (let index2 in numbersArray) {
    if (numbersArray[index2] === highest) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1;
  let dist2;

  if (cat1 > mouse) {
    dist1 = cat1 - mouse;
  } else {
    dist1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    dist1 = cat2 - mouse;
  } else {
    dist1 = mouse - cat2;
  }

  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist1 > dist2) {
    return 'cat2';
  } else if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';  
  }
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
