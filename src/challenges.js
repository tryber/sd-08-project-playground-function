// Desafio 1
function compareTrue(a,b) {
  return(a && b)
}
// Desafio 2
function calcArea(base,height) {
  return(base*height)/2
}

// Desafio 3
function splitSentence(resultado) {
  return resultado.split(" ");
}

// Desafio 4
function concatName(param1) {
  return param1[param1.length -1]+ ', '+ param1[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount() {
    let cont = 0;
    let maiorValor = maiorNumero(arrayNumeros);
  
    for (let key in arrayNumeros){
        if (arrayNumeros[key] === maiorValor){ 
            cont += 1;
        }        
    }    
  
    return cont;
  }
  
  function maiorNumero(arrayNumeros){
    let maiorValor = arrayNumeros[0];
    for (let key in arrayNumeros){
        if (arrayNumeros[key] > maiorValor){ 
            maiorValor = arrayNumeros[key];
        }        
    }    
  
    return maiorValor;
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