// Desafio 1  // commit inicial 2
function compareTrue(a , b) {
  if (a && b === true) {
    return true;
  }
    else {
      return false;
    }  
}

// Desafio 2
function calcArea(base , altura) {

  return (base * altura)/2;
}

// Desafio 3
function splitSentence(string) {
  
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let first;
  let last;

  first=array[0];
  last=array[array.length-1];

  return last + ", " + first;

}

// Desafio 5
function footballPoints(w , t) {
  let wins=w;
  let ties=t;

  return (wins*3)+ties; //acho que funcionaria apenas (w*3)+t sem precisar declarar variavel antes

}

// Desafio 6
function highestCount(array) {
  let count = 0;
  let maior = Math.max(...array);
  
  for (let pos=0; pos<array.length;pos++){
    if (array[pos] === maior){
      count++;
    }

  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let trombo = 'os gatos trombam e o rato foge';

  let distance1 = Math.abs(mouse - cat1)
  let distance2 = Math.abs(mouse - cat2)

  if (cat1 === cat2){
    return trombo;
  }
  else if (distance1 < distance2){
    return 'cat1';
  }
  else if (distance2 < distance1){
    return 'cat2';
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
