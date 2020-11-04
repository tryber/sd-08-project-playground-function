// Desafio 1
function compareTrue(a,b) {
  a = Boolean;
  b = Boolean;
  let outcome;
  if(a === true && b === true){
    outcome = true;
  }else if(a === true && b !== true){
    outcome = false;
  }else if(a !== true && b === true){
    outcome = false;
  }else if(a !== true && b !== true){
    outcome = false;
  }return outcome;
}
  /*JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.

Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

Retorne true se ambos os valores são verdadeiros;
Retorne false se um ou ambos os parâmetros forem falsos.
Faça a função utilizando o operador &&.*/


// Desafio 2
function calcArea(base, height) {
  let area = (base * height )/2
  return area
}

/***2 - Área do triângulo** 
-
Escreva uma função com o nome `calcArea` que receba um valor de base (chamado `base`) e outro de altura (chamado `height`) de um triângulo e retorne o cálculo da sua área.

Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2. */

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ')
  return array;
}
/***3 - Dividindo a frase**
-
Escreva uma função com o nome `splitSentence`, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.

Exemplo: se a função receber a string `"go Trybe"`, o retorno deverá ser `['go', 'Trybe']`. */

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

/***4 - Concatenação de strings**
-
Escreva uma função com o nome `concatName` que, ao receber uma array de strings, retorne uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.

Isso quer dizer que, caso o parâmetro passado para `concatName` seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar `Paolillo, Lucas`. */

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
    let highProp = 0; //Varíavel conterá o valor mais alto do array
    if (prop >= highProp) { 
      highProp = counts[prop];
    }timesRepeated = highProp;
  }
  return timesRepeated // O resultado da função é o primeiro item do array.
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