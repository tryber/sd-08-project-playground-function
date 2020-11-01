// Desafio 1
function compareTrue(valorX, valorY) {
  if (valorX === true && valorY === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) /2;
  return area;
}

console.log(calcArea(8, 10));

// Desafio 3 - as informações referentes ao split() foram retiradas do dev media:https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
function splitSentence(word) {
    let array = [];
    array = word.split(" ");
    return array;
}

console.log(splitSentence('bruno candido morais'));

// Desafio 4
function concatName(last_first) {
  let arrayName = [];
  for(let index = 0; index < last_first.length; index++){
   arrayName.push(last_first[index]);
   
}
  return(arrayName[arrayName.length-1] + ", " + arrayName[0])
}

console.log(concatName(['Bruno', 'Candido', 'Morais']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins *3) + ties;
  return points;
}

console.log(footballPoints(5, 1));

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){ 
  if((cat2 - mouse) == (cat1 - mouse)) {
  return 'Os gatos trombam e o rato foge';
  }else if((cat1 - mouse) < (cat2 - mouse)){
    return 'cat1';
  }else{
    return 'cat2';
  }
}  
console.log(catAndMouse(1, 7, 4));

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
