// Desafio 1
const compareTrue = (boolean1, boolean2) => boolean1 && boolean2;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

// Desafio 3
const splitSentence = sentence => sentence.split(' ');

// Desafio 4
const concatName = array => `${array[array.length - 1]}, ${array[0]}`;

// Desafio 5
const footballPoints = (wins, ties) => (wins * 3) + ties;

// Desafio 6
const highestCount = array =>
  array.sort((a, b) => b - a).filter((element, index, sortArr) => element === sortArr[0]).length;

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distMouseCat1 = Math.abs(mouse - cat1);
  const distMouseCat2 = Math.abs(mouse - cat2);
  let getOrNot = 'os gatos trombam e o rato foge';
  getOrNot = distMouseCat1 < distMouseCat2 ? 'cat1' : getOrNot;
  getOrNot = distMouseCat1 > distMouseCat2 ? 'cat2' : getOrNot;
  return getOrNot;
}

// Desafio 8
function fizzBuzz(array) {
  return array.map((num) => {
    let a = 'bug!';
    a = num % 3 === 0 ? 'fizz' : a;
    a = num % 5 === 0 ? 'buzz' : a;
    a = num % 3 === 0 && num % 5 === 0 ? 'fizzBuzz' : a;
    return a;
  });
}

// Desafio 9
const changeCharacters = (string, character) => {
  let phrase = '';
  for (let char of string) {
    if (!character[char]) {
      phrase += char;
    } else {
      phrase += character[char];
    }
  }
  return phrase;
};

const encode = (string) => {
  let character = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return changeCharacters(string, character);
};

const decode = (string) => {
  let character = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return changeCharacters(string, character);
};

// Desafio 10
const techList = (tech, name) => {
  if (!tech.length) return 'Vazio!';
  return tech.sort().map(item => ({ tech: item, name }));
};

// Desafio 11
const validation = (numbers) => {
  const counts = numbers.reduce((acc, number) => {
    acc[number] = (acc[number] || 0) + 1;
    return acc;
  }, {});
  const checkRepeated = !(Math.max(...Object.values(counts)) >= 3);
  const checkOver9Under0 = !(numbers.filter(number => number > 9 || number < 0).length > 0);
  return checkOver9Under0 && checkRepeated;
};

const generatePhoneNumber = (numbers) => {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  if (!validation(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const [one, two, three, four, five, six, seven, eight, nine, ten, eleven] = numbers;
  return `(${one}${two}) ${three}${four}${five}${six}${seven}-${eight}${nine}${ten}${eleven}`;
};

// Desafio 12
const triangleCheck = (lineA, lineB, lineC) =>
  lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);

// Desafio 13
function hydrate(ticket) {
  const split = ticket.split('');
  let cupOfWater = 0;
  split.forEach((letter) => {
    const number = parseInt(letter, 10);
    if (!isNaN(number)) {
      cupOfWater += number;
    }
  });
  if (cupOfWater === 1) return '1 copo de água';
  return `${cupOfWater} copos de água`;
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
