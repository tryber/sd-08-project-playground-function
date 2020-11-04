// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let arraySize = array.length - 1;
  let result = `${array[arraySize]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = (wins * 3) + (ties * 1);
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let count = 0;
  let highest = Math.max.apply(null, array);
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === highest) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'cat2';
}
// Desafio 8
function primeBothNumbers(value, prime1, prime2) {
  if (value % prime1 === 0 && value % prime2 === 0) {
    return true;
  }
  return false;
}
function primeOne(value, prime) {
  if (value % prime === 0) {
    return true;
  }
  return false;
}
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (primeBothNumbers(array[i], 3, 5)) {
      result[i] = 'fizzBuzz';
    } else if (primeOne(array[i], 3)) {
      result[i] = 'fizz';
    } else if (primeOne(array[i], 5)) {
      result[i] = 'buzz';
    } else {
      result[i] = 'bug!';
    }
  }
  return result;
}

// Desafio 9
function stringVowel(char) {
  if (char.toLowerCase() === 'a') {
    return 1;
  }
  if (char.toLowerCase() === 'e') {
    return 2;
  }
  if (char.toLowerCase() === 'i') {
    return 3;
  }
  if (char.toLowerCase() === 'o') {
    return 4;
  }
  if (char.toLowerCase() === 'u') {
    return 5;
  }
  return char;
}

function stringNumber(char) {
  if (char === '1') {
    return 'a';
  }
  if (char === '2') {
    return 'e';
  }
  if (char === '3') {
    return 'i';
  }
  if (char === '4') {
    return 'o';
  }
  if (char === '5') {
    return 'u';
  }
  return char;
}

function encode(sentence) {
  // seu código aqui
  let sentenceEncoded = '';
  for (let i = 0; i < sentence.length; i += 1) {
    sentenceEncoded += stringVowel(sentence[i]);
  }
  return sentenceEncoded;
}

function decode(sentence) {
  // seu código aqui
  let sentenceDecoded = '';
  for (let i = 0; i < sentence.length; i += 1) {
    sentenceDecoded += stringNumber(sentence[i]);
  }
  return sentenceDecoded;
}
// Desafio 10
function techList(technologies, name) {
  let objectArray = [];
  // seu código aqui
  technologies.sort();
  if (technologies.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < technologies.length; i += 1) {
    let objectAux = {};
    objectAux.tech = technologies[i];
    objectAux.name = name;
    objectArray.push(objectAux);
  }
  return objectArray;
}
function validPhone(arrayNumber) {
  let count = 0;
  for (let i = 0; i < arrayNumber.length; i += 1) {
    count = 0;
    if (arrayNumber[i] < 0 || arrayNumber[i] > 9) {
      return false;
    }
    for (let j = 0; j < arrayNumber.length; j += 1) {
      if (arrayNumber[i] === arrayNumber[j]) {
        count += 1;
      }
      if (count >= 3) {
        return false;
      }
    }
  }
  return true;
}
function generatePhoneNumber(arrayNumber) {
  // seu código aqui
  let numberFormated = '';
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!validPhone(arrayNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < arrayNumber.length; i += 1) {
    if (i === 0) {
      numberFormated += '(';
    }
    if (i === 2) {
      numberFormated += ') ';
    }
    if (i === 7) {
      numberFormated += '-';
    }
    numberFormated += arrayNumber[i];
  }
  return numberFormated;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let numberOfDrinks = drinks.match(/\d/g);
  let totalDrinks = 0;

  for (let i = 0; i < numberOfDrinks.length; i += 1) {
    totalDrinks += Number(numberOfDrinks[i]);
  }
  if (totalDrinks === 1) {
    return '1 copo de água';
  }
  return `${totalDrinks} copos de água`;
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
