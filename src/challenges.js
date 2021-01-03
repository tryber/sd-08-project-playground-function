// Desafio 1
const compareTrue = (firstBoolean, secondBoolean) =>
  firstBoolean && secondBoolean;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = (string) => {
  let splitArray = [];
  splitArray = string.split(' ');
  return splitArray;
};

// Desafio 4
const concatName = array => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 6
const highestCount = (array) => {
  const highestValue = Math.max(...array);
  const counter = array.reduce((acc, cur) => acc + (cur === highestValue), 0);
  return counter;
};

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let closestCat = '';
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    closestCat = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    closestCat = 'cat2';
  } else {
    closestCat = 'os gatos trombam e o rato foge';
  }
  return closestCat;
}

// Desafio 8
const fizzBuzz = (array) => {
  const result = [];
  array.forEach((element) => {
    if (element % 15 === 0) {
      result.push('fizzBuzz');
    } else if (element % 5 === 0) {
      result.push('buzz');
    } else if (element % 3 === 0) {
      result.push('fizz');
    } else {
      result.push('bug!');
    }
  });
  return result;
};

// Desafio 9
// Solução encontrada no Stackoverflow utilizando String.prototype.replace()
function encode(string) {
  let stringSwap = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let encondeResult = '';
  encondeResult = string.replace(/[aeiou]/gi, m => stringSwap[m]);

  return encondeResult;
}

// Solução encontrada no Stackoverflow utilizando String.prototype.replace()
function decode(string) {
  let stringSwap = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let encondeResult = '';
  encondeResult = string.replace(/[12345]/gi, m => stringSwap[m]);
  return encondeResult;
}

// Desafio 10
function techList(tech, name) {
  let resultArray = [];
  let orderedTechList = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i in orderedTechList) {
    resultArray.push({
      tech: orderedTechList[i],
      name: name,
    });
  }
  return resultArray;
}

// Desafio 11
// Expressão regular encontrada em - https://stackoverflow.com/questions/17650197/mask-javascript-variable-value
// ForEach function encontrada em - https://www.codegrepper.com/code-examples/javascript/count+duplicates+array+js
function generatePhoneNumber(array) {
  let result = '';
  let counts = [];
  let rawString = array.join('');
  result = rawString.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    array.forEach(function (i) {
      counts[i] = (counts[i] || 0) + 1;
    });
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < 0 || array[i] > 9 || counts[i] >= 3) {
        result = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB > lineC;
  let sumAC = lineA + lineC > lineB;
  let sumBC = lineB + lineC > lineA;

  return sumAB && sumAC && sumBC;
}

// Arrow function usada a partir do conteúdo encontrado neste link: https://www.freecodecamp.org/news/reduce-f47a7da511a9/
// Desafio 13
function hydrate(string) {
  let onlyNumbersArray = string.match(/\d+/g).map(Number);
  let sumArray = onlyNumbersArray.reduce(
    (drinks1, drinks2) => drinks1 + drinks2,
  );
  let result = '';
  if (sumArray === 1) {
    result = `${sumArray} copo de água`;
  } else {
    result = `${sumArray} copos de água`;
  }
  return result;
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
