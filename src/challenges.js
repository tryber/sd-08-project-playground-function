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

  for (technology in tecnologys) {
    techListPerName = { tech : tecnologys[technology], name : name }
    //techListPerName.tech = tecnologys[technology]
    //techListPerName.name = name

    console.log(techListPerName)

    returnList.push(techListPerName)


  }
  return returnList
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"))

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
