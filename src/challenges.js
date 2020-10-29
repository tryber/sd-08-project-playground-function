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
  for (index in sentence){
    if (sentence[index] !== ' '){
      string += sentence[index];
    }else {
      arrayString.push(string);
      string = '';
    }
  }
  arrayString.push(string)
  return arrayString
}

// Desafio 4
function concatName(arrayName) {
  let nome = `${arrayName[arrayName.length - 1]}, ${arrayName[0]}`;
  return nome;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
