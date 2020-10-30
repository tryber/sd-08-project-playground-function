// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(fullSentence) {
  let splitWord = "";
  let splittedSentence = [];
  for (index = 0; index <= fullSentence.length; index += 1) {
    if (fullSentence[index] != " " && index != fullSentence.length) {
      splitWord += fullSentence[index];
    } else {
      splittedSentence.push(splitWord);
      splitWord = "";
    }
  }
  return splittedSentence;
}

// Desafio 4
function concatName(namesList) {
  let printedName = namesList[namesList.length - 1] + ", " + namesList[0];
  return printedName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(numbersList) {
  let highestNumber = 0;
  let highestNumberCounter = 0;
  for (index = 0; index < numbersList.length; index += 1) {
    for (index2 = 0; index2 < numbersList.length; index2 += 1) {
      if (index != index2) {
        if (numbersList[index] > highestNumber) {
          highestNumber = numbersList[index];
        }
      }
    }
  }
  for (index = 0; index < numbersList.length; index += 1) {
    if (highestNumber == numbersList[index]) {
      highestNumberCounter += 1;
    }
  }
  return highestNumberCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  } else if (Math.abs(cat1 - mouse) == Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let stringArray = [];
  for (index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 == 0 && numbersArray[index] % 5 != 0) {
      stringArray.push("fizz");
    } else if (numbersArray[index] % 3 != 0 && numbersArray[index] % 5 == 0) {
      stringArray.push("buzz");
    } else if (numbersArray[index] % 3 == 0 && numbersArray[index] % 5 == 0) {
      stringArray.push("fizzBuzz");
    } else {
      stringArray.push("bug!");
    }
  }
  return stringArray;
}

// Desafio 9
function encode(encodeWord) {
  let encodedString = "";
  for (index = 0; index < encodeWord.length; index += 1) {
    if (encodeWord[index] == "a") {
      encodedString += "1";
    } else if (encodeWord[index] == "e") {
      encodedString += "2";
    } else if (encodeWord[index] == "i") {
      encodedString += "3";
    } else if (encodeWord[index] == "o") {
      encodedString += "4";
    } else if (encodeWord[index] == "u") {
      encodedString += "5";
    } else {
      encodedString += encodeWord[index];
    }
  }
  return encodedString;
}

function decode(decodeWord) {
  let decodedString = "";
  for (index = 0; index < decodeWord.length; index += 1) {
    if (decodeWord[index] == "1") {
      decodedString += "a";
    } else if (decodeWord[index] == "2") {
      decodedString += "e";
    } else if (decodeWord[index] == "3") {
      decodedString += "i";
    } else if (decodeWord[index] == "4") {
      decodedString += "o";
    } else if (decodeWord[index] == "5") {
      decodedString += "u";
    } else {
      decodedString += decodeWord[index];
    }
  }
  return decodedString;
}

// Desafio 10
function techList(techName, name) {
  if (techName.length == 0) {
    return "Vazio!";
  } else {
    techName.sort();
    let techList = [];
    for (index = 0; index < techName.length; index += 1) {
      let techDetails = {};
      techDetails.tech = techName[index];
      techDetails.name = name;
      techList.push(techDetails);
    }
    return techList;
  }
}

// Desafio 11
function generatePhoneNumber(phoneNumbers) {
  if (phoneNumbers.length != 11) {
    return "Array com tamanho incorreto.";
  } else {
    let mostRepeated = 0;
    let negativeNumber = 0;
    let biggerThan9 = 0;
    for (index = 0; index < phoneNumbers.length; index += 1) {
      let repeatCounter = 0;
      let timesRepeated = 0;
      for (index2 = 0; index2 < phoneNumbers.length; index2 += 1) {
        if (phoneNumbers[index] == phoneNumbers[index2]) {
          repeatCounter += 1;
        }
      }
      timesRepeated = repeatCounter;
      if (timesRepeated > mostRepeated) {
        mostRepeated = timesRepeated;
      }
      if (phoneNumbers[index] < 0) {
        negativeNumber += 1;
      }
      if (phoneNumbers[index] > 9) {
        biggerThan9 += 1;
      }
    }
    if (mostRepeated >=3 || negativeNumber > 0 || biggerThan9 > 0) {
      return "não é possível gerar um número de telefone com esses valores";
    } else {
      return `(${phoneNumbers[0]}${phoneNumbers[1]}) ${phoneNumbers[2]}${phoneNumbers[3]}${phoneNumbers[4]}${phoneNumbers[5]}${phoneNumbers[6]}-${phoneNumbers[7]}${phoneNumbers[8]}${phoneNumbers[9]}${phoneNumbers[10]}`
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    let sideA = true;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    let sideB = true;
  }
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    let sideC = true;
  }
  if (sideA == true && sideB == true && sideC == true) {
    return true;
  } else {
    return false;
  }
}

// let teste = [2, 2, 2, 6, 1,3,4,7,8,2,0];
// console.log(generatePhoneNumber(teste));


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
