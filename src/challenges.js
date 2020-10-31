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
    bigger = Math.max(...arrayNumbers);
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
  let result = "";
  for (let key in palavra){
    if (palavra[key] == "a"){
      result += 1;
    }else if (palavra[key] == "e"){
      result += 2;
    } else if (palavra[key] == "i"){
      result += 3;
    } else if (palavra[key] == "o"){
      result += 4;
    } else if (palavra[key] == "u"){
      result += 5;
    }else {
      result += palavra[key];
    }
  }
  return result;
}

function decode(palavra) {
  let result = "";
  for (let key in palavra){
    if (palavra[key] == 1){
      result += "a";
    } else if (palavra[key] == 2){
      result += "e";
    } else if (palavra[key] == 3){
      result += "i";
    } else if (palavra[key] == 4){
      result += "o";
    } else if (palavra[key] == 5){
      result += "u";
    } else {
      result += palavra[key];
    }
  }
  return result;
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
function generatePhoneNumber(arrayPhone) {
  let numberPhone = "";
  for (let key in arrayPhone){
    let bigPhone = 0;
    let counter = 0;
  

    if (counter > 2 || arrayPhone[key] < 0 || arrayPhone[key] > 9){
      numberPhone += "não é possível gerar um número de telefone com esses valores";
    } 
    return numberPhone;
  }  
}

console.log(generatePhoneNumber([1, 1, 3, 4, 5, 6, 8, 19, 0, 1]));



/*
else if (arrayPhone.length == 11){
  numberPhone += ("("+arrayPhone[0]+arrayPhone[1]+")"+arrayPhone[2]+arrayPhone[3]+arrayPhone[4]
  +arrayPhone[5]+arrayPhone[6]+"-"+arrayPhone[7]+arrayPhone[8]+arrayPhone[9]+arrayPhone[10]);
} else if (arrayPhone.length !== 11){
  numberPhone += "Array com tamanho incorreto.";
} 
*/





// Desafio 12
function triangleCheck(lineA, lineB, lineC) {  

  
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
