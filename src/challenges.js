// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 === true && boolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(array) {
  let biggest = array[0];
  let repeat = 0;
  for (let number of array) {
    if (number > biggest) {
      biggest = number;
    }
  }
  for (let index of array) {
    if (biggest === index) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCats = Math.abs(cat1 - mouse) - Math.abs(cat2 - mouse);
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  if (distCats === 0) {
    return 'os gatos trombam e o rato foge';
  }
  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzArr = [];
  for (let index in array) {
    if ((array[index] % 3 === 0) && (array[index] % 5 === 0)) {
      fizzBuzzArr[index] = 'fizzBuzz';
    } else if (array[index] % 3 === 0) {
      fizzBuzzArr[index] = 'fizz';
    } else if (array[index] % 5 === 0) {
      fizzBuzzArr[index] = 'buzz';
    } else {
      fizzBuzzArr[index] = 'bug!';
    }
  }
  return fizzBuzzArr;
}

// Desafio 9
function encode(string) {
  let phrase = '';
  let vogals = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  }
  for (let letter of string) {
    if (vogals[letter] === undefined) {
      phrase += letter;
    } else {
      phrase += vogals[letter];
    }
  }
  return phrase
}

function decode(string) {
  let phrase = '';
  let numbers = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  }
  for (let character of string) {
    if (numbers[character] === undefined) {
      phrase += character;
    } else {
      phrase += numbers[character];
    }
  }
  return phrase
}

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return "Vazio!"
  }
  let orderedArr = tech.sort();
  let techLearn = [];
  for (let techName of orderedArr) {
    techLearn.push({
      tech: techName,
      name: name,
    });
  }
  return techLearn;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (validation(numbers) != true) {
    return validation(numbers);
  }
  return formatingPhoneNumber(numbers);
}

function validation(numbers) {
  if (numbers.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let values of numbers) {
    let repeat = 0;
    for (let index of numbers) {
      if (index === values) {
        repeat += 1;
      }
      if (index < 0 || index > 9 || repeat >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return true;
}

function formatingPhoneNumber(numbers) {
  let prefix = '';  
  let ramal = '';
  let final = '';
  for (let num = 0; num < 2; num += 1) {
    prefix += numbers[num];
  }
  for (let num = 2; num < 7; num += 1) {
    ramal += numbers[num];
  }
  for (let num = 7; num < 11; num += 1) {
    final += numbers[num];
  }
  return `(${prefix}) ${ramal}-${final}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineA > Math.abs(lineB - lineC))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(ticket) {
  let split = ticket.split("")
  let cupOfWater = 0;
  for (let char of split) {
    let number = parseInt(char);
    //verifica se 'number' é um NaN ou não. Se não for adiciona o número de bebidas ao número de copos d'água
    if (isNaN(number) === false) {
      cupOfWater += number;
    }
  }
  if (cupOfWater === 1) {
    return '1 copo de água'
  }
  return `${cupOfWater} copos de água`;
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
