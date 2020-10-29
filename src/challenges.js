// Desafio 1
function compareTrue(num1, num2) {
  if (num1 == true && num2 == true) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}

// Desafio 2
function calcArea(num1, num2) {
  let base = num1;
  let altura = num2;

  let areaTriangulo = (base * altura)/2
  console.log(areaTriangulo)
  return areaTriangulo 
}

// Desafio 3
function splitSentence(input) {

  let frase = [];                
  
  for (let i = 0; i < input.length; i += 1) {       
    frase += input[i]
  }
  let novoArray = frase.split(" ")        
  console.log(novoArray)
  return novoArray     
      }   
splitSentence("go Trybe")

// Desafio 4
function concatName(input) {
  let entrada = input;
  let retorno = entrada[entrada.length -1] + ", " + entrada[0]
  console.log(retorno)
  return retorno
  }  
  
concatName(["Lucas", "Cassiano", "Ferraz", "Paollilo"])

// Desafio 5
function footballPoints(wins,ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let pontos = vitorias + empates;
  console.log(pontos)  
  return pontos
} 

// Desafio 6
function highestCount(input) {
  let arrayBase = []; 
   
  
  for (let i = 0; i < input.length; i+=1){
         arrayBase.push(input[i]);
  }
  arrayBase.sort(function(a, b){
      return a-b;
  });
  let numberOfRepeats = 1; 
  for(let i=arrayBase.length-1; i >= 0; i -= 1)
  if (arrayBase[i] == arrayBase[i-1]){
  numberOfRepeats += 1
  } else {
  break;
  }

  console.log(numberOfRepeats)
  return numberOfRepeats
}highestCount([9,1,2,3,9,5,7]) 
   


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

