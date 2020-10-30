// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) {
    return true
  }
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
  let newArray = string.split(" ")
  return newArray
}

// Desafio 4
function concatName(arrayNames) {
  // seu código aqui
  let newString = arrayNames.pop().toString() + ", " + arrayNames[0].toString()
  return newString
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
  console.log(topNumber)

  for (j in arrayHighestCount) {
    if (topNumber === arrayHighestCount[j]) {
      cont++
    }
  }
  return cont
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse = Math.abs(mouse)
  cat1 = Math.abs(cat1)
  cat2 = Math.abs(cat2)

  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1"
  }

  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    return "cat2"
  }
  return "os gatos trombam e o rato foge"
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
