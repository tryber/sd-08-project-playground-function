// Desafio 1
function compareTrue(value1,value2) {
  if (value1 && value2 === true) {
   return true;
  }
  return false;
  }
  compareTrue(true, false);
  
// Desafio 2
function calcArea(base, height) {
  var resultado = (base * height) / 2;
  return resultado;
}
calcArea(10,20);

  

// Desafio 3
function splitSentence() {
  var resultado = ['Go, Trybe'];
  return resultado;
  }
  console.log(splitSentence());

// Desafio 4
function concatName() {
  for(let pos = 0; pos < concatName; pos++){
    if (pos === 0){
      console.log(concatName(pos))
    }
    else (pos === (concatName.length -1)) {
      console.log(concatName(pos))
    }

  }
}
console.log(concatName(['Milton', 'Nascimento', 'Bituca']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties
  return points
}
footballPoints(7, 2);

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
