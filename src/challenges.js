// Desafio 1
function compareTrue(valor1, valor2) {
  
return (valor1 && valor2);  

// seu código aqui
}




// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
  
  // seu código aqui
}


// Desafio 3
function splitSentence(string) {
  return string.split(' ', string.length);
}
console.log(splitSentence('Alo alo alo alo alo alo'));
  // seu código aqui


// Desafio 4
function concatName(array) {
  
  let ultimoArray = array[array.length - 1];
  let primeiroArray = array[0];
  return ultimoArray+', '+primeiroArray;
  // seu código aqui
}
console.log(concatName(['douglas', 'Ferreira', 'Pinto']))



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
function fizzBuzz() {
  // seu código aqui
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
