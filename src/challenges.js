// Desafio 1
function compareTrue(value1,value2) {

    if(value1 && value2 === true) {
            return true;
        } else {
            return false;
        }
}

// Desafio 2
function calcArea(base,height) {
    return(base*height)/2;
}

// Desafio 3
function splitSentence(word) {
  return word.split (" ");
}

// Desafio 4
function concatName(arrNames) {
  let lastPosition = arrNames.length -1;
  let firstName = arrNames[0];
  let lastName = arrNames [lastPosition];
  return lastName + ", " + firstName;
}

// Desafio 5
function footballPoints(wins,ties) {
    let totalpoints = (wins*3) + ties;
    return totalpoints;

}

// Desafio 6
function highestCount(arrNumbers) {
    let highestNumber = 0;
    let highestRepeat = 0;

    for(let i = 0;i < arrNumbers.length;i+=1){
        if(arrNumbers[i] > highestNumber){
            highestNumber = arrNumbers[i];
            highestRepeat = 0;
        }
        if(arrNumbers[i] == highestNumber){
            highestRepeat += 1;
        }         
    }
       
  return highestRepeat;

}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
     
     let distanceCat1 = Math.abs(cat1 - mouse);
     let distanceCat2 = Math.abs(cat2 - mouse);

    if(distanceCat1 < distanceCat2){
      return "cat1";
    }
    if(distanceCat2 < distanceCat1){
      return "cat2";
    }
    if(distanceCat1 == distanceCat2){
      return "os gatos trombam e o rato foge";
    }
}

// Desafio 8
function fizzBuzz(arrNumbers) {
  
  let array = [];
  
  for(let i in arrNumbers){
    if(arrNumbers[i] % 3 == 0 && arrNumbers[i] % 5 == 0){
      array.push("fizzBuzz");
    }
    else if(arrNumbers[i] % 3 == 0){
      array.push("fizz");
    }
    else if(arrNumbers[i] % 5 == 0){
      array.push("buzz");
    }
    else{
      array.push("bug!"); 
    }
  }
  return array;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  
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
