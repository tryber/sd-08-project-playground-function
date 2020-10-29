// Arquivos de desafios | Mário Pardo

// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayString = [];
  let string = '';
  for (let index in sentence){
    if (sentence[index] !== ' ') {
      string += sentence[index];
    } else {
      arrayString.push(string);
      string = '';
    }
  }
  arrayString.push(string)
  return arrayString
}
console.log(splitSentence('Go Trybe'))

// Desafio 4
function concatName(arrayName) {
  let nome = `${arrayName[arrayName.length - 1]}, ${arrayName[0]}`;
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let count = 0;
  for (let index in array){
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let indice in array) {
    if (array[indice] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let winner;
  if (distCat1 < distCat2) {
    winner = 'cat1'
  }
  else if (distCat2 < distCat1) {
    winner = 'cat2'
  } else {
    winner = 'os gatos trombam e o rato foge'
  }
  return winner;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz')
    }
    else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz')
    }
    else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz')
    } else {
      arrayFizzBuzz.push('bug!')
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let novaString = "";
  for (index in string){
    if (string[index] === 'a') {
      novaString += '1';
    }
    else if (string[index] === 'e') {
      novaString += '2';
    }
    else if (string[index] === 'i') {
      novaString += '3';
    }
    else if (string[index] === 'o') {
      novaString += '4';
    }
    else if (string[index] === 'u') {
      novaString += '5';
    } else {
      novaString += string[index];
    }
  }
  return novaString;
}
console.log(encode("Mario"));
function decode(string) {
  let novaString = "";
  for (index in string){
    if (string[index] === '1') {
      novaString += 'a';
    }
    else if (string[index] === '2') {
      novaString += 'e';
    }
    else if (string[index] === '3') {
      novaString += 'i';
    }
    else if (string[index] === '4') {
      novaString += 'o';
    }
    else if (string[index] === '5') {
      novaString += 'u';
    } else {
      novaString += string[index];
    }
  }
  return novaString;
}
console.log(decode('M1r34'))


// Desafio 10
function techList(arrayTech, nome) {
  let arrayObjetos = [];
  for (let index = 0; index < arrayTech.length; index += 1) {
    arrayObjetos.push({

      tech: arrayTech[index],
      name: nome

    }) 
  }
 return arrayObjetos;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], 'Mario'))
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