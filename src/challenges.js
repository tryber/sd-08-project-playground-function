// Desafio 1
function compareTrue(boo, lean) {
  if (boo === true && lean === true) {
    return true
  } else {
    return false
  }
}//console.log(compareTrue(true, false))

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo
}//console.log(calcArea(7,5))

// Desafio 3
function splitSentence(string) {
  let frase = string
  let array = frase.split(' ')
  return array
}//console.log(splitSentence('Ai que vida maravilhosa'))

// Desafio 4
//let arrayGordim = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(array) {
  let palavras = array
  let lastWord = palavras[palavras.length - 1]
  let firstWord = palavras[0]
  return lastWord + ", " + firstWord
}//console.log(concatName(arrayGordim))

// Desafio 5
function footballPoints(wins, ties) {
  let qtdVitorias = wins
  let qtdEmpates = ties
  let pontos = (qtdVitorias * 3) + qtdEmpates
  return pontos
}//console.log(footballPoints(9, 10))

// Desafio 6
//let arrayGG = [9, 1, 2, 3, 9, 5, 7]
function highestCount(array) {
  let maiorNum = array[0]
  let contador = 0
  for (i in array) {
    if (array[i] > maiorNum) {
      maiorNum = array[i]
    }
  } for (k in array) {
    if (array[k] === maiorNum) {
      contador += 1
    }
  }
  return contador
}//console.log(highestCount(arrayGG))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse
  let gato1 = cat1
  let gato2 = cat2
  let answer = ""
  let dist1 = mouse - (gato1)
  let dist2 = mouse - (gato2)
  distRatGat1 = Math.abs(dist1)
  distRatGat2 = Math.abs(dist2)
  if (distRatGat1 < distRatGat2) {
    answer = 'cat1'
  } else if (distRatGat2 < distRatGat1) {
    answer = 'cat2'
  } else {
    answer = "os gatos trombam e o rato foge"
  } return answer
}//console.log(catAndMouse(3, 2 ,2))

// Desafio 8
//let arrayFizz = [2, 15, 7, 9, 45]
function fizzBuzz(array) {
  let resultado = []
  let fizz = "fizz"
  let buzz = "buzz"
  let bug = "bug!"
  let fb = "fizzBuzz"
  for (i in array) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push(fb)
    } else if (array[i] % 5 === 0) {
      resultado.push(buzz)
    } else if (array[i] % 3 === 0) {
      resultado.push(fizz)
    } else {
      resultado.push(bug)
    }
  } return resultado
}//console.log(fizzBuzz(arrayFizz))

// Desafio 9
//let str = "Hello Modafoca"
function encode(string) {
  let mainArr = string.split('')

  for (i in mainArr) {
    if (mainArr[i] === 'a') {
      mainArr[i] = '1'
    } else if (mainArr[i] === 'e') {
      mainArr[i] = '2'
    } else if (mainArr[i] === 'i') {
      mainArr[i] = '3'
    } else if (mainArr[i] === 'o') {
      mainArr[i] = '4'
    } else if (mainArr[i] === 'u') {
      mainArr[i] = '5'
    }
  } let encodeStr = mainArr.join('')
  return encodeStr
}//console.log(encode(str))
//let str2 = "h3 th2r2!"
function decode(string) {
  let mainArr = string.split('')
  for (i in mainArr) {
    if (mainArr[i] === '1') {
      mainArr[i] = 'a'
    } else if (mainArr[i] === '2') {
      mainArr[i] = 'e'
    } else if (mainArr[i] === '3') {
      mainArr[i] = 'i'
    } else if (mainArr[i] === '4') {
      mainArr[i] = 'o'
    } else if (mainArr[i] === '5') {
      mainArr[i] = 'u'
    }
  } let decodeStr = mainArr.join('')
  return decodeStr
}//console.log(decode(str2))

function techList(array, name) {
  let nome = name
  let materias = array.sort()
  let error = "Vazio!"
  let arrayObj = []
  if (materias.length === 0) {
    return error
  } else {
    for (i in materias) {
      materias[i] = {
        tech: materias[i],
        name: nome
      }
      arrayObj.push(materias[i])
    }
  }
  return arrayObj
}//console.log(techList(arrMat, strName))

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
