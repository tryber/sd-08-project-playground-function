// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let list = string.split(' ');
  return list;
}

// Desafio 4
function concatName(array) {
  let arrayFinal = [];
  arrayFinal.push(array[array.length - 1]);
  arrayFinal.push(array[0]);
  return arrayFinal.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return (points);
}

// Desafio 6
function getHighestNumber(array) {
  let maxNumber = array.reduce(function (a, b) {
    return Math.max(a, b);
  });
  return maxNumber;
}
function highestCount(array) {
  let number = getHighestNumber(array);
  let freq = 0;
  for (let i = 0; i <= array.length; i += 1) {
    if (array[i] === number) {
      freq += 1;
    }
  }
  return freq;
}

// Desafio 7

function calculateDistance(mouse, cat) {
  let dmouseCat = Math.abs(mouse - cat);
  return dmouseCat;
}

function catAndMouse(mouse, cat1, cat2) {
  let dmouseCat1 = calculateDistance(mouse, cat1);
  let dmouseCat2 = calculateDistance(mouse, cat2);
  let statement = '';
  if (dmouseCat1 > dmouseCat2) {
    statement = 'cat2';
  }
  if (dmouseCat2 > dmouseCat1) {
    statement = 'cat1';
  }
  if (dmouseCat1 === dmouseCat2) {
    statement = 'os gatos trombam e o rato foge';
  }
  return statement;
}

// Desafio 8
function compare(number) {
  let statement = 'bug!';
  if (number % 3 === 0) {
    statement = 'fizz';
  }
  if (number % 5 === 0) {
    statement = 'buzz';
  }
  if (number % 3 === 0 && number % 5 === 0) {
    statement = 'fizzBuzz';
  }
  return statement;
}
function fizzBuzz(array) {
  let list = [];
  for (let i = 0; i < array.length; i += 1) {
    let result = compare(array[i])
    list.push(result);
  }
  return list;
}

// Desafio 9
function isVogal(character) {
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let result = vogais.indexOf(character) + 1;
  if (result > 0) {
    return result;
  }
  return character;
}
function encode(text) {
  let newText = '';
  for (let i = 0; i < text.length; i += 1) {
    let index = isVogal(text[i]);
    newText += index;
  }
  return newText;
}
function isNumber(number) {
  let numbersList = ['1', '2', '3', '4', '5'];
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let result = numbersList.indexOf(number);
  if (result >= 0) {
    let resultFromVogal = vogais[result]
    return resultFromVogal;
  }
  return number;
}
function decode(encodedText) {
  let newDecode = '';
  for (let i = 0; i < encodedText.length; i += 1) {
    let indexForDecode = isNumber(encodedText.charAt(i));
    newDecode += indexForDecode;
  }
  return newDecode;
}
// Desafio 10
function techList(array, name) {
  array.sort();
  let listWithObjects = [];
  if (array.length === 0) {
    return 'Vazio!';
  }

  for (let i = 0; i < array.length; i += 1) {
    listWithObjects.push({
      tech: array[i],
      name,
    });
  }
  return listWithObjects;
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
}
