// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(names) {
  const last = names.length - 1;
  return `${names[last]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numbers) {
  let counter = {};

  for (let i = 0; i < numbers.length; i++) {
    let cur = numbers[i];
    if (!counter[cur]) {
      counter[cur] = 1;
    } else {
      counter[cur] += 1;
    }
  }

  let highest = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
 
  return counter[highest];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1 ) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    let cur = numbers[i];
    let str = '';

    if (cur % 3 == 0) {
      str += 'fizz';
    }

    if (cur % 5 == 0) {
      str += 'buzz'
    };

    if (str === 'fizzbuzz') {
      str = 'fizzBuzz';
    }

    if (str === '') {
      str = 'bug!';
    }

    result.push(str);
  }
  return result;
}

const vowels = {
  'a': 1,
  'e': 2,
  'i': 3,
  'o': 4,
  'u': 5
};

// Desafio 9
function encode(str) {
  let result = '';
  for (let i = 0, len = str.length; i < len; i++) {
    const letter = str[i];
    const index = letter.toLowerCase();
    if (!vowels[index]) {
      result += letter;
    } else {
      result += vowels[index];
    }
  }
  return result;
}

function decode(str) {
  let result = '';
  for (let i = 0, len = str.length; i < len; i++) {
    let code = str[i];
    let letter = null;
    for (let cur in vowels) {
      if (vowels[cur] == code) {
        letter = cur;
        break;
      }
    }
    if (letter) {
      result += letter;
    } else {
      result += code;
    }
  }
  return result;
}

// Desafio 10
function techList(tecnologias, name) {
  let lista = [];

  for (let tecnologia of tecnologias) {
    lista.push({
      tech: tecnologia,
      name
    })
  }

  lista = lista.sort((a, b) => {
    if (a.tech < b.tech) {
      return -1;
    } else if (a.tech > b.tech) {
      return 1;
    } else {
      return 0;
    }
  });

  return lista.length > 0 ? lista : 'Vazio!';
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
