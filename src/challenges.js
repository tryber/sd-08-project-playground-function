// Desafio 1
let b = false;
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    b = true;
  }
  return b;
}

// Desafio 2
let area = 0;
function calcArea(base, height) {
  area = (base * height) / 2;
  return area;
}

// Desafio 3
let str = [];
function splitSentence(string) {
  str = string.split(' ');
  return str
}

// Desafio 4
let nomes = "";
function concatName(arrayNomes) {
  nomes = arrayNomes[arrayNomes.length - 1];
  nomes += ", ";
  nomes += arrayNomes[0];
  return nomes;
}
// Desafio 5
let pontos = 0;
function footballPoints(wins, ties) {
  pontos = wins * 3;
  pontos += ties;
  return pontos;
}
// Desafio 6

function highestCount(numeros) {
  let maior = numeros[0];
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (numeros[cont] > maior) {
      maior = numeros[cont];
    }
  }
  let maiorCont = 0;
  for (let cont = 0; cont < numeros.length; cont += 1) {
    if (numeros[cont] === maior) {
      maiorCont += 1;
    }
  }
  return maiorCont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicao1 = Math.abs(cat1 - mouse);
  let posicao2 = Math.abs(cat2 - mouse);
  let qualGato = "";
  if (posicao2 < posicao1) {
    qualGato = "cat2";
  }
  else if (posicao1 < posicao2) {
    qualGato = "cat1";
  }
  else {
    qualGato = "os gatos trombam e o rato foge";
  }
  return qualGato;
}

// Desafio 8

function fizzBuzz(arrayFizz) {
  let strFizz = [];
for (let cont = 0; cont < arrayFizz.length; cont += 1){
  if (arrayFizz[cont] % 3 == 0 && arrayFizz[cont] % 5 == 0) {
    strFizz.push("fizzBuzz");
  } 
  else if (arrayFizz[cont] % 3 == 0) {
    strFizz.push("fizz");
  } 
  else if (arrayFizz[cont] % 5 == 0) {
    strFizz.push("buzz");
  } 
  else {
    strFizz.push("bug!");
  }
}
return strFizz;
}
// Desafio 9

function encode(coding) {
  let code = "";
  for (cont =0; cont < coding.length; cont +=1){
    if (coding[cont] == "a") {
      code += "1";
    } else if (coding[cont] == "e") {
      code += "2";
    } else if (coding[cont] == "i") {
      code += "3";
    } else if (coding[cont] == "o") {
      code += "4";
    } else if (coding[cont] == "u") {
      code += "5";
    } else {
      code += coding[cont];
    }
  }
  return code; 
}
function decode(code) {
  let decoding = "";
  for (let cont = 0; cont < code.length; cont += 1) {
    if (code[cont] == "1") {
      decoding += "a";
    } else if (code[cont] == "2") {
      decoding += "e";
    } else if (code[cont] == "3") {
      decoding += "i";
    } else if (code[cont] == "4") {
      decoding += "o";
    } else if (code[cont] == "5") {
      decoding += "u";
    } else {
      decoding += code[cont];
    }
  }
  return decoding;
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
