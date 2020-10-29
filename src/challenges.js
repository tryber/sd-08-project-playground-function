// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(a) {
  return a.split(' ');
}

// Desafio 4
function concatName(name) {
  let resp = `${name[name.length - 1]}, ${name[0]}`;
  return resp;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(a) {
  let maj = -100000;
  let rep = 0;

  for (num in a){
    if (a[num] > maj)
      maj = a[num];
  }
  for (num in a){
    if (a[num] == maj)
      rep++;
  }

  return rep;
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

console.log(compareTrue(true, false));
console.log(compareTrue(true, true));
console.log(calcArea(12, 4));
console.log(splitSentence('The Best Game Dev'));
console.log(concatName(['Natanael', 'Enéas', 'da', 'Silva', 'Neto']));
console.log(footballPoints(3, 2));
console.log(highestCount([1, 2, 9, 9, 15, 15, 15]));
