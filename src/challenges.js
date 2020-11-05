// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  let arr;
  arr = frase.split(' ');
  return arr;
}

// Desafio 4
function concatName(array) {
  let result = '';
  result = array[array.length -= 1]+', '+array[0];
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let count = 0;
  for (i = 1; i < array.length; i+=1) {
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  for (j = 0; j < array.length; j+=1) {
    if (highest === array[j]) {
      count += 1;
    }
  }
  return count;
}
//melhorar isso aqui
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let closestCat = "";
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    closestCat = "cat1";
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    closestCat = "cat2";
  } else {
    closestCat = "os gatos trombam e o rato foge";
  }
  return closestCat;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push("fizzBuzz");
    } else if (array[i] % 3 === 0) {
      result.push("fizz");
    } else if (array[i] % 5 === 0) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9

function encode(string) {
  let stringSwap = { a: "1", e: "2", i: "3", o: "4", u: "5" };
  let encondeResult = "";
  encondeResult = string.replace(/[aeiou]/gi, (m) => stringSwap[m]);

  return encondeResult;
}


function decode(string) {
  let stringSwap = { 1: "a", 2: "e", 3: "i", 4: "o", 5: "u" };
  let encondeResult = "";
  encondeResult = string.replace(/[12345]/gi, (m) => stringSwap[m]);

  return encondeResult;
}

// Desafio 10
function techList(tech, name) {
  let resultArray = [];
  let orderedTechList = tech.sort();
  if (tech.length === 0) {
    return "Vazio!";
  }
  for (let i in orderedTechList) {
    resultArray.push({
      tech: orderedTechList[i],
      name: name,
    });
  }
  return resultArray;
}
//pode melhorar
// Desafio 11
function generatePhoneNumber(array) {
  let result = "";
  let counts = [];
  let rawString = array.join("");
  result = rawString.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
  if (array.length !== 11) {
    result = "Array com tamanho incorreto.";
  } else {
    array.forEach(function (i) {
      counts[i] = (counts[i] || 0) + 1;
    });
    for (let i = 0; i < array.length; i++) {
      if (array[i] < 0 || array[i] > 9 || counts[i] >= 3) {
        result = "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB > lineC;
  let sumAC = lineA + lineC > lineB;
  let sumBC = lineB + lineC > lineA;

  return sumAB && sumAC && sumBC;
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
