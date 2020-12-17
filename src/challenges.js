// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height / 2);
  return area;
}

console.log(calcArea(10, 7));

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Gordinho']));

// Desafio 5
function footballPoints(wins, ties) {
  result = (wins * 3) + (ties * 1);
  return result;
}

console.log(footballPoints(3, 2));

// Desafio 6
function highestCount(array) {
  let count = 0;
  let sortedArray = array.sort((a, b) => {b - a});
  for (let number in sortedArray) {
    if (sortedArray[number] === array[0]) {
      count += 1;
    }
  }
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 9, 9, 5, 9, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let sumCat1 = Math.abs(mouse - cat1);
  let sumCat2 = Math.abs(mouse - cat2);
  if (sumCat1 > sumCat2) {
    return cat1;
  } else if (sumCat1 < sumCat2) {
    return cat2;
  } else {
    return 'Os gatos trombam e o rato foge'
  }
}

console.log(catAndMouse(5, 3, 7))

// Desafio 8
function fizzBuzz(num, array) {
    if (num % 3 === 0 && num % 5 === 0) {
      array.push('fizzBuzz');
    } else if (num % 3 === 0) {
      array.push('fizz');
    } else if (num % 5 === 0) {
      array.push('buzz');
    } else {
      return 'bug'
    }
}

function fizzBuzz(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i += 1) {
    fizzBuzzPusher(array[i], newArray);
  }
  return newArray;

// Desafio 9

let code = 'hi there!';
function encode(code) {
  let string = code.split('');
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case ' ':
        break;
      case 'a':
        string[i] = '1';
        break;
      case 'e':
        string[i] = '2';
        break;
      case 'i':
        string[i] = '3';
        break;
      case 'o':
        string[i] = '4';
        break;
      case 'u':
        string[i] = '5';
        break;
    }
  }
  return string.join('');
};

code = 'h3 th2r2!';
function decode() {
    let string = code.split('');
    for (let i = 0; i < string.length; i++) {
      switch (string[i]) {
        case ' ':
          break;
        case '1':
          string[i] = 'a';
          break;
        case '2':
          string[i] = 'e';
          break;
        case '3':
          string[i] = 'i';
          break;
        case '4':
          string[i] = 'o';
          break;
        case '5':
          string[i] = 'u';
          break;
      }
    }
    return string.join('');
}
console.log(decode(code));

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
