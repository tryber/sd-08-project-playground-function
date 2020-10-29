// Desafio 1
function compareTrue(a, b) {
  // seu código aqui
  if (a && b) {
      return true;
    }   else {
          return false;
    }
  }

  compareTrue(true,true);




// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base*height)/2);
}
calcArea(2, 3);





// Desafio 3
function splitSentence(str) {
  // seu código aqui
  let final = [];
  final = str.split(" ");
  return final;
}
splitSentence("Go Trybe");




// Desafio 4
function concatName(firstName, secondName, lastName) {
  // seu código aqui
  return lastName + ' ' + firstName;
}

console.log(concatName(["lucas", "feraz"]));
concatName(firstName, secondName, lastName);




// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) - ties;
}



// Desafio 6
function highestCount() {
  // seu código aqui
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
