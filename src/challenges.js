//Que Deus me ajude!
// Desafio 1 Usando o operador &&
// // JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.
// 
// Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:
// 
// Retorne true se ambos os valores são verdadeiros;
// Retorne false se um ou ambos os parâmetros forem falsos.
// Faça a função utilizando o operador &&.

function compareTrue(bool_1, bool_2) {
  // seu código aqui
  if (bool_1 == true && bool_2 == true) {
    return true;
    }
    else {
    return false;
    }
}


// Desafio 2
// Área do triângulo
// // Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de altura (chamado height) de um triângulo e retorne o cálculo da sua área.
// 
// Lembre-se que a área de um triângulo é calculada através da seguinte fórmula: (base * altura) / 2.

function calcArea(base, height) {
  // seu código aqui
  let area = base * height / 2;
  return area;  
}


// Desafio 3
// Dividindo a frase
// Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array de strings separadas por cada espaço na string original.
// 
// Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].


function splitSentence(sentence) {
  // seu código aqui
  let splited = [];
  splited = sentence.split(` `); 
  return splited;
}


// Desafio 4
// Concatenação de strings
// // Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
// 
// // Isso quer dizer que, caso o parâmetro passado para concatName seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.

function concatName(list) {
  // seu código aqui
  let invertList = ``;
  invertList = list[list.length - 1] + `, ` + list[0];
  return invertList;
}

// Desafio 5
// Pontos no futebol
// // // Escreva uma função com o nome footballPoints que receba o número de vitórias (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.
// 
// Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.

function footballPoints(wins, ties) {
  // seu código aqui
  let points = 0;
    points = (3 * win) + (ties);
    return points;
}

// Desafio 6
// Repetição do maior número
// // Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a quantidade de vezes que o maior deles se repete.
// 
// // Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7], a função deverá retornar 2, que é a quantidade de vezes que o número 9 (maior número do array) se repete.

function highestCount(numberArray) {
  // seu código aqui
  let maiorNumero = numberArray [0];
  let contador = 0;
  for (i = 0; i < numberArray.length; i++) {
    if (numberArray [i] > maiorNumero) {
      maiorNumero = arrayNumber [i];
      return maiorNumero;
    }     
  }
  for (x = 0; x < numberArray.length; i++) {
    if (numberArray [x] == maiorNumero) {
      contador += 1;
    }
  }
  return contador;
}

// Desafio 7
// Caça ao rato
// Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás de um rato chamado mouse. Imagine que cada um dos três animais está em uma posição representada por um número.

// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2, nessa ordem, calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro (sendo aquele que estará mais perto).

// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua função deverá retornar "cat2".

// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam e o rato foge".


function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(Math.abs(mouse) - Math.abs(cat1) < Math.abs(mouse) - Math.abs(cat2))) {
    console.log ("cat1");
  } else if (Math.abs(Math.abs(mouse) - Math.abs(cat2) < Math.abs(mouse) - Math.abs(cat1))) {
    console.log ("cat2");
  } else {
    console.log ("os gatos trombam e o rato foge");
  }
}

// Desafio 8
// FizzBuzz
// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

// Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
// Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

function fizzBuzz(array) {
  // seu código aqui
  let result = [];
  for (i = 0; i < array.length; i++) {
    if (array [i] % 3 === 0 && array [i] % 5 !== 0) {
      result [i] = "fizz";
      return result;
    } else if (array [i] % 5 === 0 && array [i] % 3 !== 0) {
      result [i] = "buzz";
      return result;
    } else if (array [i] % 3 === 0 && array [i] % 5 === 0) {
      result [i] = "fizzBuzz";
      return result;
    } else {
      result [i] = "bug!";
      return result;
    }
  }
}

// // Desafio 9
// Codifique e Decodifique
// Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as vogais minúsculas por números, de acordo com o formato a seguir:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

// A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!", o retorno deverá ser "hi there!").

function encode(string) {
  // seu código aqui
  let encode = [];
  encode = string;
  for (i = 0; i < string.length; i++) {
    if (string [i] == "a") {
      encode [i] = 1;
      return encode;
    } else if (string [i] == "e") {
      encode [i] = 2;
      return encode;
    } else if (string [i] == "i") {
      encode [i] = 3;
      return encode;
    } else if (string [i] == "o") {
      encode [i] = 4;
      return encode;
    } else if (string [i] == "u") {
      encode [i] = 5;
      return encode;
    }
  }
}
function decode(string) {
  // seu código aqui
  let decode = [];
  encode = string;
  for (i = 0; i < string.length; i++) {
    if (string [i] == 1) {
      dencode [i] = `a`;
      return encode;
    } else if (string [i] == 2) {
      dencode [i] = `e`;
      return encode;
    } else if (string [i] == 3) {
      dencode [i] = `i`;
      return encode;
    } else if (string [i] == 4) {
      dencode [i] = `o`;
      return encode;
    } else if (string [i] == 5) {
      dencode [i] = `u`;
      return encode;
    }
  }
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
