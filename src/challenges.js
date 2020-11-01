// Desafio 1
function compareTrue(num1, num2) {
  if (num1 && num2 == true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(num1, num2) {
  let base = num1;
  let altura = num2;
  let areaTriangulo = (base * altura) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(input) {
  let frase = [];

  for (let i = 0; i < input.length; i += 1) {
    frase += input[i];
  }
  let novoArray = frase.split(" ");
  return novoArray;
}
splitSentence("go Trybe");

// Desafio 4
function concatName(input) {
  let entrada = input;
  let retorno = entrada[entrada.length - 1] + ", " + entrada[0];
  return retorno;
}

concatName(["Lucas", "Cassiano", "Ferraz", "Paollilo"]);

// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let pontos = vitorias + empates;
  return pontos;
}
footballPoints(10, 5);

// Desafio 6
function highestCount(input) {
  let arrayBase = [];

  for (let i = 0; i < input.length; i += 1) {
    arrayBase.push(input[i]);
  }
  arrayBase.sort(function (a, b) {
    return a - b;
  });
  let numberOfOccurrences = 1;
  for (let i = arrayBase.length - 1; i >= 0; i -= 1)
    if (arrayBase[i] == arrayBase[i - 1]) {
      numberOfOccurrences += 1;
    } else {
      break;
    }
  return numberOfOccurrences;
}
highestCount([9, 1, 2, 3, 9, 5, 7]);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = cat1;
  let gato2 = cat2;
  let rato = mouse;
  let distGato1Rato = Math.abs(gato1 - rato);
  let distGato2Rato = Math.abs(gato2 - rato);  
//função Math.abs observada em artigo do Thiago Pederzolli (Turma 7), disponível em: https://dev.to/thiagopederzolli/facilitando-a-matematica-de-seus-codigos-5bom
  if (distGato1Rato < distGato2Rato) {
    return "cat1";
  } else if (distGato2Rato < distGato1Rato) {
    return "cat2";
  } else {
    console.log("os gatos trombam e o rato foge")
    return "os gatos trombam e o rato foge";
  }
}
catAndMouse(1, 0, 2);

// Desafio 8
function fizzBuzz(input) {
  let retorno = [];
  for (let i = 0; i < input.length; i += 1) {
    if (input[i] % 3 == 0 && input[i] % 5 == 0) {
      retorno.push("fizzBuzz");
    } else if (input[i] % 3 == 0) {
      retorno.push("fizz");
    } else if (input[i] % 5 == 0) {
      retorno.push("buzz");
    } else {
      retorno.push("bug!");
    }
  }
  return retorno;
}
fizzBuzz([2, 15, 7, 9, 45]);

// Desafio 9
function encode(input) {
    
    let palavraCodificada = "";
    for(let i = 0; i < input.length; i += 1){                   
      if (input[i] == "a"){
        palavraCodificada += 1;
    } else if (input[i] == "e"){
        palavraCodificada += 2;
      } else if (input[i] == "i"){
        palavraCodificada += 3;
      } else if (input[i] == "o"){
        palavraCodificada += 4;
      } else if (input[i] == "u"){
        palavraCodificada += 5;
      } else {
        palavraCodificada += input[i]
      }
    } 
    return palavraCodificada;
  }encode("hi there!")

function decode(input) {
  let palavraDecodificada = "";
  for(let i = 0; i < input.length; i += 1){                   
    if (input[i] == 1){
      palavraDecodificada += "a";
  } else if (input[i] == 2){
      palavraDecodificada += "e";
    } else if (input[i] == 3){
      palavraDecodificada += "i";
    } else if (input[i] == 4){
      palavraDecodificada += "o";
    } else if (input[i] == 5){
      palavraDecodificada += "u";
    } else {
      palavraDecodificada += input[i]
    }
  } 
  console.log(palavraDecodificada);
  return palavraDecodificada;
}decode("h3 th2r2")
  
// Desafio 10
function techList(array,name) {
  let arrayBase = [];
  let retorno = new Array();

  if (Array.isArray(array) && array.length != 0){
    for (let i = 0; i < array.length; i += 1) {
    arrayBase.push(array[i]);
  }
  
  arrayBase.sort();
    for (let i = 0; i < arrayBase.length; i +=1)   {
      let objeto = {
        tech: arrayBase[i],
        name: name
      }
      retorno.push(objeto)
  }  
  console.log(retorno)
  return retorno
   
  } else {
  console.log("Vazio!")
  return "Vazio!"
  
}
 } techList(["React","Jest", "HTML", "CSS", "JavaScript"], "Lucas")
  
// Desafio 11

function validNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    let atual = arr[i];
    if (atual < 0 || atual > 9) return false;
  }
  return true;
}
​
function count(num, arr) {
  let numberOfOccurrences = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] == num) numberOfOccurrences += 1;
  }
  return numberOfOccurrences;
}
​
function validRepetition(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    if (count(arr[i], arr) >= 3) return false;
  }
  return true;
}

function generatePhoneNumber(input) {
  if (input.length !== 11) return 'Array com tamanho incorreto.'; //verifica se o length é 11
  if (validNumber(input) && validRepetition(input)) { // verifica se estão entre 0 e 9, e se algum repete mais que 3 vezes
    const numero = input.join('');
    const ddd = numero.slice(0, 2);
    const partA = numero.slice(2, 7);
    const partB = numero.slice(7, 11); 
    return `(${ddd}) ${partA}-${partB}`;
  }
  return "não é possível gerar um número de telefone com esses valores";
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
};
