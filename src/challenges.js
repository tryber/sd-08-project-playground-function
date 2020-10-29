// Desafio 1
function compareTrue(p1, p2) {
  if(p1 === true && p2 === true){
    return true
  } else {
    return false
  }
}
// console.log(compareTrue(true,true));

// Desafio 2
function calcArea(base, height) {
  return (base*height)/2
}
// console.log(calcArea(3,20));

// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(" ");
   return arrayString;
}

// console.log(splitSentence('go trybe'));

// Desafio 4
function concatName(array) {
  let newArray = array[array.length -1] + ', ' + array[0];
    return newArray;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, tie) {
  const pontoVitoria = 3;
  const pontoEMpate = 1;
  let pontoCampeonato = (wins*pontoVitoria)+(tie*pontoEMpate);
  return pontoCampeonato;
}
// console.log(footballPoints(5,1));


// Desafio 6
function highestCount(numArray) {
  let maiorValor = Math.max.apply(null, numArray);
  let vezesMaiorValor = 0;
  let indice;
  for( indice =0; indice < numArray.length -1; indice +=1){
    if(numArray[indice] === maiorValor){
      vezesMaiorValor += 1;
    }
  }
  return vezesMaiorValor;
}
// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let disMouseCat1 = cat1 - mouse;
  let disMouseCat2 = cat2 - mouse;
   if(disMouseCat1 === disMouseCat2){
    return 'os gatos trombam e o rato foge';
  } else if(disMouseCat1 < disMouseCat2){
    return "cat1";
  } else {
    return "cat2";
  }
}
// console.log(catAndMouse(1, 7, 6));


// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayName = [];
  let indice;
  for( indice=0; indice < arrayNumbers.length; indice +=1){
    if(arrayNumbers[indice] % 5 === 0 && arrayNumbers[indice] % 3 === 0){
      arrayName.push("fizzbuzz");
    } else if(arrayNumbers[indice] % 3 === 0){
        arrayName.push("fizz");
    } else if(arrayNumbers[indice] % 5 === 0){
      arrayName.push("buzz");
    } else {
      arrayName.push("bug!");
    }
  }
  
  return arrayName;  
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));


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
