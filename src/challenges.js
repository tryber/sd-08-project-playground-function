// Desafio 1
function compareTrue(num1, num2) {
  return num1 && num2;
}
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = base * height / 2
  return areaTriangulo;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}
//string.split() https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254

// Desafio 4
function concatName(arrayDeStrings) {
  let size = arrayDeStrings.length - 1;
  let string ='';
  string = arrayDeStrings[size] + ', ' + arrayDeStrings[0];
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return  winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(array) {
  let highestValue = Math.max.apply(null, array);
  let count = 0;
  for (let index = 0; index < array.length; index += 1){
    if(array[index] == highestValue) {
      count += 1;
    }
  }
  return  count;
} // Math.max.apply ==> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat01 = Math.abs(cat1 - mouse);
  let cat02 = Math.abs(cat2 - mouse);
  let string = 'os gatos trombam e o rato foge';
  if (cat01 < cat02) {
    return "cat1"
  } else if (cat02 < cat01) {
    return "cat2"
  } else {
    return string;
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0){
      arrayFizzBuzz.push("fizzBuzz")
    } else if (array[index] % 5 == 0) {
      arrayFizzBuzz.push("buzz")
    } else if(array[index] % 3 == 0) {
      arrayFizzBuzz.push("fizz")
    } else {
      arrayFizzBuzz.push("bug!")
    }
  }
  return arrayFizzBuzz;
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
