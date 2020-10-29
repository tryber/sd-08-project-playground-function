// Desafio 1
function compareTrue(valor1, valor2) {
  let verd = true

  if (valor1 && valor2 === verd) {
    return true
  }
  else {
    return false
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {

  let calculo = (base * height) / 2

  return calculo
}
console.log(calcArea(20, 4))

// Desafio 3 
function splitSentence(string) {

  let spliting = string.split(' ');

  return spliting

}
console.log(splitSentence("oi meu nome e mateus"))



// Desafio 4  s
function concatName(array) {





  return array[0] + "," + array[array.length - 1]
}




console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo', 'ZINZINZIN']))

// Desafio 5
function footballPoints(wins, ties) {

  let vitorias = wins * 3
  let empates = ties * 1

  return vitorias + empates



}

console.log(footballPoints(9, 5))

// Desafio 6
function highestCount(seq) {

  let maior;

  for (let index = 0; index < seq.length; index++) {
    for (let index1 = 0; index1 < seq[index].length; index1++) {

      if (seq[index] > seq[index1]) {
        maior = seq[index1]

      }


      return maior

    }


  }

}


console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse() {



 
}

// Desafio 8
function fizzBuzz(nmrs) {

  let ret = nmrs
  
  for (let i = 0; i < ret.length; i++) {
    if (ret[i] % 3 == 0) {
      console.log("fizz")
    }
    else if (ret[i] % 5 == 0) {
      console.log("buzz")
    }
    else if (ret[i] % 5 == 0 && ret[i] % 3 == 0) {
      console.log("fizzBuzz")

    }
    else
      console.log("bug")

      
  }

  return  " "
}



console.log(fizzBuzz([2, 15, 7, 9, 45]))

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
