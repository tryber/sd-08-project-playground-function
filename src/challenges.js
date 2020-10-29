// Desafio 1
function compareTrue(valor1, valor2){
  return valor1 && valor2;

}




// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
  
  // seu código aqui
}
calcArea(5,10);



// Desafio 3
function splitSentence(string) {
  return string.split(' ', string.length);
}

// Desafio 4
function concatName([string]) {
  let ultimoNome = string[string.length -1];
  let primeiroNome = string[0];
  let nome = [];
  nome.push(ultimoNome + primeiroNome);
  // seu código aqui
  return nome
  return concatName
}

console.log(concatName(['Douglas', 'Ferreira', 'Pinto']));


// Desafio 5
function footballPoints(wins, ties) {
  
  let pontos = 0;
  pontos = (wins * 3) + (ties * 1);
  return pontos
  
  // seu código aqui
}
return footballPoints

// Desafio 6
function highestCount(array) {
  let maior = Math.max([array]);


return highestCount(maior);
}
console.log(highestCount([2,4,8,9,9,9]));



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
