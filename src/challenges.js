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

let numbers = [2, 15, 7, 9, 45];

function fizzBuzz(numbers) {

  let arrayNumbers = [];

  for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 3 == 0) {
       arrayNumbers.push("fizz");
    
    } else if (numbers[i] % 5 == 0) {
       arrayNumbers.push("buzz");
    
    
    } else if (numbers[i] % 3 == 0 && numbers[i] % 5 == 0) {
       arrayNumbers.push("fizzBuzz");
       
    
    
    } else {
       arrayNumbers.push("bug!");

       return arrayNumbers;
        
    
    }
    
    }
  
  
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
