// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) {
    return true;
  } 
    return false;
}

// Desafio 2
function calcArea(base, height) {
  var area = (base * height)/ 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
    return sentence.split(" ");
}

// Desafio 4
function concatName(name) {
  let concatenacao = name[name.length - 1] + ',' + name[0]
  return concatenacao
}


// Desafio 5
function footballPoints(wins, ties) {
  let time = wins * 3 + ties;
    return time;
}

// Desafio 6
function highestCount(max) {
 let number = max[0];
 let contador = 0;
 for (let n = 0; n < max.length; n += 1){
   if (max[n] > number){
     number = max[n];
   }
   return number;
 }
 
 for (let c = 0; c < max.length; c += 1){
   if (max[c] == number){
     contador += 1;
   }
   return contador;
 }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (cat1 < cat2){
  return "cat2";
  }
  if (cat1 > cat2){
    return "cat1";
  }
  else (cat1 == cat2)
    return "os gatos trombam e o rato foge";
  }
  

// Desafio 8
function fizzBuzz(result) {
  let result = [];
  for (let u = 0; u < result.length; u += 1){
    if (u % 3 == 0){
      result.push("fizz");
    }
    else if (u % 5 == 0){
      result.push("buzz");
    }
    else if (u % 3 == 0 && u % 5 == 0){
      result.push("fizzbuzz");
    }
    result.push("bug!");
  }
}


// Desafio 9
function encode(cripto) {
  let cripto = '';
  for (let v = 0; v < cripto.length; v += 1)
  if (cripto[v] == "a"){
    cripto.push(1);
  } else if (cripto[v] == "e"){
    cripto.push(2);
  } else if (cripto[v] == "i"){
    cripto.push(3);
  } else if (cripto[v] == "o"){
    cripto.push(4);
  } else (cripto[v] == "u")
    cripto.push(5);
  }

function decode() {
  let revert = '';
  for (let n = 0; n < revert.length; n += 1)
    if (revert[n] == 1){
    revert.push("a");
  } else if (revert[n] == 2){
    revert.push("e");
  } else if (revert[n] == 3){
    revert.push("i");
  } else if (revert[n] == 4){
    revert.push("o");
  } else (revert[n] == 5)
    revert.push("u");
  }


// Desafio 10
function techList(tech, name) {
  let technology  = {
  
  }
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  
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
