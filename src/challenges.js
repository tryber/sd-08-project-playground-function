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
//console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
  let resultado = [];
  resultado = string.split(" "); 
  return resultado;
}
//let teste = "go trybe";
//console.log(splitSentence(teste));


// Desafio 4
function concatName(vetorString) {
  let resultado = "";
  resultado = vetorString[vetorString.length -1] + "," + " " + vetorString[0];
  return resultado;
}
//let teste = ["Wagner", "Berna", "Medeiros", "Azevedo"];
//console.log(concatName(teste));

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = (wins * 3) + (ties * 1);
  return resultado;
}

// Desafio 6
function highestCount(vetorNum) {
  let resultado;
  vetorNum.sort((a,b) => a - b);
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
//let teste = [15, 9, 8, 15, 2, 7];
//console.log(highestCount(teste));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

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
//let vetorTeste = [2, 15, 7, 9, 45];
//console.log(fizzBuzz(vetorTeste));

// Desafio 9
function encode(string) {
  let = resultado = "";
  resultado = string.replace("a", "1");
  resultado = resultado.replace("e", "2");
  resultado = resultado.replace("i", "3");
  resultado = resultado.replace("o", "4");
  resultado = resultado.replace("u", "5");
  
}
function decode() {
  let = resultado = "";
  resultado = string.replace("1", "a");
  resultado = resultado.replace("2", "e");
  resultado = resultado.replace("3", "i");
  resultado = resultado.replace("4", "o");
  resultado = resultado.replace("5", "u");
  return resultado;
}
//let teste = "hi there!"
//console.log(encode(teste));

// Desafio 10
function techList(vetor, name) {
  let resultado;

return resultado;
}
console.log
let teste = ["React", "Jest", "HTML", "CSS", "JavaScript"];
let nome = "Wagner";
console.log(encode(teste, nome));
//Desafio 11
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
