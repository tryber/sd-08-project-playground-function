// Desafio 1
function compareTrue(boolean1, boolean2) {
  let trueOrFalse = (boolean1 && boolean2) ? true : false;
  return trueOrFalse;
}

// Desafio 2

function calcArea(base, height) {
  return base*height/2;
}

// Desafio 3
let string = 'go Trybe';

function splitSentence(string) {

  let splitted = string.split(/\s+/);
  return splitted;
}



// Desafio 4
let arrayOfStrings = ['Gabriel', 'Max', 'Gomes', 'de', 'Bessa'];

function concatName(arrayOfStrings) {
  let aux1 = '', aux2 = '', lastName = arrayOfStrings.length -1;
  aux1 = arrayOfStrings[0];
  aux2 = arrayOfStrings[lastName];

  let newString = `${aux2}, ${aux1}`;

  console.log(newString);

  return newString;

}

concatName(arrayOfStrings);

// Desafio 5     DA PRA MELHORAR

function footballPoints(wins, ties) {

  let winCont = wins * 3, tieCont = ties * 1;

  let total = winCont + tieCont;
  return total;
}



// Desafio 6                     !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {

  let returningArray = [];

  for(index in array) {
    if((array[index] % 3 == 0) && (array[index] % 5 == 0)){
      returningArray[index] = 'fizzBuzz';
    } else if(array[index] % 3 == 0){
      returningArray[index] = 'fizz';
    } else if(array[index] % 5 == 0){
      returningArray[index] = 'buzz';
    } else {
      returningArray[index] = 'bug!';
    }
  }

  return returningArray;

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
