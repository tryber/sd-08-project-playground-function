// Desafio 1
function compareTrue(valor1, valor2) {
  if(valor1 === 5 && valor2 === 10){
    console.log(true);
  }else{
    console.log(false)
  }
return compareTrue;  

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
  return footballPoints
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
