// Desafio 1
function compareTrue(n1,n2) {
  if(n1 && n2) {
    return true
  } else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(/\s+/);
  return frase;
}

// Desafio 4
function concatName(nome) {
  
  let resultado = nome[nome.length - 1] + ", " + nome[0];
    return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties *1;
  return resultado;
}

// Desafio 6
function highestCount(valores) {
  let maiorNumero = 0;
  for(let i = 0; i < valores.length; i += 1){
    if(valores[i] > maiorNumero) {
      maiorNumero = valores[i];
    }
  }
  return maiorNumero;
  
  for(let i in valores) {
    let verificaNumeros = valores[i];
  return verificaNumeros;
  }
}
 
console.log(highestCount([4, 2, 3, 9, 7, 6, 3,9]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  for(let i = 0; i < numeros.length; i += 1) {
    if(numeros[i] % 3 == 0 && i % 5 == 0) {
      resultado.push("FizzBuzz");
    } else if (i % 3 == 0) {
      resultado.push("Fizz");
    } else if (i % 5 == 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
    return resultado;
}

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
