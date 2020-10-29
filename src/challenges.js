// Desafio 1
function compareTrue(valor1, valor2) {
  let verd = true

  if (valor1 && valor2 === verd) {
    return true
  }
  else {
    return false
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {

  let calculo = (base * height) / 2

  return calculo
}
console.log(calcArea(20, 4))

// Desafio 3 split separa as palavras a partir do espaco " " ou virgula " ," //retira e divide em arrays
function splitSentence(string) {
  
  let spliting = string.split(' ') ;
  
  
  


  return spliting
  
  
}
console.log(splitSentence("oi meu nome e mateus"))



// Desafio 4  s
function concatName(array) {




  
  return array[0]  + "," + array[array.length -1] 
}

 


console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo','ZINZINZIN']))

// Desafio 5
function footballPoints() {


 
}

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
