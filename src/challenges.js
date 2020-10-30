// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if( valor1 == true && valor2 ==true){
    console.log('true');
  }else{
    console.log('false');
  };
};


// Desafio 2
function calcArea() {
  // seu código aqui
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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
function fizzBuzz(param) {
  // seu código aqui
  for(contador = 1; contador <= param; contador += 1){
    if(contador % 3 === 0){
      console.log(contador, "FizzBuzz");
    }else if(contador % 5 === 0){
      console.log(contador, "Buzz");
    }else if(contador % 15 === 0){
      console.log(contador, "Fizz");
    }else{
      console.log(contador);
    };
  };
};





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
