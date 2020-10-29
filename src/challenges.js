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
function catAndMouse(mouse,cat1,cat2) {
  // Math.abs(mouse,cat1)
  // Math.abs(mouse,cat2)
  if(
    (cat1-mouse)<(cat2-mouse)
  ){
    return "cat1"
  } else if ((cat2-mouse)<(cat1-mouse)){
    return "cat2"
  } else {
    return "os gatos trombam e o rato foge"
  }
}

// Desafio 8
function fizzBuzz(arrayFizz) {
  for (let i in arrayFizz){
    
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
  let retorno="",verificaRepetir=0;
  if(array.length == 11){

    for(let i=0;i<array.length;i++){
      for(let j=1;j<array[j].length;j++)
        if(array[i]==array[j]){
          verificaRepetir+=1
        }
    }
    retorno=`(${array[0]}${array[1]})${array[2]}${array[3]}${array[4]}${array[5]}${array[6]}-${array[7]}${array[8]}${array[9]}${array[10]}`
   
  } else {
    return "Array com tamanho incorreto."
  }
  return retorno
}
// generatePhoneNumber([1,1,9,4,5,6,7,8,9,5,1])

//-----------------------------------------------------------

// let array = [1,1,9,4,5,6,7,8,9,5,1],verificaRepetir=0;

// for(let i=0;i<array.length;i++){ 

//     if(array[i]==array[i+1]){
//       verificaRepetir+=1

//       if (verificaRepetir>=3){
//         // console.log("Números repetidos" + verificaRepetir)
//         break
//       }
//     }
// } console.log(verificaRepetir)

//-----------------------------------------------------------


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



// let palavra = "1 cachaça, 5 cervejas e 1 copo de vinho1",
// array=[],cont=0;

// for(let i=0;i<palavra.length;i+=1){
//   cont=palavra[i]
//   if(
//     cont.isInteger(palavra[i])
//     ){
//     cont+=parseInt(palavra[i],10);
//   }
  
    
  
  
// }

// console.log(Number.isInteger(cont))

// console.log(isInteger(5))





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
