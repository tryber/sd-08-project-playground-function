// Desafio 1
function compareTrue(valor1, valor2) {

  let compara;
  if (valor1 === true && valor2 === true){
    compara = true;
  }else{
    compara = false;
  }
  return compara;
}

// Desafio 2
function calcArea(base, altura) {
  
  let areaTriangulo = (base * altura) / 2;

  return areaTriangulo
}

// Desafio 3
function splitSentence(array) {
  
  let nome = array.split(" ");
  return nome;
}


// Desafio 4
function concatName(array) {
  
  let nome = array[array.length-1] + ", " + array[0];
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  
  let points = (wins * 3) + ties;
  return points;
}


// Desafio 6
function highestCount(array) {
  let count =0;

  let maior = null;
  for(let i in array){
    if( array[i] > maior || maior == null){
      maior = array[i];
      count = 0;
      count++;
    }else if(array[i] == maior){
      count++;
    }
  }

  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2){

  let distanciaCat1 = mouse - cat1;
  let distanciaCat2 = mouse - cat2;

  if(distanciaCat1 < 0){
    distanciaCat1 = distanciaCat1 *-1;
  }else if(distanciaCat2 < 0){
    distanciaCat2 = distanciaCat2 *-1;
  }

  if(distanciaCat1 < distanciaCat2){

    return("cat1");
  }else if(distanciaCat2 < distanciaCat1){

    return("cat2");
  }else{
    return("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(array) {
  
  let arrayRetorno = [];
  for(let key in array){

    if(array[key] % 3 == 0 &&  array[key] % 5 == 0){
      arrayRetorno.push("fizzBuzz");
    }else if(array[key] % 3 == 0){
      arrayRetorno.push("fizz");
    }else if(array[key] % 5 == 0){
      arrayRetorno.push("buzz");
    }else{
      arrayRetorno.push("bug!");
    }
  }

  return(arrayRetorno);
}

// Desafio 9
function encode(string) {
  
  let arrayString = string.split("");
  for(let key in arrayString){
    if(arrayString[key] === "a"){
      arrayString[key] = "1";
    }else if(arrayString[key] === "e"){
      arrayString[key] = "2";
    }else if(arrayString[key] === "i"){
      arrayString[key] = "3";
    }else if(arrayString[key] === "o"){
      arrayString[key] = "4";
    }else if(arrayString[key] === "u"){
      arrayString[key] = "5";
    }
  }
  arrayString = arrayString.join("");
  return(arrayString);
}

function decode(string) {

  let arrayString = string.split("");
  for(let key in arrayString){
    if(arrayString[key] === "1"){
      arrayString[key] = "a";
    }else if(arrayString[key] === "2"){
      arrayString[key] = "e";
    }else if(arrayString[key] === "3"){
      arrayString[key] = "i";
    }else if(arrayString[key] === "4"){
      arrayString[key] = "o";
    }else if(arrayString[key] === "5"){
      arrayString[key] = "u";
    }
  }
  arrayString = arrayString.join("");
  return(arrayString);
}

// Desafio 10
function techList(array, nome) {
  
  array.sort();
  let arrayRetorno = [];
  if(array.length < 1){
    return("Vazio!");
  }else{
    for(let key in array){

      arrayRetorno.push({tech: array[key], name: nome})
    }
    return(arrayRetorno);
  }
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
