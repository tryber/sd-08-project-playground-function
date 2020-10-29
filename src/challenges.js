// Desafio 1
function compareTrue(bool1, bool2) {
  if ( bool1 === true && bool2 === true ) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  return phrase.split(' ')
}

// Desafio 4
function concatName(name) {
  return(`${name[name.length - 1]}, ${name[0]}`);
}

// Desafio 5
function footballPoints( wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maxRepeat = 0;
  let maxNumber = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[j] > maxNumber) {
      maxNumber = numbers[j];
    }
  }
  for (let i = 0; i < numbers.length; i++) {
    if (maxNumber === numbers[i]) {
        maxRepeat++;
      }
  }
  return maxRepeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  result = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      result.push("fizzBuzz")
    } else if (array[i] % 3 === 0) {
      result.push("fizz")
    } else if (array[i] % 5 === 0) {
      result.push("buzz")
    } else {
      result.push("bug!")
    }
  }
  return result;
}

// Desafio 9
function encode(phrase) {
  let translate = {
    a : 1,
    e : 2,
    i : 3,
    o : 4,
    u : 5,
  }
  for (let i = 0; i < phrase.length; i++) {
    for (let key in translate) {
    if (phrase[i] == key) {
    phrase = phrase.replace(phrase[i], translate[key]);
    }
    }
  }
  return phrase
}

function decode(code) {
  let translate = {
    1 : "a",
    2 : "e",
    3 : "i",
    4 : "o",
    5 : "u",
  }
  for (let i = 0; i < code.length; i++) {
    for (let key in translate) {
    if (code[i] == key) {
    code = code.replace(code[i], translate[key]);
    }
    }
  }
  return code
}

// Desafio 10
function techList(array, name) {
  array.sort();
  let list = [];
  for (let i = 0; i < array.length; i++) {
    let temp = {};
    temp.tech = array[i];
    temp.name = name;
    list.push(temp);
  }
  if (array == []) {
    return "Vazio!"
  } else {
  return list;
  }
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let maxRepeat = 0;
  for (let j = 0; j < numbers.length; j++) {
    let maxRepeatTest = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[j] == numbers[i]) {
        maxRepeatTest++;
      }
      if (maxRepeatTest > maxRepeat) {
        maxRepeat = maxRepeatTest;
      }
    }
  }

  for (let key in numbers) {
    if (numbers[key] > 9 || numbers[key] < 0) {
      maxRepeat = 3;
    }
  }

  if (numbers.length > 11) {
    return "Array com tamanho incorreto."
  } else if (maxRepeat >= 3) {
    return "não é possível gerar um número de telefone com esses valores."
  } else {
  return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`
  }
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
