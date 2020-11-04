// Desafio 1
function compareTrue(parameters1, parameters2){
  // seu código aqui
  if(parameters1 === true && parameters2 === true){
    return true;
  }else {
      return false;
  }
}
// Desafio 2
function calcArea(base, height){
  // seu código aqui
  let soma= (base * height) / 2;
    return soma;
}
// Desafio 3
function splitSentence(stringName){
  // seu código aqui
  return stringName.split(" ");
}
// Desafio 4
function concatName(arrayString){
  // seu código aqui
  let first = arrayString[0];
  let last =  arrayString[arrayString.length-1];
  let fullName= last + ", " + first;
  return fullName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let sumWins = wins * 3;
  let sumTies = ties * 1;
  let sun = sumWins + sumTies;
return sun;
}
// Desafio 6
function highestCount(arrayNumber) {
  // seu código aqui
  let result = 0;
    let greater = 0;
    for(let cont in arrayNumber){
        if(arrayNumber[cont] > greater){
            greater = arrayNumber[cont];
        }
    }
    for(let cont in arrayNumber){
        if(greater === arrayNumber[cont]){
            result += 1;
        }
    }
    return result;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui

  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);

  if(distCat1 < distCat2){
      return 'cat1';
  }else if(distCat2 > distCat1){
      return 'cat2';
  }else{
      return ("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let saida= [];
  for(let i= 0; i < numbers.length; i++){
      let entrada = numbers[i];
      let resultado;
      if((entrada % 3 === 0) && (entrada % 5 === 0)){
          resultado = "fizzBuzz";
      }else if((entrada % 3 === 0)){
          resultado = "fizz";
      }else if((entrada % 5 === 0)){
          resultado = "buzz";
      }else{
          resultado = "bug!";
      }
      saida.push(resultado)
  }
  return saida;
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
