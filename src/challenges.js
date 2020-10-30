// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) return true
  return false
}
// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(" ")
}

// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  return `${arrayNames.pop()}, ${arrayNames[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(arrayHighestCount) {
  // seu código aqui
  let topNumber = arrayHighestCount[0]
  let cont = 0

  for (i in arrayHighestCount) {
    if (arrayHighestCount[0] < arrayHighestCount[i]) {
      topNumber = arrayHighestCount[i]
    }
  }
  for (j in arrayHighestCount) {
    if (topNumber === arrayHighestCount[j]) {
      cont++
    }
  }
  return cont
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) return "cat1"
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) return "cat2"
  return "os gatos trombam e o rato foge"
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let newArray = []

  for (i in arrayNumbers) {
    if (arrayNumbers[i] % 3 == 0) {
      newArray.push("fizz") }
    if (arrayNumbers[i] % 5 == 0) {
      newArray.push("buzz")
    }
    if (arrayNumbers[i] % 3 == 0 && arrayNumbers[i] % 5 === 0) {
      newArray.push("fizzBuzz")
    }
      newArray.push("bug!")
    }
    return newArray
  }
// Desafio 9
function encode(string) {
  return string.split('a').join('1').split('e').join('2').split('i').join('3').split('o').join('4').split('u').join('5')
}
function decode(string) {
 return string.split('1').join('a').split('2').join('e').split('3').join('i').split('4').join('o').split('5').join('u')
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
