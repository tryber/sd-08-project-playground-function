// Desafio 1
let passei = true;
let trybe = true;


function compareTrue(passei, trybe) {
  
  if (passei === true && trybe === true) {
    return true;
  } else {
    return false;
  }
  
}

// Desafio 2
let base = 40;
let height = 20;

function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
  
}

// Desafio 3
let texto = "aqui tem uma string";

function splitSentence(texto) {
  
  let array = texto.split(" ");
  //código pesquisado no stackoverflow.com

  return array;
  
}

// Desafio 4
let nome = ["Nícolas", "Soares", "Tozato"];

function concatName(nome) {

  let concatenacao = nome[nome.length-1] + ", " + nome[0];

  return concatenacao;
  
}

// Desafio 5
let wins = 5;
let ties = 3;

function footballPoints(wins, ties) {

  let sum = wins * 3 + ties;

  return sum;
  
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

function fizzBuzz(numbers) {

  let array = [];

  for (let index = 0; index < numbers.length; index++) {

    if (numbers[index] % 3 == 0 && numbers[index] % 5 !== 0) {
      array.push("fizz");

    } else if (numbers[index] % 5 == 0 && numbers[index] % 3 !== 0) {
      array.push("buzz");

    } else if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
      array.push("fizzBuzz");

    } else {
      array.push("bug!");
    }

  }

  return array;


}

// Desafio 9
let string = "hi there!";

function encode(string) {

  var resultado = [];

  for (let i = 0; i < string.length; i++) {

    if (string[i] == 'a') {
      resultado = string.replace(/a/g, 1);

    } else if (string[i] == 'e') {
      resultado = string.replace(/e/g, 2);

    } else if (string[i] == 'i') {
      resultado = string.replace(/i/g, 3);

    } else if (string[i] == 'o') {
      resultado = string.replace(/o/g, 4);

    } else if (string[i] == 'u') {
      resultado = string.replace(/u/g, 5);
    }
  }

  return resultado;
  
}

let string2 = "h3 th2r2!";

function decode(string2) {

  var resultado2 = [];

  for (let i2 = 0; i2 < string2.length; i2++) {

    if (string2[i2] == 1) {
      resultado2 = string2.replace(/1/g, 'a');

    } else if (string2[i2] == 2) {
      resultado2 = string2.replace(/2/g, 'e');

    } else if (string2[i2] == 3) {
      resultado2 = string2.replace(/3/g, 'i');

    } else if (string2[i2] == 4) {
      resultado2 = string2.replace(/4/g, 'o');

    } else if (string2[i2] == 5) {
      resultado2 = string2.replace(/5/g, 'u');

    }
  }

  return resultado2;
  
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
