// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } 
    return false;
}
console.log(compareTrue(false, true))

// Desafio 2
function calcArea(base, height) {
  var area = (base * height)/ 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
    return sentence.split(" ");
}

// Desafio 4
function concatName(name) {
  let primeiro = name[0];
  let ultimo = name[name.length - 1];
  let concatenacao = ultimo + ',' + primeiro
  return concatenacao
}

// Desafio 5
function footballPoints(wins, ties) {
  let wins = 1;
  let ties = 1;
  let time = wins * 3 + ties;
    return time;
}
console.log(footballPoints(10, 15))


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2){
  return cat2;
  }
  if (cat1 > cat2){
    return cat1;
  }
  else (cat1 = cat2)
    return "os gatos trombam e o rato foge";
  }

// Desafio 8
function fizzBuzz(num) {
  let result = [];
  for (unit = 0; unit < num.length; unit += 1){
    if (num[unit] % 3 == 0){
      result.push("fizz");
    }
    else if (num[unit] % 5 == 0){
      result.push("buzz");
    }
    else if (num[unit] % 15 == 0){
      result.push ("fizzbuzz");
    }
    result.push("bug!")
  }
    return result;
}


// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(tech, name) {
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
