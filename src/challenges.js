// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui

  if( valor1 == true && valor2 ==true){
    return true;
  }else{
    return false;
  };
};





// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return(area);
};





// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  return sentence.split(' ');
};





// Desafio 4
function concatName(name) {
  // seu código aqui
  return `${name[name.length - 1]}, ${name[0]}`;

};








// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;

}





// Desafio 6
function highestCount(array) {
  // seu código aqui
  array.sort();
  
  let greatest = array[array.length - 1];

  let greatestRep = 0;

  for(i = array.length; i >= 0; i--){
    if(array[i] === greatest){
     greatestRep++;
    }
  }

  return(greatestRep);
};







// Desafio 7
function catAndMouse() {
  // seu código aqui
}






// Desafio 8
function fizzBuzz(param) {
  // seu código aqui
  for(contador = 1; contador <= param; contador += 1){
    if(contador % 3 === 0){
      return(contador, "FizzBuzz");
    }else if(contador % 5 === 0){
      return(contador, "Buzz");
    }else if(contador % 15 === 0){
      return(contador, "Fizz");
    }else{
      return(contador);
    };
  };
};





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
