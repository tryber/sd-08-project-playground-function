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

  let splitted = string.split(/\s+/); //expressão regular que verifica espaços https://pt.stackoverflow.com/questions/47861/como-dividir-uma-string-em-array-no-javascript
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

// Desafio 5

function footballPoints(wins, ties) {

  let winCont = wins * 3, tieCont = ties * 1;

  let total = winCont + tieCont;
  return total;
}



// Desafio 6

/* Função auxiliar */
function descobreMaiorNúmero(array){

  let maiorNumero = 0;

  for(let index = 0; index < array.length; index+=1){
    if(array[index] > maiorNumero){
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
}

function highestCount(array) {

  let repeticoes = 0;

  for(let index = 0; index < array.length; index+=1){
    if(array[index] == descobreMaiorNúmero(array)){
      repeticoes +=1;
    }
  }

  console.log(repeticoes);

}

highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  if(Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return 'cat2';

  } else if(Math.abs(cat2 - mouse) > Math.abs(cat1 - mouse)){
    return 'cat1';
  } else if(Math.abs(cat2 - mouse) == Math.abs(cat1 - mouse)){
    return 'os gatos trombam e o rato foge';
  }
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
function encode(string) {

  let array0fString = string.split('');

  for(let index = 0; index < array0fString.length; index+=1){
    if(array0fString[index] == 'a'){
      array0fString[index] = 1;
    } else if(array0fString[index] == 'e'){
      array0fString[index] = 2;
    } else if(array0fString[index] == 'i'){
      array0fString[index] = 3;
    } else if(array0fString[index] == 'o'){
      array0fString[index] = 4;
    } else if(array0fString[index] == 'u'){
      array0fString[index] = 5;
    }
  }

  return array0fString.join('');

}

function decode(string) {

  let array0fString = string.split('');

  for(let index = 0; index < array0fString.length; index+=1){
    if(array0fString[index] == 1){
      array0fString[index] = 'a';
    } else if(array0fString[index] == 2){
      array0fString[index] = 'e';
    } else if(array0fString[index] == 3){
      array0fString[index] = 'i';
    } else if(array0fString[index] == 4){
      array0fString[index] = 'o';
    } else if(array0fString[index] == 5){
      array0fString[index] = 'u';
    }
  }

  return array0fString.join('');

}
// Desafio 10                            !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function techList(array, name) {


  let list = [];

  for(let index = 0; index < array.length; index+=1){

    let obj = {
      tech: '',
      name: ''
    };

    obj.tech = array[index];
    obj.name = name;
    list[index] = obj;

  }

  return list;

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
