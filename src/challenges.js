// Desafio 1
function compareTrue(bool1,bool2) {
  if(bool1 === true && bool2 === true){
    return true; 
  }else{
    return false;
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base,height) {
  let areaTriangulo;
  areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}
console.log(calcArea(4,6))

// Desafio 3
//Bibliografia: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array. 
https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array. 

function splitSentence(string) {
  let dividido = [];
  dividido = string.split(" ");
  return dividido;
}
console.log(splitSentence("ola povo"))

// Desafio 4
function concatName(array) {
  let invertido = [];
  for(let i = 0; i < array.length; i++){
  invertido.push(array[i]);
  }
  return(invertido[invertido.length-1] + ", " + invertido[0])
} 
console.log(concatName(['pedro','joão','rosa','maria']))

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins *3) + ties;
  return points;
} 
console.log(footballPoints(3,2))

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  let gatoVencedor;
  if(cat1==cat2){
    gatoVencedor = "os gatos trombam e o rato foge";
  }else if((cat1-mouse)>(cat2-mouse)) {
    gatoVencedor = "cat2";
  }else if((cat2-mouse)>(cat1-mouse)) {
    gatoVencedor = "cat1";
  }else{
    gatoVencedor = "Digite somente posições válidas";
  }
  return gatoVencedor;
}
console.log(catAndMouse(2,3,3))

// Desafio 8
function fizzBuzz(array) {
  let divisiveis = [];
  for(let i=0; i< array.length; i++){
    if((array[i]%3==0) && (array[i]%5==0)) {
    divisiveis[i] = "fizzBuzz"
    }else if(array[i]%3==0) {
      divisiveis[i] = "fizz";
    }else if(array[i]%5==0) {
      divisiveis[i] = "buzz";
    }else {
      divisiveis[i] = "bug!"
    }    
  }
  return divisiveis;
}
console.log(fizzBuzz([2,3,15,30]));

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
