// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  return valor1 == true && valor2 == true ? true : false;
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
  arrayString = palavra.split(" ");
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  // seu código aqui
  let index = arrayString.length - 1;
  let stringPalavras = arrayString[index] + ', ' + arrayString[0];

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
function highestCount(arrayNumbers) {
  // seu código aqui
  let maior = 0;
  let repete = 0;

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] > maior) {
      maior = arrayNumbers[x];
    }
  }

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] == maior) {
      repete += 1;
    }
  }
  return repete;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist_cat1_mouse = Math.abs(cat1 - mouse);
  let dist_cat2_mouse = Math.abs(cat2 - mouse);

  if (dist_cat1_mouse == dist_cat2_mouse) {
    return 'os gatos trombam e o rato foge';
  } else if (dist_cat1_mouse < dist_cat2_mouse) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {

  let newArray = [];

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] % 3 == 0 && arrayNumbers[x] % 5 == 0) {
      newArray.push("fizzBuzz");
    } else if (arrayNumbers[x] % 3 == 0) {
      newArray.push("fizz");
    } else if (arrayNumbers[x] % 5 == 0) {
      newArray.push("buzz");
    } else {
      newArray.push("bug!")
    }
  }
  return newArray;
}

// Desafio 9
function encode(palavra) {
  // seu código aqui
  let nova_palavra = palavra.replace(/a/g, '1');
  nova_palavra = nova_palavra.replace(/e/g, '2');
  nova_palavra = nova_palavra.replace(/i/g, '3');
  nova_palavra = nova_palavra.replace(/o/g, '4');
  nova_palavra = nova_palavra.replace(/u/g, '5');

  return nova_palavra;
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
    return 'vazio';
  }

  arrayTech.sort();
  for (let x = 0; x < arrayTech.length; x += 1) {
    let objNovo = new Object;
    objNovo.tech = arrayTech[x];
    objNovo.name = name;

    hardSkills.push(objNovo);
  }
  return hardSkills;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  // seu código aqui
  let phoneNumber = "";

  if (arrayNumbers.length != 11) {
    return "Array com tamanho incorreto.";
  }

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (arrayNumbers[x] < 0 || arrayNumbers[x] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    let contador = 0;
    for (let y = 1; y < arrayNumbers.length; y += 1) {
      if (arrayNumbers[x] == arrayNumbers[y] && x != y - 1) {
        contador += 1;
      }
    }
    if (contador >= 3) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }

  for (let x = 0; x < arrayNumbers.length; x += 1) {
    if (x == 0) {
      phoneNumber += '(' + arrayNumbers[x];
    } else if (x == 1) {
      phoneNumber += arrayNumbers[x] + ') ';
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
