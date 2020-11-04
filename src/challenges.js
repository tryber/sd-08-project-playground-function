// Project 02 - João Carlito

// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true
  }
  return false
}
// console.log(compareTrue(2, 'João'))

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2
  return triangleArea
}
// console.log(calcArea(5, 10))

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ')
  return arrayString
}
// console.log(splitSentence('Project 02 Trybe'))

// Desafio 4
function concatName(arrayStrings) {
  let firstName = arrayStrings[0]
  let lastName = arrayStrings[arrayStrings.length - 1]
  return (`${lastName}, ${firstName}`)
}
// console.log(concatName(['João', 'Carlito', 'Marques', 'do', 'Nascimento', 'Neto']))

// Desafio 5
function footballPoints(wins, ties) {
  let pointsTeam = (wins * 3) + (ties * 1)
  return pointsTeam
}
// console.log(footballPoints(10, 12))

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
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))

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
// console.log(catAndMouse(2, 6, 7))

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayString = []
  for (let property in arrayNumbers) {
    if ((arrayNumbers[property] % 3 === 0) && (arrayNumbers[property] % 5 === 0)) {
      arrayString.push('fizzBuzz')
    } else if (arrayNumbers[property] % 3 === 0) {
      arrayString.push('fizz')
    } else if (arrayNumbers[property] % 5 === 0) {
      arrayString.push('buzz')
    } else {
      arrayString.push('bug!')
    }
  }
  return arrayString
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(string) {
  let newString = ''
  for (let property in string) {
    if (string[property] === 'a') {
      newString += 1
    } else if (string[property] === 'e') {
      newString += 2
    } else if (string[property] === 'i') {
      newString += 3
    } else if (string[property] === 'o') {
      newString += 4
    } else if (string[property] === 'u') {
      newString += 5
    } else {
      newString += string[property]
    }
  }
  return newString
}
// console.log(encode('Flamengo'))

function decode(stringNumbers) {
  let newString2 = ''
  for (let property in stringNumbers) {
    if (stringNumbers[property] === '1') {
      newString2 += 'a'
    } else if (stringNumbers[property] === '2') {
      newString2 += 'e'
    } else if (stringNumbers[property] === '3') {
      newString2 += 'i'
    } else if (stringNumbers[property] === '4') {
      newString2 += 'o'
    } else if (stringNumbers[property] === '5') {
      newString2 += 'u'
    } else {
      newString2 += stringNumbers[property]
    }
  }
  return newString2
}
// console.log(decode('Fl1m2ng4'))

// Desafio 10
function techList(technologies, name) {
  if (technologies.length === 0) {
    return 'Vazio!'
  }
  let sortedTechnologies = technologies.sort()
  let technologiesList = []
  for (let property in sortedTechnologies) {
    technologiesList.push({ tech: technologies[property], name: name })
  }
  return technologiesList
}
// console.log(techList(['JS', 'React', 'Python'], 'João'))

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let i = 0; i < arrayNumber.length; i += 1) {
    if (arrayNumber[i] < 0 || arrayNumber[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores'
    }
    let count = 0;
    for (let j = 0; j < arrayNumber.length; j += 1) {
      if (arrayNumber[i] === arrayNumber[j]) {
        count += 1
      }
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores'
      }
    }
  }
  return '(' + arrayNumber[0] + arrayNumber[1] + ') ' + arrayNumber[2] + arrayNumber[3] + arrayNumber[4] + arrayNumber[5] + arrayNumber[6] + '-' + arrayNumber[7] + arrayNumber[8] + arrayNumber[9] + arrayNumber[10]
}

// console.log(generatePhoneNumber([1, 7, 3, 4, 5, 1, 2, 4, 9, 2, 6]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true
  }
  return false
}
// console.log(triangleCheck(9, 5, 5))

// Desafio 13
function hydrate(string) {
  let numString = string.replace(/\D+/g, "");
  let cups = 0

  for (let i = 0; i < numString.length; i += 1) {
    cups += parseInt(numString[i]);
  }

  if (cups === 1) {
    return cups + " copo d'água "
  }
  return cups + " copos d'água "

}
// console.log(hydrate('1'))


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
