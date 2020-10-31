// Desafio 1
function compareTrue(valor1,  valor2) {

 
if (valor1  &&  valor2 ) { 

  return true 
} else {
  return false 
}
}

// Desafio 2
function calcArea(base, height) {

  let calculo = (base * height /2)

  return calculo
}

// Desafio 3
function splitSentence(string ) {
  
  return string.split(" ", string.length)
}

// Desafio 4
function concatName(string) {
  let primeiroB = string[0]; 
  let ultimoA  =  (string.reverse());
  let ultimoB = ultimoA[0];

  return ultimoB + "," + " " + primeiroB
}

// Desafio 5
function footballPoints(wins, ties) {
 let vitoria = 3
  let impate = 1
let numerodePontos = (wins*vitoria+ties*impate)
return numerodePontos
}

// Desafio 6
function highestCount(arraye) {
   
  let maiorNumero = arraye[0];
  let conta = 0;
  let maioral = 0
  

  for ( let index = 0; index <= arraye.length -1 ; index += 1) {
   
      if ( arraye[index] > maiorNumero) {
        
          maioral = arraye[index]
  
      } if ( maiorNumero === arraye[index]) {
          conta++
          
      }  

      }
  
  return conta;
 
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let maiorValor = mouse *1;
  let valor2 = cat1 * 1;
  let valor3= cat2 *1;
  let valor5 = "cat1";
  let valor6 = "cat2";
 let valor4 = ("os gatos trombam e o rato foge")
  if ( valor2/maiorValor > valor3/maiorValor) {
    return valor5
  } else if ( valor3/maiorValor > valor2/maiorValor) {
    return valor6
  } else  if (valor2 && valor3/maiorValor === 0  );
    return valor4
  }




console.log ( catAndMouse(6, 5, 5))
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
