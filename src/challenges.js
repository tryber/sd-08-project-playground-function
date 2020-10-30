// Project 02 - João Carlito

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true
  }
  return false
}
console.log(compareTrue(2, 'João'))

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2
  return triangleArea
}
console.log(calcArea(5, 10))

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ')
  return arrayString
}
console.log(splitSentence('Project 02 Trybe'))

// Desafio 4
function concatName(arrayStrings) {
  let firstName = arrayStrings[0]
  let lastName = arrayStrings[arrayStrings.length - 1]
  return (`${lastName}, ${firstName}`)
}
console.log(concatName(['João', 'Carlito', 'Marques', 'do', 'Nascimento', 'Neto']))

// Desafio 5
function footballPoints(wins, ties) {
  let pointsTeam = (wins *= 3) + (ties *= 1)
  return pointsTeam
}
console.log(footballPoints(10, 12))

// Desafio 6
function highestCount(array) {
  let number = array[0]
  for (let property in array) {
    if (array[property] > number) {
      number = array[property]
    }
  }

  let repeatNumber = 0
  for (let property2 in array) {
    if (number === array[property2]) {
      repeatNumber += 1
    }
  }
  return repeatNumber
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = 0
  let distance2 = 0

  distance1 = Math.abs(mouse - cat1)
  distance2 = Math.abs(mouse - cat2)

  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge'
  } else if (distance1 > distance2) {
    return 'cat2'
  } return 'cat1'
}
console.log(catAndMouse(2, 6, 7))

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayString = []
  for (let property in arrayNumbers) {
    if ((arrayNumbers[property] % 3 === 0) && (arrayNumbers[property] % 5 === 0)) {
      arrayString.push('fizBuzz')
    } else if (arrayNumbers[property] % 3 === 0) {
      arrayString.push('fizz')
    } else if (arrayNumbers[property] % 5 === 0) {
      arrayString.push('buzz')
    } else {
      arrayString.push('bug')
    }
  }
  return arrayString
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
