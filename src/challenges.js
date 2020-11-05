// Desafio 1
function compareTrue(x, y) {
  if (x && y === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  let separador = frase.split(' ')
  return separador;
}

// Desafio 4
function concatName(nome) {
  return nome[nome.length - 1] + ', ' + nome[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(num) {
// para fazer esse codigo utilizei a fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max  
  let maiorNumero = Math.max(...num);
  let contagem = 0;
  for (let n = 0; n < num.length; n += 1) {
    if (num[n] === maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
// para fazer esse código consultei essa fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs  
  let diffCat1 = Math.abs(mouse - cat1);
  let diffCat2 = Math.abs(mouse - cat2);
  if (diffCat1 === diffCat2) {
    return 'os gatos trombam e o rato foge'    
  } else if (diffCat1 < diffCat2) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(num) {
  let result = []
  for (let n = 0; n < num.length; n += 1) {
    if (num[n] % 3 === 0) {
      result[n] = 'fizz';
    } else if (num[n] % 5 === 0) {
      result[n] = 'buzz';
    } else if ((num[n] % 3 === 0 && num[n] % 5 === 0)) {
      result[n] = 'fizzBuzz';
    } else {
      result[n] = 'bug!';
    }
    return result
  }
}

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
