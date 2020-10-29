// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
    return true
  }
  return false
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
// let frase = "go Trybe aleluia Irmao"
let palavra = ''
let pos = 0
function splitSentence(sentence) {
  let array = []
  for (pos = 0; pos < sentence.length; pos += 1) {
    if (sentence[pos] !== ' ') {
      palavra += sentence[pos]
    } else {
      array.push(palavra)
      palavra = ''
    }
  }
  if (pos === sentence.length) {
    array.push(palavra)
    palavra = ''
  }
  console.log(array)
  return array
}
// splitSentence(frase)

// Desafio 4
//  array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
function concatName(arrayString) {
  let concated = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`
  return concated
}
// console.log(concatName(array))

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties)
  return pontos
}

// Desafio 6
// let array = [0, 0, 0]

function highestCount(array) {
  let maiorValor = 0
  let repeticoes = 0
  for (let index in array) {
    if (array[index] > maiorValor) {
      maiorValor = array[index]
      repeticoes = 1
    } else if (array[index] === maiorValor) {
      repeticoes += 1
    }
  }
  return repeticoes
}

// console.log(highestCount(array))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1
  let distancia2 = mouse - cat2

  if (cat1 > mouse) {
    distancia1 = cat1 - mouse
  }

  if (cat2 > mouse) {
    distancia2 = cat2 - mouse
  }

  if (distancia1 < distancia2) {
    return 'cat1'
  } else if (distancia2 < distancia1) {
    return 'cat2'
  }
  return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(array) {
  for (let index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      array[index] = 'fizzBuzz'
    } else if (array[index] % 5 === 0) {
      array[index] = 'buzz'
    } else if (array[index] % 3 === 0) {
      array[index] = 'fizz'
    } else {
      array[index] = 'bug!'
    }
    // console.log(array)
  }
  return array
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
// let string = 'a hello world'
function encode(string) {
  let result = ''
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case 'a':
        result += '1'
        break;
      case 'e':
        result += '2'
        break;
      case 'i':
        result += '3'
        break;
      case 'o':
        result += '4'
        break;
      case 'u':
        result += '5'
        break;
      default:
        result += string[index]
    }
  }
  return result
}

// console.log(encode(string))
// let string = '1 h2ll4 w4rld'
function decode(string) {
  let result = ''
  for (let index = 0; index < string.length; index += 1) {
    switch (string[index]) {
      case '1':
        result += 'a'
        break;
      case '2':
        result += 'e'
        break;
      case '3':
        result += 'i'
        break;
      case '4':
        result += 'o'
        break;
      case '5':
        result += 'u'
        break;
      default:
        result += string[index]
    }
  }
  return result
}

// console.log(decode(string))

// Desafio 10
// let array = []
// let name = 'Lucas'
function techList(tech, name) {
  let result = []
  if (tech == "") {
    // console.log("vazio")
    return 'Vazio!'
  }
  tech.sort()

  for (let index = 0; index < tech.length; index += 1) {
    result.push({ tech: tech[index], name: name })    
  }
  return result
}

// console.log(techList(array, name))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {

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
