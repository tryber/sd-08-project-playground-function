// Desafio 1
function compareTrue(valor1, valor2) {
  //   1 - Usando o operador &&
  // JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os
  // valores são verdadeiros, e retorna false se algum dos valores não o for.
  // Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:
  // Retorne true se ambos os valores são verdadeiros;
  // Retorne false se um ou ambos os parâmetros forem falsos.
  // Faça a função utilizando o operador &&.
  if (valor1 === true && valor2 === true){
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
//   Escreva uma função com o nome calcArea que receba um valor de base (chamado base) e outro de
// altura (chamado height) de um triângulo e retorne o cálculo da sua área.
// Lembre-se que a área de um triângulo é calculada através da seguinte fórmula:
// (base * altura) / 2.
  let resultado = 0;
  resultado = (base * height)/2;
  return resultado;
}

// Desafio 3
function splitSentence(string) {
//  Escreva uma função com o nome splitSentence, a qual receberá uma string e retornará uma array
// de strings separadas por cada espaço na string original.
// Exemplo: se a função receber a string "go Trybe", o retorno deverá ser ['go', 'Trybe'].
  var array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  // seu código aqui
//   Escreva uma função com o nome concatName que, ao receber uma array de strings, retorne
// uma string
// com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM',
// independente do tamanho da array.

// Isso quer dizer que, caso o parâmetro passado para concatName seja a Array
// ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar Paolillo, Lucas.
  let resultado = array[array.length-1]
  resultado += ", ";
  resultado += array[0];
return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  // Escreva uma função com o nome footballPoints que receba o número de vitórias
  // (esse parâmetro deverá se chamar wins) e o número de empates (esse parâmetro
  // deverá se chamar ties) e retorne a quantidade de pontos que o time marcou em um campeonato.

  // Para tanto, considere que cada vitória vale 3 pontos e cada empate vale 1 ponto.
  let resultado = ((wins * 3) + ties)
  return resultado;
}

// Desafio 6
function highestCount(teste) {
//   Escreva uma função chamada highestCount que, ao receber uma array de números, retorne a
// quantidade de vezes que o maior deles se repete.
// Exemplo: caso o parâmetro de highestCount seja uma array com valores [9, 1, 2, 3, 9, 5, 7],
// a função deverá retornar 2, que é a quantidade de
// vezes que o número 9 (maior número do array) se repete.
let maior = 0;
let quantidadeRepeticao = 0;
  for(let index = 0; index < teste.length; index += 1){
    if(teste[maior]<teste[index]){
        maior=index;
        }
      }
  for(let peca = 0; peca < teste.length; peca += 1){
    if ( teste[maior] === teste[peca] ){
        quantidadeRepeticao+=1;
    }
  }
return quantidadeRepeticao;
}

// Desafio 7
function catAndMouse( mouse, cat1, cat2 ) {
//  Imagine que existem dois gatos, os quais chamaremos de cat1 e cat2, e que ambos estão atrás
// de um rato chamado mouse.
// Imagine que cada um dos três animais está em uma posição representada por um número.
// Sabendo disso, crie uma função chamada catAndMouse que, ao receber a posição de mouse, cat1 e cat2,
// nessa ordem,
// calcule as distâncias entre o rato e os gatos e retorne qual dos felinos irá alcançar o rato primeiro
// (sendo aquele que estará mais perto).
// Exemplo: caso o gato cat2 esteja a 2 unidades de distância do rato, e cat1 esteja a 3 unidades, sua
// função deverá retornar "cat2".
// Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string "os gatos trombam
// e o rato foge".
if ( Math.abs(mouse-cat1) == Math.abs(mouse-cat2) ){
  return "os gatos trombam e o rato foge"
}
else if ( Math.abs(cat1-mouse) < Math.abs(cat2-mouse) ){
  return "cat1"
}
return "cat2"
}
// Desafio 8
function fizzBuzz(array) {
// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:
// Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
// Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar
// ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].
let resultado = [];
for (const key in array){
  resultado[key] ="";
  analyze_bug_fizz_Buzz(array , key , resultado);
}
return resultado;
}

function analyze_bug_fizz_Buzz(array , key , resultado) {
  if(array[key]%15==0){
    resultado[key]="fizzBuzz";
    return;
  }
  if(array[key]%3 === 0){
    resultado[key]="fizz";
    return;
  }
  if(array[key]%5 === 0 ){
    resultado[key] = "buzz";
    return;
  }
  resultado[key]="bug!";
    return;
}

// Desafio 9
function encode(codigo) {
  // Crie duas funções: a primeira deverá se chamar encode e, ao receber uma string como parâmetro, deverá trocar todas as
  // vogais minúsculas por números, de acordo com o formato a seguir:

  // a -> 1
  // e -> 2
  // i -> 3
  // o -> 4
  // u -> 5

  // Ou seja, caso o parâmetro de encode seja "hi there!", o retorno deverá ser "h3 th2r2!".

  // A segunda função deverá se chamar decode e faz o contrário de encode - ou seja, recebe uma string contendo números no lugar de
  //letras minúsculas e retornará uma string com vogais minúsculas no lugar dos números (então, caso o parâmetro de decode seja "h3 th2r2!",
  // o retorno deverá ser "hi there!").


  codigo=search_replace(codigo,"a","1");
  codigo=search_replace(codigo,"e","2");
  codigo=search_replace(codigo,"i","3");
  codigo=search_replace(codigo,"o","4");
  codigo=search_replace(codigo,"u","5");
  return codigo;
}

function search_replace(codigo,entrada,saida){
  while(codigo.search(entrada)>0){
  codigo = codigo.replace(entrada,saida)
  }
 return codigo
}

function decode(codigo) {
  codigo=search_replace(codigo,"1","a");
  codigo=search_replace(codigo,"2","e");
  codigo=search_replace(codigo,"3","i");
  codigo=search_replace(codigo,"4","o");
  codigo=search_replace(codigo,"5","u");
return codigo;
}
// Desafio 10
function techList(tech=[],nome) {
  //   Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo
// parâmetro chamado name com um nome.

// Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

// {
//   tech: "NomeTech",
//   name: name
// }
// Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

// A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.
let listaTech =[];
let objeto = {
  tech:"",
  name:""
};
for (let  key=0 ; key<tech.length ; key++){
  objeto.tech=tech[key];
  objeto.name=nome;
  console.log("")
  console.log(key)
  console.log(objeto);
  console.log(listaTech)
  listaTech[key]=objeto.name + objeto.tech;
}
//listaTech.sort();
return listaTech;

}

// Desafio 11
function generatePhoneNumber(numeros=[]) {
  // Crie uma função chamada `generatePhoneNumber` que receba uma array com 11 números e retorne
  // um número de telefone, respeitando parênteses, traços e espaços.
  // Exemplo: caso o parâmetro da função seja [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1],
  // `generatePhoneNumber` deverá retornar `(12) 34567-8901`.
  // - Se a função receber um array com tamanho diferente de 11, a mesma deve
  // retornar `"Array com tamanho incorreto."`.
  // - Caso algum dos números da array seja menor que 0, maior que 9 ou se repita 3
  // vezes ou mais, `generatePhoneNumber` deverá retornar a string
  // `"não é possível gerar um número de telefone com esses valores"`.
  let ordenado = numeros.sort
  if(checkPhoneNumber0===false) {return "não é possível gerar um número de telefone com esses valores"}
  if(checkPhoneNumber1===false) {return "não é possível gerar um número de telefone com esses valores"}
  if
}
function checkPhoneNumber0(ordenado){
  for(let  key in ordenado){
    if(ordenado[key]<0||ordenado[key]>9){
      return  false;
    }
    return true;
}
}
function checkPhoneNumber1(ordenado){
  for(let  key in ordenado){
    if(ordenado[key]===ordenado[key+1] && ordenado[key+1]===ordenado[key+2] && ordenado[key+2]===ordenado[key+3]){
      return false;
    }
    return true;
}
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
// Um triângulo é composto de três linhas: lineA, lineB e lineC. Crie uma função chamada triangleCheck que deverá receber as três linhas como parâmetro e
// retornar se é possível formar um triângulo com os valores apresentados de cada linha

// Para tanto, tenha em mente algumas considerações:

// Para que seja possível formar um triângulo, é necessário que a medida de qualquer um dos lados seja menor que a soma das medidas dos outros dois e maior
// que o valor absoluto da diferença entre essas medidas.

// Para obter o valor absoluto de um número em JavaScript, pesquise pela função Math.abs.

// O retorno da sua função deverá ser um booleano.

// Exemplo: o retorno de triangleCheck(10, 14, 8) deverá ser true.


}

// Desafio 13
function hydrate() {
  // seu código aqui
  // Segundo as regras desse bar, a cada bebida deve-se beber um copo de água para que não se tenha ressaca.

  // Crie a função hydrate que recebe uma string, e retorne a sugestão de quantos copos de água você deve beber. Exemplos:

  // String recebida:
  //   "1 cerveja"
  // String retornada:
  //   "1 copo de água"
  // String recebida:
  //   "1 cachaça, 5 cervejas e 1 copo de vinho"
  // String retornada:
  //   "7 copos de água"
  // String recebida:
  //   "1 cachaça, 5 cervejas e 1 copo de vinho"
  // String retornada:
  //   "7 copos de água"
  // Notas

  // Para simplificar, consideraremos que qualquer coisa com um número à frente é uma bebida e que a sua string sempre virá com o formato
  // quantidade (em número) + tipo da bebida.

  // O número na frente de cada bebida está no intervalo entre 1 e 9.

  // Dica: pesquise por algo similar a get all integers inside a string js.

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
