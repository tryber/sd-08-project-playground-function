// Desafio 1
function compareTrue(booleano1, booleano2) {
  return (booleano1 && booleano2);
}

// Desafio 2
function calcArea(base, height ) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(" ");
}

// Desafio 4
function concatName(list) {
  return (list[0] + ", " + list[list.length-1]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1-mouse;
  let distanciaCat2 = cat2-mouse;
  if (distanciaCat1 < 0){
    distanciaCat1 = -distanciaCat1
  }
  if (distanciaCat2 < 0) {
    distanciaCat2 = -distanciaCat2
  }  
  if (distanciaCat1 !== distanciaCat2){
    if ((distanciaCat1) < (distanciaCat2)){
      return cat1
    } else {
      return cat2
    }
  } else {
    return "os gatos trombam e o rato foge"
  }
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
