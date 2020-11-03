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
  let novoArray = frase.split(" ");
  return novoArray;
}
//console.log(splitSentence("go trybe"));

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
  let maiorNumero = numeros[0];
  let repetido = 0;
  for (index = 1; index < numeros.length; index += 1) {
    if (numeros[index] > maiorNumero) {
      maiorNumero = numeros[index];
    }
  }
  //console.log(maiorNumero);

  for (cont = 0; cont < numeros.length; cont += 1) {
    if (maiorNumero === numeros[cont]) {
      repetido += 1;
    }
  }
  return repetido;
}
//let testandoNumeros = [9, 9, 9, 3, 9, 5, 7];
//console.log(highestCount(testandoNumeros));

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
  phrase = phrase.replace(/a/g , "1");
  phrase = phrase.replace(/e/g , "2");
  phrase = phrase.replace(/i/g , "3");
  phrase = phrase.replace(/o/g , "4");
  phrase = phrase.replace(/u/g , "5");
  return phrase;
}
//console.log(encode("hi there!"));

function decode(phrase) {
  phrase = phrase.replace(/1/g , "a");
  phrase = phrase.replace(/2/g , "e");
  phrase = phrase.replace(/3/g , "i");
  phrase = phrase.replace(/4/g , "o");
  phrase = phrase.replace(/5/g , "u");
  return phrase;
}
//console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(tecnologia, name) {
  if (tecnologia.length === 0) {
    return "Vazio!";
  }
const listaOrdenada = tecnologia.sort();
let resultado = [];
for (index = 0; index < listaOrdenada.length; index += 1) {
  resultado.push({tech:listaOrdenada[index], name:name});
}
return resultado;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Liisa"));

  // seu código aqui

// Desafio 11
teste = [1, 3, 3, 6, 4, 9, 5, 6, 7, 8, 2]

function generatePhoneNumber(arrayNumeros) {
  let telephoneNumber = "";
  for (index = 0; index < arrayNumeros.length; index += 1) {
    let repetido = 0;
    let numeroValido = arrayNumeros[index];
    for (cont = 0; cont < arrayNumeros.length; cont += 1) {
    if (numeroValido === arrayNumeros[cont]) {
      repetido += 1;
    }
  }
  if (repetido >= 3 || arrayNumeros[index] > 9 || arrayNumeros[index] < 0) {
  return "não é possível gerar um número de telefone com esses valores";
  } else if (arrayNumeros.length !== 11) {
  return "Array com tamanho incorreto.";
  } else {
  telephoneNumber = "(" + arrayNumeros[0] + arrayNumeros[1] + ")" + " " + arrayNumeros[2] + arrayNumeros[3] + arrayNumeros[4] + arrayNumeros[5] + arrayNumeros[6] +
  "-" + arrayNumeros[7] + arrayNumeros[8] + arrayNumeros[9] + arrayNumeros[10];
  }
  }
  return telephoneNumber;
}

console.log(generatePhoneNumber(teste));

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
