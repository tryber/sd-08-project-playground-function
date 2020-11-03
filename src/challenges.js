// Desafio 1
function compareTrue(valor1,valor2) {
  // seu código aqui
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return (base*height)/2
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let palavras = frase.split(' ');
  return palavras;
}


// Desafio 4
function concatName(array) {
  // seu código aqui
  let primeiroNome = array[0];
  let ultimoNome = array[array.length -1];
  return ultimoNome + ", " + primeiroNome; 
}


// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let resultado = (wins*3)+ties;
  return resultado
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numero = 0;
  let resultado = 0;
  for (let index = 0; index < array.length; index++) {
    if (numero < array[index]) {
      numero = array[index];
      resultado = 1;
    } else if (numero === array[index]){
      resultado = resultado + 1;
    }    
  }
  return resultado;
}


// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  // seu código aqui
  let distanciaCat1;
  let distanciaCat2;

  if (cat1 > mouse) {
    distanciaCat1 = cat1 - mouse;
  } else {
    distanciaCat1 = mouse - cat1;
  }

  if (cat2 > mouse) {
    distanciaCat2 = cat2 - mouse;
  } else {
    distanciaCat2 = mouse - cat2;
  }

  if (distanciaCat1 > distanciaCat2) {
    return "cat2";
  } else if (distanciaCat1 < distanciaCat2) {
    return "cat1";    
  } else {
    return "os gatos trombam e o rato foge";
  }
}


// Desafio 8
function fizzBuzz(array) {
  // seu código aqui  
  let resultado = [];
  for (let index = 0; index < array.length; index++) {
    
    if (array[index]%3 == 0 && array[index]%5 == 0) {
      resultado.push("fizzBuzz");
    } else if (array[index]%5 == 0) {
      resultado.push("buzz");
    } else if (array[index]%3 == 0) {
      resultado.push("fizz");
    } else{
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
