// Desafio 1
function compareTrue(var1, var2) {
  if (var1 === true && var2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = Math.abs(mouse - cat1),
    distancia2 = Math.abs(mouse - cat2);
  if (distancia1 === distancia2) {
    return 'os gatos trombam e o rato foge'
  } else if (distancia1 < distancia2) {
    return 'cat1'
  }
  return 'cat2'
}

// Desafio 8
function fizzBuzz(arr) {
  let arrResposta = []
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
      arrResposta.push('fizzBuzz')
    } else if (arr[i] % 3 === 0) {
      arrResposta.push('fizz')
    } else if (arr[i] % 5 === 0) {
      arrResposta.push('buzz')
    } else {
      arrResposta.push('bug!')
    }
  }
  return arrResposta;
}

// Desafio 9
function encode(word) {
  let newWord = ""
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === "a") {
      newWord += '1';
    } else if (word[i] === "e") {
      newWord += '2';
    } else if (word[i] === "i") {
      newWord += '3';
    } else if (word[i] === "o") {
      newWord += '4';
    } else if (word[i] === "u") {
      newWord += '5';
    } else {
      newWord += word[i];
    }
  }
  return newWord;
}
function decode(word) {
  let newWord = ""
  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === "1") {
      newWord += 'a';
    } else if (word[i] === "2") {
      newWord += 'e';
    } else if (word[i] === "3") {
      newWord += 'i';
    } else if (word[i] === "4") {
      newWord += 'o';
    } else if (word[i] === "5") {
      newWord += 'u';
    } else {
      newWord += word[i];
    }
  }
  return newWord;
}

// Desafio 10
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!'
  }
  tech.sort()
  let arr = []
  for (let i = 0; i < tech.length; i += 1) {
    arr.push({ tech: tech[i], name: name })
  }
  return arr;
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
