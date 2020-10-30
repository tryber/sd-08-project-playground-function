// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2){
    return true;
  } else {
    return false;
  }
}
compareTrue();

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2;
  return area;
}
calcArea();

// Desafio 3
function splitSentence(separate) {
  // seu código aqui
  return separate.split(' ');
}
console.log(splitSentence("Go trybe"));   

// Desafio 4 Pergimtar quando completo o requisito o avaliador tira minhas notas
function concatName(phrase) {
  // seu código aqui
   // return phrase[phrase.length-1] + ' ' + phrase[0];
  }
  // console.log(concatName());
  
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
 return wins * 3 + ties;
}
console.log(footballPoints(3, 1));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  /* 
  if () {
      return cat1;
    } else if {
      return cat2;
    } else {
      return 'os gatos trombam e o rato foge'
    }
    */
}
console.log(catAndMouse());

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
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
}
triangleCheck();

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
