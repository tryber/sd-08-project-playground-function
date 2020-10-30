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



function catAndMouse(mouse, cat1, cat2) {

  let string1 = "cat1";
  let string2 = "cat2";
  let string3 = "os gatos trombam e o rato foge";

  let resultado = [];

  

  if (mouse - cat1 < mouse - cat2) {
    resultado = string1;

  } 
  
   else if (mouse - cat2 < mouse - cat1) {
    resultado = string2;

  } else {
    resultado = string3;

  }

  return resultado;
    


  
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


function encode(string) {

  string = string.replace(/a/g , 1);
  string = string.replace(/e/g , 2);
  string = string.replace(/i/g , 3);
  string = string.replace(/o/g , 4);
  string = string.replace(/u/g , 5);

  return string;

}



function decode(string2) {

  string2 = string2.replace(/1/g, 'a');
  string2 = string2.replace(/2/g , 'e');
  string2 = string2.replace(/3/g , 'i');
  string2 = string2.replace(/4/g , 'o');
  string2 = string2.replace(/5/g , 'u');

  return string2;
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
