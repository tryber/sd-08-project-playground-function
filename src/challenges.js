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
  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2; 
  let resultadoDaCaca; 
  if (distanciaCat1 <0){
    distanciaCat1 *= -1;
  }
  if(distanciaCat2 < 0){
    distanciaCat2 *= -1;
  }
  if (distanciaCat1 < distanciaCat2) {
    resultadoDaCaca = "cat1";
  } else if (distanciaCat2 < distanciaCat1) {
    resultadoDaCaca = "cat2";
  } else if (distanciaCat1 == distanciaCat2) {
    resultadoDaCaca ="os gatos trombam e o rato foge";
}


  return resultadoDaCaca;
}

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
function encode(stringSemCriptografia) {
  let arraySemCripto =stringSemCriptografia.split("");
  for (let caracter = 0; caracter < arraySemCripto.length; caracter++){
    if(arraySemCripto[caracter] == "a"){
      arraySemCripto[caracter] = "1";
      } else if(arraySemCripto[caracter] == "e"){
        arraySemCripto[caracter] = "2";
      } else if(arraySemCripto[caracter] == "i"){
        arraySemCripto[caracter] = "3";
      } else if(arraySemCripto[caracter] == "o"){
        arraySemCripto[caracter] = "4";
      } else if(arraySemCripto[caracter] == "u"){
        arraySemCripto[caracter] = "5";
      } else {continue}
  }
  let stringCriptografada = arraySemCripto.join("");
  return stringCriptografada;
}


function decode(codigoSecreto) {
  let arraySecreto = codigoSecreto.split("");
  for (let caracter = 0; caracter < arraySecreto.length; caracter++){
    if(arraySecreto[caracter] == "1"){
      arraySecreto[caracter] = "a";
      } else if(arraySecreto[caracter] == "2"){
        arraySecreto[caracter] = "e";
      } else if(arraySecreto[caracter] == "3"){
        arraySecreto[caracter] = "i";
      } else if(arraySecreto[caracter] == "4"){
        arraySecreto[caracter] = "o";
      } else if(arraySecreto[caracter] == "5"){
        arraySecreto[caracter] = "u";
      } else {continue}
  }
  let codigoRevelado = arraySecreto.join("");
  return codigoRevelado;
}

// Desafio 10
function techList(array, name) {
  let newArray =[];
  let orgazineTechs = array.sort();
  for (i=0; i < orgazineTechs.length; i++){
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
