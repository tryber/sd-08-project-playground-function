// Desafio 1
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(" ");
}

// Desafio 4
function concatName(fullNameArray) {
  const lastPosition = fullNameArray.length - 1;

  return `${fullNameArray[lastPosition]}, ${fullNameArray[0]}` 
}

// Desafio 5
function footballPoints(wins, ties) {
  const winsPoints = wins * 3;
  const tiesPoints = ties * 1;

  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = numbers[0];
  let highestCounter = 0;

  for (let index in numbers) {
    if (numbers[index] > highestNumber)
      highestNumber = numbers[index];
  }
  
  for (let index in numbers) {
    if (numbers[index] === highestNumber)
      highestCounter += 1;
  }

  return highestCounter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const cat1Distance = Math.abs(mouse - cat1);
  const cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance === cat2Distance) return "os gatos trombam e o rato foge"
  else if (cat1Distance < cat2Distance) return "cat1";
  else if (cat2Distance < cat1Distance) return "cat2";
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
