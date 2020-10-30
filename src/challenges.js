// Desafio 1

function compareTrue (valor1, valor2) {
  if (valor1 && valor2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2

function calcArea (base, height) {
  let area = base * height / 2;
  return area;  
}

// Desafio 3

function splitSentence (literal) {
  let split = literal.split(" ");
  return split;
}

// Desafio 4
function concatName(array) {
  let string;
  for (i in array){
      if(i == array.length - 1){
          string = array[i];
      }
  }
  if(array[0]){
      string += ", " + array[0];
  }
  return string;
}

// Desafio 5
function footballPoints (wins, ties) {
  let pontos = 0;
  for(i = 0; i < wins; i++) {
      pontos = wins * 3;
  }
  for(i = 0; i < ties; i++) {
      pontos += 1;
  }
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero;
  let cont = 0;
  for (let i = 0; i < array.length; i++){
    maiorNumero = array[i];
    for(let j = 0; j < array.length; j++){
      if(maiorNumero < array[j]){
        maiorNumero = array[j];
      } 
    }
  }
  for(let k = 0; k < array.length; k++){
    if(maiorNumero == array[k]){
      cont++;
    }
  }
  return cont;
}

//console.log(highestCount([9, 3, 3, 3, 9, 3, 9]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseMove = Math.abs(mouse)
  let cat1Move = Math.abs(cat1)
  let cat2Move = Math.abs(cat2)

  if (Math.abs(mouseMove - cat1Move) < Math.abs(mouseMove - cat2Move)){
    return "cat1";
  } else if (Math.abs(mouseMove - cat2Move) < Math.abs(mouseMove - cat1Move)){
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

//console.log(catAndMouse(-1, -3, 2));

// Desafio 8
function fizzBuzz(array) {
  let a = [];
  
  for (let i = 0; i < array.length; i++){
    if(array[i] % 3 == 0){
      if(array[i] % 5 == 0){
        a[i] = "fizzBuzz";
      } else {
        a[i] = "fizz";
      }
    } else if (array[i] % 5 == 0) {
      a[i] = "buzz";
    }  else {
      a[i] = "bug!";
    }
  }
  return a;
}

// Desafio 9
function encode(literal) {
  for (i in literal){
    if(literal[i] == "a"){
      literal = literal.replace(literal[i], "1");
    } else if(literal[i] == "e"){
      literal = literal.replace(literal[i], "2");
    } else if(literal[i] == "i"){
      literal = literal.replace(literal[i], "3");
    } else if(literal[i] == "o"){
      literal = literal.replace(literal[i], "4");
    } else if(literal[i] == "u"){
      literal = literal.replace(literal[i], "5");
    }
  }
  return literal;
}

//console.log(encode("hi there"))

function decode(literal) {
  for (i in literal){
    if(literal[i] == "1"){
      literal = literal.replace(literal[i], "a");
    } else if(literal[i] == "2"){
      literal = literal.replace(literal[i], "e");
    } else if(literal[i] == "3"){
      literal = literal.replace(literal[i], "i");
    } else if(literal[i] == "4"){
      literal = literal.replace(literal[i], "o");
    } else if(literal[i] == "5"){
      literal = literal.replace(literal[i], "u");
    }
  }
  return literal;
}

//console.log(decode("H3 th2r2!"));

// Desafio 10
function techList(array, name) {
  if(array.length == 0){
    return "Vazio!";
  } else {
    let tecnologias = array.sort();
    let arr = [];
    let objeto = {};

    for (let i = 0; i < tecnologias.length; i++){
      objeto = {
        tech: tecnologias[i],
        name: name,
      }
      arr[i] = objeto;    
    }
    return arr;
  }
  
}

//console.log(techList([], "João"))
 
// Desafio 11
function generatePhoneNumber(array) {
  let cont = 0;

  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length; j++){
      if(array[i] == array[j]){
        cont++;
      } 
    }
    if(array[i] == 0 || array[i] > 9 || cont > 2){ 
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  if(array.length == 11){
    let numeros = "";
    let telefone = '', meioTel = '', fimTel = '';
    for(let i = 0; i < array.length; i++){
      numeros += array[i]
    }
    telefone = " ("+numeros[0]+""+numeros[1]+") ";
    for (let i = 2; i <= 6; i++){
      meioTel += numeros[i]; 
    }
    telefone += meioTel +"-";
    for(let i = 7; i <= 10; i++){
      fimTel += numeros[i]
    }
    telefone += fimTel;
    return telefone;
  } else {
    return "Array com tamanho incorreto.";
  }
}

//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 1]))

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
