// Desafio 1

function compareTrue(valorA, valorB) {
  // seu código aqui
  if (valorA === true && valorB === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(mySentence) {
  // seu código aqui
  let resultado = mySentence.split(" ");
  return resultado;
}

// Desafio 4
function concatName(parametro) {
  // seu código aqui
  return `${parametro[parametro.length - 1]}, ${parametro[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = wins * 3 + ties * 1;
  return totalPoints;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui

  let valorMaisAlto = Math.max(...numeros);
  var quantidade = 0;
  for (let index = 0; index <= numeros.length; index += 1) {
    if (numeros[index] == valorMaisAlto) quantidade += 1;
  }
  return quantidade;
}


// Desafio 7
function catAndMouse(mouse,cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if(distanciaCat1 > distanciaCat2){
    resposta = "cat2";
  } else if(distanciaCat1 === distanciaCat2){
    resposta = "os gatos trombam e o rato foge"
  } else{
    resposta = "cat1";
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(entradaDoUsuario) {
  // seu código aqui
  var meuArray = [];

  for (let i = 0; i < entradaDoUsuario.length; i++ ) {
    if (entradaDoUsuario[i] % 3 == 0 && entradaDoUsuario[i] % 5 == 0) {
      meuArray.push("fizzBuzz");
    } else if (entradaDoUsuario[i] % 3 == 0) {
      meuArray.push("fizz");
    } else if (entradaDoUsuario[i] % 5 == 0) {
      meuArray.push("buzz");
    } else {
      meuArray.push("bug!");
    }
  }
  return meuArray;
}

 fizzBuzz(2, 15, 7, 9, 45);


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
};
