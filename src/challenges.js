// Arquivos de desafios | Mário Pardo

// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayString = [];
  let string = '';
  for (let index in sentence){
    if (sentence[index] !== ' ') {
      string += sentence[index];
    } else {
      arrayString.push(string);
      string = '';
    }
  }
  arrayString.push(string)
  return arrayString
}
console.log(splitSentence('Go Trybe'))

// Desafio 4
function concatName(arrayName) {
  let nome = `${arrayName[arrayName.length - 1]}, ${arrayName[0]}`;
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let count = 0;
  for (let index in array){
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let indice in array) {
    if (array[indice] === maior){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let winner;
  if (distCat1 < distCat2) {
    winner = 'cat1'
  }
  else if (distCat2 < distCat1) {
    winner = 'cat2'
  } else {
    winner = 'os gatos trombam e o rato foge'
  }
  return winner;
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
