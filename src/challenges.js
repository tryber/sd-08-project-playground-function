// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
// Desafio 4
function concatName(array) {
    let first = [...array].shift();
    let last = [...array].pop();
    return `${last}, ${first}`;
    }

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let total = vitoria + empate;
  return total;
}

// Desafio 6  -   Colega Ediberto ajudou neste raciocínio.
function highestCount(numeros) {
  return repeat(numeros, maiorNumeroArray(numeros));
}

function maiorNumeroArray(array) {
  let maiorNumero = 0;
  for (let index in array) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
}

function repeat(array, maiorNumero) {
  let numeroRepete = 0;
  for (let index in array) {
    if (array[index] == maiorNumero) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
}

// Desafio 7
function catAndMouse(mouse, positionCat1, positionCat2) {
  let cat1 = Math.abs(positionCat1 - mouse);
  let cat2 = Math.abs(positionCat2 - mouse);
  if (cat1 < cat2) {
    return "cat1";
  } else if (cat2 < cat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
// Desafio 8
function fizzBuzz(array) {
  let valorResult = [];

  for(let index in array){
    if(array[index] % 3 == 0 && array[index] % 5 == 0){
      valorResult.push("fizzBuzz");
    }else if(array[index] % 3 == 0){
      valorResult.push("fizz");
    }else if(array[index] % 5 == 0){
      valorResult.push("buzz");
    }else{
      valorResult.push("bug!");
    }
  }
    return valorResult;
  }

// Desafio 9
function encode(string) {

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
