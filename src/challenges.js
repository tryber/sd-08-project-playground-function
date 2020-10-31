// Desafio 1
function compareTrue(status1, status2) {
  return status1 && status2;
  }

// Desafio 2
function calcArea(base, height) {
  let area = (base * height)/2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(' ');
  return array;
}

// Desafio 4
function concatName(arrayStrig) {
  return `${arrayStrig[arrayStrig.length-1]}, ${arrayStrig[0]}`
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (3 * wins) + (1 * ties);
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let max = 0;
  for(let fixed = 0; fixed < array.length; fixed += 1) {
    for(let find = fixed + 1; find < array.length; find += 1) {
      if(array[fixed] < array[find]) {
        max = array[find];
        fixed = find-1;
        find = array.length;
      }
      else if (find == array.length-1) {
        max = array[fixed];
        fixed = array.length;
      }
    }
  }
  let pos = array.indexOf(max);
  let count = 0;
  for(let index = pos; index < array.length; index += 1) {
    if(max == array[index]) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = 0;
  let distanciaCat2  = 0;
  if(cat1 > mouse) {
    distanciaCat1 = cat1 - mouse;
  }
  else {
    distanciaCat1 = mouse - cat1;
  }
  if(cat2 > mouse) {
    distanciaCat2 = cat2 - mouse;
  }
  else {
    distanciaCat2 = mouse - cat2;
  }
  if(distanciaCat1 < distanciaCat2) {
    return 'cat1';
  }
  else if(distanciaCat2 < distanciaCat1) {
    return 'cat2';
  }
  else {
    return 'os gatos trombam e o rato foge'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for(let index in array) {
    if(array[index]%3 == 0 && array[index]%5 == 0) {
      newArray.push('fizzBuzz');
    }
    else if(array[index]%3 == 0) {
      newArray.push('fizz');
    }
    else if(array[index]%5 == 0) {
      newArray.push('buzz');
    }
    else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(text) { //hi there!
  codec = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  let arrayString = text.split('');
  let newText = '';
  for(let index = 0; index < text.length; index += 1) {
    for(let key in codec) {
      if(key == arrayString[index]) {
        arrayString[index] = codec[key];
      }
    }
    newText += arrayString[index];
  }
  return newText;
}

function decode(text) {
  codec = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  };
  let arrayString = text.split('');
  let newText = '';
  for(let index = 0; index < text.length; index += 1) {
    for(let key in codec) {
      if(codec[key] == arrayString[index]) {
        arrayString[index] = key;
      }
    }
    newText += arrayString[index];
  }
  return newText;
}

// Desafio 10
function techList(arrayTec, name) {
  if(arrayTec.length == 0 || arrayTec == null) {
    return 'Vazio!';
  }
  newList = [];
  let arraySort = arrayTec.sort();
  for(let index in arraySort) {
    let object = {
      tech: '',
      name: ''
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
  if(arrayPhone.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for(let index in arrayPhone) {
    let contEvent = 0;
    for(let i = 0; i < arrayPhone.length; i += 1) {
      if(arrayPhone[index] == arrayPhone[i]) {
        contEvent += 1;
      }
    }
    if(arrayPhone[index] < 0 || arrayPhone[index] > 9 || contEvent >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if(index == 0) {
      phoneNumber = '(' + arrayPhone[index];
    }
    else if(index == 1) {
      phoneNumber += arrayPhone[index] + ') ';
    }
    else if(index == 6) {
      phoneNumber += arrayPhone[index] + '-';
    }
    else {
      phoneNumber += arrayPhone[index];
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
  if(condicao1 && condicao2 && condicao3 && condicao4 && condicao5 && condicao6) {
    return true
  }
  else {
    return false
  }
}

// Desafio 13
function hydrate(string) {
  let regex = /\d+/g;
  let cupsWater = 0;
  let numbers = string.match(regex);
  for(let index in numbers) {
    cupsWater += parseInt(numbers[index]);
  }
  if(cupsWater == 1) {
    return `${cupsWater} copo de água`;
  }
  else {
    return `${cupsWater} copos de água`;
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
