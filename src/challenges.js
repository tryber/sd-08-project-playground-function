// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height / 2);
}

// Desafio 3
let word = "";
  /*let sentenceWords = [];
  for (let i = 0; i < sentence.length; i++){
  if (sentence[i] != " "){
    word += sentence[i]
  }
  else {
    sentenceWords.push (word);
    word = ""; 
  }
  } 
  return (sentenceWords);*/

function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(strings) {
  let stringConcat = strings[strings.length - 1] + ", " + strings[0];
  return stringConcat;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {  
  return 3 * wins + ties;
}
//console.log(footballPoints(8,2));

// Desafio 6
function highestCount(numeros) {
  let maior = numeros[0];
  let vezes = 0;
  for (let i = 1; i < numeros.length; i ++){
    if (numeros[i] > numeros[i+1]){
      maior = numeros[i];
    }
  }
  for (let i = 0; i < numeros.length; i ++){
    if (numeros[i] == maior){
      vezes += 1;
    }
  }
  return vezes;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs (mouse - cat1) < Math.abs (mouse - cat2)){
    return "cat1"
  }
  else if (Math.abs (mouse - cat1) == Math.abs (mouse - cat2)){
    return "os gatos trombam e o rato foge"
  }
  else {
    return "cat2";
  }
}
//console.log(catAndMouse(9, 5, 3)); 

// Desafio 8
function fizzBuzz(array) {
  let resposta = [];
  //for (let i = 0; i < array.length; i++)
  for (i in array) {    
    if(array[i] % 3 === 0 && array[i] % 5 === 0){
    resposta.push("fizzBuzz");
    }
    else if(array[i] % 5 === 0){
    resposta.push("buzz");
    }
    else if(array[i] % 3 === 0){
    resposta.push("fizz");
    }
    else {
    resposta.push("bug!");
    }
  }
  return resposta;
}
//console.log(fizzBuzz([30, 2, 15, 7, 9, 45]));

// Desafio 9
function encode(encode) {
  let message = "";
  for (let i in encode){
    if (encode[i] == "a"){
      message += 1;
    }
    else if (encode[i] == "e"){
      message += 2;
    }
    else if (encode[i] == "i"){
      message += 3;
    }
    else if (encode[i] == "o"){
      message += 4;
    }
    else if (encode[i] == "u"){
      message += 5;
    }
    else {
      message += encode[i];
    }
  }
  return message;
}
function decode(decode) {
  let message = "";
  for (let i in decode){
    if (decode[i] == 1){
      message += "a";
    }
    else if (decode[i] == 2){
      message += "e";
    }
    else if (decode[i] == 3){
      message += "i";
    }
    else if (decode[i] == 4){
      message += "o";
    }
    else if (decode[i] == 5){
      message += "u";
    }
    else {
      message += decode[i];
    }
  }
  return message;
}
//console.log(encode("Hi there!"));
//console.log(decode("H3 th2r2!"));

// Desafio 10
function techList(tech, name) {
  tech = tech.sort();
  let lista = [];  
  for (let i in tech){
    let itemLista = {};
    itemLista.tech = tech[i];
    itemLista.name = name;
    lista.push(itemLista);
  }
  return lista  
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

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
