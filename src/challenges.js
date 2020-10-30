// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(names) {
  const last = names.length - 1;
  return `${names[last]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function count(arr) {
  let counter = {};
  for (let i = 0; i < arr.length; i += 1) {
    let cur = arr[i];
    if (!counter[cur]) {
      counter[cur] = 1;
    } else {
      counter[cur] += 1;
    }
  }
  return counter;
}

function highestCount(numbers) {
  let counter = count(numbers);
  let highest = Math.max(...numbers);
  return counter[highest];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 < distCat2) {
    return 'cat1';
  }

  if (distCat2 < distCat1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function classify(num) {
  let result = '';
  if (num % 3 === 0) {
    result += 'fizz';
  }
  if (num % 5 === 0) {
    result += 'buzz';
  }
  if (result === '') {
    result = 'bug!';
  }
  if (result === 'fizzbuzz') {
    result = 'fizzBuzz';
  }
  return result;
}

function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    let cur = numbers[i];
    result.push(classify(cur));
  }
  return result;
}

// Desafio 9
const vowels = {
  a: '1',
  e: '2',
  i: '3',
  o: '4',
  u: '5',
};

function encode(str) {
  let result = '';
  for (let i = 0, len = str.length; i < len; i += 1) {
    const letter = str[i];
    const index = letter.toLowerCase();
    if (!vowels[index]) {
      result += letter;
    } else {
      result += vowels[index];
    }
  }
  return result;
}

function translate(ch) {
  for (let cur in vowels) {
    if (ch === vowels[cur]) return cur;
  }
  return ch;
}

function decode(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    let code = str[i];
    result += translate(code);
  }
  return result;
}

// Desafio 10
function techList(tecnologias, name) {
  let lista = [];

  for (let tecnologia of tecnologias) {
    lista.push({
      tech: tecnologia,
      name,
    });
  }

  lista = lista.sort((a, b) => {
    if (a.tech < b.tech) {
      return -1;
    }

    if (a.tech > b.tech) {
      return 1;
    }

    return 0;
  });

  return lista.length > 0 ? lista : 'Vazio!';
}

// Desafio 11
function validInterval(digits) {
  return !!digits.find(cur => cur < 0 || cur > 9);
}

function validNumbers(digits) {
  let counter = count(digits);
  for (let cur in counter) {
    if (counter[cur] >= 3) return false;
  }
  return true;
}

function generatePhoneNumber(digits) {
  if (digits.length !== 11) return 'Array com tamanho incorreto.';
  if (validNumbers(digits) && validInterval) {
    let numeroStr = digits.join('');
    let ddd = numeroStr.slice(0, 2);
    let partA = numeroStr.slice(2, 7);
    let partB = numeroStr.slice(7, 11);
    return `(${ddd}) ${partA}-${partB}`;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lines = [lineA, lineB, lineC];
  for (let i = 0; i < lines.length; i += 1) {
    let sum = 0;
    for (let j = 0; j < lines.length; j += 1) {
      if (j !== i) sum += lines[j];
    }
    if (lines[i] >= sum) return false;
  }
  return true;
}

// Desafio 13
function hydrate(beverages) {
  let arr = beverages.match(/\d+/g);
  let numeroDeCopos = arr.map(Number).reduce((acc, cur) => acc + cur);
  return `${numeroDeCopos} copo${numeroDeCopos > 1 ? 's' : ''} de água`;
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
