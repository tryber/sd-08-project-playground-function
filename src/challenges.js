// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  return valor1 === true && valor2 === true ? true : false;
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
function numMaior(arrayNumbers) {
  let maior = 0;

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] > maior) {
      maior = arrayNumbers[x];
    }
  }
  return maior
}

function highestCount(arrayNumbers) {
  // seu código aqui
  let repete = 0;
  let maior = numMaior(arrayNumbers);

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] === maior) {
      repete += 1;
    }
  }
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
function encode(palavra) {
  // seu código aqui
  let nova_Palavra = palavra.replace(/a/g, '1');
  nova_Palavra = nova_Palavra.replace(/e/g, '2');
  nova_Palavra = nova_Palavra.replace(/i/g, '3');
  nova_Palavra = nova_Palavra.replace(/o/g, '4');
  nova_Palavra = nova_Palavra.replace(/u/g, '5');

  return nova_Palavra;
}

function decode(palavra) {
  // seu código aqui
  let nova_palavra = palavra.replace(/1/g, 'a');
  nova_palavra = nova_palavra.replace(/2/g, 'e');
  nova_palavra = nova_palavra.replace(/3/g, 'i');
  nova_palavra = nova_palavra.replace(/4/g, 'o');
  nova_palavra = nova_palavra.replace(/5/g, 'u');

  return nova_palavra;
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
    let objNovo = new Object();
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
    let contador = 1;
    for (let y = 1; y < arrayNumbers.length; y += 1) {
      if (arrayNumbers[x] === arrayNumbers[y] && x !== y - 1) {
        contador += 1;
      }
    }
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

function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  let phoneNumber = '';

  if (mainValida(arrayNumbers) !== true) {
    return mainValida(arrayNumbers);
  }

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (x == 0) {
      phoneNumber += `(${arrayNumbers[x]}`;
    } else if (x === 1) {
      phoneNumber += `${arrayNumbers[x]}) `;
    } else if (x > 1 && x <= 6) {
      phoneNumber += arrayNumbers[x];
      if (x == 6) {
        phoneNumber += '-';
      }
    } else {
      phoneNumber += arrayNumbers[x];
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  lineA = Math.abs(lineA);
  lineB = Math.abs(lineB);
  lineC = Math.abs(lineC);

  let somaA_b = lineA + lineB;
  let somaA_c = lineA + lineC;
  let somaC_b = lineC + lineB;

  if ((somaA_b > lineC) && (somaA_c > lineB) && (somaC_b > lineA)) {
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
    total += parseInt(resultado[x]);
  }

  if (total === 1) {
    return `${total} copo de água`;
  } else {
    return `${total} copos de água`;
  }
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
