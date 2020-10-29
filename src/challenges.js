// Desafio 1
function compareTrue(x, y) {
 return x && y;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split (" ");
}

// Desafio 4
function concatName(arrNames) {
  let lastPosition = arrNames.length -1;

  let firstName = arrNames[0];
  let lastName = arrNames[lastPosition];
  return lastName + ", " + firstName;
  
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(arr) {
  let maiorValor = Math.max(...arr);
  let count = 0;
  for (let i = 0; i< arr.length; i +=1){
    let valorAtual = arr[i];
    if(valorAtual == maiorValor){
      count++;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  gato1 = Math.abs(cat1 - mouse);
  gato2 = Math.abs(cat2 - mouse);
  
  if (gato1 < gato2) return 'Cat1';
  if (gato2 < gato1) return 'Cat2';
  return "os gatos trombam e o rato foge";
    
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
