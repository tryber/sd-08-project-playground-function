// Desafio 1
function compareTrue(var1, var2) {
  if (var1 == true && var2 == true){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let array = [];
  array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(arrayString) {
  let palavra;
  let ultimaPosicao = arrayString.length;
  for (let i = ultimaPosicao - 1; i >= 0; i -= 1){
    if (i == ultimaPosicao - 1) {
      palavra = arrayString[i] + ',';
    } else if (i == 0){
      palavra += ' ' + arrayString[i];
    }
  } 
  return palavra;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = 0;
  for (let i = 0; i < wins; i += 1){
    resultado += + 3;
  }
  for (let j = 0; j < ties; j += 1){
    resultado += +1;
  }
  return resultado;
}

// Desafio 6
function highestCount(arrayNum) {
  let maior = arrayNum[0];
  let repete = 0;
  for (let i = 0; i < arrayNum.length; i += 1){
   if (arrayNum[i] >= maior){
     maior = arrayNum[i];
   }
   for (let j = 0; j < arrayNum.length; j += 1){
    if (maior == arrayNum[j]){
      repete += + 1;
    }
   }
   return repete;
  }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
let distanciaMouse1, distanciaMouse2;
  if (mouse > cat1){
    distanciaMouse1 = mouse - cat1;
  } else {
    distanciaMouse1 = cat1 - mouse;
  }

  if (mouse > cat2){
    distanciaMouse2 = mouse - cat2;
  } else {
    distanciaMouse2 = cat2 - mouse;
  }

  if (distanciaMouse1 > distanciaMouse2){
    return "cat2";
  } else if (distanciaMouse2 > distanciaMouse1){
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayNum) {
  for (let i = 0; i < arrayNum.length; i += 1){
    if (arrayNum[i] % 3 == 0 && arrayNum[i] % 5 == 0){
      arrayNum[i] = "fizzBuzz";
    } else if (arrayNum[i] % 5 == 0){
      arrayNum[i] = "buzz";
    } else if (arrayNum[i] % 3 == 0){
      arrayNum[i] = "fizz";
    } else {
      arrayNum[i] = "bug!"
    }
  }
  return arrayNum;
}

// Desafio 9
function encode(string) {
  let palavra = "";
  for (let i = 0; i < string.length; i += + 1){
    if (string[i] == 'a'){
      palavra += "1";
    } else if (string[i] == 'e'){
      palavra += "2";
    } else if (string[i] == 'i'){
      palavra += "3";
    } else if (string[i] == 'o'){
      palavra += "4";
    } else if (string[i] == 'u'){
      palavra += "5";
    } else {
      palavra += string[i];
    }
  }
  return palavra;
}

function decode(string) {
  let palavra = "";
  for (let i = 0; i < string.length; i += + 1){
    if (string[i] == '1'){
      palavra += "a";
    } else if (string[i] == '2'){
      palavra += "e";
    } else if (string[i] == '3'){
      palavra += "i";
    } else if (string[i] == '4'){
      palavra += "o";
    } else if (string[i] == '5'){
      palavra += "u";
    } else {
      palavra += string[i];
    }
  }
  return palavra;
}

// Desafio 10
function techList(arrayString, name) {
  arrayString.sort();
  let arrayAux = [];
  
  for (let key in arrayString){
        arrayString[key] = objeto = {
        tech: arrayString[key],
        name: name
      }
    }
    if (arrayString.length == 0){
      return "Vazio!"
    } else {
      return arrayString;
    }
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
