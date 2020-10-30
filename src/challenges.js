// Desafio 1
function compareTrue(n1 , n2) {
  if(n1 % 2 == 1 && n2 % 2 == 1){
    return true;
  }else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  calcArea = (base * height) / 2;
  return calcArea;

}

// Desafio 3
function splitSentence(frase) {
splitSentence = frase.split(' ') ;
return splitSentence
}

/// Desafio 4
function concatName (arrayString) {
  let primeiroUltimo = arrayString[arrayString.length - 1] + ", " + arrayString[0];
  return primeiroUltimo;
}


// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + (ties * 1);
  console.log(pontos)
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumber = 0
  let contador = 0

  for (let index = 0; index < numbers.length; index++) {

    if (maiorNumber < numbers[index]) {
      maiorNumber = numbers[index]
    }
  }


  for (let index2 = 0; index2 < numbers.length; index2++) {

    if (maiorNumber == numbers[index2]) {
      contador++
    }
  }
  console.log(contador)

  return contador
  
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
