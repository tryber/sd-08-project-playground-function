// Desafio 1
// let comprar = true;
// let pagar = true;

function compareTrue(comprar, pagar) {
  // seu código aqui
  if (comprar === true && pagar === true) {
    return true;
  } return false;
}
// console.log (compareTrue(comprar, pagar));

// Desafio 2
// let base = 2;
// let height = 10;
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}
// console.log(calcArea(base, height));

// Desafio 3
// let frase = 'go Trybe'
function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ')
}
// console.log(splitSentence(frase));

// Desafio 4
// let array = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo', 'Ana', 'Luiz Fernando', 'José']
function concatName(array) {
  // seu código aqui
  for (let i = 0; i < array.length -1; i += 1) {
    return (array[array.length-1] + ','  + array[0])
  }
}
// console.log(concatName(array));

// Desafio 5
// let wins = 0;
// let ties = 9;
function footballPoints(wins, ties) {
  // seu código aqui
  let total = (wins * 3 + ties * 1);
  return total
}
// console.log(`O total de pontos conquistados é ${footballPoints(wins,ties)}.`);

// Desafio 6
// let valores = [9, 1, 2, 3, 9, 5, 7, 13, 13, 50, 50, 50];
function highestCount(valores) {
  // seu código aqui
  let highest = Math.max.apply(null, valores);  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Usando_apply_e_fun%C3%A7%C3%B5es_embutidas
  
  let repeticao = 0;
  for (let i = 0; i < valores.length; i += 1) {
    if (valores[i] == highest) {
      repeticao += 1;
    }
  }
  return repeticao
}

// console.log(highestCount(valores))

// Desafio 7
// let mouse = 0;
// let cat1 = 1;
// let cat2 = 5;
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  let sameDistance = Math.abs(cat1 - cat2);
  if (sameDistance == 0) {
    return 'os gatos trombam e o rato foge.'
  } else if (distMouseCat1 < distMouseCat2) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}
// console.log(catAndMouse(mouse, cat1, cat2))

// Desafio 8
// let parametro = [2, 15, 7, 9, 45]
function fizzBuzz(parametro) {
  // seu código aqui
  let array = [];
  for (let cont = 0; cont < parametro.length; cont += 1) {
    if (parametro[cont] % 15 == 0) {
      array[cont] = 'fizzbuzz'
    } else if (parametro[cont] % 3 == 0) {
       array[cont] = 'fizz'
    } else if (parametro[cont] % 5 == 0) {
      array[cont] = 'buzz'
    } else {
      array[cont] = 'bug!'
    }
  }
  return array
}

// console.log(fizzBuzz(parametro));

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
