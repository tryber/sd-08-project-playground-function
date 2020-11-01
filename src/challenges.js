// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(array) {
  let name = array[array.length - 1];
  name += ", "
  name += array[0];
  return name
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {

  let bigger = array[0]
  let quantityOfBiggerNumber = 0;

  for ( let i = 1; i < array.length; i += 1) {
    if (bigger < array[i] ) {
      bigger = array[i];
    }
  }
  for ( let i = 0; i < array.length; i += 1) {
    if ( array[i] == bigger) {
      quantityOfBiggerNumber += 1;
    }
  }
   return quantityOfBiggerNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catProximity1 = cat1 - mouse;
  let catProximity2 = cat2 - mouse;

  if (Math.abs(catProximity1) == Math.abs(catProximity2)){
    return "os gatos trombam e o rato foge"
  } else if ( Math.abs(catProximity1) <  Math.abs(catProximity2)) {
    return "cat1"
  } else {
    return "cat2"
  }
}

console.log(catAndMouse(1, 0, 2))



// Desafio 8
function fizzBuzz(array) {
  let arrayToReturn = [];

  for ( let i = 0; i < array.length; i += 1 ) {

    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      arrayToReturn[i] = "fizzBuzz"
    }else if ((array[i] % 3) == 0 ) {
      arrayToReturn[i] = "fizz"
    } else if ( array[i] % 5 == 0) {
      arrayToReturn[i] = "buzz"
    } else {
      arrayToReturn[i] = "bug!"
    }
  }
  return arrayToReturn
}

// Desafio 9
function encode(string) {

  let stringToArray = string.split("");
  let stringToReturn = "";

  for ( let index = 0; index < stringToArray.length; index += 1) {

    let letter = stringToArray[index];

    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u') {
         if (stringToArray[index] == 'a') {
             stringToArray[index]  = '1'
          }
         if (stringToArray[index] == 'e') {
             stringToArray[index]  = '2'
          }
         if (stringToArray[index] == 'i') {
             stringToArray[index]  = '3'
          }
         if (stringToArray[index] == 'o') {
             stringToArray[index]  = '4'
          }
         if (stringToArray[index] == 'u') {
             stringToArray[index]  = '5'  }
      }
  }
  for ( letter in stringToArray) {
    stringToReturn += stringToArray[letter];
  }
    return stringToReturn
}

function decode(string) {

let stringToArray = string.split("");
let stringToReturn = "";
console.log(stringToArray)

  for (eachLetter in stringToArray) {

  let character = stringToArray[eachLetter];

  if (character == '1' || character == '2' || character == '3' || character == '4' || character == '5') {

    if (stringToArray[eachLetter] == '1') {
        stringToArray[eachLetter]  = 'a'
    }
    if (stringToArray[eachLetter] == '2') {
        stringToArray[eachLetter]  = 'e'
    }
    if (stringToArray[eachLetter] == '3') {
        stringToArray[eachLetter]  = 'i'
    }
    if (stringToArray[eachLetter] == '4') {
        stringToArray[eachLetter]  = 'o'
    }
    if (stringToArray[eachLetter] == '5') {
        stringToArray[eachLetter]  = 'u'
    }
  }
}
console.log(stringToArray)
  for (eachCharacter in stringToArray) {
    stringToReturn += stringToArray[eachCharacter]
  }
  return stringToReturn

}

// Desafio 10
function techList(tecnologys, name) {
let techListPerName =  {
    tech: "NomeTech",
    name: name
  }

  let returnList = [];
  tecnologys = tecnologys.sort()

  if ( tecnologys.length == 0 ) {
    return "Vazio!"
  } else {

  for (technology in tecnologys) {
    techListPerName = { tech : tecnologys[technology], name : name }
    returnList.push(techListPerName)
  }
}
  return returnList
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))


// Desafio 11
function generatePhoneNumber(array) {

  let phoneNumber = '';

  for (number in array) {
    phoneNumber += array[number]
  }

  //console.log(phoneNumber)

  let numberToReturn = '';
  let cont = 0;

  if (array.length != 11) {
    return "Array com tamanho incorreto."
  }

  for (number in array) {
    if (array[number] < 0 || array[number] > 9 ) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }

  let a =1;
  for (let i = 0; i < array.length; i += 1 ) {
    //console.log(array.length)
    //console.log(array[i])
    for (let a = i+1 ; a < array.length; a += 1 ) {
      //console.log("ops",array[a])
      if (array[i] == array[a]) {
        //console.log(array[i], array[a])
        cont += 1;
      }
    }
  }
  if (cont > 3) {
    return "não é possível gerar um número de telefone com esses valores"
  }

  numberToReturn = '('
  numberToReturn += phoneNumber.substring(0,2)
  numberToReturn += ')'
  numberToReturn +=  ' '
  numberToReturn += phoneNumber.substring(2,7)
  numberToReturn += '-'
  numberToReturn += phoneNumber.substring(7,11)
  return numberToReturn
}
console.log(generatePhoneNumber([1, 2, 3, 4, ]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  // necessário que a medida de qualquer um dos lados e maior que o valor absoluto da diferença entre essas medidas.
  // necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois

  if (( lineA > Math.abs(lineA - lineB) && lineB > Math.abs(lineB - lineC) && lineC > Math.abs(lineC - lineA))
        ||
        ( lineA < (lineC + lineB) && lineB < (lineA + lineC) && lineC < (lineB + lineA))){
        return true
      } else {
        return false
      }
}
console.log(triangleCheck(10, 14, 8))



// Desafio 13
function hydrate(string) {

  let matches = string.match(/\d+/g).map(Number);
  let sum = 0;

for (number in matches){
  sum += matches[number]
}

  return sum + " copos de água"

}
console.log(hydrate("1 cerveja"))




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
