// Desafio 1
function compareTrue(valor1, valor2) {
  
return (valor1 && valor2);  

// seu código aqui
}




// Desafio 2
function calcArea(base, height) {
  return (base * height)/2;
  
  // seu código aqui
}


// Desafio 3
function splitSentence(string) {
  return string.split(' ', string.length);
}
console.log(splitSentence('Alo alo alo alo alo alo'));
  // seu código aqui


// Desafio 4
function concatName(array) {
  
  let ultimoArray = array[array.length - 1];
  let primeiroArray = array[0];
  return ultimoArray+', '+primeiroArray;
  // seu código aqui
}
console.log(concatName(['douglas', 'Ferreira', 'Pinto']))



// Desafio 5
function footballPoints(wins, ties) {
  return pontos = (wins * 3) + (ties *1)
  // seu código aqui

}
console.log(footballPoints(5,2))

// Desafio 6
function highestCount(array) {
  let maior = 0;
  for(let index = 0; index < array.length; index+=1){
    if(array[index] > maior){
      maior = array[index];
    }
  }
  let contador = 0;
  for(let key = 0; key < array.length; key +=1){
    if(array[key] === maior){
      contador +=1;
    }
  }
  return contador;
  // seu código aqui
}
console.log(highestCount([1,2,5,6,9,9, 11, 11]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let posicãoCat1Mouse = cat1;
  let posicaoCat2Mouse = cat2;
  let posicaoMouse = mouse;
  if(Math.abs((cat1 - mouse)) > Math.abs((cat2 - mouse)) ){
    return 'cat2'
  }else if(Math.abs((cat2 - mouse)) > Math.abs((cat1 - mouse))){
    return 'cat1'
  }else if(Math.abs((cat1 - mouse)) === Math.abs((cat2 - mouse))){
    return 'os gatos trombam e o rato foge'
  }
  return catAndMouse
  // seu código aqui
}
console.log(catAndMouse(6,2,10))

// Desafio 8
function fizzBuzz(array) {
  let frase = [];
  for(let index = 0; index < array.length; index+=1){
    if(array[index] % 3 == 0 && array[index] % 5 == 0){
      frase.push('fizzBuzz');
    } else if(array[index] % 3 == 0){
      frase.push('fizz');
    } else if( array[index] % 5 == 0){
      frase.push('buzz');
    } else {
      frase.push('bug!')
    }
    
  }
  return frase;
  // seu código aqui
}
console.log(fizzBuzz([3,5,15,2,30]));


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
