// Desafio 1
function compareTrue(v1, v2) {
  let result = true;
  if (v1 === true && v2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  let result = 0;
  result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  string = string.split(' ');
  return string;
}

// Desafio 4
function concatName(nome) {
  let pNome;
  let uNome;
  let cont;
  pNome = nome[0];
  uNome = nome[nome.length - 1];
  cont = `${uNome}, ${pNome}`;
  return cont;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins > 0) {
    points += wins * 3;
  }
  if (ties > 0) {
    points += ties * 1;
  }
  return points;
}

// Desafio 6
function highestCount(teste) {
  let maior = 0;
  let obj = {};

  for (let index = 0; index < teste.length; index += 1) {
    if (obj[teste[index]] === undefined) {
      obj[teste[index]] = 1;
    } else {
      obj[teste[index]] += 1;
    }
  }

  for (let chave in obj) {
    if (chave > maior) {
      maior = chave;
    }
  }
  maior = obj[maior];
  return maior;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result = '';

  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    result = 'cat1';
  } else if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (array[i] % 3 === 0) {
      result.push('fizz');
    } else if (array[i] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  result result;
}


// Desafio 9
function encode(palavra) {
  let nPalavra = '';
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] === 'a') {
      nPalavra += 1;
    } else if (palavra[i] === 'e') {
      nPalavra += 2;
    } else if (palavra[i] === 'i') {
      nPalavra += 3;
    } else if (palavra[i] === 'o') {
      nPalavra += 4;
    } else if (palavra[i] === 'u') {
      nPalavra += 5;
    } else {
      nPalavra += palavra[i];
    }
  }
  return nPalavra;
}
function decode(palavra) {
  let nPalavra = '';
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] === '1') {
      nPalavra += 'a';
    } else if (palavra[i] === '2') {
      nPalavra += 'e';
    } else if (palavra[i] === '3') {
      nPalavra += 'i';
    } else if (palavra[i] === '4') {
      nPalavra += 'o';
    } else if (palavra[i] === '5') {
      nPalavra += 'u';
    } else {
      nPalavra += palavra[i];
    }
  }
  return nPalavra;
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
