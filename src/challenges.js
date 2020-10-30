// Desafio 1
function compareTrue(x, y) {
  let result;
  if (x === true && y === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(string) {
  return string[string.length - 1] + ', ' + string[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numeros) {
  let contRepeticao = 0;
  let maiorNumero = numeros[0];
  for (let i in numeros) {
    if (maiorNumero < numeros[i]) {
      maiorNumero = numeros[i];
      contRepeticao = 0;
    }
    if (maiorNumero === numeros[i]) {
      contRepeticao += 1
    }
  }
  return contRepeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  if (Math.abs(cat1 - mouse) < (Math.abs(cat2 - mouse))) {
    result = 'cat1'
  } else if (Math.abs(cat1 - mouse) > (Math.abs(cat2 - mouse))) {
    result = 'cat2'
  } else {
    result = 'os gatos trombam e o rato foge'
  }
  return result;
}

// Desafio 8
function fizzBuzz(numeros) {
  let result = [];
  for (let i in numeros) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      result.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(frase) {
  let result = '';
  for (let i in frase) {
    if (frase[i] === 'a') {
      result += 1;
    } else if (frase[i] === 'e') {
      result += 2;
    } else if (frase[i] === 'i') {
      result += 3;
    } else if (frase[i] === 'o') {
      result += 4;
    } else if (frase[i] === 'u') {
      result += 5;
    } else {
      result += frase[i];
    }
  }
  return result
}

function decode(frase) {
  let result = '';
  for (let i in frase) {
    if (frase[i] === '1') {
      result += 'a';
    } else if (frase[i] === '2') {
      result += 'e';
    } else if (frase[i] === '3') {
      result += 'i';
    } else if (frase[i] === '4') {
      result += 'o';
    } else if (frase[i] === '5') {
      result += 'u';
    } else {
      result += frase[i];
    }
  }
  return result
}

// Desafio 10
function techList(techs, name) {
  if (techs.length < 1) {
    return 'Vazio!';
  }
  let array = [];
  for (let i in techs) {
    let tech = techs[i];
    let rv = { tech, name };
    array.push(rv);
  }
  return array.sort(function (a, b) {
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
  })
}

// Desafio 11
function generatePhoneNumber(number) {
  let result = '';
  if (number.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else {
    for (let i in number) {
      let contRepeticao = 0;
      let verificaNumero = number[i];
      for (let i2 in number) {
        if (verificaNumero === number[i2]) {
          contRepeticao += 1;
        }
        if (number[i] > 9 || number[i] < 0 || contRepeticao >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        } else {
          result = '(' + number[0] + number[1] + ') ' + number[2] + number[3] + number[4] + number[5] + number[6] + "-" + number[7] + number[8] + number[9] + number[10];
        }
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;
  if (((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) && ((lineB < lineA + lineC) && (lineB > Math.abs(lineA - lineC))) && ((lineC < lineA +lineB) && (lineC > Math.abs(lineA - lineB)))) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(frase) {
  /* let number = 0;
  number += frase.match(/\d+/)[1];
  return number */
  /* let result = ;
  frase.split = '';
  for (let i in frase) {
    if ((typeof frase[i] === 'number ') */
  let number = 0;
  for (let i in frase) {
    if (frase[i] === '1') {
      number += 1;
    } else if (frase[i] === '2') {
      number += 2;
    } else if (frase[i] === '3') {
      number += 3;
    } else if (frase[i] === '4') {
      number += 4;
    } else if (frase[i] === '5') {
      number += 5;
    } else if (frase[i] === '6') {
      number += 6;
    } else if (frase[i] === '7') {
      number += 7;
    } else if (frase[i] === '8') {
      number += 8;
    } else if (frase[i] === '9') {
      number += 9;
    }
  }
  let result;
    if (number === 1) {
      result = number + ' copo de água';
    } else {
      result = number + ' copos de água';
    }
  return result;
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
