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
function highestCount(arrayNumeros) {
 
}








// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 > mouse && cat1 < cat2){
    return "cat1";
  }else if (cat2 > mouse && cat2 < cat1){
    return "cat2";
  }else if (cat1 == cat2 & cat1 == mouse && cat2 == mouse){
    return "os gatos trombam e o rato foge";
  }
}










// Desafio 8
function fizzBuzz(arrayNumeros) {
  for (let numeros=0; numeros<arrayNumeros.length; numeros++){
    if (arrayNumeros[numeros] % 3 == 0 && arrayNumeros[numeros] % 5 == 0){    
      return "fizzBuzz";
    }else if (arrayNumeros[numeros] % 5 == 0){
      return "buzz";
    }else if (arrayNumeros[numeros] % 3 == 0){
      return "fizz";
    }else {
      return "bug!";
    }  
  }  
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
  
  for (let key in nomeTech){
    let nomes = [];
        nomes = {
        tech: nomeTech[key],
        name: name   
    }
    return nomes; 
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "ruben"));








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
