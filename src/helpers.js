module.exports.greaterValueInArray = function (arr) {
  return arr.reduce(function (a, b) {
    return Math.max(a, b);
  });
};

module.exports.countValueInArray = function (value, arr) {
  return arr.filter((x) => x === value).length;
};

module.exports.encodeText = function (text) {
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
};

module.exports.decodeText = function (text) {
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
};

module.exports.techListFactory = function (list, name) {
  const result = [];
  list.sort().forEach((item) => {
    result.push({ tech: item, name });
  });
  return result;
};

module.exports.fizzBuzzFactory = function (arr) {
  const result = [];
  for (let i = 0; i < arr.length; i += 1) {
    result[i] = 'bug!';
    if (arr[i] % 3 === 0) result[i] = 'fizz';
    if (arr[i] % 5 === 0) result[i] = 'buzz';
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) result[i] = 'fizzBuzz';
  }
  return result;
};

const relativeDistanceEval = function (target, hunter1, hunter2) {
  return {
    hunter1: Math.abs(hunter1 - target),
    hunter2: Math.abs(hunter2 - target),
  };
};

module.exports.catAndMouseEval = function (mouse, cat1, cat2) {
  const distRelative = relativeDistanceEval(mouse, cat1, cat2);
  if (distRelative.hunter1 === distRelative.hunter2) return 'os gatos trombam e o rato foge';

  if (distRelative.hunter1 < distRelative.hunter2) {
    return 'cat1';
  }
  return 'cat2';
};

module.exports.phoneNumberGeneratorFacade = function (arr) {
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
};

module.exports.triangleCheckEval = function (a, b, c) {
  const evalList = {
    a: a < b + c && a > Math.abs(b - c),
    b: b < a + c && b > Math.abs(a - c),
    c: c < a + b && c > Math.abs(a - b),
  };
  if (evalList.a && evalList.b && evalList.c) {
    return true;
  }
  return false;
};

module.exports.hydrateFacade = function (text) {
  if (typeof text !== 'string') {
    throw new Error('parameter needs be string');
  }
  const arr = text.replace(/\D/g, '').split('');
  const sum = arr.reduce(function (acc, val) {
    return parseInt(acc, 10) + parseInt(val, 10);
  }, 0) || 0;
  if (sum < 2) return `${sum} copo de água`;
  return `${sum} copos de água`;
};

module.exports.footballPointsCalc = function (win, ties) {
  const winPoints = win * 3;
  const tiesPoints = ties * 1;
  return winPoints + tiesPoints;
};
