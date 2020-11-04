// Desafio 1
function compareTrue(a,b) {
  return a && b
}
 
// Desafio 2
function calcArea(base, height) {
  let area = (base * height )/2
  return area
}


// Desafio 3
function splitSentence(string) {
  let array = string.split(' ')
  return array;
}


// Desafio 4
function concatName(array) {
  let lastName = '';
  let firstName= '';
  for(let i = 0; i < array.length; i+=1){
    if(i == 0){
      firstName = array[i];
    }else if(i == array.length-1){
      lastName = array[i]
    }
  }
  let newName = lastName.concat(', ', firstName)
  return newName;
}


// Desafio 5
function footballPoints(wins, ties){
  let score = (wins*3)+(ties*1);
  return score
}

// Desafio 6
function highestCount(array) {
  let counts = {}; //Criado um objeto vazio para abrigar os itens que se repetem como chave e a quantidade de repetições como valor.
  let timesRepeated = 0; 
  for(let i = 0; i < array.length; i+=1){
    if(counts[array[i]]){
      counts[array[i]]+=1
    }else{  
      counts[array[i]]=1;
    }
  }  for (const prop in counts) {
    let highProp = 0; 
    if (prop >= highProp) { 
      highProp = counts[prop];
    }timesRepeated = highProp;
  }
  return timesRepeated
}
console.log(highestCount( [0, 4, 4, 4, 9, 2, 1]))

/***6 - Repetição do maior número**
-
Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne  a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de `highestCount` seja uma array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete. */

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1-mouse);
  let distanceCat2 = Math.abs(cat2-mouse);
  let winning = '';
  if(distanceCat1<distanceCat2){
    winning = 'cat1'
  }else if(distanceCat2<distanceCat1){
    winning = 'cat2'
  }else if(distanceCat1=distanceCat2){
    winning = 'os gatos trombam e o rato foge'
  }
  return winning
  }


/*calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).
/*
-
Imagine que existem dois gatos, os quais chamaremos de `cat1` e `cat2`, e que ambos estão atrás de um rato chamado `mouse`. Imagine que cada um dos três animais está em uma posição representada por um número.

Sabendo disso, crie uma função chamada `catAndMouse` que, ao receber a posição de `mouse`, `cat1` e `cat2`, **nessa ordem**, 

Exemplo: caso o gato `cat2` esteja a 2 unidades de distância do rato, e `cat1` esteja a 3 unidades, sua função deverá retornar `"cat2"`.

Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `"os gatos trombam e o rato foge"`. */

// Desafio 8
function fizzBuzz(array) {
  let array2 = [];
  for(let i = 0; i < array.length; i+=1){
    if(array[i]%3 === 0 && array[i]%5 === 0){
      array2.push('fizzBuzz')
    }else if(array[i]%3 === 0 && array[i]%5 !== 0){
      array2.push('fizz')
    }else if(array[i]%3 !== 0 && array[i]%5 === 0){
      array2.push('buzz')
    }else if(array[i]%3 !== 0 && array[i]%5 !== 0){
      array2.push('bug!')
    }
  }
  return array2
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))

/*Crie uma função chamada `fizzBuzz` que receba uma array de números e retorne uma array da seguinte forma:

- Para cada número da Array que seja divisível apenas por 3, apresente uma string `"fizz"`;
- Para cada número da Array que seja divisível apenas por 5, apresente uma string `"buzz"`;
- Caso o número seja divisível por 3 e 5, retorne a string `"fizzBuzz"`;
- Caso o número não possa ser dividido por 3 nem por 5, retorne a string `"bug!"`;

Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"]`. */

// Desafio 9
function encode(string) {
  let arrayArmazem = [];
  let string2 = '';
  for(let i = 0; i < string.length; i+=1){
    if(string[i] == 'a'){
      arrayArmazem.push('1')
    }else if(string[i] == 'e'){
      arrayArmazem.push('2')
    }else if(string[i] == 'i'){
      arrayArmazem.push('3')
    }else if(string[i] == 'o'){
      arrayArmazem.push('4')
    }else if(string[i] == 'u'){
      arrayArmazem.push('5')
    }else{
      arrayArmazem.push(string[i])
    }
  }
  for (let key in arrayArmazem) {
  string2 += arrayArmazem[key];    
  }
  return string2
  }
  
console.log(encode("hi there!"))
function decode(string) {
  let arrayArmazem2 = [];
  let string3 = '';
  for(let i = 0; i < string.length; i+=1){
    if(string[i] == '1'){
      arrayArmazem2.push('a')
    }else if(string[i] == '2'){
      arrayArmazem2.push('e')
    }else if(string[i] == '3'){
      arrayArmazem2.push('i')
    }else if(string[i] == '4'){
      arrayArmazem2.push('o')
    }else if(string[i] == '5'){
      arrayArmazem2.push('u')
    }else{
      arrayArmazem2.push(string[i])
    }
  }
  for (let key in arrayArmazem2){
    string3+= arrayArmazem2[key]
  }
  return string3
}



// Desafio 10
function techList(array, name) {
  let outcome = [];
  array.sort();
  for(let i = 0; i< array.length; i+=1){
    if(array === []){
      outcome = 'Vazio!'
    }else if(array[i]){
      let tec = {tech: array[i], 'name': name};
      outcome.push(tec)
    }
  }return outcome;
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