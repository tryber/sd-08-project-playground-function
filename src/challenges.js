// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let areaTriangulo = 0;
  areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
// conhecimento sobre split pesquisado
// referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  // seu código aqui
  let stringArray = string.split(' ');
  return stringArray;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
  let string = array[array.length - 1] + ", " + array[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = ties + (wins * 3);
  return result;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let numeroMaior = array[0];
  let contador = 0;

  for (let index = 1; index < array.length; index += 1) {
    if (array[index] > numeroMaior) {
      numeroMaior = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1){
    if (numeroMaior === array[index]){
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distancia1 = 0;
  let distancia2 = 0;

  if (mouse > cat1) {
    distancia1 = mouse - cat1;
  } else {
    distancia1 = cat1 - mouse
  }

  if (mouse > cat2) {
    distancia2 = mouse - cat2;
  } else {
    distancia2 = cat2 - mouse
  }

  if (distancia1 > distancia2) {
    return "cat2";
  } else if (distancia1 < distancia2) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let string = [];
  for (index = 0; index < array.length; index +=1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      string.push("fizzBuzz");
    } else if (array[index] % 5 == 0) {
      string.push("buzz");
    } else if  (array[index] % 3 == 0){
      string.push("fizz");
    }else{
      string.push("bug!");
    }
  }
  return string;
}


// Desafio 9
function encode(string) {
  // seu código aqui
  let replace = [];
  let result = "";

  for (index in string) {
    switch (string[index]) {
      case "a":
        replace.push("1");
        break;
      case "e":
        replace.push("2");
        break;
      case "i":
        replace.push("3");
        break;
      case "o":
        replace.push("4");
        break;
      case "u":
        replace.push("5");
        break;
      default:
        replace.push(string[index])
    }
    result += replace[index];
  }     
  return result;
}

function decode(numbers) {
  // seu código aqui
  let replace = [];
  let result = "";

  for (key in numbers) {
    switch (numbers[key]) {
      case "1":
        replace.push("a");
        break;
      case "2":
        replace.push("e");
        break;
      case "3":
        replace.push("i");
        break;
      case "4":
        replace.push("o");
        break;
      case "5":
        replace.push("u");
        break;
      default:
        replace.push(numbers[key])
    }
    result += replace[key];
  }     
  return result;
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
