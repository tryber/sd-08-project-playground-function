// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  }
  return false;
}
// Ok!

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Ok!

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
// Ok! (?)

// Desafio 4
function concatName(array) {
  let concat1 = [array.pop(), array[0]];
  return concat1.join(', ');
}
// Ok!

// Desafio 5
function footballPoints(win, ties) {
  let wins = win * 3;

  return wins + ties;
}
// Ok!

// Desafio 6
function highestCount(arrayNumber) {
  let totalLength = [];
  let maiorNumero = [0];
  for (let i1 = 1; i1 < arrayNumber.length; i1 += 1) {
    if (arrayNumber[i1] >= maiorNumero) {
      maiorNumero = arrayNumber[i1];
    }
  }
  for (let i2 = 0; i2 < arrayNumber.length; i2 += 1) {
    if (maiorNumero === arrayNumber[i2]) {
      totalLength.push(arrayNumber[i2]);
    }
  }
  return totalLength.length;
}
// Ok, but too complex ¬¬!

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  if (distCat1 < distCat2) {
    return 'cat1';
  } else if (distCat1 > distCat2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}
// Ok!

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzing = [];
  let fizzBuzz15 = 'fizzBuzz';
  let fizz3 = 'fizz';
  let buzz5 = 'buzz';
  let bug = 'bug!';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
      fizzBuzzing.push(fizzBuzz15);
    } else if (array[i] % 3 === 0) {
      fizzBuzzing.push(fizz3);
    } else if (array[i] % 5 === 0) {
      fizzBuzzing.push(buzz5);
    } else {
      fizzBuzzing.push(bug);
    }
  }
  return fizzBuzzing;
}
// Ok!!

// Desafio 9
function encode(string) {
  let str = string.split('');
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'a') {
      str[i] = '1';
    }
    if (str[i] === 'e') {
      str[i] = '2';
    }
    if (str[i] === 'i') {
      str[i] = '3';
    }
    if (str[i] === 'o') {
      str[i] = '4';
    }
    if (str[i] === 'u') {
      str[i] = '5';
    }
  }
  return str.join('');
}
// Ok!
function decode(string) {
  let str = string.split('');
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '1') {
      str[i] = 'a';
    }
    if (str[i] === '2') {
      str[i] = 'e';
    }
    if (str[i] === '3') {
      str[i] = 'i';
    }
    if (str[i] === '4') {
      str[i] = 'o';
    }
    if (str[i] === '5') {
      str[i] = 'u';
    }
  }
  return str.join('');
}
// Ok!

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
};
