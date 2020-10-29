// Desafio 1
function compareTrue(valor1, valor2) {

  let compara;
  if (valor1 === true && valor2 === true){
    compara = true;
  }else{
    compara = false;
  }
  return compara;
}

// Desafio 2
function calcArea(base, altura) {
  
  let areaTriangulo = (base * altura) / 2;

  return areaTriangulo
}

// Desafio 3
function splitSentence(array) {
  
  let nome = array.split(" ");
  return nome;
}


// Desafio 4
function concatName(array) {
  
  let nome = array[array.length-1] + ", " + array[0];
  return nome;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  
  let points = (wins * 3) + ties;
  return points;
}


// Desafio 6
function highestCount(array) {
  let count =0;

  let maior = null;
  for(let i in array){
    if( array[i] > maior){
      maior = array[i];
      count++;
    }else if(array[i] == maior){
      count++;
    }
  }

  return count;
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
