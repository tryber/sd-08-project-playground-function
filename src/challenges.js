// Desafio 1
function compareTrue(param1, param2) {
 if(param1 == true && param2 == true){
   return true;
 }else{
   return false;
 }
}
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let triangulo = (base*height)/2;
  return triangulo;
}
// console.log(calcArea(10, 5));

// Desafio 3
function splitSentence(param) {
  let vetor = [];
  vetor = param.split(' ');
  
  return vetor;
  }
// console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(param) {
  let resultado = "";
  resultado += param[param.length -1];
  resultado += ", ";
  resultado += param[0];
  return resultado;
}
// let teste = ["Murilo", "Batista", "da", "Silva"];
// console.log(concatName(teste));

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = 0;
  pontos =  (wins*3) + (ties*1);

  return pontos;
}
// console.log(footballPoints(10, 5));

// Desafio 6
function highestCount(param) {

  let numero = 0;
  let contador = 0;
  let parametro = param.length;

  for(index = 0; index < parametro; index++){
    if( param[index] > numero ){
      numero = param[index];
    }
  }
  for(index2 = 0; index2 < parametro; index2++){
    if (param[index2] === numero){
      contador ++;
    }
  }
  return contador;
}
// let vetor = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(vetor));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
    
  let distGato1 = cat1 - mouse;
  let distGato2 = cat2 - mouse;
  
  distGato1 = Math.abs(distGato1);
  distGato2 = Math.abs(distGato2);

   if(distGato1 < distGato2){
     return "cat1";
   }else if(distGato2 < distGato1){
     return "cat2";
   }else if(distGato1 == distGato2){
     return "os gatos trombam e o rato foge";
   }
  }
  // console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(param) {
  
  let vetor = param;
  let vetorResult = [];
  for (let index = 0; index < vetor.length; index += 1){
      if(vetor[index] % 3 == 0 && vetor[index] %5 == 0){
        vetorResult.push("fizzBuzz");
      }else if (vetor[index] % 3 == 0){
        vetorResult.push("fizz");
      }else if (vetor[index] %5 == 0){
        vetorResult.push("Buzz");
      }else{
        vetorResult.push("bug!");
      }
  }
  return vetorResult;
} 
// let teste = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(teste));

// Desafio 9
function encode(param) {

  let texto = param;
  
  for(let index = 0; index < texto.length; index += 1){
    if(texto[index] == "a"){
      texto = texto.replace('a', '1');
    }else if(texto[index] == 'e'){
      texto = texto.replace('e', '2');
    }else if (texto[index] == 'i'){
      texto = texto.replace('i', '3');
    }else if(texto[index] == 'o'){
      texto = texto.replace('o', '4');
    }else if (texto[index] == 'u'){
      texto = texto.replace('u', '5');
    }
  }
  return texto;
}
// let teste = 'go trybe!';
// console.log(encode(teste));
function decode(param1) {

  let texto = param1;
  
  for(let index = 0; index < texto.length; index += 1){
    if(texto[index] == "1"){
      texto = texto.replace('1', 'a');
    }else if(texto[index] == "2"){
      texto = texto.replace('2', 'e');
    }else if (texto[index] == "3"){
      texto = texto.replace('3', 'i');
    }else if(texto[index] == "4"){
      texto = texto.replace('4', 'o');
    }else if (texto[index] == "5"){
      texto = texto.replace('5', 'u');
    }
  }
  return texto;
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
