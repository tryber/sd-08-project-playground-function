// Desafio 1
function compareTrue(x, y) {
  let result = false;
  if (x == true && y == true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;

}

// Desafio 3
function splitSentence(word) {
  let result = word.split(" ");

  return result;
}

// Desafio 4
function concatName(word) {
  // seu código aqui
  let result = word[word.length - 1] + ", " + word[0]
  return result;

}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = 0,
    i = 0;
  if (wins > 0) {
    result += wins * 3;
  }
  if (ties > 0) {
    result += ties
  }
  return result;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let i = 0,
    result = 0,
    biggerIndex = 0;
  for (i = 0; i < arrayNumbers.length - 1; i += 1) {
    if (arrayNumbers[i] > arrayNumbers[biggerIndex]) {
      biggerIndex = i;
    }
  }

  for (i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] == arrayNumbers[biggerIndex]) {
      result += 1;
    }
  }

  return result;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let rangeCat1 = Math.abs(cat1 - mouse)
  let rangeCat2 = Math.abs(cat2 - mouse)
  if (rangeCat1 == rangeCat2) {
    result = "os gatos trombam e o rato foge"
  } else if (rangeCat1 < rangeCat2) {
    result = "cat1"
  } else(result = "cat2")

  return result;
}


// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let i = 0,
    result = [];
  for (i = 0; i < arrayNumbers.length; i += 1) {
    result[i] = "";

    if (arrayNumbers[i] % 3 == 0 && arrayNumbers[i] % 5 == 0) {
      result[i] = "fizzBuzz"
    } else if (arrayNumbers[i] % 3 == 0) {
      result[i] += "fizz"
    } else if (arrayNumbers[i] % 5 == 0) {
      result[i] += "buzz"
    } else(result[i] = "bug!")

  }
  return result;
}

// Desafio 9
function encode(pass) {
  // seu código aqui

}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
// Desafio 1
function compareTrue(x, y) {
  let result = false;
  if (x == true && y == true) {
    result = true;
  }
  return result;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;

}

// Desafio 3
function splitSentence(word) {
  let result = word.split(" ");

  return result;
}

// Desafio 4
function concatName(word) {
  // seu código aqui
  let result = word[word.length - 1] + ", " + word[0]
  return result;

}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let result = 0,
    i = 0;
  if (wins > 0) {
    result += wins * 3;
  }
  if (ties > 0) {
    result += ties
  }
  return result;
}

// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let i = 0,
    result = 0,
    biggerIndex = 0;
  for (i = 0; i < arrayNumbers.length - 1; i += 1) {
    if (arrayNumbers[i] > arrayNumbers[biggerIndex]) {
      biggerIndex = i;
    }
  }

  for (i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] == arrayNumbers[biggerIndex]) {
      result += 1;
    }
  }

  return result;
}


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let rangeCat1 = Math.abs(cat1 - mouse)
  let rangeCat2 = Math.abs(cat2 - mouse)
  if (rangeCat1 == rangeCat2) {
    result = "os gatos trombam e o rato foge"
  } else if (rangeCat1 < rangeCat2) {
    result = "cat1"
  } else(result = "cat2")

  return result;
}


// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let i = 0,
    result = [];
  for (i = 0; i < arrayNumbers.length; i += 1) {
    result[i] = "";

    if (arrayNumbers[i] % 3 == 0 && arrayNumbers[i] % 5 == 0) {
      result[i] = "fizzBuzz"
    } else if (arrayNumbers[i] % 3 == 0) {
      result[i] += "fizz"
    } else if (arrayNumbers[i] % 5 == 0) {
      result[i] += "buzz"
    } else(result[i] = "bug!")

  }
  return result;
}

// Desafio 9
function encode(pass) {
  // seu código aqui

}

function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
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
