// Desafio 1
function compareTrue(x,y) {
  if (x && y === true){
    return true
  }else {
    return false
  };
}

// Desafio 2
function calcArea(base,height) {
  var calculo = (base * height) / 2
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  var separador = frase.split(" ")
  return separador;
}

// Desafio 4
function concatName(nome) {
  return nome[nome.length-1] + ", "+ nome[0];
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  maiorNumero = Math.max(array)
  var contagem
  for (n = 0; n < array.length; n += 1){
    if (array[n] === maiorNumero){
      contagem + 1
    }
  }
  return contagem
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (mouse > cat1) {
    let diffCat1 = mouse - cat1
  } else {
    let diffCat1 = cat1 - mouse
  }
  if (mouse > cat2) {
    let diffCat2 = mouse - cat2
  } else {
    let diffCat2 = cat2 - mouse
  }
  if (diffCat1 == diffCat2) {
    return "os gatos trombam e o rato foge"    
  } else if (diffCat1 < diffCat2){
    return cat1
  }  else {
    return cat2
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
