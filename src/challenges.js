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
function highestCount() {
  // seu código aqui
}

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
