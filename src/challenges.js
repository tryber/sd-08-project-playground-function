// Arquivos de desafios | Mário Pardo

// Desafio 1
function compareTrue(bool1, bool2) {
  return bool1 && bool2
}

// Desafio 2
function calcArea(base, heigth) {
  let area = (base * heigth) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  let arrayString = [];
  let string = '';
  for (let index in sentence){
    if (sentence[index] !== ' ') {
      string += sentence[index];
    } else {
      arrayString.push(string);
      string = '';
    }
  }
  arrayString.push(string)
  return arrayString
}
console.log(splitSentence('Go Trybe'))

// Desafio 4
function concatName(arrayName) {
  let nome = `${arrayName[arrayName.length - 1]}, ${arrayName[0]}`;
  return nome;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  let maior = array[0];
  let count = 0;
  for (let index in array){
    if (array[index] > maior) {
      maior = array[index];
    }
  }
  for (let indice in array) {
    if (array[indice] === maior) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let winner;
  if (distCat1 < distCat2) {
    winner = 'cat1'
  }
  else if (distCat2 < distCat1) {
    winner = 'cat2'
  } else {
    winner = 'os gatos trombam e o rato foge'
  }
  return winner;
}

// Desafio 8
function fizzBuzz(array) {
  let arrayFizzBuzz = [];
  for (index in array) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz')
    }
    else if (array[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz')
    }
    else if (array[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz')
    } else {
      arrayFizzBuzz.push('bug!')
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(string) {
  let novaString = "";
  for (index in string){
    if (string[index] === 'a') {
      novaString += '1';
    }
    else if (string[index] === 'e') {
      novaString += '2';
    }
    else if (string[index] === 'i') {
      novaString += '3';
    }
    else if (string[index] === 'o') {
      novaString += '4';
    }
    else if (string[index] === 'u') {
      novaString += '5';
    } else {
      novaString += string[index];
    }
  }
  return novaString;
}
console.log(encode("Mario"));
function decode(string) {
  let novaString = "";
  for (index in string){
    if (string[index] === '1') {
      novaString += 'a';
    }
    else if (string[index] === '2') {
      novaString += 'e';
    }
    else if (string[index] === '3') {
      novaString += 'i';
    }
    else if (string[index] === '4') {
      novaString += 'o';
    }
    else if (string[index] === '5') {
      novaString += 'u';
    } else {
      novaString += string[index];
    }
  }
  return novaString;
}
console.log(decode('M1r34'))


// Desafio 10
function techList(arrayTech, nome) {
  let arrayObjetos = [];
  let sortArrayTech = arrayTech.sort();
  for (let index = 0; index < arrayTech.length; index += 1) {
    arrayObjetos[index] = {
      tech: sortArrayTech[index],
      name: nome
    };
  }
  if (arrayTech.length > 0) {
   return arrayObjetos;
  } else {
    return 'Vazio!'
  }
}

// Desafio 11
function generatePhoneNumber(arrayNumber) {
  let resultado;
  let arrayCount = [];
  let count = 0;
  let verifyQuantity;
  // Conta a quantidade de vezes que um número aparece na arrayNumber.
  for (let index = 0; index < arrayNumber.length; index += 1) {
    for (let index2 = 0; index2 < arrayNumber.length; index2 += 1) {
      if (arrayNumber[index2] === arrayNumber[index]) {
        count += 1;
      }
    }
    arrayCount[index] = count;
    count = 0;
  }
  for (index = 0; index < arrayCount.length; index += 1) {
    if (arrayCount[index] >= 3) {
      verifyQuantity = true;
      break;
    } else {
      verifyQuantity = false;
    }
  }
  // Verifica se algum número é maior que 9 ou menor que 0.
  let verifyLimit;
  for (let index = 0; index < arrayNumber.length;  index += 1) {
    if (arrayNumber[index] > 9 || arrayNumber[index] < 0) {
      verifyLimit = true;
      break;
    } else {
      verifyLimit = false
    }
  }

  // Verifica se arrayNumber tem tamanho menor que 11 ou maior que 11.
  if (arrayNumber.length > 11 || arrayNumber.length < 11) {
    resultado = 'Array com tamanho incorreto.'
  }

  else if (verifyLimit === true || verifyQuantity === true) {
    resultado = 'não é possível gerar um número de telefone com esses valores'
  } else {
    resultado = `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`
  }
  return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condition;
  if ((lineB + lineC) > lineA && Math.abs(lineB - lineC) < lineA) {
    condition = true;
  }
  else if ((lineA + lineC) > lineB && Math.abs(lineA - lineC) < lineB) {
    condition = true;
  }
  else if ((lineB + lineA) > lineC && Math.abs(lineB - lineA) < lineC) {
    condition = true;
  } else {
    condition = false;
  }
  return condition;
}

// Desafio 13
function hydrate(bebibas) {
  // Encontrei a solução para retirar números de string nesse post: https://pt.stackoverflow.com/questions/3719/como-obter-apenas-os-n%C3%BAmeros-de-uma-string-em-javascript
  let quatityDrink = bebibas.split(/\D+/);
  let agua = 0;
  for (let index = 0; index < quatityDrink.length - 1; index += 1) {
    agua += parseInt(quatityDrink[index], 10);
  }
  if (agua < 2) {
    return '1 copo de água'
  } else {
    return `${agua} copos de água`
  }
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