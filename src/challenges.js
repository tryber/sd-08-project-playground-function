// Desafio 1
function compareTrue(var1, var2) {
  booleanResult = [];
  if (var1 == true && var2 == true) {
    return booleanResult = true; 
  } else 
  return booleanResult = false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let sentenceResult = sentence.split(" ");
  return sentenceResult;
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
function highestCount(numbers) {
  let numbersMax = [];
  for (let i = 0; i < numbers.length; i+=1)
  if (numbers[i] == Math.max(...numbers)) {
    numbersMax.push(1);
  }
  return numbersMax.length;
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
function fizzBuzz(array) {
  let arrayResult = [];
  for (let i = 0; i < array.length; i+=1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      arrayResult.push("fizzBuzz");
    } else if (array[i] % 3 == 0 && array[i] % 5 != 0) {
      arrayResult.push("fizz");
    } else if (array[i] % 3 != 0 && array[i] % 5 == 0) {
      arrayResult.push("buzz");
    } else if (array[i] % 3 != 0 && array[i] % 5 != 0) {
      arrayResult.push("bug!");
    }
  }
  return arrayResult;
}

// Desafio 9
function encode() {

}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(tech, name) {
  let techList = [];
  if (tech == null) {
    techList = ["Vazio!"];
    return techList;
  }
  tech.sort();
  for (let i = 0; i < tech.length; i += 1) {
    techList.push([{"tech": tech[i] + ", name: " + name}]);
  }
  return techList;
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
