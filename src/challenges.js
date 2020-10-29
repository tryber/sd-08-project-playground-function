// Desafio 1
function compareTrue(num1,num2) {
  if (num1==true && num2==true) {
    console.log(true);
  }

else { 
    console.log(false);  
  }
}
console.log(compareTrue(um,dois));

// Desafio 2
function calcArea(base, height) {
    let areaTriangulo = (base*height)/2
    return areaTriangulo
}

// Desafio 3
function splitSentence(string, array) {
  array =[]
  
}
// Desafio 4
function concatName(lista) {
  let ordemInversa = []
  for (var index = lista.length -1;index>=0;index-=1){
    ordemInversa.push (lista[index]);
      } return ordemInversa;
 }
 
// Desafio 5
function footballPoints(wins,ties) {
    let finalScore = wins*3 + ties;
    return finalScore;
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
function fizzBuzz(array) {
  let resposta = []
  for (let index = 0; index<array.length;index+=1){
    if (array[index]%3 == 0 && array[index]%5==0) {
      resposta.push ("fizzBuzz");
      
    }
    else if (array[index]%3 == 0 && array[index]%5 != 0) {
      resposta.push("fizz");
      
    }
    else if (array[index]%3 != 0 && array[index]%5 == 0) {
      resposta.push("buzz");
    
    }
    else if (array [index]%3 != 0 && array[index]%5 != 0) {
      resposta.push ("bug!");
    }

  }
    return resposta
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
