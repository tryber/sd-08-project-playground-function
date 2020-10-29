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
    return `ERROR > ${base} e ${height} não são números positivos!`;
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
  if (typeof arrStr === "object") {
    let inputArrStr = arrStr;
    let outputStr = '';
    outputStr = arrStr[inputArrStr.length - 1] + ', ' + arrStr[0];
    return outputStr;
  }
  else {
    return `ERROR > tipo não é objeto Array!`
  }
  
}

// < Para o teste manual >
// let testeArray = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(testeArray));


// Desafio 5
function footballPoints(wins, ties) {
  if (typeof wins === "number" && typeof ties === "number") {
    return ((3 * wins) + ties);
  }
  else {
    return `ERROR > tipos não são números!`
  }
}

// < Para o teste manual >
// console.log(footballPoints(5, 3));

// Desafio 6
function highestCount(arrNum) {
  if (typeof arrNum === "object") {
    let inputArrNum = arrNum;
    let maiorNum = inputArrNum[0];
    let contador = 0;

    for (let index = 0; index < inputArrNum.length; index += 1) {
      if (inputArrNum[index] > maiorNum) {
        maiorNum = inputArrNum[index];
      }
    }
    for (let index = 0; index < inputArrNum.length; index += 1) {
      if (inputArrNum[index] == maiorNum) {
        contador += 1;
      }
    }

    return contador;
  }
  else {
    return `ERROR > tipo não é objeto Array!`
  }
  
}

// < Para o teste manual >
// let arrayteste = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(arrayteste));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (typeof mouse === "number" && typeof cat1 === "number" && typeof cat2 === "number") {
    let unidDist1 = cat1 - mouse;
    let unidDist2 = cat2 - mouse;

    if (unidDist1 < 0) {
      unidDist1 *= -1;
    }
    if (unidDist2 < 0) {
      unidDist2 *= -1;
    }

    if (unidDist1 < unidDist2) {
      return `"cat1"`;
    }
    else if (unidDist1 > unidDist2) {
      return `"cat2"`;
    }
    else {
      return `"os gatos trombam e o rato foge"`;
    }
  }
  else {
    return `ERROR > tipos não são números!`
  }
  
}

// < Para o teste manual >
// console.log(catAndMouse(-1, -4, 2));


// Desafio 8
function fizzBuzz(arrNumbers) {
  if (typeof arrNumbers === "object") {
    let inputArrNumbers = arrNumbers;
    let outputArr = [];
  
    for (let index = 0; index < inputArrNumbers.length; index += 1) {
      if (inputArrNumbers[index] % 3 == 0 && inputArrNumbers[index] % 5 != 0) {
        outputArr.push("fizz");
      }
      else if (inputArrNumbers[index] % 3 != 0 && inputArrNumbers[index] % 5 == 0) {
        outputArr.push("buzz");
      }
      else if (inputArrNumbers[index] %3 == 0 && inputArrNumbers[index] % 5 == 0) {
        outputArr.push("fizzbuzz");
      } 
      else {
        outputArr.push("bug!");
      }
    }
  
    return outputArr;
  }
  else {
    return `ERROR > tipo não é objeto Array!`
  }
}

// < Para o teste manual >
// let arrayteste2 = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(arrayteste2));


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
