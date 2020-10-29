// Desafio 1
function compareTrue(a, b) {
  
  if(a === true && b === true){
    return true;
  } else {
    return false;
  }
  // seu código aqui
}
//console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height)/2;
  return calculo;
  // seu código aqui
}
//console.log(calcArea(10, 4));


// Desafio 3
function splitSentence(string) {
    let split = string.split(" ");
    return split;
  }
  //console.log(splitSentence("Go Trybe!"));
  // seu código aqui

// Desafio 4
function concatName(nomes) {
  let PRIMEIROITEM;
  let ULTIMOITEM;
  let name = "";
    for (index = 0; nomes.length > index; index += 1){
      PRIMEIROITEM = nomes[0];
      if (index = nomes.length - 1){
        ULTIMOITEM = nomes[index];
      }
      name = ULTIMOITEM +", "+ PRIMEIROITEM;
    }
    return name;
  }
// seu código aqui
//console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]))

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins*3) + ties;
  return points;
  // seu código aqui
}
//console.log (footballPoints(10, 5))

// Desafio 6
function highestCount(maior) {
  let repMaior = 0;
  let maiorNumero = 0;
  for(index = 0; maior.length > index ; index+=1){
    if(maior[index] > maiorNumero){
      maiorNumero = maior[index];
    } else {
      maiorNumero = maiorNumero;
    }
    }
      for(index2 = 0; maior.length > index2; index2+=1){
       if (maiorNumero === maior[index2]){
          repMaior+=1;
        }
    }
    
  return repMaior;
  // return maiorNumero;
  // seu código aqui
}
//console.log(highestCount([1, 5, 2, 6, 7, 7, 1, 0, 7]));  


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMC1 = Math.abs(cat1 - mouse);
  let distMC2 = Math.abs(cat2 - mouse);
  let distCats = Math.abs(cat1 - mouse) - Math.abs(cat2 - mouse);
  
  if (distCats === 0){
    return "os gatos trombam e o rato foge";
  }
  if (distMC1 < distMC2){
    return "cat1";
  } else {
    return "cat2";
  }
  // seu código aqui
}
console.log (catAndMouse(7, 5, 8))

// Desafio 8
function fizzBuzz(numeros) {
  let string = [];
  for(index in numeros){
    if((numeros[index] % 3 === 0) && (numeros[index] % 5 !== 0)){
      string.push("fizz");
    } else if ((numeros[index] % 3 !== 0) && (numeros[index] % 5 === 0)){
      string.push("buzz");
    } else if ((numeros[index] % 3 === 0) && (numeros[index] % 5 === 0)){
      string.push("fizzBuzz");
    } else {
      string.push("bug!");
    } 
  }
  return string;
  // seu código aqui
}
//console.log (fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let word = "";
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for(let index of string){
    if(vowels[index] === undefined){
      word += index;
    } else {
      word += vowels[index];
    }
  }
  return word;
  // seu código aqui
}
//console.log(encode("hi there!"));

function decode(stringN) { 
    // /a/g, "1"
    let word2 = "";
    let number = {
      1: "a",
      2: "e",
      3: "i",
      4: "o",
      5: "u",
    }
    for(let index2 of stringN){
      if(number[index2] === undefined){
        word2 += index2;
      } else {
        word2 += number[index2];
      }
    }
    return word2;
  // seu código aqui
}
  //console.log(decode("h3 th2r2!"))

// Desafio 10
function techList(tech, name) {
  let arrayTech = tech.sort()
  let learn = [];
  for (let index = 0; index < arrayTech.length; index+=1){
    let techK = {};
    techK.tech = tech[index];
    techK.name = name;
    learn.push(techK)
  }
  return learn;
  // seu código aqui
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Bruno"))

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC || lineB < lineA + lineC || lineC < lineA + lineB){
    if(lineA > Math.abs(lineB - lineC) || lineB > Math.abs(lineA - lineC) || lineC > Math.abs(lineA - lineB)){
    return true;
    }
  }
  // seu código aqui
}
// console.log(triangleCheck(10, 14, 8))

// Desafio 13
function hydrate(string) {
  // let stringValue = string;
  // let result = stringValue.match(/\d+/g);
  // for (key in string){
  //   if(stringValue.match(/\d+/g) > 1){
  //     return stringValue.match(/\d+/g) +" copos de água"
  //   }else{
  //       return stringValue.match(/\d+/g) +" copo de água";
  // }
  //  // seu código aqui
  // }
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
