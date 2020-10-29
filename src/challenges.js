// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(strArr) {
  return `${strArr[strArr.length - 1]}, ${strArr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numArr) {
  numArr.sort();
  let greatest = numArr[numArr.length - 1];
  let counter = 0;

  for (let count = numArr.length - 1; count >= 0; count -= 1) {
    if (greatest === numArr[count]) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(cat1 - mouse);
  let mouseCat2 = Math.abs(cat2 - mouse);

  if (mouseCat1 === mouseCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (mouseCat1 < mouseCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numArr) {
  for (let i = 0; i < numArr.length; i += 1) {
    switch (0) {
      case numArr[i] % 15:
        numArr[i] = 'fizzBuzz';
        break;
      case numArr[i] % 3:
        numArr[i] = 'fizz';
        break;
      case numArr[i] % 5:
        numArr[i] = 'buzz';
        break;
      default:
        numArr[i] = 'bug!';
        break;
    }
  }

  return numArr;
}

// Desafio 9
function encode(str) {
  let encoded = '';
  let cryptography = ['a', 'e', 'i', 'o', 'u'];

  for (let letterIndex in str) {
    if (cryptography.includes(str[letterIndex])) {
      encoded += `${cryptography.indexOf(str[letterIndex]) + 1}`;
    } else {
      encoded += str[letterIndex];
    }
  }

  return encoded;
}

function decode(encodedStr) {
  let decoded = '';
  let cryptography = ['a', 'e', 'i', 'o', 'u'];

  for (let letterIndex in encodedStr) {
    if (encodedStr[letterIndex] === ' ') {
      decoded += ' ';
    } else if (!isNaN(encodedStr[letterIndex])) {
      decoded += `${cryptography[parseInt(encodedStr[letterIndex], 10) - 1]}`;
    } else {
      decoded += encodedStr[letterIndex];
    }
  }

  return decoded;
}

// Desafio 10
function techList(techArr, name) {
  if (techArr.length === 0) {
    return 'Vazio!';
  }

  techArr.sort();

  let techs = [];

  for (let techIndex = 0; techIndex < techArr.length; techIndex += 1) {
    let obj = {
      tech: techArr[techIndex],
      name,
    };

    techs.push(obj);
  }

  return techs;
}

// Desafio 11
function countNumbers(numArr) {
  let numCounter = {};
  for (let numI = 0; numI < numArr.length; numI += 1) {
    if (numCounter[numArr[numI]]) {
      numCounter[numArr[numI]] += 1;
    } else {
      numCounter[numArr[numI]] = 1;
    }
  }

  return numCounter;
}

function generatePhoneNumber(numArr) {
  if (numArr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  let numCounter = countNumbers(numArr);

  for (let numI = 0; numI < numArr.length; numI += 1) {
    if (numCounter[numArr[numI]] >= 3 || numArr[numI] < 0 || numArr[numI] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  numArr.splice(0, 0, '(');
  numArr.splice(3, 0, ') ');
  numArr.splice(9, 0, '-');

  return numArr.join('');
}

// Desafio 12
function triangleCheck(a, b, c) {
  if (a >= b + c || b >= a + c || c >= a + b) {
    return false;
  }
  if (a <= Math.abs(b - c) || b <= Math.abs(a - c) || c <= Math.abs(a - b)) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let waterAmount = 0;

  for (let letterIndex in str) {
    if (/[1-9]/.test(str[letterIndex])) {
      waterAmount += parseInt(str[letterIndex], 10);
    }
  }

  if (waterAmount === 1) {
    return `${waterAmount} copo de água`;
  }
  return `${waterAmount} copos de água`;
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
