// Desafio 1
function compareTrue(a, b) {

    if (a && b){
      return true
    } return false

}

// Desafio 2
function calcArea(base, height) {

    let resultado = (base * height) / 2
    return resultado
}

// Desafio 3
function splitSentence(string) {

    resultado = string.split(" ")
    return resultado
}

// Desafio 4
function concatName(arrayDeString) {

  resultado = arrayDeString[arrayDeString.length -1] + ", " + arrayDeString[0]
  return resultado  
}

// Desafio 5
function footballPoints(wins, ties) {
  resultado = wins * 3 + ties
  return resultado
}


// Desafio 6
function highestCount(array) {
let maior = 0
let contador = 0

for ( i in array) {
  if (array[i] > maior) {
    maior = array[i]
  }
}
  
for ( j in array) {
  if ( maior === array[j])
  contador += 1
}
return contador

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Xmouse = Math.abs(cat1 - mouse)
  let cat2Xmouse = Math.abs(cat2 - mouse)

  if (cat1Xmouse < cat2Xmouse) {
    return "cat1"
    
  }else if (cat2Xmouse < cat1Xmouse) {
    return "cat2"
    
  } else {
    return "os gatos trombam e o rato foge"
  } 

}

// Desafio 8
function fizzBuzz(array) {
  let resultado = []

    for (i in array) {
      if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        resultado.push("fizzBuzz")

      } else if (array[i] % 3 === 0){
        resultado.push("fizz")

      } else if(array[i] % 5 === 0) {
        resultado.push("buzz")

      } else {
        resultado.push("bug")
      }
    } return resultado
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
