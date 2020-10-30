// Desafio 1
function compareTrue(bollean,bollean2) {
  // seu código aqui
   if(bollean && bollean2 === true){
      return true;
   }
   else {
     return false;
   }
}
// Desafio 2
function calcArea(base,heigth) {
  // seu código aqui
  return (base * heigth)/2
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}
 //console.log (splitSentence('go trybe'));

// Desafio 4
function concatName(string) {
  let primeiroUltimo = `${string[string.length - 1]}, ${string[0]}`;
  return primeiroUltimo;
}
 //console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  let totalPontos = wins *3 + ties;
  return totalPontos
}
//console.log(footballPoints(3,1))

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let numbers = arrayNumbers.sort();
  console.log (numbers)
  let quantidadeDeVezesDoMaior = 0;
  for (let a = 0; a < numbers.length; a += 1) {
    if (numbers[numbers.length - 1] === numbers[a]) {
      quantidadeDeVezesDoMaior += 1;
      
    }
  }
  return quantidadeDeVezesDoMaior;
}
//console.log(highestCount([1,9, 2, 3, 9, 5, 7, 9, 10,9]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  else if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  else if (distanceCat2 === distanceCat1) {
    return 'os gatos trombam e o rato foge';
  }
}
 //console.log(catAndMouse(2, 3, 2));

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let arrayMessage = [];
  for (let a = 0 ; a < array.length; a+=1){
    if(array[a] % 3 === 0 && array[a] % 5!== 0){
      arrayMessage.push('fizz');
    }
    else if(array[a] % 5 === 0 && array[a] % 3 !==0){
      arrayMessage.push('buzz');
    }
    else if(array[a] % 5 === 0 && array[a] % 3 === 0){
      arrayMessage.push('fizzBuzz');
    }else{
      arrayMessage.push('bug!')
    }
  }
  return arrayMessage;
      
  }

//console.log(fizzBuzz([2,15,7,9,45]))


// Desafio 9
function encode(troca) {
  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5

  let vogal = '';
  for (let a = 0; a < troca.length; a += 1) {
    switch (troca[a]) {
      case 'a':
        vogal += 1;
        break;
      case 'e':
        vogal += 2;
        break;
      case 'i':
        vogal += 3;
        break;
      case 'o':
        vogal += 4;
        break;
      case 'u':
        vogal += 5;
        break;
      default:
        vogal += troca[a];
        break;
    }
  }

  return vogal;
}
//console.log(encode('hi there!'))
function decode(text) {
  // 1 -> a
  // 2 -> e
  // 3 -> i
  // 4 -> o
  // 5 -> u

  let message = '';
  for (let a = 0; a < text.length; a += 1) {
    switch (text[a]) {
      case '1':
        message += 'a';
        break;
      case '2':
        message += 'e';
        break;
      case '3':
        message += 'i';
        break;
      case '4':
        message += 'o';
        break;
      case '5':
        message += 'u';
        break;
      default:
        message += text[a];
        break;
    }
  }
  return message;
}
console.log(decode ("h3 th2r2!"))

// Desafio 10
function techList(leraning,name) {
  // seu código aqui
  let list = leraning;
  let returned = [];

  if(list.length === 0){
    return 'Vazio!';
  }
  for(let tech of list){
    returned.push({
      tech,
      name,
    });
  }
  return returned;
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"],
"Lucas"))

// Desafio 11
function generatePhoneNumber(number) {
  // seu código aqui
  
  if (number.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  
  for(let a = 0; a < number.length; a+= 1){
   if(number[a] < 0 || number[a] > 9 ){
     return 'não é possível gerar um número de telefone com esses valores';
   }
  }
  let contRepeat = 0;
  for(let b = 0; b < number.length; b += 1){
    contRepeat = 0
    for(let c = 0 ; c < number.length; c += 1){
      if ( number[b] === number[c]){
        contRepeat += 1
      }
    }
    if ( contRepeat >= 3){
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  number.splice(0, 0, '(');
  number.splice(3, 0, ')');
  number.splice(4, 0, ' ');
  number.splice(10, 0, '-');
  return number.join('');

}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]))

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
