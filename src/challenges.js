// Desafio 1
function compareTrue(boolean1, boolean2) {
  return (boolean1 && boolean2)
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(arrStr) {
  return arrStr[arrStr.length - 1] + ', ' + arrStr[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1)
}

// Desafio 6
function highestCount(array) {
  maior = [Math.max(...array)];
  countMax = [];
  for (num in array) {
      if (array[num] == maior) {
          countMax.push(num);
      };
  };  
    return countMax.length;
}

// Desafio 7
function catAndMouse() {
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if (distanciaCat1 < distanciaCat2) {
      return 'cat1';
  }   else if (distanciaCat1 > distanciaCat2) {
      return 'cat2';
  }   else {
      return 'os gatos trombam e o rato foge';
  }
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
