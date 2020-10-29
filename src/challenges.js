// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if(bool1 == true && bool2 == true){
    return true;
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splittedSentence = [];
  let index = 0;
  let arrayIndex = 0;
  for(let pos = 0; pos < sentence.length; pos += 1){
    if(sentence.slice(pos, (pos + 1)) == " "){
      splittedSentence[arrayIndex] = sentence.slice(index, pos);
      index = pos + 1;
      arrayIndex += 1;
    } else if(pos == (sentence.length - 1)){
      splittedSentence[arrayIndex] = sentence.slice(index, (pos + 1));
    }
  }
  return splittedSentence;
}

// Desafio 4
function concatName(arrayOfNames) {
  // seu código aqui
  let firstName = arrayOfNames[0];
  let lastName = arrayOfNames[arrayOfNames.length-1];
  return lastName + ", " + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  // seu código aqui
  let higherNumber = arrayOfNumbers[0];
  let countNumber = 0;
  for(let pos = 1; pos < arrayOfNumbers.length; pos += 1){
    if(higherNumber < arrayOfNumbers[pos]){
      higherNumber = arrayOfNumbers[pos];
    }
  }
  for(let key = 0; key < arrayOfNumbers.length; key += 1){
    if(higherNumber == arrayOfNumbers[key]){
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if((Math.abs(cat1) - Math.abs(mouse)) < (Math.abs(cat2) - Math.abs(mouse))){
    return "cat1";
  }else if((Math.abs(cat1) - Math.abs(mouse)) > (Math.abs(cat2) - Math.abs(mouse))){
    return "cat2";
  } else{
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  // seu código aqui
  let fizbuz = [];
  for(let pos = 0; pos < arrayOfNumbers.length; pos += 1){
    if(arrayOfNumbers[pos] % 3 == 0 && arrayOfNumbers[pos] % 5 == 0){
      fizbuz.push("fizzbuzz");
    } else if(arrayOfNumbers[pos] % 3 == 0){
      fizbuz.push("fizz");
    } else if(arrayOfNumbers[pos] % 5 == 0){
      fizbuz.push("buzz");
    } else{
      fizbuz.push("bug!");
    }
  }
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
