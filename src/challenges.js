// Desafio 1
function compareTrue(primeiroBoleano, segundoBolenao) {
  
  if(primeiroBoleano == true && segundoBolenao == true) {
    return true;
  } else if(primeiroBoleano == false || segundoBolenao == false){
    return false;
  }
}
// let a = true, b = false;
// console.log(compareTrue(a, b));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(2, 6));

// Desafio 3
function splitSentence(string) {
  let retorno = [];
  let pegaArray = '';

  for (let indice = 0; indice <= string.length; indice++) {
    if(string[indice] == ' ' || indice == string.length){
      retorno.push(pegaArray);
      pegaArray = '';
    }else if(string[indice] != ' ') {
      pegaArray += string[indice];
    }
  }
  return retorno;
}
// console.log(splitSentence('wr ra'));

// Desafio 4
function concatName(theArray) {
  return theArray[theArray.length-1] + ', ' + theArray[0] + ' .';
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
console.log(footballPoints(1, 3));

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
