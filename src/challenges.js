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

  let sentence = [];
  let palavra = "";
  
  for (index = 0; index < param.length; index++){
    for(index2 = index; param[index2] != " "; index2++){
      if(index2 != 0){
        index2 ++;
      }
      // palavra += param[index2];
    } 
    sentence.push(palavra);
    palavra = "";
  }
  param.split(' ');
  return sentence;
}
console.log(splitSentence("go Trybe"));

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
    
let distGato1 = mouse - cat1;
let distGato2 = mouse - cat2;

if(Math.sign(distGato1) == -1){
    distGato1 *= -1;
}else{
    distGato1 -= 1;
}
if(Math.sign(distGato2) == -1){
    distGato2 *= -1;
}else{
    distGato2 -1;
}
 if(distGato1 < distGato2){
   return "cat1";
 }else if(distGato2 < distGato1){
   return "cat2";
 }else if(distGato1 == distGato2){
   return "os gatos trombam e o rato foge";
 }
}
// console.log(catAndMouse(1, 3, 5));

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
