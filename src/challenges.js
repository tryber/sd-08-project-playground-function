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
    let splitSentence = []; 
    splitSentence = sentence.split(" ");
    return splitSentence;
}

// Desafio 4
function concatName(name) {
  let concatenacao = name[name.length - 1] + ',' + name[0];
  return concatenacao;
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
 }
 for (let c = 0; c < max.length; c += 1){
   if (max[c] === number){
     contador += 1;
   }
   return contador;
 }
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseCat1 = Math.abs(cat1 - mouse);
  let mouseCat2 = Math.abs(cat2 - mouse); 
  if (mouseCat1 < mouseCat2){
    return "cat2";
  }
  if (mouseCat1 > mouseCat2){
    return "cat1";
  }
  else (mouseCat1 == mouseCat2)
    return "os gatos trombam e o rato foge";
  }
  

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0){
      result.push("fizzbuzz")
    }
    else if (numbers[index] % 3 == 0){
      result.push("fizz");
    }
    else if (numbers[index] % 5 == 0){
      result.push("buzz");
    } else
      result.push("bug!");
  }
  return result;
}

// Desafio 9
function encode(vowel) {
  let cripto = "";
  for (let v = 0; v < vowel.length; v += 1){
    if (vowel[v] == "a"){
    vowel.push(1);
  } else if (vowel[v] == "e"){
    vowel.push(2);
  } else if (vowel[v] == "i"){
    vowel.push(3);
  } else if (vowel[v] == "o"){
    vowel.push(4);
  } else (vowel[v] == "u")
    vowel.push(5);  
  }
  return cripto;
}

function decode(unit) {
  let revert = "";
  for (let n = 0; n < unit.length; n += 1){
    if (unit[n] == 1){
    unit.push("a");
  } else if (unit[n] == 2){
    unit.push("e");
  } else if (unit[n] == 3){
    unit.push("i");
  } else if (unit[n] == 4){
    unit.push("o");
  } else (unit[n] == 5)
    unit.push("u");
  }
  return revert;
}


// Desafio 10
function techList(tech, name) {
  // seu código aqui
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
