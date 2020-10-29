// Desafio 1

function compareTrue (valor1, valor2) {
  if (valor1 && valor2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2

function calcArea (base, height) {
  let area = base * height / 2;
  return area;  
}

// Desafio 3

function splitSentence (literal) {
  let split = literal.split(" ");
  return split;
}

// Desafio 4
function concatName(array) {
  let string;
  for (i in array){
      if(i == array.length - 1){
          string = array[i];
      }
  }
  if(array[0]){
      string += ", " + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints (wins, ties) {
  let pontos = 0;
  for(i = 0; i < wins; i++) {
      pontos = wins * 3;
  }
  for(i = 0; i < ties; i++) {
      pontos += 1;
  }
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let numero, maiorNumero;
  let cont = 0;
  for (let i = 0; i < array.length; i++){
    numero = array[i];
    for(let j = 1; j < array.length; j++){
      if(numero < array[j]){
        maiorNumero = array[j];
      }
    }
  }
  for(let k = 0; k < array.length; k++){
    if(maiorNumero === array[k]){
      cont++;
    }
  }
  return cont;
}
  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse - cat1 < mouse - cat2){
    return "cat1";
  } else {
    return "cat2";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let a = [];
  
  for (let i = 0; i < array.length; i++){
    if(array[i] % 3 == 0){
      if(array[i] % 5 == 0){
        a[i] = "fizzBuzz";
      } else {
        a[i] = "fizz";
      }
    } else if (array[i] % 5 == 0) {
      a[i] = "buzz";
    }  else {
      a[i] = "bug";
    }
  }
  return a;
}

// Desafio 9
function encode(literal) {
  let troca = literal.toLowerCase();
  for (i in troca){
    if(troca[i] == "a"){
      troca = troca.replace(troca[i], "1");
    }
    if(troca[i] == "e"){
      troca = troca.replace(troca[i], "2");
    }
    if(troca[i] == "i"){
      troca = troca.replace(troca[i], "3");
    }
    if(troca[i] == "o"){
      troca = troca.replace(troca[i], "4");
    }
    if(troca[i] == "u"){
      troca = troca.replace(troca[i], "5");
    }
  }
  return troca;
}

function decode(literal) {
  let troca = literal.toLowerCase();

  for (i in troca){
    if(troca[i] == "1"){
      troca = troca.replace(troca[i], "a");
    }
    if(troca[i] == "2"){
      troca = troca.replace(troca[i], "e");
    }
    if(troca[i] == "3"){
      troca = troca.replace(troca[i], "i");
    }
    if(troca[i] == "4"){
      troca = troca.replace(troca[i], "o");
    }
    if(troca[i] == "5"){
      troca = troca.replace(troca[i], "u");
    }
  }
  return troca;
}

console.log(decode("t3xt2 m4lh1d5"))

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
