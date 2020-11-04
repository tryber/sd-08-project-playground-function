// Desafio 1
function compareTrue(value1,value2) {
  if (value1 && value2 === true) {
   return true;
  }
  return false;
  }
  compareTrue(true, false);
  
// Desafio 2
function calcArea(base, height) {
  var resultado = (base * height) / 2;
  return resultado;
}
calcArea(10,20);

  

// Desafio 3
function splitSentence() {
  var resultado = ['Go, Trybe'];
  return resultado;
  }
  console.log(splitSentence());

// Desafio 4
function concatName() {
  for(let pos = 0; pos < concatName; pos += 1){
    if (pos === 0){
      console.log(concatName(pos))
    }
    else if (pos === (concatName.length -1)) {
      console.log(concatName(pos))
    }

  }
}
console.log(concatName(['Milton', 'Nascimento', 'Bituca']));

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties
  return points
}
footballPoints(7,2);

// Desafio 6
function highestCount(numbers) {
  let maiorValor = numbers[0]
  for(let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > maiorValor) {
      maiorValor = numbers[index]
    }
  }
  let repeat = 0
  for(let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] === maiorValor) {
      repeat += 1
    }
  }
  return repeat
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse() {
  mouse = 1
  cat1 = 3
  cat2 = 10
  
  distanciaCat1 = cat1 - mouse;
  distanciaCat2 = cat2 - mouse;

  let resultado
  if (distanciaCat1 > distanciaCat2) {
    return cat2
  } console.log('cat2')
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
