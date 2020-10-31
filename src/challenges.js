// Desafio 1
function compareTrue(comp01, comp02) {
  let resultado;
  if (comp01 == true && comp02 == true) {
    resultado = true;
  } else {
    resultado = false;
  }
  return resultado;
}
compareTrue(true, true);
//console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}
calcArea(20, 30);

// Desafio 3
function splitSentence(string) {
  let resultado = [];
  resultado = string.split(" "); 
  return resultado;
}
let testeSplit = "go trybe";
splitSentence(testeSplit);
//.split comando aprendido no site: (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split)
//console.log(splitSentence(teste));

// Desafio 4
function concatName(vetorString) {
  let resultado = "";
  resultado = vetorString[vetorString.length -1] + "," + " " + vetorString[0];
  return resultado;
}
let testeConcat = ["Wagner", "Berna", "Medeiros", "Azevedo"];
concatName(testeConcat);
//console.log(concatName(teste));

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + (ties * 1);
  return resultado;
}
footballPoints(5, 3);

// Desafio 6
function highestCount(vetorNum) {
  let resultado;
  vetorNum.sort((a,b) => a - b);
  //
  let numMaior = vetorNum[vetorNum.length -1];
  let quantNum = 0;
  for (count = 0; count < vetorNum.length; count += 1) {
    if (numMaior == vetorNum[count]){
      quantNum += 1;
    }
  }
  resultado = quantNum;
  return resultado;
}
let testeHighest = [15, 9, 8, 15, 2, 7];
highestCount(testeHighest);
//.sort comando aprendido no site: (https://ricardo-reis.medium.com/o-m%C3%A9todo-sort-do-array-javascript-482576734e0a)
//console.log(highestCount(teste));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let resultado;
  let distanciaCat1 = Math.round(cat1 - mouse);
  let distanciaCat2 = Math.round(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    resultado = "cat1";
  } else if (distanciaCat2 < distanciaCat1) {
    resultado = "cat2";
  } else {
    resultado = "os gatos trombam e o rato foge";
  }
return resultado;
}
catAndMouse(2, 5, 3);
//Math.abs comando aprendido no site (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
//console.log(catAndMouse(10,5,3));

// Desafio 8
function fizzBuzz(vetorNum) {
  let resultado = [];
  for (let count in vetorNum) {
   if (vetorNum[count] % 3 == 0 && vetorNum[count] % 5 == 0) {
         resultado.push("fizzBuzz");
     } else if (vetorNum[count] % 3 == 0) {
         resultado.push("fizz");
     } else if (vetorNum[count] % 5 == 0) {
         resultado.push("buzz");
     } else {
         resultado.push("bug!");
     }
  }
  return resultado;
}
let testeFizzBuzz = [2, 15, 7, 9, 45];
fizzBuzz(testeFizzBuzz);
//console.log(fizzBuzz(vetorTeste));

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
