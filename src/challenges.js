// Desafio 1
function compareTrue(value1, value2) {
  
  if (value1 && value2 === true) {
    return true;
  }
  else {
    return false;
  }
}


// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

 
// Desafio 3
function splitSentence(word) {
  resultado = word.split(" ");
  return resultado;
  
}

// Desafio 4
function concatName(strings) {
  
  let last = strings.length -1;
  let first = strings[0];
  let namesArray = strings[last];
  return namesArray + ", " + first;
}

  

// Desafio 5
function footballPoints(wins,ties) {
  return((wins*3) + ties);
}


// Desafio 6
function highestCount() {
  
  let highestNumber = 0;
  let highestRepeat = 0;

  for(let i = 0; i < numbers.length; i+=1) {
    if(numbers[i] > highestNumber) { 
      highestNumber = numbers[i];
      highestRepeat = 0;
  }  
    if(numbers[i] == highestNumber) {
      highestRepeat += 1;
    }
  }
  return highestRepeat;
}
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
