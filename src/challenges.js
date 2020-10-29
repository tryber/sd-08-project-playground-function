// Desafio 1
function compareTrue(a, b) {  
  if (a && b){
    return true;
  }else{
    return false;
  }
}

compareTrue(true, false);



// Desafio 2
function calcArea(base, height) {
  return (base * height / 2);
}

calcArea(10, 10);







// Desafio 3
function splitSentence(palavras) {
  
  for (let index=0;)


}





// Desafio 4

function concatName(arrayNomes) {
  return (arrayNomes[arrayNomes.length - 1] + " " + arrayNomes[0]);
}

concatName(["ruben", "gustavo", "leonardo", "luiz"]);









// Desafio 5
function footballPoints() {
  // seu código aqui
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
function fizzBuzz(arrayNumeros) {
  for (let numeros=0; numeros<arrayNumeros.length; numeros++){
    if (arrayNumeros[numeros] % 3){
      return ("fizz");
    }else if (arrayNumeros[numeros] % 5){
      return ("buzz");
    }else if (arrayNumeros[numeros] % 3 && arrayNumeros[numeros] % 5){
      return ("fizzBuzz");
    }else {
      return ("bug!");
    }  
  }  
}

fizzBuzz([2,15,7,9,45]);






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
