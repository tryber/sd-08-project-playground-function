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
  let cat1ToMouse = Math.abs(cat1 - mouse);
  let cat2ToMouse = Math.abs(cat2 - mouse);
  let winner;
  if (cat1ToMouse === cat2ToMouse){
    let empate = "Os gatos trombam e o rato foge";
    return empate;
  } else if (cat1ToMouse > cat2ToMouse){
    winner = "cat2";
    return winner;
  } else if (cat2ToMouse > cat1ToMouse){
    winner = "cat1";
    return winner;
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let resultado = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] % 3 == 0 && array[i] % 5 == 0){
      resultado.push("fizzBuzz")
    } else if (array[i] % 3 == 0){
      resultado.push("fizz");
    } else if (array[i] % 5 == 0){
      resultado.push("buzz");
    } else {
      resultado.push("bug!")
    }
  }
  return resultado;
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
