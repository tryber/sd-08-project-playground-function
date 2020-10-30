// Desafio 1
function compareTrue(pA, pB) {
  if (pA === true && pB === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {;
  return string.split(' ');
}

// Desafio 4
function concatName(fullName) {
  return `${fullName[fullName.length - 1]}, ${fullName[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}

// Desafio 6
function highestCount(arr) {
  let numberOfReptitions = 0;
  let biggestValue = Math.max(...arr);
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === biggestValue) {
      numberOfReptitions += 1;
    }
  }
  return numberOfReptitions;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = cat1 - mouse;
  let dist1 = Math.abs(distCat1);
  let distCat2 = cat2 - mouse;
  let dist2 = Math.abs(distCat2);

  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge'
  }
  if (dist1 < dist2) {
    return 'cat1'
  }
  return 'cat2'
}

// Desafio 8
function fizzBuzz(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i] % 3 === 0) && (arr[i] % 5 !== 0)) {
      newArray.push('fizz');
    } else if ((arr[i] % 3 !== 0) && (arr[i] % 5 === 0)) {
      newArray.push('buzz');
    } else if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) {
      newArray.push('fizzBuzz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === 'a') {
      newString += '1';
    } else if (string[i] === 'e') {
      newString += '2';
    } else if (string[i] === 'i') {
      newString += '3';
    } else if (string[i] === 'o') {
      newString += '4';
    } else if (string[i] === 'u') {
      newString += '5';
    } else {
      newString += string[i];
    }
  }

  return newString;
}

function decode(string) {
  let newString = '';

  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '1' || string[i] === 1) {
      newString += 'a';
    } else if (string[i] === '2' || string[i] === 2) {
      newString += 'e';
    } else if (string[i] === '3' || string[i] === 3) {
      newString += 'i';
    } else if (string[i] === '4' || string[i] === 4) {
      newString += 'o';
    } else if (string[i] === '5' || string[i] === 5) {
      newString += 'u';
    } else {
      newString += string[i];
    }
  }

  return newString;
}

// Desafio 10
function techList(tecnologias, name) {
  let obj = [];

  for (let i = 0; i < tecnologias.length; i += 1) {
    Obj.push({
      tech: tecnologias[i],
      name
    })
  }
  obj = obj.sort((a, b) => {
    return (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0);
  });

  return obj.length > 0 ? obj : 'Vazio!';
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
