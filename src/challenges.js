// Desafio 1
function compareTrue(x,y) {
  if (x && y ){
    return true;
  } else {
    return false;
  }
}


// Desafio 2
function calcArea(base,height) {
  return (base*height)/2
}



// Desafio 3
function splitSentence() {
  
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins*3)+(ties*1)
}


// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  for (let i = 1; i <n; i ++){
    if (i % 3 === 0 && i % 5 === 0){//Caso o número seja inteiro e multiplo de 3 e 5 imprime "FizzBuzz"
        console.log("FizzBuzz") 
    } else if (i % 3 === 0 && i % 5 !== 0){//Caso o número seja inteiro e multiplo apenas de 3 imprime "Fizz"
        console.log("Fizz")
    } else if (i % 3 !== 0 && i % 5 === 0){//Caso o número seja inteiro e multiplo apenas de 5 imprime "Buzz"
        console.log("Buzz")
    } else {
        console.log(i) //Imprime os demais número que não sejam múltiplos de 3 ou 5
    }
}
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
function generatePhoneNumber(array) {
  let retorno="",retornoOk=[];
  if(array.length == 11){
    for(let i in array){

      retorno.push(array[i])
    }
  } console.log(retorno)
}generatePhoneNumber([1,2,3,4,5,6,7,8,9,10,11])




















// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
  if(
    lineA<(lineB+lineC) && 
    lineB<(lineA+lineC) && 
    lineC<(lineB+lineA) &&
    lineA>Math.abs(lineB-lineC) && 
    lineB>Math.abs(lineA-lineC) && 
    lineC>Math.abs(lineB-lineA)){
    return true;
  } else{
    return false;
  }
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
