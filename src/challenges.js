// Desafio 1
function compareTrue(value1,value2) {
  if (value1 && value2 === true) {
   return true;
  }
  return false;
  }
  compareTrue(true, false);
  
// Desafio 2
function calcArea(base, height) {
  var resultado = (base * height) / 2;
  return resultado;
}
calcArea(10,20);

  

// Desafio 3
function splitSentence(string) {
  let result = string.split(" ");
  return result;
  }

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0]
}
// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties
  return points
}
// Desafio 6
function highestCount(numbers) {
  let maiorValor = numbers[0]
  for(let index = 0; index < numbers.length; index +=1) {
    if (numbers[index] > maiorValor) {
      maiorValor = numbers[index]
    }
  }
  let repeat = 0
  for(let index = 0; index < numbers.length; index +=1 ) {
    if (numbers[index] === maiorValor) {
      repeat += 1
    }
  }
  return repeat
}

// Desafio 7
function catAndMouse() {
  mouse = 1
  cat1 = 30
  cat2 = 10
  
  distanciaCat1 = cat1 - mouse;
  distanciaCat2 = cat2 - mouse;

  if (distanciaCat1 > distanciaCat2) {
    return cat2
  } else if (distanciaCat2 > distanciaCat1) {  
    return cat1
  } else if (distanciaCat1 === distanciaCat2) {
    return "os gatos trombam e o rato foge"
  }
}
// Desafio 8
function fizzBuzz(numbers) {
let result = [];
for (let index = 0; index < numbers.length; index += 1) {
if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
  result.push("fizzBuzz")
  
} else if (numbers[index] % 5 === 0) {
  result.push("buzz")
} else if (numbers[index] % 3 === 0) {
result.push("fizz")
} else {
result.push("bug!")
}
}
return result
}

// Desafio 9
function encode(string) {
  let string = string.replace
  let result = string
    string.replace(/a/g, 1)
    string.replace(/e/g, 2)
    string.replace(/i/g, 3)
    string.replace(/o/g, 4)
    string.replace(/u/g, 5)
  
  return result
}
console.log(encode("hi there!"));

function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, name) {
  array.sort()
  let list = []
  for (let index = 0; index < array.length; index += 1) {
    let objeto = {
      tech: array[index],
      name: name
    }
    list.push(objeto)
  }
  return list
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
