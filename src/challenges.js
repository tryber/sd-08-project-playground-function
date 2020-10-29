// Desafio 1
function compareTrue(booleano1, booleano2) {
  return (booleano1 && booleano2);
}

// Desafio 2
function calcArea(base, height ) {
  return (base*height)/2;
}

// Desafio 3
function splitSentence(word) {
  return word.split(' ');
}

// Desafio 4
function concatName(list) {
  return (list[list.length-1] + ', ' + list[0]);
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3 + ties);
}

// Desafio 6
function highestCount(listNumbers) {
  for (i = 1; i < listNumbers.length; i++) {
    for (j = 0; j < listNumbers.length - i; j++) {
      if (listNumbers[j] > listNumbers[j + 1]) {
        temp = listNumbers[j];
        listNumbers[j] = listNumbers[j + 1];
        listNumbers[j + 1] = temp;
      } 
    }
  }
  let soma = 0;
  for(let i = 0; i<  listNumbers.length; i++) {  
    if ( listNumbers[i] ===  listNumbers[ listNumbers.length - 1]){
        soma = soma + 1;
    }
  }
  return soma;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = cat1-mouse;
  let distanciaCat2 = cat2-mouse;
  if (distanciaCat1 < 0){
    distanciaCat1 = -distanciaCat1
  }
  if (distanciaCat2 < 0) {
    distanciaCat2 = -distanciaCat2
  }  
  if (distanciaCat1 !== distanciaCat2){
    if ((distanciaCat1) < (distanciaCat2)){
      return 'cat1'
    } else {
      return 'cat2'
    }
  } else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let fizzBuzzList = [];
  for(i in numbers){
    if (numbers[i] %3 === 0 && numbers[i] % 5 !== 0){
      fizzBuzzList.push('fizz');
    }else if (numbers[i] %3 !== 0 && numbers[i] % 5 === 0){
      fizzBuzzList.push('buzz');
    }else if (numbers[i] %3 === 0 && numbers[i] % 5 === 0){
      fizzBuzzList.push('fizzBuzz');
    } else {
      fizzBuzzList.push('bug!')
    }
  }
  return fizzBuzzList
}

// Desafio 9
function encode(word) {
  wordString = word.split('');
  for(let i = 0; i < wordString.length; i++){
    switch (wordString[i]) {
      case 'a':
      wordString[i] = '1';
      break;
      case 'e':
      wordString[i] = '2';
      break;
      case 'i':
      wordString[i] = '3';
      break;
      case 'o':
      wordString[i] = '4';
      break;
      case 'u':
      wordString[i] = '5';
      break;
    }
  }
  let newWord = wordString.join('');
  return newWord;
}
function decode(word) {
  wordString = word.split('');
  for(let i = 0; i < wordString.length; i++){
    switch (wordString[i]) {
      case '1':
      wordString[i] = 'a';
      break;
      case '2':
      wordString[i] = 'e';
      break;
      case '3':
      wordString[i] = 'i';
      break;
      case '4':
      wordString[i] = 'o';
      break;
      case '5':
      wordString[i] = 'u';
      break;
    }
  }
  let newWord = wordString.join('');
  return newWord;
}

// Desafio 10
function techList(tecnologias, name) {
  if (tecnologias === []){
    return 'Vazio!'
  } else {
    let tecList = [];
    let tecnologiasEmOrdem = tecnologias.sort();
    for (i in tecnologiasEmOrdem){
      let tecObject={};
      tecObject['tech'] = tecnologiasEmOrdem[i];
      tecObject['name'] = name;
      tecList.push(tecObject);
    }
    return tecList
  }
}


// Desafio 11
function generatePhoneNumber(numbers) {
  let ddd = [];
  let primeiraParte = [];
  let segundaParte = [];
  let numMaisRepetido = numbers[0];
  let maiorQtdRepeticoes = 0
  if (numbers.length !== 11){
    return "Array com tamanho incorreto.";
  }else {
    for(i in numbers) {
    let qtdRepeticoes = 0;
      for(j in numbers){
        if (numbers[i] === numbers[j]){
          qtdRepeticoes = qtdRepeticoes + 1
        }
      }
      if (qtdRepeticoes >= maiorQtdRepeticoes){
        maiorQtdRepeticoes = qtdRepeticoes;
        numMaisRepetido = numbers[i];
      }
    }
    let entre0E9 = true;
    for(i in numbers){
      if (numbers[i] < 0 || numbers[i] > 9){
        entre0E9 = false;
        break;
      }
    }
    if (entre0E9 === false || maiorQtdRepeticoes >=3) {
      return "não é possível gerar um número de telefone com esses valores"
    }else{
      for(i in numbers) {
        if (i>=0 && i<=1){
          ddd.push(numbers[i])
        }else if (i>=2 && i<=6){
          primeiraParte.push(numbers[i]);
        }else {
          segundaParte.push(numbers[i]);
        }
      }
      return ("("+ddd.join("")+") "+primeiraParte.join("")+"-"+segundaParte.join(""))
    }
  }
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
