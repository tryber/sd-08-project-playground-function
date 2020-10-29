// Desafio 1
function compareTrue(p1,p2) {
  if(p1 && p2){
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return(base*height/2);
}

// Desafio 3
function splitSentence(frase) {
  // seu código aqui
  let array = [];
  let palavra = '';
  for(char in frase){
    if(frase[char] !== ' '){
      palavra += frase[char];
    } else {
      array.push(palavra);
      palavra = '';
    }
  }
  array.push(palavra);
  return(array);
}

// Desafio 4
function concatName(array) {
  let string = `${array[array.length - 1]}, ${array[0]}`;
  return string;
}


// Desafio 5
function footballPoints(wins,ties) {
  let pts = 3*wins + ties;
  return pts;
}

// Desafio 6
function highestCount(array) {
  let max = array[0];
  for(let pos in array){
    if(array[pos]> max){
      max = array[pos];
    }
  }

  let count = 0;
  for (let pos in array){
    if(array[pos] === max){
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  if(Math.abs(cat1 - mouse) < Math.abs(cat2-mouse)){
    return("cat1");
  } else if(Math.abs(cat1 - mouse) > Math.abs(cat2-mouse)){
    return("cat2");
  } else {
    return("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];
  for(let pos in numeros){
    if (numeros[pos]%15 === 0){
      array.push('fizzBuzz');
    } else if(numeros[pos]%3 === 0){
      array.push('fizz');
    } else if(numeros[pos]%5 === 0){
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }

  return array;
}
let vogais = {
  a:1,
  e:2,
  i:3,
  o:4,
  u:5
}
// Desafio 9
function encode(string) {
  let stringEnc = '';
  for(let pos in string){
    if(string[pos] in vogais){
      stringEnc += vogais[string[pos]];
    } else {
      stringEnc += string[pos];
    }
  }
  return stringEnc;
}

function decode(string) {
  let stringDec = '';
  let setCodes = new Set (Object.values(vogais));
  for(let pos in string){
    if(string[pos] in setCodes){
      for(let vog in vogais){
        if(vogais[vog] == string[pos]){
          stringDec += vog;
        }
      }
    } else {
      stringDec += string[pos];
    }
  }
  return stringDec;
}

// Desafio 10
function techList(array, name) {
  if(array.length == 0){
    return('Vazio!');
  } else{
    let objetos = [];
    array.sort();
    for(let pos in array){
      objetos.push(
        {
          tech: array[pos],
          name: name
        }
      )
    }
    return(objetos);
  }
}

function checaRepeticoes(array,n){
  let count = 0;
  for(let pos in array){
    if(array[pos] == n){
      count += 1;
    }
  }
  return count;
}
// Desafio 11
function generatePhoneNumber(array) {
  let tel = '';
  if(array.length != 11){
    return('Array com tamanho incorreto.');
  } else {
    for(let pos in array){
      if(array[pos] > 9 || array[pos] < 0 || checaRepeticoes(array, array[pos]) >= 3){
        return('não é possível gerar um número de telefone com esses valores');
      } else {
        tel += array[pos].toString();
      }
    }
  }
  let telFormated = `(${tel.slice(0,2)}) ${tel.slice(2,7)}-${tel.slice(-4)}`;
  return telFormated;
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
