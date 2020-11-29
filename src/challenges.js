/* eslint-disable no-unused-expressions */
// Desafio 1
function compareTrue(valueA, valueB) {
  return valueA && valueB;
}
// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}
// Desafio 3
function splitSentence(inputSentence) {
  let output = inputSentence.split(' ');
  return output;
}
// Desafio 4
function concatName(nomeCompleto) {
  let output = `${nomeCompleto[nomeCompleto.length - 1]}, ${nomeCompleto[0]}`;
  return output;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pointsWin = 3;
  let pointsTie = 1;
  let totalPoints = (wins * pointsWin) + (ties * pointsTie);
  return totalPoints;
}
// Desafio 6
function indexGt(values, testNumber = 0) {
  let gtNum = values[testNumber];
  for (const indexNum in values) {
    if (gtNum < values[indexNum]) {
      gtNum = indexGt(values, indexNum);
      return gtNum;
    }
  }
  return values.indexOf(gtNum);
}
function highestCount(values) {
  let repetitions = 0;
  for (let number = 0; number < values.length; number += 1) {
    if (values[indexGt(values)] === values[number]) repetitions += 1;
  }
  return repetitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let distWin = '';
  const tie = 'os gatos trombam e o rato foge';
  if (distCat1 > distCat2) {
    distWin = 'cat2';
  } else if (distCat2 > distCat1) {
    distWin = 'cat1';
  } else {
    distWin = tie;
  }
  return distWin;
}
// Desafio 8
function evaluateFizzBuzz(rules, num) {
  for (let index = 0; index < rules.length; index += 1) {
    if (rules[index].match(num)) {
      return rules[index].text;
    }
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  const rules = [
    {
      match: num => num % 15 === 0,
      text: 'fizzBuzz',
    },
    {
      match: num => num % 3 === 0,
      text: 'fizz',
    },
    {
      match: num => num % 5 === 0,
      text: 'buzz',
    },
  ];
  let output = numbers.map(num => evaluateFizzBuzz(rules, num));
  return output;
}

// Desafio 9
function encode(phrase) {
  let output = phrase.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  output.map((element, index) => {
    for (let cases in vowels) {
      if (element === vowels[cases]) {
        output[index] = parseInt(cases, 10) + 1;
      }
    }
    return output;
  });
  return output.join('');
}

function decode(phrase) {
  let output = phrase.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  output.map((element, index) => {
    for (let cases in vowels) {
      if (parseInt(element, 10) === parseInt(cases, 10) + 1) {
        output[index] = vowels[cases];
      }
    }
    return output;
  });
  return output.join('');
}

// Desafio 10
function techList(techArray, name) {
  let output;
  if (techArray.length > 0) {
    let sortedTech = techArray.sort();
    output = sortedTech.map((element) => {
      let item = {};
      item.name = name;
      item.tech = element;
      return item;
    });
  } else {
    output = 'Vazio!';
  }
  return output;
}

// Desafio 11
function generatePhoneNumber(phoneArray) {
  let output;
  if (phoneArray.length === 11) {
    let telefone = phoneArray.join('');
    let pattern = /(\d{2})(\d{5})(\d{4})/g;
    let result = pattern.exec(telefone);
    output = `(${result[1]}) ${result[2]}-${result[3]}`;
  } else {
    output = 'Array com tamanho incorreto';
  }
  return output;
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
