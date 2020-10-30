// Desafio 1 :)
function compareTrue(test1, test2) {
  let answer = false;
  if (test1 && test2) {
    answer = true;
  }
  return answer;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(name) {
  return `${name[name.length-1]}, ${name[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let sorted = numbers.sort((a,b) => a - b),
    counter = 1;
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    if (sorted[i] === sorted[i - 1]) {
      counter += 1;
    } else {
      break;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(cat1 - mouse), 
    dist2 = Math.abs(cat2 - mouse);
  if (dist1 < dist2) {
    return 'cat1';
  } else if (dist2 < dist1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      result[i] = 'fizzBuzz';
    } else if (numbers[i] % 3 === 0) {
      result[i] = 'fizz';
    } else if (numbers[i] % 5 === 0) {
      result[i] = 'buzz';
    } else {
      result[i] = 'bug!';
    }
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  let phraseArray = phrase.split('');
  for (let i = 0; i < phraseArray.length; i += 1) {
    switch (phraseArray[i]) {
      case 'a':
        phraseArray[i] = '1';
        break;
      case 'e':
        phraseArray[i] = '2';
        break;
      case 'i':
        phraseArray[i] = '3';
        break;
      case 'o':
        phraseArray[i] = '4';
        break;
      case 'u':
        phraseArray[i] = '5';
        break;
      default:
        break
    }
  }
  return phraseArray.join('');
}
function decode(toDecode) {
  let toDecodeArray = toDecode.split('');
  for (let i = 0; i < toDecodeArray.length; i += 1) {
    switch (toDecodeArray[i]) {
      case '1':
        toDecodeArray[i] = 'a';
        break;
      case '2':
        toDecodeArray[i] = 'e';
        break;
      case '3':
        toDecodeArray[i] = 'i';
        break;
      case '4':
        toDecodeArray[i] = 'o';
        break;
      case '5':
        toDecodeArray[i] = 'u';
        break;
      default:
        break;
    }
  }
  return toDecodeArray.join('');
}

// Desafio 10
function techList(techs, name) {
  let sortedTechs = techs.sort();
  for (let i = 0; i < sortedTechs.length; i += 1) {
    sortedTechs[i] = {
      tech: sortedTechs[i],
      name,
    }
  }
  if (techs.length === 0) {
    return 'Vazio!';
  }
  return sortedTechs;
}
console.log(techList(['samba', 'html', 'css', 'rock'], 'danone'));
// Pré 11
function arrCounter(arr) {
  let counter = {};
  for (const element of arr) {
    if (!counter[element]) {
      counter[element] = 1;
    } else {
      counter[element] += 1;
    }
  }
  return counter;
}
function appearMoreThan(obj, num) {
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i += 1) {
    if (values[i] > num) {
      return true;
    }
  }
  return false;
}
function anyMinorOrGretear(arr, minor, greater) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] < minor || arr[i] > greater) {
      return true;
    }
  }
  return false;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  const moreThan2 = appearMoreThan(arrCounter(numbers), 2),
    minorGreater = anyMinorOrGretear(numbers, 0, 9);
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (moreThan2 || minorGreater) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const add = {
    position: [0, 3, 9],
    string: ['(', ') ', '-'],
  }
  for (let i = 0; i < add.position.length; i += 1) {
    numbers.splice(add.position[i], 0, add.string[i]);
  }
  return numbers.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineB + lineA)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(strg) {
  let arr = strg.split(/[^0-9]*/), 
    sum = 0;
  arr.pop();
  for (let i = 0; i < arr.length; i += 1) {
    sum += parseInt(arr[i], 10);
  }
  if (sum <= 0) {
    return 'bebeu nada?';
  }
  if (sum === 1) {
    return (`${sum} copo de água`);
  }
  return (`${sum} copos de água`);
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
