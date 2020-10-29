// Desafio 1
function compareTrue(numero1, numero2) {
  if (numero1 && numero2 === true){
     return true}
     else {return false};
}
console.log(compareTrue(false, false));


// Desafio 2
function calcArea(base, height) {return (base * height)/2;
 
}
console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(string) { 
  return string.split(" ");
 
}
console.log(splitSentence("Oi Tryber"))

// Desafio 4
function concatName(arrayDeNomes) {
  for (let index = 0; index < arrayDeNomes.length - 1; index ++){
      return arrayDeNomes[arrayDeNomes.length - 1] + " " + arrayDeNomes[index];
  }
}
  console.log(concatName(["Bruce", "nascimento", "Dias"]));


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
