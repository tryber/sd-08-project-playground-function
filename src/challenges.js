// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let words = string.split(' ');
  return words;
}

// Desafio 4
function concatName(arrayStrings) {
  let retorno = '';
  retorno += arrayStrings[arrayStrings.length - 1];
  retorno += ', ';
  retorno += arrayStrings[0];
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties;
  let totalPoints = winPoints + tiePoints;
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let higher = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > higher) {
      higher = numbers[i];
    }
  }
  let repeticoes = 0;
  for (let j = 0; j < numbers.length; j += 1) {
    if (numbers[j] === higher) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1ToMouse = Math.abs(cat1 - mouse);
  let cat2ToMouse = Math.abs(cat2 - mouse);
  let winner;
  if (cat1ToMouse === cat2ToMouse) {
    let empate = 'os gatos trombam e o rato foge';
    return empate;
  } else if (cat1ToMouse > cat2ToMouse) {
    winner = 'cat2';
    return winner;
  } else {
    winner = 'cat1';
    return winner;
  }
}
// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      resultado.push('fizz');
    } else if (array[i] % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let codigo = '';
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      codigo += '1';
    } else if (string[i] === 'e') {
      codigo += '2';
    } else if (string[i] === 'i') {
      codigo += '3';
    } else if (string[i] === 'o') {
      codigo += '4';
    } else if (string[i] === 'u') {
      codigo += '5';
    } else {
      codigo += string[i];
    }
  }
  return codigo;
}

// Desafio 10
function decode(code) {
  let frase = '';
  for (let index = 0; index < codigo.length; index += 1) {
    if (code[index] === '1') {
      frase += 'a';
    } else if (code[index] === '2') {
      frase += 'e';
    } else if (code[index] === '3') {
      frase += 'i';
    } else if (code[index] === '4') {
      frase += 'o';
    } else if (code[index] === '5') {
      frase += 'u';
    } else {
      frase += code[index];
    }
  }
  return frase;
}

// Desafio 10
function techList(techArray, seuNome) {
  let array = techArray.sort();
  let vazio = 'Vazio!';
  let saida = [];
  if (techArray.length > 0) {
    for (let key = 0; key < techArray.length; key += 1) {
      let objeto = {};
      objeto.tech = array[key];
      objeto.name = seuNome;
      saida.push(objeto);
    }
    return saida;
  }
  return vazio;
}

// Desafio 11
function generatePhoneNumber(numerico) {
  let erro = 'Array com tamanho incorreto.';
  let impossivel = 'não é possível gerar um número de telefone com esses valores';
  if (numerico.length === 11) {
    let sorted = numerico.slice().sort();
    for (let key = 0; key < numerico.length; key += 1) {
      let letra = key;
      let petra = key;
      let anterior = (letra - 1);
      let proximo = (petra + 1);
      if (sorted[key] < 0 || sorted[key] > 9) {
        return impossivel;
      }
      if (sorted[key] === sorted[anterior] && sorted[key] === sorted[proximo]) {
        return impossivel;
      }
    }
    let telefone = `(${numerico[0]}${numerico[1]}) ${numerico[2]}${numerico[3]}${numerico[4]}${numerico[5]}${numerico[6]}-${numerico[7]}${numerico[8]}${numerico[9]}${numerico[10]}`;
    return telefone;
  }
  return erro;
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
