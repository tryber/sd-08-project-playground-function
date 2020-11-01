// Desafio 1

function compareTrue(valor1, valor2) {
  if (valor1 && valor2) return true; 
  return false;
}

// Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3

function splitSentence(literal) {
  let split = literal.split(' ');
  return split;
}

// Desafio 4

function concatName(array) {
  let string;
  for (let i in array) {if (i == array.length - 1) string = array[i];}
  if (array[0]) string += ", " + array[0];
  return string;
}

// Desafio 5

function footballPoints(wins, ties) {
  let pontos = 0;
  for (let i = 0; i < wins; i += 1) {pontos = wins * 3;}
  for (i = 0; i < ties; i += 1) {pontos += 1;}
  return pontos;
}

// Desafio 6

function highestCount(array) {
  let maiorNumero = array[0];
  let cont = 0;
  Math.max.apply(null, array);
  for (let k = 0; k < array.length; k += 1) {if (maiorNumero == array[k]) cont += 1;}
  return cont;
}

//console.log(highestCount([9, 3, 9, 3, 9, 3, 9]));

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let mouseMove = Math.abs(mouse);
  let cat1Move = Math.abs(cat1);
  let cat2Move = Math.abs(cat2);

  if (Math.abs(mouseMove - cat1Move) < Math.abs(mouseMove - cat2Move)) return 'cat1'; 
  if (Math.abs(mouseMove - cat2Move) < Math.abs(mouseMove - cat1Move)) return 'cat2'; 
  return 'os gatos trombam e o rato foge';
}

//console.log(catAndMouse(-1, -3, 2));

// Desafio 8

function fizzBuzz(array) {
  let fizzBuzz = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) fizzBuzz[i] = 'fizz'; 
    if (array[i] % 3 == 0) fizzBuzz[i] = 'fizzBuzz';        
    if (array[i] % 5 == 0) fizzBuzz[i] = 'buzz';
    if (array[i] % 3 != 0 && array[i] % 5 != 0) fizzBuzz[i] = 'bug!';
  }
  return fizzBuzz;
}

// Desafio 9

function encode(literal) {
  for (let i in literal) {
    if (!(literal[i]*literal[i])) {
      if (literal[i] == "a") literal = literal.replace(literal[i], "1"); 
      if (literal[i] == "e") literal = literal.replace(literal[i], "2");
      if (literal[i] == "i") literal = literal.replace(literal[i], "3");
      if (literal[i] == "o") literal = literal.replace(literal[i], "4");
      if (literal[i] == "u") literal = literal.replace(literal[i], "5");
    }
  }
  return literal;
}

//console.log(encode("hi there"))

function decode(literal) {
  for (let i in literal) {
    if (literal[i]*literal[i]) {
      if (literal[i] == "1") literal = literal.replace(literal[i], "a");
      if (literal[i] == "2") literal = literal.replace(literal[i], "e");
      if (literal[i] == "3") literal = literal.replace(literal[i], "i");
      if (literal[i] == "4") literal = literal.replace(literal[i], "o");
      if (literal[i] == "5") literal = literal.replace(literal[i], "u");
    }
  }
  return cont;
}

//console.log(decode("H3 th2r2!"));

// Desafio 10

function techList(array, name) {
  if (array.length == 0) return "Vazio!";
  let tecnologias = array.sort();
  let arr = [];
  let objeto = {};
  for (let i = 0; i < tecnologias.length; i += 1) {
    objeto = {
      tech: tecnologias[i],
      name: name,
    };
    arr[i] = objeto;
  }
  return arr;
}

//console.log(techList([], "João"))

// Desafio 11

function generatePhoneNumber(array) {
  if (array.length != 11) return "Array com tamanho incorreto.";
  for (let i = 0; i < array.length; i += 1) {
    let cont = 0;
    for (let j = 0; j < array.length; j += 1) { if (array[i] == array[j]) cont += 1; }
      if (array[i] < 0 || array[i] > 9 || cont >= 3) return "não é possível gerar um número de telefone com esses valores";
  }
  let numeros = "", telefone = "", meioTel = "", fimTel = "";
  for (let i = 0; i < array.length; i += 1) { numeros += array[i]; }
  telefone = "(" + numeros[0] + "" + numeros[1] + ") ";
  for (let i = 2; i <= 6; i += 1) { meioTel += numeros[i]; }
  telefone += meioTel + "-";
  for (let i = 7; i <= 10; i += 1) { fimTel += numeros[i]; }
  telefone += fimTel;
  return telefone;
}

//console.log(generatePhoneNumber([1, -2, 3, 4, 6, 6, 8, 9, 1, 2, 5]))

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) return true;
  return false;
}

// Desafio 13

function hydrate(literal) {
  let agua = 0;
  for (let i in literal) {
    let a = literal[i];
    if (a * a) agua += parseInt(a);
  }
  if (agua > 1) return agua + " copos de água";
  return agua + " copo de água";
}

//console.log(hydrate("1 cerveja"))

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
