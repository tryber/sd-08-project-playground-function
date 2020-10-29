// Desafio 1
function compareTrue(p1,p2) {
  if(p1 && p2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return(base*height/2);
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let array = [];
  let palavra = '';
  for(char in frase){
    if(frase[char] !== ' '){
      palavra += frase[char];
    } else {
      array.push(palavra);
      palavra = '';
    }
  }
  array.push(palavra);
  return(array);
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}


// Desafio 5
function footballPoints(wins,ties) {
  let pts = 3*wins + ties;
  return pts;
}

// Desafio 6
function highestCount(array) {
  let max = array[0];
  for(let pos in array){
    if(array[pos]> max){
      max = array[pos];
    }
  }

  let count = 0;
  for (let pos in array){
    if(array[pos] === max){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(Math.abs(cat1 - mouse) < Math.abs(cat2-mouse)){
    return("cat1");
  } else if(Math.abs(cat1 - mouse) > Math.abs(cat2-mouse)){
    return("cat2");
  } else {
    return("os gatos trombam e o rato foge");
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
