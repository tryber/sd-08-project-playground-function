// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 === true && valor2 === true) {
    return true;
  } 
    return false;
}

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
  var num = [];
  for (unidade = 0; unidade < num.length; unidade += 1){
    if (unidade / 3){
      return "fizz";
    }
    else if (unidade / 5){
      return "buzz";
    }
    else if (unidade / 15){
      return "fizzbuzz";
    }
    return "bug!"
  }
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
