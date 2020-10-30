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
  let result = wins * 3 + ties * 1;
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
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      result[i] = 'fizzBuzz';
    } else if (array[i] % 3 == 0) {
      result[i] = 'fizz';
    } else if (array[i] % 5 == 0) {
      result[i] = 'buzz';
    } else {
      result[i] = 'bug!';
    }
  }
  return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(sentence) {
  // seu código aqui
  let sentenceEncoded = '';
  for (let i = 0; i < sentence.length; i += 1) {
    switch (sentence[i].toLowerCase()) {
      case 'a': {
        sentenceEncoded += 1;
        break;
      }
      case 'e': {
        sentenceEncoded += 2;
        break;
      }
      case 'i': {
        sentenceEncoded += 3;
        break;
      }
      case 'o': {
        sentenceEncoded += 4;
        break;
      }
      case 'u': {
        sentenceEncoded += 5;
        break;
      }
      default: {
        sentenceEncoded += sentence[i];
      }
    }
  }
  return sentenceEncoded;
}

function decode(sentence) {
  // seu código aqui
  let sentenceDecoded = '';
  for (let i = 0; i < sentence.length; i += 1) {
    switch (sentence[i]) {
      case '1': {
        sentenceDecoded += 'a';
        break;
      }
      case '2': {
        sentenceDecoded += 'e';
        break;
      }
      case '3': {
        sentenceDecoded += 'i';
        break;
      }
      case '4': {
        sentenceDecoded += 'o';
        break;
      }
      case '5': {
        sentenceDecoded += 'u';
        break;
      }
      default: {
        sentenceDecoded += sentence[i];
      }
    }
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
  } else {
    for (let i = 0; i < technologies.length; i += 1) {
      let objectAux = new Object();
      objectAux.tech = technologies[i];
      objectAux.name = name;
      objectArray.push(objectAux);
    }
    return objectArray;
  }
}
function validPhone(arrayNumber) {
  let count = 0;
  for (let i = 0; i < arrayNumber.length; i += 1) {
    count = 0;
    if (arrayNumber[i] < 0 || arrayNumber[i] > 9) {
      return false;
    }
    for (let j = 0; j < arrayNumber.length; j++) {
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
  if (arrayNumber.length != 11) {
    return 'Array com tamanho incorreto.';
  }
  if (!validPhone(arrayNumber)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  for (let i = 0; i < arrayNumber.length; i++) {
    if (i === 0) {
      numberFormated += `(`;
    }
    if (i === 2) {
      numberFormated += `) `;
    }
    if (i === 7) {
      numberFormated += `-`;
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
  } else return false;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let numberOfDrinks = drinks.match(/\d/g);
  let totalDrinks = 0;

  for (let i = 0; i < numberOfDrinks.length; i++) {
    totalDrinks += Number(numberOfDrinks[i]);
  }
  if (totalDrinks == 1) {
    return `1 copo de água`;
  }
  if (totalDrinks > 1) {
    return `${totalDrinks} copos de água`;
  }
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
