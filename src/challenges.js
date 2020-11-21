// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 && valor2) return true;
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(string) {
  return string.split(" ");
}
// Desafio 4
function concatName(array) {
  let first = [...array].shift();
  let last = [...array].pop();
  return `${last}, ${first}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let vitoria = wins * 3;
  let empate = ties * 1;
  let total = vitoria + empate;
  return total;
}

// Desafio 6  -   Colega Ediberto ajudou neste raciocínio.
function highestCount(numeros) {
  return repeat(numeros, maiorNumeroArray(numeros));
}

function maiorNumeroArray(array) {
  let maiorNumero = 0;
  for (let index in array) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }
  return maiorNumero;
}

function repeat(array, maiorNumero) {
  let numeroRepete = 0;
  for (let index in array) {
    if (array[index] == maiorNumero) {
      numeroRepete += 1;
    }
  }
  return numeroRepete;
}

// Desafio 7
function catAndMouse(mouse, positionCat1, positionCat2) {
  let cat1 = Math.abs(positionCat1 - mouse);
  let cat2 = Math.abs(positionCat2 - mouse);
  if (cat1 < cat2) {
    return "cat1";
  } else if (cat2 < cat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
// Desafio 8
function fizzBuzz(array) {
  let valorResult = [];

  for (let index in array) {
    if (array[index] % 3 == 0 && array[index] % 5 == 0) {
      valorResult.push("fizzBuzz");
    } else if (array[index] % 3 == 0) {
      valorResult.push("fizz");
    } else if (array[index] % 5 == 0) {
      valorResult.push("buzz");
    } else {
      valorResult.push("bug!");
    }
  }
  return valorResult;
}

// Desafio 9
function encode(string) {
  string = string.split('')
  for(let index = 0; index < string.length; index += 1) {
    if(string[index] === 'a') {
      string[index] = 1;
    }else if(string[index] === 'e') {
      string[index] = 2;
    }else if(string[index] === 'i') {
      string[index] = 3;
    }else if(string[index] === 'o') {
      string[index] = 4;
    }else if(string[index] === 'u') {
      string[index] = 5;
    }
  }
  string = string.join('');
  return string;
}

function decode(string) {
  string = string.split('')
  for(let index = 0; index < string.length; index += 1) {
    if(string[index] === '1') {
      string[index] = 'a';
    }else if(string[index] === '2') {
      string[index] = 'e';
    }else if(string[index] === '3') {
      string[index] = 'i';
    }else if(string[index] === '4') {
      string[index] = 'o';
    }else if(string[index] === '5') {
      string[index] = 'u';
    }
  }
  string = string.join('');
  return string;
}

// Desafio 10
function techList(array, name) {
  if(array.length == 0) {
    return 'Vazio!';
  }
  array.sort();
  let techName = [];
  for(let index = 0; index < array.length; index += 1) {
    let list = {
      tech: array[index],
      name: name,
    }
    techName.push(list);
  }
  return techName;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineA + lineB && lineC > Math.abs(lineA - lineB));
}

function hydrate(string) {
  let sum = 0;
  string = string.split('');
  for(let index = 0; index < string.length; index += 1) {
    if(Number.isInteger(parseInt(string[index]))) {
      sum += +string[index];
    }
  }
return `${sum} copo de água`;
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
