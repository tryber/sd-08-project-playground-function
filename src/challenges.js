// Guilherme Ribeiro
// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(frase) {
  let string = '';
  let array = [];

  for (let i = 0; i < frase.length; i += 1) {
    if (frase[i] === ' ') {
      array.push(string);
      string = '';
    } else {
      string += frase[i];
    }
  }
  array.push(string);

  return array;
}

// Desafio 4
function concatName(name) {
  let firstName = name[0];
  let lastName = name[name.length - 1];

  let string = (`${lastName}, ${firstName}`);

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = arrayNumbers[0];
  let cont = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > maior) {
      maior = arrayNumbers[i];
      cont = 1;
    } else if (arrayNumbers[i] === maior) {
      cont += 1;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let frase = '';

  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    frase = 'os gatos trombam e o rato foge';
  } else if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    frase = 'cat1';
  } else {
    frase = 'cat2';
  }

  return frase;
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayStrings = [];

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if ((arrayNumbers[i] % 3 === 0) && (arrayNumbers[i] % 5 !== 0)) {
      arrayStrings.push('fizz');
    } else if ((arrayNumbers[i] % 3 !== 0) && (arrayNumbers[i] % 5 === 0)) {
      arrayStrings.push('buzz');
    } else if ((arrayNumbers[i] % 3 === 0) && (arrayNumbers[i] % 5 === 0)) {
      arrayStrings.push('fizzBuzz');
    } else {
      arrayStrings.push('bug!');
    }
  }

  return arrayStrings;
}

// Desafio 9
function encode(string) {
  let frase = '';
  let letra = '';

  for (let i = 0; i < string.length; i += 1) {
    letra = string[i];

    if (letra === 'a') {
      frase += 1;
    } else if (letra === 'e') {
      frase += 2;
    } else if (letra === 'i') {
      frase += 3;
    } else if (letra === 'o') {
      frase += 4;
    } else if (letra === 'u') {
      frase += 5;
    } else {
      frase += letra;
    }
  }

  return frase;
}

function decode(string) {
  let frase = '';
  let letra = '';

  for (let i = 0; i < string.length; i += 1) {
    letra = string[i];

    if (letra === '1') {
      frase += 'a';
    } else if (letra === '2') {
      frase += 'e';
    } else if (letra === '3') {
      frase += 'i';
    } else if (letra === '4') {
      frase += 'o';
    } else if (letra === '5') {
      frase += 'u';
    } else {
      frase += letra;
    }
  }

  return frase;
}

// Desafio 10
function techList(List, name) {
  let orderList = List.sort();
  let resultado = null;
  let orderVector = [];
  let objList = {
    tech: List,
    name: name,
  };

  if (orderList.length === 0) {
    resultado = 'Vazio!';
  } else {
    for (let i = 0; i < orderList.length; i += 1) {
      let element = {
        tech: objList.tech[i],
        name: name,
      };
      orderVector.push(element);
    }
    resultado = orderVector;
  }

  return resultado;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let countNumbers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let ddd = '';
  let first = '';
  let second = '';
  let resultado = '';

  if (arrayNumbers.length !== 11) {
    resultado = 'Array com tamanho incorreto.';
  } else {
    for (let i = 0; i < arrayNumbers.length; i += 1) {
      if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
      } else {
        for (let j = 0; j < countNumbers.length; j += 1) {
          if (arrayNumbers[i] === j) {
            countNumbers[j] += 1;
          }
        }
      }
    }

    for (let i = 0; i < countNumbers.length; i += 1) {
      if (countNumbers[i] > 2) {
        resultado = 'não é possível gerar um número de telefone com esses valores';
      }
    }

    if (resultado === '') {
      for (let i = 0; i < arrayNumbers.length; i += 1) {
        if (i < 2) {
          ddd += arrayNumbers[i];
        } else if (i < 7) {
          first += arrayNumbers[i];
        } else {
          second += arrayNumbers[i];
        }
      }
      resultado = (`(${ddd}) ${first}-${second}`);
    }
  }

  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let resultado = true;
  let sumAB = lineA + lineB;
  let sumBC = lineB + lineC;
  let sumCA = lineC + lineA;
  let difAB = lineA - lineB;
  let difBC = lineB - lineC;
  let difCA = lineC - lineA;
  let lineAok = false;
  let lineBok = false;
  let lineCok = false;

  if ((lineA < sumBC) && (lineA > Math.abs(difBC))) {
    lineAok = true;
  }

  if ((lineB < sumCA) && (lineB > Math.abs(difCA))) {
    lineBok = true;
  }

  if ((lineC < sumAB) && (lineC > Math.abs(difAB))) {
    lineCok = true;
  }

  if (lineAok || lineBok || lineCok) {
    resultado = true;
  } else {
    resultado = false;
  }

  return resultado;
}

// Desafio 13
function hydrate(bebidas) {
  let copos = 0;
  let frase = '';

  for (let i = 0; i < bebidas.length; i += 1) {
    if (bebidas[i] === '1') {
      copos += 1;
    } else if (bebidas[i] === '2') {
      copos += 2;
    } else if (bebidas[i] === '3') {
      copos += 3;
    } else if (bebidas[i] === '4') {
      copos += 4;
    } else if (bebidas[i] === '5') {
      copos += 5;
    } else if (bebidas[i] === '6') {
      copos += 6;
    } else if (bebidas[i] === '7') {
      copos += 7;
    } else if (bebidas[i] === '8') {
      copos += 8;
    } else if (bebidas[i] === '9') {
      copos += 9;
    }
  }

  if (copos === 1) {
    frase = (`${copos} copo de água`);
  } else {
    frase = (`${copos} copos de água`);
  }

  return frase;
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
