// Desafio 1
function compareTrue(boolean1, boolean2) {
  if (boolean1 && boolean2 === true) {
    return true;
  }
  return false;
}
// Ok!

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
// Ok!

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}
// Ok! (?)

// Desafio 4
function concatName(array) {
  let concat1 = [array.pop(), array[0]];
  return concat1.join(', ');
}
// Ok!

// Desafio 5
function footballPoints(win, ties) {
  let wins = win * 3;

  return wins + ties;
}
// Ok!

// Desafio 6
function highestCount(arrayNumber) {
  let totalLength = [];
  let maiorNumero = [0];
  for (let i1 = 1; i1 < arrayNumber.length; i1 += 1) {
    if (arrayNumber[i1] >= maiorNumero) {
      maiorNumero = arrayNumber[i1];
    }
  }
  for (let i2 = 0; i2 < arrayNumber.length; i2 += 1) {
    if (maiorNumero === arrayNumber[i2]) {
      totalLength.push(arrayNumber[i2]);
    }
  }
  return totalLength.length;
}
// Ok, but a little too complex ¬¬!

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let result;
  if (distCat1 < distCat2) {
    result = 'cat1';
  } else if (distCat1 > distCat2) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
// Ok!

// Desafio 8
function fizzBuzz(array) {
  let fizzBuzzing = [];
  let fizzBuzz15 = 'fizzBuzz';
  let fizz3 = 'fizz';
  let buzz5 = 'buzz';
  let bug = 'bug!';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 15 === 0) {
      fizzBuzzing.push(fizzBuzz15);
    } else if (array[i] % 3 === 0) {
      fizzBuzzing.push(fizz3);
    } else if (array[i] % 5 === 0) {
      fizzBuzzing.push(buzz5);
    } else {
      fizzBuzzing.push(bug);
    }
  }
  return fizzBuzzing;
}
// Ok!!

// Desafio 9
function encode(string) {
  let str = string.split('');
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === 'a') {
      str[i] = '1';
    }
    if (str[i] === 'e') {
      str[i] = '2';
    }
    if (str[i] === 'i') {
      str[i] = '3';
    }
    if (str[i] === 'o') {
      str[i] = '4';
    }
    if (str[i] === 'u') {
      str[i] = '5';
    }
  }
  return str.join('');
}
// Ok!
function decode(string) {
  let str = string.split('');
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === '1') {
      str[i] = 'a';
    }
    if (str[i] === '2') {
      str[i] = 'e';
    }
    if (str[i] === '3') {
      str[i] = 'i';
    }
    if (str[i] === '4') {
      str[i] = 'o';
    }
    if (str[i] === '5') {
      str[i] = 'u';
    }
  }
  return str.join('');
}
// Ok!

// Desafio 10
function techList(techs, name) {
  let techOrd = techs.sort();
  let object = [];
  if (techOrd.length === 0) {
    object = 'Vazio!';
  } else {
    for (let i = 0; i < techOrd.length; i += 1) {
      object.push({ tech: techOrd[i], name: name });
    }
  }
  return object;
}
// Ok! 

// Desafio 11
// function generatePhoneNumber(numbers) {
//   let tel
//   if (phoneCheckQtd(numbers) === 'tamanho errado') {
// tel = "Array com tamanho incorreto."
//} else if (phoneCheckQtd(numbers) === 'numeros errados' || phoneCheckRepeat === 'numeros repetidos demais' {
//   tel = não é possível gerar um número de telefone com esses valores"
//   } else if () {
//}
//   return tel
// }

function phoneCheckQtd(numbers) {
  let phoneNumbers
  if (numbers.length != 11) {
    phoneNumbers = 'tamanho errado'
  } 
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < 0 || numbers[i] > 9) {
    phoneNumbers = 'numeros errados'
  }
  return phoneNumbers
  }

function phoneCheckRepeat(numbers)  
  let sortNumbers = numbers.sort();
  let totalRepeated = [];
  for (let i = 0; i < sortNumbers.length; i += 1) {
    if (sortNumbers[i+1] === sortNumbers[i] || sortNumbers[i] === sortNumbers[i-1]) {
      totalRepeated.push(sortNumbers[i]) 
    }
  }
  if (totalRepeated.length >= 3) {
    console.log(sortNumbers)
    console.log(totalRepeated)
    console.log(totalRepeated.length)
    phoneNumbers = false
  }
  return phoneNumbers
}
let phone = [1, 5, 4, 4, 9, 5, 6, 8, 9, 6, 1, 3];
console.log(phoneCheck(phone))
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result;
  if (
    Math.abs(
      lineA > lineB - lineC && lineB > lineA - lineC && lineC > lineA - lineB
    )
  ) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
// Ok!

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
};
