// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(names) {
  return names[names.length - 1] + ', ' + names[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

let biggestNumber = (numbers) => {
  return numbers.reduce((previousValue, currentValue) =>
    currentValue > previousValue ? currentValue : previousValue, 0);
}

let countElement = (container, element) => {
  return container.reduce((previousValue, currentValue) =>
    currentValue == element ? previousValue + 1 : previousValue, 0 /* Initial value*/);
}

// Desafio 6
function highestCount(numbers) {
  return countElement(numbers, biggestNumber(numbers));
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);
  if (cat1Distance == cat2Distance)
    return "os gatos trombam e o rato foge";
  else
    return cat1Distance > cat2Distance ? 'cat2' : 'cat1';
}

// Desafio 8
function fizzBuzz(numbers) {
  return numbers.map((value) => {
    let fizz = (value % 3) == 0;
    let buzz = (value % 5) == 0;
    return fizz ? buzz ? 'fizzBuzz' : 'fizz' : buzz ? 'buzz' : 'bug!';
  });
}

let vogaisEncode = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5
};

let vogaisDecode = {
  '1': 'a',
  '2': 'e',
  '3': 'i',
  '4': 'o',
  '5': 'u'
};

function generalEncode(word, dictionary) {
  return word.split('').map((value) => dictionary.hasOwnProperty(value) ? dictionary[value] : value).join('');
}

// Desafio 9
function encode(word) {
  return generalEncode(word, vogaisEncode);
}
function decode(word) {
  return generalEncode(word, vogaisDecode);
}

// Desafio 10
function techList(techs, name) {
  if (techs.length == 0) return 'Vazio!';
  techs.sort();
  return techs.map((value) => ({tech: value, name: name}));
}

// Desafio 11
function generatePhoneNumber(numberArray) {
  if (numberArray.length !== 11)
    return "Array com tamanho incorreto.";
  else {
    for (number of numberArray) {
      if (number < 0 || number > 9)
        return "não é possível gerar um número de telefone com esses valores";
    }
    for (let testNumber = 0; testNumber < 10; testNumber += 1) {
      if (countElement(numberArray, testNumber) >= 3)
        return "não é possível gerar um número de telefone com esses valores";
    }
    return '(' + numberArray[0] + numberArray[1] + ')' + ' ' + numberArray[2] +
    numberArray[3] + numberArray[4] + numberArray[5] + numberArray[6] +
    '-' + numberArray[7] + numberArray[8] + numberArray[9] + numberArray[10];
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return ((lineA + lineB > lineC) && (lineA + lineC > lineB) && (lineB + lineC > lineA));
}

// Desafio 13
function hydrate(text) {
  let waterAmount = text.match(/\d+/g)
  .map((value) => parseInt(value))
  .reduce((previousValue, currentValue) => previousValue + currentValue);
  if (waterAmount === 1)
    return '1 copo de água';
  else
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
}
//