// Desafio 1
function compareTrue(b1,b2) {
  if(b1 == true && b2 == true){
    return true
  } else{
    return false
  }
}

// Desafio 2
function calcArea(base,height) {
  let area = ((base*height)/2)
  return area
}

// Desafio 3
function splitSentence(string) {
  let arrayFrase = string.split(' ')
  return arrayFrase
}
// Desafio 4
function concatName(arrayString) {
  let ultimoItem = arrayString[arrayString.length -1],
      primeitoItem = arrayString[0],
      resultado = `${ultimoItem}, ${primeitoItem}`
      return resultado
}

// Desafio 5
function footballPoints(wins,ties) {
  let resultado = (wins * 3) + ties;
  return resultado
}

// Desafio 6

function highestCount(parametro) {
  let valorDoParametro = parametro,
      numerosEmOrdemCrescente = valorDoParametro.sort(),
      maiorNumero = numerosEmOrdemCrescente[numerosEmOrdemCrescente.length -1],
      numeroDeRepeticoes = 0
      
        for(let verificadorDeNumero in valorDoParametro){
          if(maiorNumero == valorDoParametro[verificadorDeNumero]){
            numeroDeRepeticoes += 1
          }
        }
      
      return numeroDeRepeticoes
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {        
  const distanciaDoGatoUmParaORato = Math.abs(mouse - cat1),
        distanciaDoGatoDoisParaORato = Math.abs(mouse - cat2)
  let   resultado = ''
        if(distanciaDoGatoUmParaORato < distanciaDoGatoDoisParaORato){
            resultado = 'cat1'
            return resultado
          }
    else if(distanciaDoGatoUmParaORato > distanciaDoGatoDoisParaORato){
            resultado = 'cat2'
            return resultado
          }else{
            resultado = "Os gatos trombam e o rato foge"
            return resultado
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
