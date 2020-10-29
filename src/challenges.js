// Desafio 1
function compareTrue(boolOne, boolTwo) {
  if(boolOne && boolTwo) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let areaDoTriangulo = (base * height) / 2;
  return areaDoTriangulo;
}

// Desafio 3
function splitSentence(stringToSplit) {
  let dividida = stringToSplit.split(" ");
  return dividida;
}

// Desafio 4
function concatName(array) {
  let stringConcatenada = array[array.length -1] + ", " + array[0];
  return stringConcatenada;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties;
  return pontos;
}

// Desafio 6
function highestCount(arrayConta) {
  let arrayOrdenado = arrayConta.sort();
  var contaRepeticao = 0;
  let maiorNumero = arrayOrdenado[arrayOrdenado.length -1];  
  for (i=0; i< arrayOrdenado.length;i++){
    if (arrayOrdenado[i] == maiorNumero){
      contaRepeticao += 1;
    }
  }
  return contaRepeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let fimDaHistoria = "";
  if (cat1 - mouse < cat2 -mouse) {
    fimDaHistoria = "cat1";
  } else if (cat1 - mouse > cat2 -mouse) {
    fimDaHistoria = "cat2";
  } else {
    returnfimDaHistoria = "os gatos trombam e o rato foge";
  }
  return fimDaHistoria;
}
console.log(catAndMouse(4,3,1))
// Desafio 8
function fizzBuzz(array) {
  let arrayResultado = [];
  for (let item = 0; item <= array.length -1; item++){
    if (array[item] % 15 ==0){
      arrayResultado.push("fizzBuzz")
    } else if (array[item] % 3 == 0){
      arrayResultado.push("fizz")
    } else if (array[item] % 5 == 0 ){
      arrayResultado.push("buzz")
    } else {
      arrayResultado.push("bug!")
    }
  }
  return arrayResultado;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(array, name) {
  let newArray =[];
  let orgazineTechs = array.sort();
  for (i=0; i<array.length; i++){
     newArray[i] = {tech: orgazineTechs[i], name: name};
  }
  return newArray;
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
