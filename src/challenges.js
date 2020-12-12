// Desafio 1
function compareTrue(passei, trybe) {
  if (passei === true && trybe === true) {
    return true
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;  
}

// Desafio 3
function splitSentence(texto) {
  const split = texto.split(' ');
  return split;
}

// Desafio 4
function concatName(nome) {
  const concat = `${nome[nome.length-1]}, ${nome[0]}`;
  return concat;
}
// Desafio 5

function footballPoints(wins, ties) {
  const sum = (wins * 3) + ties;
  return sum;
}

// Desafio 6
function highestCount(numbers) {
   let highestNumber = 0;
   let repeat = 0;
     numbers.forEach(elem => {
    if (elem > highestNumber) {
      highestNumber = elem;
    }
    if (elem === highestNumber) {
     repeat = repeat + 1;
   }
  });
  return repeat;  
}


// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
}

// Desafio 8

function fizzBuzz(numbers) {
  let newArray = [];
  numbers.forEach(elem => {
    if (elem % 3 === 0 && elem % 5 !== 0) {
      newArray.push('fizz');
    }
    if (elem % 5 === 0 && elem % 3 !== 0) {
      newArray.push('buzz');
    }
    if (elem % 3 === 0 && elem % 5 === 0) {
      newArray.push('fizzBuzz')
    } else {
      newArray.push('bug!')
    }
  });
  return newArray;
}
// Desafio 9


function encode(string) {

}



function decode(string2) {

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
