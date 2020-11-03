function calcularDistancia(pos1, pos2) {
  return Math.abs(pos1 - pos2);
}

// Desafio 1
function compareTrue(boolean1, boolean2) {
  if(boolean1 == true && boolean2 == true) {
    return true;
  }else {
    return false;
  }
}
let boolean1 = true;
let boolean2 = true;
console.log(compareTrue(boolean1, boolean2))

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  area = (base * height) / 2;
  return area
}
console.log(calcArea(10, 10))

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let arraysrt = string.split(' ')
  return arraysrt
}
console.log(splitSentence('go trybe'))

// Desafio 4
function concatName(arraysrt) {
  // seu código aqui
  let lastName = arraysrt[arraysrt.length - 1];
  let firstName = arraysrt[0]
  let concatStr = lastName + ', ' + firstName
  return concatStr
}
console.log(concatName( ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let win = wins * 3;
  total = win + ties
  return total
}
console.log(footballPoints(3, 2))

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maior = numbers[0];
  let count = 0;
  for (let key in numbers) {
    if (numbers[key] > maior) {
       maior = numbers[key];
    }
  }
  for (let key in numbers) {
    if (numbers[key] == maior) {
      count++
    }
  }
  return count
}
console.log(highestCount([9, 1, 1,10, 10, 10, 10, 2, 3, 9, 5, 9, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = calcularDistancia(cat1, mouse);
  let distanciaCat2 = calcularDistancia(cat2, mouse);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse(1,0,2))

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let newArray = [];
  for (let key in numbers) {
    if (numbers[key] % 3 == 0 && numbers[key] % 5 ==0) {
      newArray.push('fizzBuzz')
    }else if (numbers[key] % 5 == 0) {
      newArray.push("buzz")
    }else if (numbers[key] % 3 == 0 ) {
      newArray.push("fizz")
    }else {
      newArray.push("bug!")
    }
  }
  return newArray
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(str) {
  // seu código aqui
  let codificar = str
    .split('a')
    .join('1')
    .split('e')
    .join('2')
    .split('i')
    .join('3')
    .split('o')
    .join('4')
    .split('u')
    .join('5');
  return codificar;
}
function decode(str) {
  // seu código aqui
  let decodifcar = str
    .split('1')
    .join('a')
    .split('2')
    .join('e')
    .split('3')
    .join('i')
    .split('4')
    .join('o')
    .split('5')
    .join('u');
  return decodifcar
}

console.log(encode('hi there!'))
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
