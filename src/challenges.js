// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } else {
    return false;
  }
} 

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  return areaTriangulo;
}

// Desafio 3
function splitSentence(stringToSplit) {
  return stringToSplit.split(' '); 
}


// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`; 
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = Math.max(...array);
  let repeat = 0;
  for (let i of array) {
    if (maiorNumero === i) {
      repeat += 1;
    }
  } 
 return repeat
  
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
    for (i = 0; i < array.length; i += 1) {
      if (array[i] % 3 == 0 && array[i] % 5 == 0) {
        result.push ("fizzBuzz");
      } else if (array[i] % 3 == 0) {
        result.push ("fizz");
      } else if (array[i] % 5 == 0) {
        result.push ("buzz");
      } else {
        result.push ("bug!");
      }
    }
    return result;
}



// Desafio 9
function encode(vogais) {
  let encodeStr = "";

  for (let i = 0; i < vogais.length; i += 1)
    if (vogais[i] === "a") {
      encodeStr += "1";    
    } else if (vogais[i] === "e") {
      encodeStr += "2";
    } else if (vogais[i] === "i") {
      encodeStr += "3";
    } else if (vogais[i] === "o") {
      encodeStr += "4";
    } else if (vogais[i] === "u") {
      encodeStr += "5";
    } else {
      encodeStr += vogais[i];
    }
    return encodeStr;
}
  console.log(encode("hi there!"))

function decode(vogais) {
  let decodeStr = "";

  for (let i = 0; i < vogais.length; i += 1)
    if (vogais[i] === "1") {
      decodeStr += "a";    
    } else if (vogais[i] === "2") {
      decodeStr += "e";
    } else if (vogais[i] === "3") {
      decodeStr += "i";
    } else if (vogais[i] === "4") {
      decodeStr += "o";
    } else if (vogais[i] === "5") {
      decodeStr += "u";
    } else {
      decodeStr += vogais[i];
    }
    return decodeStr;
}
  console.log(decode("hi there!"))



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
