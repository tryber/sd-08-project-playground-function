// Desafio 1

function compareTrue(comprar, pagar) {
  // seu código aqui
  if (comprar && pagar) return true;
  return false;
}

// Desafio 2

function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}


// Desafio 3

function splitSentence(frase) {
  // seu código aqui
  return frase.split(' ')
}

// Desafio 4

function concatName(array) {
  // seu código aqui
  for (let i = 0; i < array.length -1; i += 1) {
    return (array[array.length-1] + ', '  + array[0])
  }
}

// Desafio 5

function footballPoints(wins, ties) {
  // seu código aqui
  let total = (wins * 3 + ties * 1);
  return total
}

// Desafio 
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function/apply#Usando_apply_e_fun%C3%A7%C3%B5es_embutidas

function highestCount(valores) {
  // seu código aqui
  let highest = Math.max.apply(null, valores);
  let repeticao = 0;
  for (let i = 0; i < valores.length; i += 1) {
    if (valores[i] == highest) {
      repeticao += 1;
    }
  }
  return repeticao
}


// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);

  if (distMouseCat1 - distMouseCat2 == 0) {
    return 'os gatos trombam e o rato foge'
  } else if (distMouseCat1 < distMouseCat2) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}

// Desafio 8

function fizzBuzz(parametro) {
  // seu código aqui
  let array = [];
  for (let cont = 0; cont < parametro.length; cont += 1) {
    if (parametro[cont] % 15 == 0) {
      array[cont] = 'fizzBuzz'
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


// Desafio 9


function encode(saudacao) {
  // seu código aqui
  let codificada = '';
  let vogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for (let letra of saudacao) {
    if (vogais[letra] === undefined) {
      codificada += letra
    } else {
      codificada += vogais[letra]
    }
  }
  return codificada
}
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of
 //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/undefined

function decode(saudacao1) {
  // seu código aqui
  let descodificado = '';
  let numero = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  for (let caracter of saudacao1) {
    if (numero[caracter] === undefined) {
      descodificado += caracter
    } else {
      descodificado += numero[caracter]
    }
  }
  return descodificado

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  if (tech.length === 0) {
    return "Vazio!"
  }
  let arrayTech = [];
  techList.sort();
  for (let i = 0; i < techList.length; i += 1) {
    let techObject = {
      tech: tech[i],
      name: name
    };
    arrayTech.push(techObject)
  }
  return arrayTech
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
