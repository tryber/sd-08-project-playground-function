// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  return valor1 === true && valor2 === true;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let arrayString = [];
  arrayString = palavra.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let index = arrayString.length - 1;
  let stringPalavras = `${arrayString[index]}, ${arrayString[0]}`;

  return stringPalavras;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui

  let points = 0;
  if (wins >= 1) {
    points = wins * 3;
  }
  if (ties >= 1) {
    points += ties;
  }

  return points;
}

// Desafio 6
function numRepete(arrayNumbers, maior) {
  let iCont = 0;

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] === maior) {
      iCont += 1;
    }
  }
  return iCont;
}

function highestCount(arrayNumbers) {
  // seu código aqui
  arrayNumbers.sort();
  let aux = arrayNumbers.length;
  let repete = numRepete(arrayNumbers, arrayNumbers[aux - 1]);

  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distCat1Mouse = Math.abs(cat1 - mouse);
  let distCat2Mouse = Math.abs(cat2 - mouse);

  if (distCat1Mouse === distCat2Mouse) {
    return 'os gatos trombam e o rato foge';
  }
  if (distCat1Mouse < distCat2Mouse) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function returnTexBuzz(number) {
  if (number % 3 === 0) {
    return 'fizz';
  }
  return number % 5 === 0 ? 'buzz' : 'bug!';
}

function fizzBuzz(arrayNumbers) {
  let newArray = [];
  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] % 3 === 0 && arrayNumbers[x] % 5 === 0) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push(returnTexBuzz(arrayNumbers[x]));
    }
  }
  return newArray;
}

// Desafio 9

function tipoDeCodigo(t) {
  if (t === 0) {
    return [/a/g, /e/g, /i/g, /o/g, /u/g];
  }
  return [/1/g, /2/g, /3/g, /4/g, /5/g];
}

function alteraPalavra(palavra, codigo, chave) {
  const contador = 5;
  let aux = '';
  for (let i = 0; i < contador; i += 1) {
    aux = palavra.replace(codigo[i], `${chave[i]}`);
    palavra = aux;
  }
  return palavra;
}

function encodeDecode(palavra, t) {
  let nums = ['1', '2', '3', '4', '5'];
  let letras = ['a', 'e', 'i', 'o', 'u'];
  let codifcacao = tipoDeCodigo(t);
  if (t === 0) {
    palavra = alteraPalavra(palavra, codifcacao, nums);
  } else {
    palavra = alteraPalavra(palavra, codifcacao, letras);
  }
  return palavra
}

function encode(palavra) {
  // seu código aqui
  let novaPalavra = encodeDecode(palavra, 0)

  return novaPalavra;
}

function decode(palavra) {
  // seu código aqui
  let novaPalavra = encodeDecode(palavra, 1);

  return novaPalavra;
}


// Desafio 10
function techList(arrayTech, name) {
  // seu código aqui
  let hardSkills = [];

  if (arrayTech.length < 1) {
    return 'Vazio!';
  }

  arrayTech.sort();
  for (let x = 0; x < arrayTech.length; x += 1) {
    let objNovo = {};
    objNovo.tech = arrayTech[x];
    objNovo.name = name;

    hardSkills.push(objNovo);
  }
  return hardSkills;
}

// Desafio 11
function arrayValido(arrayNumbers) {
  if (arrayNumbers.length !== 11) {
    return false;
  }
  return true;
}

function numerosValidos(arrayNumbers) {
  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] < 0 || arrayNumbers[x] > 9) {
      return false;
    }
  }
  return true;
}


function numerosRepetidos(arrayNumbers) {
  for (let x = 0; x < arrayNumbers.length; x += 1) {
    let contador = numRepete(arrayNumbers, arrayNumbers[x]);
    if (contador >= 3) {
      return false;
    }
  }
  return true;
}

function mainValida(arrayNumbers) {
  if (arrayValido(arrayNumbers) !== true) {
    return 'Array com tamanho incorreto.';
  }
  if (numerosValidos(arrayNumbers) !== true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  if (numerosRepetidos(arrayNumbers) !== true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return true;
}

function montaPhoneNumber(phoneNumber, number, x) {
  if (x === 0 || x === 1) {
    phoneNumber += x === 0 ? `(${number}` : `${number}) `;
  } else if (x === 6) {
    phoneNumber += `${number}-`;
  } else {
    phoneNumber += number;
  }
  return phoneNumber;
}

function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  let phoneNumber = '';

  if (mainValida(arrayNumbers) !== true) {
    return mainValida(arrayNumbers);
  }

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    phoneNumber = montaPhoneNumber(phoneNumber, arrayNumbers[x], x);
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);

  let somaAb = lineA + lineB;
  let somaAc = lineA + lineC;
  let somaCb = lineC + lineB;

  if ((somaAb > lineC) && (somaAc > lineB) && (somaCb > lineA)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  let resultado = drinks.match(/\d+/g);
  let total = 0;

  for (let x = 0; x < resultado.length; x += 1) {
    total += parseInt(resultado[x], 0);
  }

  if (total === 1) {
    return `${total} copo de água`;
  }
  return `${total} copos de água`;
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
