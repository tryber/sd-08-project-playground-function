// Desafio 1
function compareTrue(varTrue, varFalse) {
  if (varTrue == true && varFalse == false) {
    return("true"); 
  } else 
  return("false");
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(names) {
  return(names[names.length - 1] + ", " + names[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return("cat1");
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return("cat2");
  } else if (Math.abs(mouse - cat1) == Math.abs(mouse - cat2)) {
    return("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(inArray) {
  let arrayResult = [];
  for (index = 0; index < inArray.length; index++) {
    if (inArray[index] % 3 == 0 && inArray[index] % 5 == 0) {
      arrayResult.push("fizzbuzz");
    } else if (inArray[index] % 3 == 0 && inArray[index] % 5 != 0) {
      arrayResult.push("fizz");
    } else if (inArray[index] % 3 != 0 && inArray[index] % 5 == 0) {
      arrayResult.push("buzz");
    } else if (inArray[index] % 3 != 0 && inArray[index] % 5 != 0) {
      arrayResult.push("bug!");
    }
  }
  return arrayResult;
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
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) && (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) && (lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA))) {
    return(true);
  } else return (false);
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
