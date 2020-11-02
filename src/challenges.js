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

  // seu código aqui


// Desafio 4
function concatName(array) {
  
  let ultimoArray = array[array.length - 1];
  let primeiroArray = array[0];
  return ultimoArray+', '+primeiroArray;
  // seu código aqui
}




// Desafio 5
function footballPoints(wins, ties) {
  return pontos = (wins * 3) + (ties *1)
  // seu código aqui

}


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


// Desafio 9
function encode(string) {
  let frase = [];
  let fraseCod = '';
  
  for(let key in string){
    if(string[key] == 'a'){
      frase.push('1')
    }else if(string[key] == 'e'){
      frase.push('2')
    }else if(string[key] == 'i'){
      frase.push('3')
    }else if(string[key] == 'o'){
      frase.push('4')
    }else if(string[key] == 'u'){
      frase.push('5')
    }else{
      fraseCod.push(string[key]);
    }
 }
 for(let key in frase){
   fraseCod += frase[key];

 }
 return frase;
} 
console.log(encode('oi'))

function decode(string) {
  let frase = [];
  let fraseCod = '';
  
  for(let key in string){
    if(string[key] == '1'){
      frase.push('a')
    }else if(string[key] == '2'){
      frase.push('e')
    }else if(string[key] == '3'){
      frase.push('i')
    }else if(string[key] == '4'){
      frase.push('o')
    }else if(string[key] == '5'){
      frase.push('u')
    }else{
      fraseCod.push(string[key]);
    }
 }
 for(let key in frase){
   fraseCod += frase[key];

 }
 return frase;
} 
console.log(decode('oi'))
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
