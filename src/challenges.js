// Desafio 1

function compareTrue(valor1, valor2) {
  if (valor1 && valor2 === true) {
    return true;
  }
  return false;
}
// console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// console.log(calcArea (10, 20));

// Desafio 3
function splitSentence(frase) {

}

// Desafio 4
function concatName(parametroArray) {
  let frase = parametroArray[parametroArray.length -1] + ', ' + parametroArray[0];
  return frase
}
let meuNome = ['Liisa', 'Caroline', 'Coutinho', 'Ambrosen'];
console.log(concatName(meuNome));


// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = (wins * 3) + ties;
  return points;
}


// Desafio 6
function highestCount(numeros) {
  for (index = 0; index < numeros.length; index += 1); {

  }

}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let message = "";
  //if (mouse < cat1 && cat1 < cat2 || mouse > cat1 && cat1 > cat2) {
    if (Math.abs(cat1 - mouse || mouse - cat1) < Math.abs(cat2 - mouse || mouse - cat2)) {
    return "cat1";
  //} else if (mouse < cat2 && cat2 < cat1 || mouse > cat2 && cat2 > cat1) {
  //  } else if ((cat2 - mouse || mouse - cat2) < (cat1 - mouse || mouse - cat1)) {
  //  return "cat2";
  } else if (Math.abs(cat1 - mouse || mouse - cat1) === Math.abs(cat2 - mouse || mouse - cat2)) {
    return "os gatos trombam e o rato foge";
  } else {
    return "cat2";
  }
}
console.log(catAndMouse(8, 4, 12));


// Desafio 8
function fizzBuzz(numbers) {
  let fraseMostrada = [];
  for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 == 0 && numbers[index] % 5 > 0) {
      fraseMostrada.push("fizz");
    } else if (numbers[index] % 5 == 0 && numbers[index] % 3 > 0) {
      fraseMostrada.push("buzz");
    } else if (numbers[index] % 5 === 0 && numbers[index] % 3 == 0) {
      fraseMostrada.push("fizzBuzz");
    } else {
      fraseMostrada.push("bug!");
    }
  }
  return fraseMostrada;
}
// let testing = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(testing))

// Desafio 9
function encode(phrase) {

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
