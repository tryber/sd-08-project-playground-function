// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(fullNameArray) {
  const lastPosition = fullNameArray.length - 1;

  return `${fullNameArray[lastPosition]}, ${fullNameArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winsPoints = wins * 3;
  const tiesPoints = ties * 1;

  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let counter = 1;

  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > highestNumber) {
      highestNumber = numbers[index];
      counter = 1;
    } else if (numbers[index] === highestNumber) {
      counter += 1;
    }
  }

  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance < cat2Distance) return 'cat1';
  if (cat2Distance < cat1Distance) return 'cat2';

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function checkFizzBuzz(number) {
  if ((number % (3 * 5) === 0)) return 'fizzBuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';

  return 'bug!';
}

function fizzBuzz(numbers) {
  let fizzBuzzArray = [];

  for (let number of numbers) {
    fizzBuzzArray.push(checkFizzBuzz(number));
  }

  return fizzBuzzArray;
}

// Desafio 9
function encode(sentence) {
  let inputOutput = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };

  let encodedSentence = sentence.replace(/[aeiou]/g, vowel => inputOutput[vowel]);

  // --- Solucao 1 ---
  // let encodedSentence = sentence
  //   .replace(/a/g, '1')
  //   .replace(/e/g, '2')
  //   .replace(/i/g, '3')
  //   .replace(/o/g, '4')
  //   .replace(/u/g, '5');

  // --- Solucao 2 ---
  // let input = ['a', 'e', 'i', 'o', 'u'];
  // let output = ['1', '2', '3', '4', '5'];
  // let encodedSentence = sentence;
  // let regularExpression;
  // for (let index in input) {
  //   regularExpression = new RegExp(input[index], 'g');
  //   encodedSentence = encodedSentence.replace(regularExpression, output[index]);
  // }

  return encodedSentence;
}

function decode(sentence) {
  let inputOutput = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let decodedSentence = sentence.replace(/[12345]/g, number => inputOutput[number]);

  return decodedSentence;
}

// Desafio 10
function techList(technologies, name) {
  let list = [];
  let techsSorted = technologies.sort();

  for (let tech of techsSorted) {
    list.push({
      tech,
      name,
    });
  }

  if (list.length === 0) return 'Vazio!';

  return list;
}

// Desafio 11
function checkNumbersArray(numbersArray) {
  if (numbersArray.length !== 11) return 'Array com tamanho incorreto.';

  for (let number of numbersArray) {
    if (number > 9 || number < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return false;
}

function checkNumberRepetition(numbersArray) {
  for (let numberCheck = 0; numberCheck < 10; numberCheck += 1) {
    let filteredNumbers = numbersArray.filter(number => number === numberCheck);
    if (filteredNumbers.length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return false;
}

function generatePhoneNumber(numbersArray) {
  let ddd = numbersArray.slice(0, 2);
  let firstHalf = numbersArray.slice(2, 7);
  let secondHalf = numbersArray.slice(7);
  let fullNumber = `(${ddd}) ${firstHalf}-${secondHalf}`.replace(/,/g, '');

  if (checkNumbersArray(numbersArray)) {
    return checkNumbersArray(numbersArray);
  }

  if (checkNumberRepetition(numbersArray)) {
    return checkNumberRepetition(numbersArray);
  }

  return fullNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (!lineA || !lineB || !lineC) return false;

  let checkLineA = (lineA < lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let checkLineB = (lineB < lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let checkLineC = (lineC < lineA + lineB) && lineC > Math.abs(lineA - lineB);

  if (!checkLineA || !checkLineB || !checkLineC) return false;

  return true;
}

// Desafio 13
function hydrate(order) {
  let waterCounter = 0;

  for (let number = 1; number < 10; number += 1) {
    let counterNumberAppearance = order.split(`${number}`).length - 1;

    waterCounter += (counterNumberAppearance * number);
  }

  if (waterCounter === 1) return `${waterCounter} copo de água`;

  return `${waterCounter} copos de água`;
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
