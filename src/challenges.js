// Desafio 1 VAMBORA!!!
function compareTrue(bool1, bool2) {
  let isTrue = false; 
  if (bool1 && bool2) {
    isTrue = true;
  } else {
    isTrue = false;
  }
  return isTrue;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2
  return areaTriangulo;
}

// Desafio 3
// Precisei pesquisar na internet, fonte: https://www.devmedia.com.br/javascript-split-dividindo-separando-strings/39254#:~:text=O%20m%C3%A9todo%20split()%20divide,das%20substrings%20resultantes%20no%20array.
function splitSentence(entrada) {
 let retorno = entrada.split(" ");
 return retorno;
}

// Desafio 4
function concatName(arrayDeStrings) {
  let primeiraString = arrayDeStrings[0];
  let ultimaPosicao = arrayDeStrings.length - 1;
  let ultimaString = arrayDeStrings[ultimaPosicao];
  let retorno = ultimaString + ", " + primeiraString;
  return retorno;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontosWins = wins * 3;
  let pontosTies = ties;
  let pontosTotais = pontosTies + pontosWins;
  return pontosTotais;
}

// Desafio 6
function highestCount(arrayNumeros) {
  let maior = -999999999999999;
  let repeticao = 0;
  for (let key in arrayNumeros) {
    if (arrayNumeros[key] > maior) {
      maior = arrayNumeros[key];
    }
  }
  for (let chave in arrayNumeros) {
    if (arrayNumeros[chave] === maior) {
      repeticao += 1;
    }
  }
  console.log(maior);
  return repeticao;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0;
  let distanciaCat2 = 0;
  let retorno;
  if (mouse > cat1) {
    distanciaCat1 = mouse - cat1;
  } else {
    distanciaCat1 = cat1 - mouse;
  }
  if (mouse > cat2) {
    distanciaCat2 = mouse - cat2;
  } else {
    distanciaCat2 = cat2 - mouse;
  }
  if (distanciaCat1 > distanciaCat2) {
    retorno = "cat2";
  } else if (distanciaCat2 > distanciaCat1) {
    retorno = "cat1";
  } else {
    retorno = "os gatos trombam e o rato foge";
  }
  return retorno
}

// Desafio 8
function fizzBuzz(arrayDeNumeros) {
  let saida = [];
  for (let key in arrayDeNumeros) {
    if (arrayDeNumeros[key] % 3 == 0 && arrayDeNumeros[key] % 5 == 0) {
      saida.push("fizzBuzz");
    } else if (arrayDeNumeros[key] % 3 == 0) {
      saida.push("fizz");
    } else if (arrayDeNumeros[key] % 5 == 0) {
      saida.push("buzz");
    } else {
      saida.push("bug!")
    }
  }
  return saida;
}

// Desafio 9
function encode(texto) {
  let textoCodificado = [];
  let stringCodificada = "";
  for (let key in texto) {
    if (texto[key] == "a") {
      textoCodificado.push("1");
    } else if (texto[key] == "e") {
      textoCodificado.push("2");
    } else if (texto[key] == "i") {
      textoCodificado.push("3");
    } else if (texto[key] == "o") {
      textoCodificado.push("4");
    } else if (texto[key] == "u") {
      textoCodificado.push("5");
    } else {
      textoCodificado.push(texto[key]);
    }
  }
  for (let key in textoCodificado) {
    stringCodificada += textoCodificado[key];
  }
  return console.log(stringCodificada);
}
function decode(textoEmbaralhado) {
  let textoCorreto = [];
  let stringCorreta = "";
  for (let key in textoEmbaralhado) {
    if (textoEmbaralhado[key] == "1") {
      textoCorreto.push("a");
    } else if (textoEmbaralhado[key] == "2") {
      textoCorreto.push("e");
    } else if (textoEmbaralhado[key] == "3") {
      textoCorreto.push("i");
    } else if (textoEmbaralhado[key] == "4") {
      textoCorreto.push("o");
    } else if (textoEmbaralhado[key] == "5") {
      textoCorreto.push("u");
    } else {
      textoCorreto.push(textoEmbaralhado[key]);
    }
  }
  for (let key in textoCorreto) {
    stringCorreta += textoCorreto[key];
  }
  return console.log(stringCorreta);
}
encode("");
decode("");
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
