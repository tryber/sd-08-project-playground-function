// Desafio 1
function compareTrue(num1, num2) {
  if (num1 && num2 !== 0) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
 let area = (base*height) / 2;
 return area;
}
// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(strArr) {
  return `${strArr[strArr.length-1]}, ${strArr[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties;
}

// Desafio 6
function highestCount(arrNum) {
  let highestNum = 0;
  if (arrNum[0] > arrNum[1]) {
    highestNum = arrNum[0];
  } else {
    highestNum = arrNum[1];
  }
  for (let index = 2; index < arrNum.length-1; index += 1) {
    if (arrNum[index] > highestNum) {
      highestNum = arrNum[index];
    } else {
      continue;
    }
  }
  let counter = 0;
  for (let index2 = 0; index2 < arrNum.length-1; index2 += 1) {
    if (arrNum[index2] === highestNum) {
      counter += 1;
    } else {
      continue;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(cat1 - mouse);
  let mouseCat2 = Math.abs(cat2 - mouse);
  if (mouseCat1 === mouseCat2) {
    return 'os gatos trombam e o rato foge';
  } else if (mouseCat1 < mouseCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(numArr) {
  for (let index = 0; index < numArr.length; index += 1) {
    switch (0) {
      case numArr[index] % 15:
        numArr[index] = 'fizzBuzz';
      break;
      case numArr[index] % 3:
        numArr[index] = 'fizz';
      break;
      case numArr[index] % 5:
        numArr[index] = 'buzz';
      break;
      default:
        numArr[index] = 'bug!';
      break;
    }
  }
  return numArr;
}
console.log(fizzBuzz([2, 5, 15, 7, 9, 25, 45]));


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
