// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 == true && boolean2 == true){
    return true;
  }
  else{
      return false;
  }
  
}

// Desafio 2
function calcArea(base,height) {
  return base*height/2;
 }

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  return array[array.length -1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3) + ties
}

// Desafio 6
function highestCount(numeros) {
  let biggerNumber = 0
  let repeat = 0
  for(let index in numeros){
      if(numeros[index] > biggerNumber){
          biggerNumber = numeros[index]
      }
      else{}
  }
  for(let i in numeros){
      if(numeros[i] === biggerNumber){
          repeat += 1
      }
  }
  return repeat
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1;
  let distance2;
  if(cat1 > mouse){
      distance1 = cat1 - mouse;
  }
  else if(cat1 < mouse){
      distance1 = mouse - cat1;
  }
  if(cat2 > mouse){
      distance2 = cat2 - mouse;
  }
  else if(cat2 < mouse){
      distance2 = mouse - cat2;
  }
  if(distance1 < distance2){
      return "cat1"
  }
  else if(distance2 < distance1){
      return "cat2"
  }
  else if(distance1 == distance2){
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
