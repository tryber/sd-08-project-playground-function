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

/***5 - Pontos no futebol**
-
Escreva uma função com o nome `footballPoints` que receba o número de vitórias (esse parâmetro deverá se chamar `wins`) e o número de empates (esse parâmetro deverá se chamar `ties`) e retorne a quantidade de pontos que o time marcou em um campeonato.

Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.*/

// Desafio 6
function highestCount(array) {
  let counts = {}; //Criado um objeto vazio para abrigar os itens que se repetem como chave e a quantidade de repetições como valor.
  let timesRepeated = []; //Esse array conterá a quantidade de vezes repetida  e será sorted de forma decrescente.
  for(let i = 0; i < array.length; i+=1){
    if(counts[array[i]]){
      counts[array[i]]+=1
    }else{
      counts[array[i]]=1;
    }
  }  for (const prop in counts) {
    if (counts[prop]>=2) { // Essa condição assegura que somente itens repetidos entrem no array.
      timesRepeated.push(counts[prop]);
    }
  }
  timesRepeated.sort((a,b) => b-a) //O array que abriga a quantidade de repetições é organizado de forma decrescente
  return timesRepeated[0] // O resultado da função é o primeiro item do array.
}

/***6 - Repetição do maior número**
-
Escreva uma função chamada `highestCount` que, ao receber uma array de números, retorne  a quantidade de vezes que o maior deles se repete.

Exemplo: caso o parâmetro de `highestCount` seja uma array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete. */

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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