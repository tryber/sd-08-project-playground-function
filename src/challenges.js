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
  let maiorValor = numeros[0];
  for (let i = 0; i < numeros.length; i += 1){
    if (numeros[i] > maiorValor){
      maiorValor = numeros[i];
    }
  }
  let repetido = 0;
  for (let j = 0; j < numeros.length; j += 1){
    if (numeros[j] === maiorValor){
      repetido += 1;
    }
  }
  return repeticoes;

// Desafio 7
function catAndMouse() {
    let distanciaRatoGato1 = 0;
    let distanciaRatoGato2 = 0;
  
    distanciaRatoGato1 = mouse - cat1;
    distanciaRatoGato2 = mouse - cat2;
  
    if(distanciaRatoGato1 === distanciaRatoGato2)
    {
      return "os gatos trombam e o rato foge";
    }
    else if(distanciaRatoGato1 > distanciaRatoGato2)
    {
      return "cat2";
    }
    else
    {
      return "cat1";
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