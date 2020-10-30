// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(text) {
  return text.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(win, ties) {
  const winPoints = win * 3 || 0;
  const tiesPoints = ties * 1 || 0;
  return winPoints + tiesPoints;
}

const greaterValueInArray = function (arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
};

const countValueInArray = function (value, arr) {
  return arr.filter((x) => x === value).length;
};

// Desafio 6
function highestCount(arr) {
  return countValueInArray(greaterValueInArray(arr), arr);
}

const relativeDistanceEval = function (target, hunter1, hunter2) {
  return {
    hunter1: Math.abs(hunter1 - target),
    hunter2: Math.abs(hunter2 - target),
  };
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distRelative = relativeDistanceEval(mouse, cat1, cat2);
  if (distRelative.hunter1 === distRelative.hunter2) return 'os gatos trombam e o rato foge';

  if (distRelative.hunter1 < distRelative.hunter2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result[i] = 'bug!';
    if (arr[i] % 3 === 0) result[i] = 'fizz';
    if (arr[i] % 5 === 0) result[i] = 'buzz';
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) result[i] = 'fizzBuzz';
  }
  return result;
}

// Desafio 9
function encode(text) {
  return text
    .split('a')
    .join('1')
    .split('e')
    .join('2')
    .split('i')
    .join('3')
    .split('o')
    .join('4')
    .split('u')
    .join('5');
}

function decode(text) {
  return text
    .split('1')
    .join('a')
    .split('2')
    .join('e')
    .split('3')
    .join('i')
    .split('4')
    .join('o')
    .split('5')
    .join('u');
}

// Desafio 10
function techList(list, name) {
  if (list.length === 0) return 'Vazio!';
  const result = [];
  list.sort().forEach((item) => {
    result.push({ tech: item, name });
  });
  return result;
}

// Desafio 11
function generatePhoneNumber(arr) {
  if (arr.length !== 11) return 'Array com tamanho incorreto.';
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < 0 || arr[i] >= 10) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (arr.filter((x) => x === arr[i]).length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // Format Telefone
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  const evalList = {
    a: lineA < lineB + lineC && lineA > Math.abs(lineB - lineC),
    b: lineB < lineA + lineC && lineB > Math.abs(lineA - lineC),
    c: lineC < lineA + lineB && lineC > Math.abs(lineA - lineB),
  };
  if (evalList.a && evalList.b && evalList.c) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(text) {
  const arr = text.replace(/\D/g, '').split('');
  const sum = arr.reduce(function (acc, val) {
    return parseInt(acc, 10) + parseInt(val, 10);
  }, 0) || 0;
  if (sum < 2) return `${sum} copo de água`;
  return `${sum} copos de água`;
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
