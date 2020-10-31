// Desafio 1
function compareTrue(a, b) {  
  if (a && b){
    return true;
  }else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height / 2);
}


// Desafio 3
function splitSentence(palavras) {
  let arrayString = [];
  for (let index=0; index<palavras.length; index++){
    arrayString = palavras.split(" ");
  }
  return arrayString;
}


// Desafio 4

function concatName(arrayNomes) {
  return (arrayNomes[arrayNomes.length - 1] + ", " + arrayNomes[0]);
}


// Desafio 5
function footballPoints(wins, ties) {
  let pontosTotal = 0;
  let vitoriaPontos = 3;
  let empatePontos = 1;
  wins = wins * vitoriaPontos;
  ties = ties * empatePontos;
  return pontosTotal + wins + ties;
}









// Desafio 6
function highestCount(arrayNumbers) {
  let bigger = 0;
  let counter = 0;
  for (let key in arrayNumbers){
    if(arrayNumbers[key] > bigger){
      bigger = arrayNumbers[key];
    }
    if (bigger == arrayNumbers[key]){
      counter ++;
    }  
  }
 return counter;
}












// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1";
  }else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)){
    return "cat2";
  }else {
    return "os gatos trombam e o rato foge";
  }
}








// Desafio 8
function fizzBuzz(arrayNumeros) {
  let arrayResultado = [];
  for (let numeros=0; numeros<arrayNumeros.length; numeros++){
    if (arrayNumeros[numeros] % 3 == 0 && arrayNumeros[numeros] % 5 == 0){    
      arrayResultado.push("fizzBuzz");      
    }else if (arrayNumeros[numeros] % 5 == 0){
      arrayResultado.push("buzz");      
    }else if (arrayNumeros[numeros] % 3 == 0){
      arrayResultado.push("fizz");      
    }else {
      arrayResultado.push("bug!");      
    }  
  } 
  return arrayResultado; 
}








// Desafio 9
function encode(palavra) {
  let resultado = "";
  for (let vogais=0; vogais<palavra.length; vogais++){
    if (palavra[vogais] == "a"){
      resultado += 1;
    }else if (palavra[vogais] == "e"){
      resultado += 2;
    } else if (palavra[vogais] == "i"){
      resultado += 3;
    } else if (palavra[vogais] == "o"){
      resultado += 4;
    } else if (palavra[vogais] == "u"){
      resultado += 5;
    }else {
      resultado += palavra[vogais];
    }
  }
  return resultado;
}
console.log(encode("hi there!"));



function decode() {
  // seu código aqui
}








// Desafio 10
function techList(nomeTech, name) {    
  let nomesOrdenado = nomeTech.sort();
  let resultado = [];
  if (nomesOrdenado.length === 0){
    return "Vazio!";
  }
  for (let key in nomesOrdenado){    
        resultado.push({
        tech: nomesOrdenado[key],
        name: name   
    });     
  }  
  return resultado;
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
function hydrate(bebida) {
 
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
