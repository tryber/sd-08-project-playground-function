// Desafio 1
function compareTrue(firstBoolean, secondBoolean) {
  if (firstBoolean && secondBoolean) {
    return true;
  }
  return false;
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}
calcArea(5, 5);

// Desafio 3
function splitSentence(string) {
  let splitArray = [];
  splitArray = string.split(" ");
  return splitArray;
}
splitSentence("go Trybe");

// Desafio 4
function concatName(array) {
  let result = "";
  result = array[array.length - 1] + ", " + array[0];
  return result;
}
concatName(["Joao", "Pedro", "Maria", "Paulo"]);

// Desafio 5
function footballPoints(wins, ties) {
  let result = 0;
  result = wins * 3 + ties;
  return result;
}
footballPoints(5, 5);

// Desafio 6
function highestCount(array) {
  let highest = array[0];
  let count = 0;
  for (i = 1; i < array.length; i++) {
    if (array[i] > highest) {
      highest = array[i];
    }
  }
  for (j = 0; j < array.length; j++) {
    if (highest === array[j]) {
      count += 1;
    }
  }
  return count;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

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
catAndMouse(1, 0, 2);

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
      result.push("bug!")
    }
  }
  return result;
}
fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
// Solução encontrada no Stackoverflow utilizando String.prototype.replace()
function encode(string) {
  let stringSwap = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5" }
  let encondeResult = "";
  encondeResult = string.replace(/[aeiou]/gi, m => stringSwap[m])

  return encondeResult;
}
encode("Tiago");

// Solução encontrada no Stackoverflow utilizando String.prototype.replace()
function decode(string) {
  let stringSwap = { "1": "a", "2": "e", "3": "i", "4": "o", "5": "u" }
  let encondeResult = "";
  encondeResult = string.replace(/[12345]/gi, m => stringSwap[m])

  return encondeResult;
}
decode("h3 th2r2!");

// Desafio 10
function techList(tech, name) {
  let resultArray = [];
  let orderedTechList = tech.sort();
  if (tech === 0) {
    return "Vazio!";
  }
  for (let i in orderedTechList) {
    resultArray.push({
      tech: orderedTechList[i],
      name: name
    });
  }
  return resultArray;
}
techList(["Javascript", "CSS", "HTML"], "Tiago");

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
