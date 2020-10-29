// Desafio 1
function compareTrue(num1,num2) {
  if (num1=true && num2==true) {
    compareTrue=true
  }

else { compareTrue=false
  
}
}

// Desafio 2
function calcArea(base, height) {
    let areaTriangulo = (base*height)/2
    return areaTriangulo
}

// Desafio 3
function splitSentence(string, array) {
  array =[]
  
}
let nomes = ["João","paulo", "Pedro", "josé"]
// Desafio 4
function concatName(lista) {
  let ordemInversa = []
  for (var index = lista.length -1;index<=0;index--){
    ordemInversa.push+= lista[index];
    return ordemInversa;
  }
    
}
console.log(concatName(nomes));

// Desafio 5
function footballPoints() {
  // seu código aqui
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
