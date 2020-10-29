// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue && secondValue) {
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
function splitSentence(sentence) {
  return sentence.split(' ');

// Usei o método split que relembrei em https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string. , esse método corta a string sempre que passa pelo valor especificado (nesse caso um espaço) e ordena os "pedaços" em um array.
}

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount() {
  //
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let win;
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    win = 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    win = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    win = 'cat2';
  }
  return win;
// Usei a função de valor absoluto que aprendi nesse site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs , essa função retorna o módulo do valor do input.
}

// Desafio 8
function fizzBuzz(numbers) {
  let answers = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      answers.push('fizzBuzz');
    } else if (numbers[index] % 3 == 0) {
      answers.push('fizz');
    } else if (numbers[index] % 5 == 0) {
      answers.push('buzz');
    } else {
      answers.push('bug!');
    }
  }
  return answers;
}

// Desafio 9
function encode(message) {
  let newMessage = "";
  for (let index in message) {
    if (message[index] === "a") {
      newMessage += "1";
    } else if (message[index] === "e") {
      newMessage += "2";
    } else if (message[index] === "i") {
      newMessage += "3";
    } else if (message[index] === "o") {
      newMessage += "4";
    } else if (message[index] === "u") {
      newMessage += "5";
    } else {
      newMessage += message[index];
    }
  }
  return newMessage;
}
function decode(message) {
  let newMessage = "";
  for (let index in message) {
    if (message[index] === "1") {
      newMessage += "a";
    } else if (message[index] === "2") {
      newMessage += "e";
    } else if (message[index] === "3") {
      newMessage += "i";
    } else if (message[index] === "4") {
      newMessage += "o";
    } else if (message[index] === "5") {
      newMessage += "u";
    } else {
      newMessage += message[index];
    }
  }
  return newMessage;
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
