// Desafio 1
function compareTrue(a, b) {
  let compare = 10;
  
  if(a < compare && b > compare){
    return true;
  } else{
    return false;
  }
  // seu código aqui
}
//console.log(compareTrue(5, 10));

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
  posMouse = mouse;
  posCat1 = cat1;
  posCat2 = cat2;
  if (Math.abs(posCat1 - posMouse) < Math.abs(posCat2 - posMouse)){
    return "cat2";
  } else if (Math.abs(posCat2 - posMouse) < Math.abs(posCat1 - posMouse)){
    return "cat1";
  } else if (Math.abs(posCat1 - posMouse) == Math.abs(posCat2 - posMouse)){
    return "Os gatos trombam e o rato foge";
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
function triangleCheck(lineA, lineB, lineC) {
  
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
