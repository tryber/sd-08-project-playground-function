// Desafio 1
function compareTrue(num1, num2) {
  if (num1 && num2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(num1, num2) {
  let base = num1; let altura = num2;
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(input) {
  let frase = [];

  for (let i = 0; i < input.length; i += 1) {
    frase += input[i];
  }
  let novoArray = frase.split(" ");
  return novoArray;
}
splitSentence("go Trybe");

// Desafio 4
function concatName(input) {
  let entrada = input;
  let retorno = entrada[entrada.length - 1] + ", " + entrada[0];
  return retorno;
}

concatName(["Lucas", "Cassiano", "Ferraz", "Paollilo"]);

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3; let empates = ties * 1;
  let pontos = vitorias + empates;
  return pontos;
}
footballPoints(10, 5);

// Desafio 6
function highestCount(input) {
  let arrayBase = [];

  for (let i = 0; i < input.length; i += 1) {
    arrayBase.push(input[i]);
  }
  arrayBase.sort(function (a, b) {
    return a - b;
  });
  let numberOfOccurrences = 1;
  for (let i = arrayBase.length - 1; i >= 0; i -= 1)
    if (arrayBase[i] == arrayBase[i - 1]) {
      numberOfOccurrences += 1;
    } else {
      break;
    }  
  return numberOfOccurrences;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = cat1; let gato2 = cat2; let rato = mouse;
  let distGato1Rato = Math.abs(gato1 - rato); let distRatoGato1 = Math.abs(rato - gato1);
  let distGato2Rato = Math.abs(gato2 - rato); let distRatoGato2 = Math.abs(rato - gato2);

  if (distGato1Rato < distGato2Rato || distRatoGato1 < distRatoGato2) {
    return "cat1";
  } else if (distGato2Rato < distGato1Rato || distRatoGato2 < distRatoGato1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
catAndMouse(1, 0, 2);
// Desafio 8
function fizzBuzz(input) {
  let retorno = [];
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] % 3 == 0 && input[i] % 5 == 0) {
      retorno.push("fizzBuzz");
    } else if (input[i] % 3 == 0) {
      retorno.push("fizz");
    } else if (input[i] % 5 == 0) {
      retorno.push("buzz");
    } else {
      retorno.push("bug!");
    }
  }  
  return retorno;
}
fizzBuzz([2, 15, 7, 9, 45]);

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
};
