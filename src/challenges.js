// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(" ");
}

// Desafio 4
function concatName(arrNames) {
  let lastPosition = arrNames.length - 1;
  let firstName = arrNames[0];
  let lastName = arrNames[lastPosition];
  return lastName + ", " + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalpoints = wins * 3 + ties;
  return totalpoints;
}

// Desafio 6
function highestCount(arrNumbers) {
  let highestNumber = 0;
  let highestRepeat = 0;

  for (let i = 0; i < arrNumbers.length; i += 1) {
    if (arrNumbers[i] > highestNumber) {
      highestNumber = arrNumbers[i];
      highestRepeat = 0;
    }
    if (arrNumbers[i] == highestNumber) {
      highestRepeat += 1;
    }
  }

  return highestRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return "cat1";
  }
  if (distanceCat2 < distanceCat1) {
    return "cat2";
  }
  if (distanceCat1 == distanceCat2) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrNumbers) {
  let array = [];

  for (let i in arrNumbers) {
    if (arrNumbers[i] % 3 == 0 && arrNumbers[i] % 5 == 0) {
      array.push("fizzBuzz");
    } else if (arrNumbers[i] % 3 == 0) {
      array.push("fizz");
    } else if (arrNumbers[i] % 5 == 0) {
      array.push("buzz");
    } else {
      array.push("bug!");
    }
  }
  return array;
}

// Desafio 9
function encode(strNumbers) {
  let encodeString = "";

  for (let i = 0; i < strNumbers.length; i += 1) {
    if (strNumbers[i] === "a") {
      encodeString += "1";
    } else if (strNumbers[i] === "e") {
      encodeString += "2";
    } else if (strNumbers[i] === "i") {
      encodeString += "3";
    } else if (strNumbers[i] === "o") {
      encodeString += "4";
    } else if (strNumbers[i] === "u") {
      encodeString += "5";
    } else {
      encodeString += strNumbers[i];
    }
  }
  return encodeString;
}

function decode(strLetters) {
  let decodeString = "";

  for (let i = 0; i < strLetters.length; i += 1) {
    if (strLetters[i] === "1") {
      decodeString += "a";
    } else if (strLetters[i] === "2") {
      decodeString += "e";
    } else if (strLetters[i] === "3") {
      decodeString += "i";
    } else if (strLetters[i] === "4") {
      decodeString += "o";
    } else if (strLetters[i] === "5") {
      decodeString += "u";
    } else {
      decodeString += strLetters[i];
    }
  }
  return decodeString;
}

// Desafio 10
function techList(arrTech, name) {
  if (arrTech.length == 0) {
    return "Vazio!";
  }

  arrTech.sort();

  let array = [];

  for (let i in arrTech) {
    let object = {};
    object.tech = arrTech[i];
    object.name = name;
    array.push(object);
  }
  return array;
}

// Desafio 11
function generatePhoneNumber(arrTel) {
  if (arrTel.length != 11) {
    return "Array com tamanho incorreto.";
  }

  for (let i in arrTel) {
    if (arrTel[i] < 0 || arrTel[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let i in arrTel) {
    let count = 0;
    for (let a in arrTel) {
      if (arrTel[i] == arrTel[a]) count += 1;
      if (count >= 3)
        return "não é possível gerar um número de telefone com esses valores";
    }
  }

  let phoneNumbers = arrTel.join("");
  let ddd = phoneNumbers.slice(0, 2);
  let part1 = phoneNumbers.slice(2, 7);
  let part2 = phoneNumbers.slice(7, 11);
  return `(${ddd}) ${part1}-${part2}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let validA = lineA < lineB + lineC;
  let validB = lineB < lineA + lineC;
  let validC = lineC < lineA + lineB;

  if (validA && validB && validC) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let sum = 0;

  for (let i = 0; i < string.length; i += 1) {
    let letters = string[i];
    let numbers = parseInt(letters);
    if (numbers) sum += numbers;
  }
  if (sum === 1) {
    return "1 copo de água";
  }

  return `${sum} copos de água`;
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
