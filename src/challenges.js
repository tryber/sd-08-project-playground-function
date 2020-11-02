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
function descobreMaiorNumero(array){

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
    if(array[index] == descobreMaiorNumero(array)){
      repeticoes +=1;
    }
  }

  return repeticoes;

}

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

}



// Desafio 11       !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function takeTwo(array) {
  let two = '';
  for(let index = 0; index < 2; index+=1){
    two += array[index];
  }
 return two;
}
function takeFive(array) {
  let five = '';
  for(let index = 2; index < 7; index+=1){
    five += array[index];
  }
  return five;
}
function takeFour(array) {
  let four = '';
  for(let index = 10; index > 6; index -=1){
    four += array[index];
  }
  return four.split('').reverse().join('');
}
function arrayLengthValidation(array) {
    return (array.length != 11) ? true : false;
}
function arrayIndexValidation(array){
  let valorAtual;
  let cont;
  for(let index = 0; index < array.length; index+=1){
    valorAtual = array[index];
    cont = 0;
    for(let index2 = 0; index2 < array.length; index2+=1){
      if(array[index2] == valorAtual){
        cont+=1;
      } if(array[index2] < 0 || array[index] > 9) {
        return true;
      }
    }
  }
  return ( cont >= 3) ? true : false;

}
function generatePhoneNumber(array) {
  if(array === [] || arrayLengthValidation(array) == true){
    console.log('Array com tamanho incorreto.');
    return 'Array com tamanho incorreto.';
  }
  if(arrayIndexValidation(array) == true){
    console.log('não é possível gerar um número de telefone com esses valores');
    return 'não é possível gerar um número de telefone com esses valores';
  } else {
    console.log(`(${takeTwo(array)}) ${takeFive(array)}-${takeFour(array)}`);
    return `(${takeTwo(array)}) ${takeFive(array)}-${takeFour(array)}`;
  }
}

generatePhoneNumber([3, 2, 1, 9, 5, 0, 7, 4, 0, 6, 1]);




// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function cupsOfWaterArray(string){
  return string.match(/\d+/g);      // regex from https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
}
function hydrate(string) {
  let CupsOfWaterCont = 0;
  for(let index = 0; index < cupsOfWaterArray(string).length; index+=1){
    CupsOfWaterCont+=parseInt(cupsOfWaterArray(string)[index]);
  }

  return (CupsOfWaterCont == 1) ? '1 copo de água' : `${CupsOfWaterCont} copos de água`;
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
