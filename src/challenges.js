// Desafio 1
function compareTrue(boo, lean) {
  if (boo === true && lean === true) {
    return true
  } return false
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo
}

// Desafio 3
function splitSentence(string) {
  let frase = string
  let array = frase.split(' ')
  return array
}

// Desafio 4
function concatName(array) {
  let lastWord = array[array.length - 1]
  let firstWord = array[0]
  let concat = lastWord + ', ' + firstWord
  return concat
}
// Desafio 5
function footballPoints(wins, ties) {
  let qtdVitorias = wins
  let qtdEmpates = ties
  let pontos = (qtdVitorias * 3) + qtdEmpates
  return pontos
}

// Desafio 6
function highestCount(array) {
  let maiorNum = array[0]
  let contador = 0
  for (let i in array) {
    if (array[i] > maiorNum) {
      maiorNum = array[i]
    }
  } for (let k in array) {
    if (array[k] === maiorNum) {
      contador += 1
    }
  }
  return contador
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let answer = ''
  let dist1 = mouse - (cat1)
  let dist2 = mouse - (cat2)
  let distRatGat1 = Math.abs(dist1)
  let distRatGat2 = Math.abs(dist2)
  if (distRatGat1 < distRatGat2) {
    answer = 'cat1'
  } else if (distRatGat2 < distRatGat1) {
    answer = 'cat2'
  } else {
    answer = 'os gatos trombam e o rato foge'
  } return answer
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = []
  let fizz = 'fizz'
  let buzz = 'buzz'
  let bug = 'bug!'
  let fb = 'fizzBuzz'
  for (let i in array) {
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
}

// Desafio 9
function encode(string) {
  let mainArr = string.split('')

  for (let i in mainArr) {
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
}
function decode(string) {
  let mainArr = string.split('')
  for (let i in mainArr) {
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
}
// Desafio 10
function techList(array, name) {
  let materias = array.sort()
  let error = 'Vazio!'
  let arrayObj = []
  if (materias.length === 0) {
    return error
  } for (let i in materias) {
    materias[i] = {
      tech: materias[i],
      name: name,
    }
    arrayObj.push(materias[i])
  } return arrayObj
}

// Desafio 11
function generatePhoneNumber(array) {
    let phoneNumber = '(xx) xxxxx-xxxx'
    let counts = []
  if(array.length !== 11){
    phoneNumber = "Array com tamanho incorreto."
  }else {
    array.forEach(function (i) { //https://www.codegrepper.com/code-examples/javascript/count+duplicates+array+js
      counts[i] = (counts[i] || 0) + 1;
    });
    for(i = 0; i < array.length; i += 1){
      if(array[i] < 0 || array[i] > 9 || counts[i] >= 3){
        phoneNumber = 'não é possível gerar um número de telefone com esses valores'
      }
      phoneNumber = phoneNumber.replace('x', array[i]) //https://medium.com/devsoonote/codewars-05-create-phone-number-f94d7f594c90
    }
  }
  
  return phoneNumber
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 0, 0, 0]))

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
