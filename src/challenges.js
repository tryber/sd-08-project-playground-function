// Desafio 1 CONCLUIDO
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2 CONCLUIDO
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3 CONCLUIDO
function splitSentence(string) {
  let dividido = string.split(' ');
  return dividido;
}

// Desafio 4 CONCLUIDO
function concatName(nomes) {
  return nomes[nomes.length -1] + ", " + nomes[0];
}

// Desafio 5 CONCLUIDO
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let pontos = wins + ties;
  return pontos;
}

// Desafio 6 CONCLUIDO
function highestCount(numeros) {
  let repete = 0;
  let maiorNumero = 0;
  for (i in numeros) {
    if (numeros[i] > maiorNumero) {
      maiorNumero = numeros[i];
    }
  }
  for (j in numeros) {
    if (maiorNumero == numeros[j]) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7 CONCLUIDO
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
  else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8 CONCLUIDO
function fizzBuzz(numeros) {
  let valores = [];
  for(let index in numeros){
    if(numeros[index] % 3 == 0 && numeros[index] % 5 == 0){
      valores.push('fizzBuzz');
    } else if (numeros[index] % 3 == 0){
      valores.push('fizz');
    } else if(numeros[index] % 5 == 0){
      valores.push('buzz')
    } else {
      valores.push('bug!')
    }
  }
  return valores;
}

// Desafio 9 CONCLUIDO
function encode(palavra) {
  let palavraCodificada = '';
  for (index in palavra) {
    if (palavra[index] === 'a') {
      palavraCodificada += '1';
    }
    else if (palavra[index] === 'e') {
      palavraCodificada += '2';
    }
    else if (palavra[index] === 'i') {
      palavraCodificada += '3';
    }
    else if (palavra[index] === 'o') {
      palavraCodificada += '4';
    }
    else if (palavra[index] === 'u') {
      palavraCodificada += '5';
    }
    else {
      palavraCodificada += palavra[index];
    }
  }
  return palavraCodificada;
}

function decode(palavra) {
  let palavraDecodificada = '';
  for (index in palavra) {
    if (palavra[index] === '1') {
      palavraDecodificada += 'a';
    }
    else if (palavra[index] === '2') {
      palavraDecodificada += 'e';
    }
    else if (palavra[index] === '3') {
      palavraDecodificada += 'i';
    }
    else if (palavra[index] === '4') {
      palavraDecodificada += 'o';
    }
    else if (palavra[index] === '5') {
      palavraDecodificada += 'u';
    }
    else {
      palavraDecodificada += palavra[index];
    }
  }
  return palavraDecodificada;
}

// Desafio 10 CONCLUIDO
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!'
  }
  let techOrdenada = array.sort();
  let arrayOrdenado = [];
  for (index in array) {
    let objetoTech = {
      tech: techOrdenada[index],
      name,
    }
    arrayOrdenado.push(objetoTech)
  }
  return arrayOrdenado;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }
  return false;
}
console.log(triangleCheck(10, 14, 8))

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
