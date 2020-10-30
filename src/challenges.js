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
  let distanciaDosGatoUmParaORato = (cat1-mouse),
     distanciaDoGatoDoisParaORato = (cat2-mouse)
  
  if (distanciaDosGatoUmParaORato < 0){
    distanciaDosGatoUmParaORato = -distanciaDosGatoUmParaORato
  }
  if (distanciaDoGatoDoisParaORato < 0) {
    distanciaDoGatoDoisParaORato = -distanciaDoGatoDoisParaORato
  }  
  if (distanciaDosGatoUmParaORato !== distanciaDoGatoDoisParaORato){
    if ((distanciaDosGatoUmParaORato) < (distanciaDoGatoDoisParaORato)){
      return 'cat1'
    } else if((distanciaDosGatoUmParaORato) > (distanciaDoGatoDoisParaORato)){
      return 'cat2'
    }
  } else {
    return "os gatos trombam e o rato foge"
  }          
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = []
  for(let index in array){
    let numeroDivisivelPorTresECinco = (array[index] % 3) == 0 && (array[index]) % 5 == 0,
        numeroDivisivelApenasPorTres   = (array[index] % 3) == 0 && (array[index]) % 5 !== 0,
        numeroDivisivelApenasPorCinco = (array[index] % 3) !== 0 && (array[index]) % 5 == 0
    switch (true) {
      case numeroDivisivelPorTresECinco:
        resultado.push('fizzBuzz')
      break;
      case numeroDivisivelApenasPorTres:
        resultado.push('fizz')
      break;
      case numeroDivisivelApenasPorCinco:
        resultado.push('buzz')
      break;
      default:
        resultado.push('bug!')
    }
  }
  return resultado
}

// Desafio 9
function encode(string) {
  let sumario ={a:1,e:2,i:3,o:4,u:5},
      letras = ['a','e','i','o','u'],
      resultado = '',
      chave = ''
  for(let index in string){
    
    resultado += chave

    for(let key in letras){
      if(string[index] == letras[key]){
        chave = sumario[(letras[key])]
        break;
      }
      else{
        chave = string[index]
      }
    } 
  } return resultado
}

function decode(string) {
  let sumario ={'1':'a','2':'e','3':'i','4':'o','5':'u'},
      letras = ['1','2','3','4','5'],
      resultado = '',
      chave = ''
  for(let index in string){
    
    resultado += chave

    for(let key in letras){
      if(string[index] == letras[key]){
        chave = sumario[(letras[key])]
        break;
      }
      else{
        chave = string[index]
      }
    } 
  } return resultado
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
