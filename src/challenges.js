// Desafio 1
function compareTrue(num1,num2) {
  if (num1 == true && num2 == true) {
    return true;
  }

else { 
    return false;  
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
// Desafio 4
function concatName(lista) {
  let ordemInversa = []
  for (var index = lista.length -1;index>=0;index-=1){
    ordemInversa.push (lista[index]);
    } 
      return ordemInversa;
 }
 
// Desafio 5
function footballPoints(wins,ties) {
    let finalScore = wins*3 + ties;
    return finalScore;
}

// Desafio 6
function highestCount(numeros) {
  let max = Math.max.apply(null, numeros)
  contador=0;
  for (let index = 0; index<numeros.length; index+=1) {
    if (numeros[index] === max){
      contador += 1
    } 
  } return contador;
} 

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  cat1=cat1-mouse;
  cat2=cat2-mouse;
  if (Math.abs(cat1) < Math.abs(cat2)){
    return "cat1";
  }
  
  else if (Math.abs(cat2) < Math.abs(cat1)) {
    return "cat2"
    }
  else if (Math.abs(cat2) == Math.abs(cat1)){
    return "os gatos trombam e o rato foge";
  }
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
function encode(telefone) {
  telefone = new Array(11)
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

