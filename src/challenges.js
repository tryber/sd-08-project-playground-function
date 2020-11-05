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
  let concatenacao = "";
  concatenacao = name[name.length - 1] + ", " + name[0];
  return concatenacao;
}

// Desafio 5
function footballPoints(wins, ties) {
  let time = 0;
  time = wins * 3 + ties;
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
 }
  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catchCat = "";
  let mouseCat1 = Math.abs(cat1 - mouse);
  let mouseCat2 = Math.abs(cat2 - mouse); 
    if (mouseCat1 > mouseCat2){
    catchCat = "cat2";
  } else if (mouseCat1 < mouseCat2){
    catchCat = "cat1";
  } else{
    catchCat = "os gatos trombam e o rato foge";
  }
  return catchCat;
}
console.log(catAndMouse(2, 3, -3))
  

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let index = 0; index < numbers.length; index += 1){
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0){
      result.push("fizzBuzz");
    } else if (numbers[index] % 3 === 0){
      result.push("fizz");
    } else if (numbers[index] % 5 === 0){
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
}

// Desafio 9
function encode(vowel) {
  let cripto = "";
  for (let v = 0; v < vowel.length; v += 1){
    let code = cripto.replace("a"/"e")
  }
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
  let technology = [];
  let listaOrdenada = tech.sort();
  if (tech.length === 0){
    return "Vazio!";
  }
  for (let t in listaOrdenada){
    technology.push({
      tech: tech[t],
      name: name
    });
  }
    return technology;
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
