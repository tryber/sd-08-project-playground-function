// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, height) {
  return (base*height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(array) {
  let saida = array[array.length - 1] + ", " + array[0];
  return saida;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  array.sort(function(a, b) {return a-b})
  let cont = 0;

  for (let i = array.length - 1; i >= 0; i -= 1) {
    if (i == array.length - 1) {
      cont += 1;
    } else if (array[i] == array[i+1]) {
      cont += 1;
    } else {
      break;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let d1 = Math.abs(mouse - cat1);
  let d2 = Math.abs(mouse - cat2);

  if (d1 == d2) {
    return "os gatos trombam e o rato foge";
  } else {
    return d1 > d2 ? "cat2" : "cat1";
  };
}

// Desafio 8
function fizzBuzz(array) {
  let saida = [];

  for (let i in array) {
    let x = array[i]
    if (x % 3 == 0 && x % 5 == 0) {
      saida.push("fizzBuzz");
    } else if (x % 3 == 0) {
      saida.push("fizz");
    } else if (x % 5 == 0) {
      saida.push("buzz");
    } else {
      saida.push("bug!");
    };
  };
  return saida;
}

// Desafio 9
function encode(string) {
  let dicionario = {
    "a": 1,
    "e": 2,
    "i": 3,
    "o": 4,
    "u": 5
  };

  let saida = "";

  for (let i in string) {
    if (dicionario[string[i]] == undefined) {
      saida += string[i];
    } else {
      saida += dicionario[string[i]];
    };
  };
  return saida;
}

function decode(string) {
  let dicionario = {
    "1": "a",
    "2": "e",
    "3": "i",
    "4": "o",
    "5": "u"
  };

  let saida = "";

  for (let i in string) {
    let x = string[i];
    if (dicionario[x] == undefined) {
      saida += x;
    } else {
      saida += dicionario[x];
    };
  ;}
  return saida;
}

// Desafio 10
function techList(array, name) {
  let saida = [];

  if (array.length == 0) {
    return "Vazio!"
  }

  for (let i in array) {
    let obj = {};
    obj.tech = array[i];
    obj.name = name;
    saida.push(obj);
  };

  return saida;
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }

  let saida = "(";

  for (let i in array) {
    if (i == 2) {
      saida += ") ";
    } else if (i == 7) {
      saida += "-";
    }
    saida += array[i];
  };
  return saida;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA > lineB + lineC || lineA < Math.abs(lineB - lineC)) {
    return false;
  } else if (lineB > lineA + lineC || lineB < Math.abs(lineA - lineC)) {
    return false;
  } else if (lineC > lineA + lineB || lineC < Math.abs(lineA - lineB)) {
    return false;
  } else {
    return true;
  };
}

// Desafio 13
function hydrate(string) {
  let dados = string.split(" ").sort();
  let saida = 0;

  for (let i in dados) {
    if (!isNaN(Number(dados[i]))) {
      saida += Number(dados[i])
    }
  };

  return saida;
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
