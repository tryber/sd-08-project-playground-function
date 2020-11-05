// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  } 
} console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
} console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(tryber) {
  // seu código aqui
  tryber.split(" ");
}
  console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(nomeCompleto) {
  // seu código aqui
  let nomeConc = nomeCompleto[""];
  for(let index = 0; index = nomeCompleto.length; index += 1) {
    nomeConc = nomeCompleto[index -1] + " " + nomeCompleto[index[0]] 
  }
  return nomeConc;
} 
  console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

  // Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPontos = 0;
  let quantidVit = 0;
  let quantiEmp = 0;
  totalPontos = (quantidVit * wins) + (quantiEmp + ties);
  return totalPontos;
}
  console.log(footballPoints(3, 1));

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
