// Desafio 1

function compareTrue(valorA, valorB) {
  // seu código aqui
  if (valorA === true && valorB === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(mySentence) {
  // seu código aqui
  let resultado = mySentence.split(" ");
  return resultado;
}

// Desafio 4
function concatName(parametro) {
  // seu código aqui
  return `${parametro[parametro.length - 1]}, ${parametro[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPoints = wins * 3 + ties * 1;
  return totalPoints;
}

// Desafio 6
function highestCount(numeros) {
  // seu código aqui

  let valorMaisAlto = Math.max(...numeros);
  var quantidade = 0;
  for (let index = 0; index <= numeros.length; index += 1) {
    if (numeros[index] == valorMaisAlto) quantidade += 1;
  }
  return quantidade;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);

  if (distanciaCat1 > distanciaCat2) {
    resposta = "cat2";
  } else if (distanciaCat1 === distanciaCat2) {
    resposta = "os gatos trombam e o rato foge";
  } else {
    resposta = "cat1";
  }
  return resposta;
}

// Desafio 8
function fizzBuzz(entradaDoUsuario) {
  // seu código aqui
  var meuArray = [];

  for (let i = 0; i < entradaDoUsuario.length; i++) {
    if (entradaDoUsuario[i] % 3 == 0 && entradaDoUsuario[i] % 5 == 0) {
      meuArray.push("fizzBuzz");
    } else if (entradaDoUsuario[i] % 3 == 0) {
      meuArray.push("fizz");
    } else if (entradaDoUsuario[i] % 5 == 0) {
      meuArray.push("buzz");
    } else {
      meuArray.push("bug!");
    }
  }
  return meuArray;
}

// Desafio 9
function encode(myString) {
  // seu código aqui

  let meuArray = "";

  for (let i = 0; i < myString.length; i += 1) {
    if (myString[i] == "a") {
      meuArray += "1";
    } else if (myString[i] === "e") {
      meuArray += "2";
    } else if (myString[i] === "i") {
      meuArray += "3";
    } else if (myString[i] === "o") {
      meuArray += "4";
    } else if (myString[i] === "u") {
      meuArray += "5";
    } else {
      meuArray += myString[i];
    }
  }
  return meuArray;
}

function decode(myString) {
  let meuArray = "";

  for (let i = 0; i < myString.length; i += 1) {
    if (myString[i] == "1") {
      meuArray += "a";
    } else if (myString[i] == "2") {
      meuArray += "e";
    } else if (myString[i] == "3") {
      meuArray += "i";
    } else if (myString[i] == "4") {
      meuArray += "o";
    } else if (myString[i] == "5") {
      meuArray += "u";
    } else {
      meuArray += myString[i];
    }
  }
  return meuArray;
}

// Desafio 10
// seu código aqui
function techList(lista, name) {
  let minhaLista = [];

  //-------Condições-----
  if (lista == 0) {
    return "Vazio!";
  }
  //------Código------
  const listaOrdenada = lista.sort();

  for (let indice = 0; indice < lista.length; indice += 1) {
    minhaLista.push({
      tech: lista[indice],
      name: name,
    });
  }

  //------Saída------
  return minhaLista;
}

// Desafio 11
function generatePhoneNumber(numero) {
  let gatilho1 = false;
  let gatilho2 = false;

  if (numero.length != 11) {
    return "Array com tamanho incorreto.";
  }

  for (let j = 0; j < numero.length; j++) {
    let contador = 0;
    if (numero[j] < 0 || numero[j] > 9) {
      gatilho1 = true;
    }

    for (let i = 0; i < numero.length; i++) {
      if (numero[j] === numero[i]) {
        contador += 1;
      }
      if (contador >= 3) {
        gatilho2 = true;
      }
    }
  }
  if (gatilho1 === true || gatilho2 === true) {
    return "não é possível gerar um número de telefone com esses valores";
  } else {
    var numeroFormatado = [];
    numeroFormatado = [
      "(",
      numero[0],
      numero[1],
      ")",
      " ",
      numero[2],
      numero[3],
      numero[4],
      numero[5],
      numero[6],
      "-",
      numero[7],
      numero[8],
      numero[9],
      numero[10],
    ];
    return numeroFormatado.join("");
  }
}

// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  // seu código aqui
  if (ladoA < ladoB + ladoC && ladoA > Math.abs(ladoB - ladoC)) {
    return true;
  } else {
    return false;
  }
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
