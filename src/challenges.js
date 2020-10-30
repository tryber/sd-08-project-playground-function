// Desafio 1
function compareTrue(value1,value2) {

    if(value1 && value2 === true) {
            return true;
        } else {
            return false;
        }
}

// Desafio 2
function calcArea(base,height) {
    return(base*height)/2;
}

// Desafio 3
function splitSentence(word) {
  return word.split (" ");
}

// Desafio 4
function concatName(arrNames) {
  let lastPosition = arrNames.length -1;
  let firstName = arrNames[0];
  let lastName = arrNames [lastPosition];
  return lastName + ", " + firstName;
}

// Desafio 5
function footballPoints(wins,ties) {
    let totalpoints = (wins*3) + ties;
    return totalpoints;

}

// Desafio 6
function highestCount(arrNumbers) {
    let highestNumber = 0;
    let highestRepeat = 0;

    for(let i = 0;i < arrNumbers.length;i+=1){
        if(arrNumbers[i] > highestNumber){
            highestNumber = arrNumbers[i];
            highestRepeat = 0;
        }
        if(arrNumbers[i] == highestNumber){
            highestRepeat += 1;
        }         
    }
       
  return highestRepeat;

}

// Desafio 7
function catAndMouse() {
  
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
