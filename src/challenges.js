// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  string = string.trim(); // Removing whitespaces from both ends of the string

  let stringsArray = [];
  stringsArray[0] = '';
  let index = 0;

  // Runnig across the string
  for (let char = 0; char < string.length; char += 1) {
    // If current character is not a space
    if (string[char] !== ' ') {
      // Current character is concatenated to the current array position
      stringsArray[index] += string[char];
    } else {
      // If its a space, creates a new position in the array and initializes it as an empty String
      index += 1;
      stringsArray[index] = '';
    }
  }
  return stringsArray;
}

// Desafio 4
function concatName(fullName) {
  let firstName = fullName[0];
  let lastName = fullName[fullName.length - 1];

  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Function that will be used in Desafio 6
function highest(array) {
  // Storing the current highest number
  // (It stores the first value)
  let topNum = array[0];

  // Storing the current highest number's index
  let topIndex = 0;

  // Running across the array
  // (It starts on the index 1, that will be compared to the index 0)
  for (let num = 1; num < array.length; num += 1) {
    // Comparing the current value to the current highest number
    if (array[num] > topNum) {
      // Storing its number
      topNum = array[num];

      // Storing its index
      topIndex = num;
    }
  }

  // Returning the index of the highest number found in the array
  return topIndex;
}
// Desafio 6
function highestCount(numbersArray) {
  // Running highest(), that returns the position of the highest number
  let highestNum = numbersArray[highest(numbersArray)];

  // Stores the counting
  let counter = 0;

  // Running across the numbersArray
  for (let value = 0; value < numbersArray.length; value += 1) {
    // If it contains the highest number
    if (numbersArray[value] === highestNum) {
      counter += 1;
    }
  }

  // Returning the amount of times the highest number was found
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // Storing the distance between each cat and the mouse
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result = '';

  if (distCat1 < distCat2) {
    result = 'cat1';
  } else if (distCat2 < distCat1) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(arrayOfNum) {
  let fizzBuzzArray = [];

  // Running across the array of numbers given as a parameter
  for (let val = 0; val < arrayOfNum.length; val += 1) {
    if (
      // If current number is divisible by 3 and 5
      arrayOfNum[val] % 3 === 0 &&
      arrayOfNum[val] % 5 === 0
    ) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (
      // If current number is divisible by 3
      arrayOfNum[val] % 3 ===
      0
    ) {
      fizzBuzzArray.push('fizz');
    } else if (
      // If current number is divisible by 5
      arrayOfNum[val] % 5 ===
      0
    ) {
      fizzBuzzArray.push('buzz');
    } else {
      // Else
      fizzBuzzArray.push('bug!');
    }
  }

  // Returning generated array
  return fizzBuzzArray;
}

// Desafio 9
function encode(phrase) {
  // Declaring arrays for conversion
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  let encoded = '';

  // Running across the whole phrase, character by character
  for (let char = 0; char < phrase.length; char += 1) {
    // If current character is found in vowels array
    if (vowels.indexOf(phrase[char]) >= 0) {
      // The corresponding number is concatenated to the encoded String
      encoded += numbers[vowels.indexOf(phrase[char])];
    } else {
      encoded += phrase[char];
    }
  }

  // Returning the encoded phrase
  return encoded;
}

function decode(phrase) {
  // Declaring arrays for conversion
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  let decoded = '';

  // Running across the whole phrase, character by character
  for (let char = 0; char < phrase.length; char += 1) {
    // If current character is found in numbers array
    if (numbers.indexOf(phrase[char]) >= 0) {
      // The corresponding number is concatenated to the decoded String
      decoded += vowels[numbers.indexOf(phrase[char])];
    } else {
      decoded += phrase[char];
    }
  }

  // Returning the decoded phrase
  return decoded;
}

// Desafio 10
function techList(techArray, namePar) {
  let sortedArray = techArray.sort();

  let list = [];

  if (techArray.length == 0) {
    return 'Vazio!';
  }
  // Running through the techArray
  for (let tec = 0; tec < techArray.length; tec += 1) {
    list.push({
      tech: sortedArray[tec],
      name: namePar,
    });
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(array11) {
  // Putting all the digits together in a String
  let numNoMask = array11.join('');

  // Area code
  let ddd = '';
  // Left half of the phone number
  let leftNumber = '';
  // Right half of the phone number
  let rightNumber = '';
  // Final result
  let maskedNumber = '';
  // Counter for the repetition of each number
  let repCounter = 0;

  if (array11.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  // Running through the array11
  for (let currentNum = 0; currentNum < array11.length; currentNum += 1) {
    // Reseting the counter in each iteration
    repCounter = 0;

    // If the current number is lower or higher than the requested
    if (array11[currentNum] < 0 || array11[currentNum] > 9) {
      // Returns an error
      return 'não é possível gerar um número de telefone com esses valores';
      break;
    }
    // Taking each array11's number to be compared
    for (let compareNum = 0; compareNum < array11.length; compareNum += 1) {
      // If current number matches with the number compard to
      if (array11[currentNum] === array11[compareNum]) {
        repCounter += 1;
      }
    }

    if (repCounter >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  // On the following, I used the concepts learned here:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice

  // Picking the area code
  ddd = numNoMask.slice(0, 2);

  // Picking the left half of the phone number
  leftNumber = numNoMask.slice(2, 7);

  // Picking the right half of the phone number
  rightNumber = numNoMask.slice(7, 11);

  // Applying the telephone mask to the number
  maskedNumber = `(${ddd}) ${leftNumber}-${rightNumber}`;

  // Returning the masked telephone number
  return maskedNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // Checking if all values are above 0
  if (lineA <= 0 || lineB <= 0 || lineC <= 0) {
    return false;
  }

  // Checking if each side is smaller than the sum of the others
  if (
    lineA >= lineB + lineC ||
    lineB >= lineA + lineC ||
    lineC >= lineA + lineB
  ) {
    return false;
  } // Checking if each side is smaller than the absolute difference between the others
  else if (
    lineA <= Math.abs(lineB - lineC) ||
    lineB <= Math.abs(lineA - lineC) ||
    lineC <= Math.abs(lineA - lineB)
  ) {
    return false;
  }
  // If it passes all the checks, returns true
  return true;
}

// Desafio 13
function hydrate(drinkString) {
  // Store the amount of water glasses
  let waterGlasses = 0;

  // Runnig across drinkString
  for (let char = 0; char < drinkString.length; char += 1) {
    // Converting the current char into an Integer
    let currentChar = parseInt(drinkString[char]);

    // If converted char is a number
    if (!isNaN(currentChar)) {
      waterGlasses += currentChar;
    }
  }

  if (waterGlasses === 1) {
    return '1 copo de água';
  }

  // Returning the result
  return `${waterGlasses} copos de água`;

  // Consulted sources:
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/isNaN
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
