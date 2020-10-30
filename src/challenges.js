// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
  // seu código aqui
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let words = string.split(' ');
  return words;
  }

// Desafio 4
function concatName(arrayStrings) {
  // seu código aqui
  let retorno = "";
  retorno += arrayStrings[arrayStrings.length - 1];
  retorno += ", "
  retorno += arrayStrings[0];
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let winPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let higher = numbers[0];
  for (let i = 0; i < numbers.length; i += 1){
    if (numbers[i] > higher){
      higher = numbers[i];
    }
  }
  let repeticoes = 0;
  for (let j = 0; j < numbers.length; j += 1){
    if (numbers[j] === higher){
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let cat1ToMouse = cat1 - mouse;
  let cat2ToMouse = cat2 - mouse;
  let winner;
  if (cat1ToMouse === cat2ToMouse){
    let empate = "Os gatos trombam e o rato foge";
    return empate;
  } else if (cat1ToMouse > cat2ToMouse){
    winner = "cat2";
    return winner;
  } else {
    winner = "cat1";
    return winner;
  }
}


// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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
