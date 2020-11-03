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
console.log(concatName(['douglas', 'Ferreira', 'Pinto']))



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
  let palavra = string.split('');
  for (let index = 0; index < palavra.length; index+=1) {
    if(palavra[index] == 'a'){
      palavra[index] = 1;
    }else if(palavra[index] == 'e'){
      palavra[index] = 2;
    }else if(palavra[index] == 'i'){
      palavra[index] = 3;
    }else if(palavra[index] == 'o'){
      palavra[index] = 4;
    }else if(palavra[index] == 'u'){
      palavra[index] = 5;
    }
  }
  return palavra.join('');
}

function decode(string2) {
  let palavra2 = string2.split('');
  for (let index = 0; index < palavra2.length; index+=1) {
    if(palavra2[index] == 1){
      palavra2[index] = 'a';
    }else if(palavra2[index] == 2){
      palavra2[index] = 'e';
    }else if(palavra2[index] == 3){
      palavra2[index] = 'i';
    }else if(palavra2[index] == 4){
      palavra2[index] = 'o';
    }else if(palavra2[index] == 5){
      palavra2[index] = 'u';
    }
  }
  return palavra2.join('');
}

// Desafio 10
function techList(array, name) {
  
  let objetoArray = [];

  if(array.length < 0){
    return "Vazio!"
  }else {
    for(let index = 0; index < array.length; index *=1){
      let objeto = {};
      objeto.tech = array[index];
      objeto.name = name;
    }
    objetoArray.push(objeto);
  }
  return objetoArray;

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
