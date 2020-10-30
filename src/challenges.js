// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  } else {
    return false;
  }
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}
calcArea(10, 5);

function splitSentence(frase) {
  let x = frase.split(' ');
  return x;
}
splitSentence('Fabio Higor de Almeida');

// Desafio 4

function concatName(nomes) {
  let ultima = nomes.pop();
  let primeira = nomes.shift();
  let final = [];
  final.push(primeira);
  final.unshift(ultima);
  return final;
}
let nomes = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
concatName(nomes);

// Desafio 5
function footballPoints(highestCount, ties) {
  let vitorias = highestCount * 3;
  let empates = ties;
  let result = empates + vitorias;
  return result;
}
footballPoints(5, 3);

// Desafio 6
function highestCount(num) {
  let max = Math.max(...num);
  let y = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] === max) {
      y += 1;
    }
  }
  return y;
}
let num = [9, 1, 2, 3, 9, 5, 7];
highestCount(num);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let p1 = Math.abs(cat1 - mouse);
  let p2 = Math.abs(cat2 - mouse);
  if (p1 == p2) {
    console.log('os gatos trombam e o rato foge');
  } else if (p1 > p2) {
    console.log('cat 2');
  } else if (p1 < p2) {
    console.log('cat 1');
  }
}
catAndMouse(0, -1, 1);

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
};
