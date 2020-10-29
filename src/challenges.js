// Desafio 1 :)
function compareTrue(test1, test2) {
  let answer = false;
  if (test1 && test2){
    answer = true;
  }
  return answer;
}

// Desafio 2
function calcArea(base, height) {
  return base * height/2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(" ");
}

// Desafio 4
function concatName(name) {
  return (name[name.length-1] + ", " + name[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3*wins + ties);
}

// Desafio 6
function highestCount(numbers) {
  let sorted = numbers.sort((a,b) => a - b), counter = 1;
  for (let i = numbers.length - 1; i >=0; i -= 1){
    if (sorted[i] == sorted[i - 1]){
      counter += 1;
    } else {
      break;
    }
  }
  return counter;
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
