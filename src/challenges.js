// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui
  if (bool1 === true && bool2 === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = 0;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  let separate = [];
  separate = string.split(' ');
  return separate;
}

// Desafio 4
function concatName(string) {
  // seu código aqui
  let first = string[0];
  let last = string[string.length - 1];
  let reverse = last + ', ' + first;
  return reverse;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  wins = wins * 3;
  ties = ties * 1;
  points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maior = 0;
  let cont = 0;
  for (let x = 1; x < numbers.length; x++) {
    if (numbers[x] > maior) {
      maior = numbers[x];
    }
  }
  for (let x = 0; x < numbers.length; x++) {
    if (numbers[x] == maior) {
      cont++;
    }
  }
  return cont;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let location1 = 0;
  let location2 = 0;
  location1 = Math.abs(cat1 - mouse);
  location2 = Math.abs(cat2 - mouse);

  if (location1 < location2) {
    return 'cat1';
  } else if (location1 > location2) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  // seu código aqui
  let newArray = [];
  for (let x in array) {
    if (array[x] % 3 == 0 && array[x] % 5 == 0) {
      newArray.push('fizzBuzz');
    } else if (array[x] % 3 == 0) {
      newArray.push('fizz');
    } else if (array[x] % 5 == 0) {
      newArray.push('buzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  // seu código aqui
  let vowels = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5" };
  let result = "";
  result = string.replace(/[aeiou]/gi, v => vowels[v]);
  return result
}
function decode(reverse) {
  // seu código aqui
  let vowels = { "1": "a", "2": "e", "3": "i", "4": "o", "5": "u" };
  let result = reverse.replace(/[12345]/gi, y => vowels[y]);
  return result;
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let ordenado = tech.sort();
  let array = [];

  if (tech.length === 0) {
    return 'Vazio!'
  }

  for (let x in ordenado) {
    array.push({ tech: ordenado[x], name: name });
  }
  return array;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
  let = fone = '';
  if (numberPhone.length > 11) {
    return ('Array com tamanho incorreto.');
  }
  for (let x = 0; x < numberPhone.length; x += 1) {
    let cont = 0;
    if (numberPhone[x] < 0 || numberPhone[x] > 9) {
      return ("não é possível gerar um número de telefone com esses valores");
    }
    for (let y = 0; y < numberPhone.length; y += 1) {
      if (numberPhone[x] === numberPhone[y]) {
        cont += 1;
      }
      if (cont > 3) {
        return ('não é possível gerar um número de telefone com esses valores');
      }
    }
  }
  for (let i in numberPhone) {
    if (i == 0) {
      fone += '(' + numberPhone[0];
    }
    if (i == 1) {
      fone += numberPhone[1] + ')'
    }
    if (i == 7) {
      fone += '-' + numberPhone[7]
    }
    if (i == 2 || i == 3 || i == 4 || i == 5 || i == 6 || i == 8 || i == 9 || i == 10) {
      fone += numberPhone[i];
    }
  }
  
  return fone;
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
