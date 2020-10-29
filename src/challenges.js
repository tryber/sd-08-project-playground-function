// Desafio 1
function compareTrue(first, second) {
  if(first === true && second === true){ return true; }
  else { return false; }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
}

// Desafio 3
function splitSentence(phrase) {
  let wordArray = [];
  let word = "";

  for(let index = 0; index <= phrase.length; index++) {
    if(phrase.charAt(index) == " " || index === phrase.length) {
      wordArray.push(word);
      word = "";
    } else {
      word = word + phrase.charAt(index);
    }
  }

  return wordArray;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let result = arrayOfStrings[arrayOfStrings.length-1] + ", " + arrayOfStrings[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = null;
  let count = 0;

  for(let key in numbers) {
    if (numbers[key] > highestNumber || highestNumber == null) { highestNumber = numbers[key]; }
  }

  for (let key in numbers) {
    if (numbers[key] === highestNumber) { count++ }
  }

  return count;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  if ((mouse - cat1) < (mouse - cat2)) return "cat1"; 
  else if ((mouse - cat2) < (mouse - cat1)) return "cat2";
  else return "os gatos trombam e o rato foge";
}

console.log(catAndMouse(3, 2, 4))

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
