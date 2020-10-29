// Desafio 1
function compareTrue(bol1, bol2) {
  if (typeof bol1 === "boolean" && typeof bol2 === "boolean") {
    let output = false;
    if (bol1 == true && bol2 == true) {
      output = true;
    }
    return output;
  }
  else {
    return `ERROR > tipos não é booleanos!`;
  }
}

// < Para o teste manual >
// let a = true;
// let b = true;
// console.log(compareTrue(a, b));


// Desafio 2
function calcArea(base, height) {
  if (base > 0 && height > 0) {
    return (base * height) / 2;
  }
  else {
    return `ERROR > ${base} e ${height} não são numeros positivos!`;
  }
}

// < Para o teste manual >
// console.log(calcArea(10, 10));


// Desafio 3
function splitSentence(str) {
  if (typeof str === "string") {
    let inputStr = "" + str;
    let arrayDeStr = [];
    let auxiliar = '';

    for (let index = 0; index < inputStr.length; index += 1) {
    
      if (inputStr[index] != " ") {
        auxiliar += inputStr[index];
      }
      else {
        arrayDeStr.push(auxiliar);
        auxiliar = '';
      }
    }
    arrayDeStr.push(auxiliar);

    return arrayDeStr;
  }
  else {
    return `ERROR > tipo não é string!`;
  }
  
}

// < Para o teste manual >
// console.log(splitSentence("go Trybe"));


// Desafio 4
function concatName(arrStr) {
  let inputArrStr = arrStr;
  let outputStr = '';
  outputStr = arrStr[inputArrStr.length - 1] + ', ' + arrStr[0];
  return outputStr;
}

// < Para o teste manual >
// let testeArray = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(testeArray));


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
