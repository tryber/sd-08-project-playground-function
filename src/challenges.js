// Desafio 1
function compareTrue(status1, status2) {
  return status1 && status2;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayStrig) {
  return `${arrayStrig[arrayStrig.length - 1]}, ${arrayStrig[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let max = Math.max.apply(null, array);
  let pos = array.indexOf(max);
  let count = 0;
  for (let index = pos; index < array.length; index += 1) {
    if (max === array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(cat1 - mouse);
  let distanciaCat2 = Math.abs(cat2 - mouse);
  if (distanciaCat1 < distanciaCat2) {
    return 'cat1';
  } else if (distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge'
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  array.forEach(element => {
    if (element % 3 === 0 && element % 5 === 0) {
      newArray.push('fizzBuzz');
    } else if (element % 3 === 0) {
      newArray.push('fizz');
    } else if (element % 5 === 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  });
  return newArray;
}  
  
// Desafio 9
function encode(text) {
  let codec = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let arrayString = text.split('');
  let newText = '';
  for (let index = 0; index < text.length; index += 1) {
    for (let key in codec) {
      if (key === arrayString[index]) {
        arrayString[index] = codec[key];
      }
    }
    newText += arrayString[index];
  }
  return newText;
}

function decode(text) {
  let codec = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let arrayString = text.split('');
  let newText = '';
  for (let index = 0; index < text.length; index += 1) {
    for (let key in codec) {
      if (codec[key] === arrayString[index]) {
        arrayString[index] = key;
      }
    }
    newText += arrayString[index];
  }
  return newText;
}

// Desafio 10
function techList(arrayTec, name) {
  if (arrayTec.length === 0) {
    return 'Vazio!';
  }
  let newList = [];
  let arraySort = arrayTec.sort();
  for (let index = 0; index < arraySort.length; index += 1) {
    let object = {
      tech: '',
      name: '',
    };
    object.tech = arraySort[index];
    object.name = name;
    newList.push(object);
  }
  return newList;
}

// Desafio 11
function generatePhoneNumber(arrayPhone) {
  let phoneNumber;
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let indice = 0; indice < arrayPhone.length; indice += 1) {
    let contEvent = 0;
    for (let pesquisa = 0; pesquisa < arrayPhone.length; pesquisa += 1) {
      if (arrayPhone[indice] === arrayPhone[pesquisa]) {
        contEvent += 1;
      }
    }
    if (arrayPhone[indice] < 0 || arrayPhone[indice] > 9 || contEvent >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (indice === 0) {
      phoneNumber = `(${arrayPhone[indice]}`;
    } else if (indice === 1) {
      phoneNumber += `${arrayPhone[indice]}) `;
    } else if (indice === 6) {
      phoneNumber += `${arrayPhone[indice]}-`;
    } else {
      phoneNumber += `${arrayPhone[indice]}`;
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let condicao1 = (lineA + lineB) > lineC;
  let condicao2 = (lineA + lineC) > lineB;
  let condicao3 = (lineB + lineC) > lineA;
  let condicao4 = Math.abs(lineA - lineB) < lineC;
  let condicao5 = Math.abs(lineA - lineC) < lineB;
  let condicao6 = Math.abs(lineB - lineC) < lineA;
  if (condicao1 && condicao2 && condicao3) {
    if (condicao4 && condicao5 && condicao6) {
      return true;
    }
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let cupsWater = 0;
  let numbers = string.match(regex);
  for (let index = 0; index < numbers.length; index += 1) {
    cupsWater += parseInt(numbers[index], 10);
  }
  if (cupsWater === 1) {
    return `${cupsWater} copo de água`;
  }
  return `${cupsWater} copos de água`;
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
