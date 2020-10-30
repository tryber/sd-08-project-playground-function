// Desafio 1
function compareTrue(param1,param2) {
  if (param1 && param2 === true) {
      return true;
  }
      return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(str) {
    let end = [];
    end = str.split(' ');
    return end;
}

// Desafio 4
function concatName(array) {
    let novoArray = [];
    novoArray = array[array.length - 1] + ', ' + array[0];
    return novoArray;
}

// Desafio 5
function footballPoints(wins, ties) {
    let totWins = wins * 3;
    let totTies = ties * 1;
    let total = totTies + totWins;
    return total;
}

// Desafio 6
function highestCount(arrayNumber) {
  let maxNumber = arrayNumber[0];
  let repet = 0;
  for (let index = 0; index < arrayNumber.length; index += 1){
      if (arrayNumber[index] > maxNumber) {
          maxNumber = arrayNumber[index];
      }
  }
  for (let index = 0; index < arrayNumber.length; index += 1){
      if (arrayNumber[index] === maxNumber) {
          repet += 1;
      }
  }
  return repet;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  if (distCat1 > distCat2) {
      return('cat2');
  } else if (distCat1 < distCat2) {
      return('cat1');
  } else if (distCat1 = distCat2) {
      return("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(arrayBase) {
  let arrayEnd = [];
  for (let index = 0; index < arrayBase.length; index += 1){
      if (arrayBase[index] % 3 === 0 && arrayBase[index] % 5 === 0) {
          arrayEnd.push("fizzBuzz");
      }else if (arrayBase[index] % 3 === 0) {
          arrayEnd.push("fizz");
      }else if (arrayBase[index] % 5 === 0) {
          arrayEnd.push("buzz");
      }else {
          arrayEnd.push("bug!");
      }
  }
  return arrayEnd;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(word1) {
  let list1 = word1.split('');
  for (let index = 0; index < list1.length; index += 1) {
      if (list1[index] == 'a') {
          list1[index] = 1;
      }else if (list1[index] == 'e') {
          list1[index] = 2;
      }else if (list1[index] == 'i') {
          list1[index] = 3;
      }else if (list1[index] == 'o') {
          list1[index] = 4;
      }else if (list1[index] == 'u') {
          list1[index] = 5;
      }
  }
  return list1.join('');
}

function decode(word2) {
  let list2 = word2.split('');
  for (let index = 0; index < list2.length; index += 1) {
      if (list2[index] == '1') {
          list2[index] = 'a';
      }else if (list2[index] == '2') {
          list2[index] = 'e';
      }else if (list2[index] == '3') {
          list2[index] = 'i';
      }else if (list2[index] == '4') {
          list2[index] = 'o';
      }else if (list2[index] == '5') {
          list2[index] = 'u';
      }
  }
  return list2.join('') ;
}

// Desafio 10

function techList(tech, name) {
  let sortedArray = tech.sort();
  let listEnd = [];
  for (let i = 0; i < tech.length; i += 1) {
      listEnd.push({
          tech: sortedArray[i],
          name: name
      })
  }
  return listEnd;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],"Fernanda"))

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
