// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
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
function splitSentence(string) {
  return string.split(" ");
}

// Desafio 4
function concatName(arr) {
  return arr.slice(-1) + ", " + arr.slice(0, 1);
}

// Desafio 5
function footballPoints(wins, ties) {
  let total = 0;
  while (wins > 0) {
    total += 3;
    wins--;
  }
  while (ties > 0) {
    total += 1;
    ties--;
  }
  return total;
}

// Desafio 6
function highestCount(arr) {
  let largest = 0;
  let number = 0;
  arr.forEach(value => {
    if (value > largest) largest = value;
  });
  arr.forEach(value => value == largest && number++);
  return number;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  return Math.abs(cat1 - mouse) == Math.abs(cat2 - mouse) ? "os gatos trombam e o rato foge" : Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse) ? "cat2" : "cat1";
}

// Desafio 8
function fizzBuzz(arr) {
  let result = [];
  arr.forEach(value => {
    if ((value % 3 == 0) && (value % 5 == 0)) {
      result.push("fizzBuzz");
    } else if ((value % 3 == 0)) {
      result.push("fizz");
    } else if ((value % 5 == 0)) {
      result.push("buzz");
    } else {
      result.push("bug!");
    }
  })
  return result;
}

// Desafio 9
function encode(string) {
  let code = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5
  }
  string = string.split("");
  string.forEach((letter, index) => Object.keys(code).forEach(key => {
    if (letter == key) string[index] = code[key]
  }));
  return string.join("");
}
function decode(string) {
  let code = {
    1: "a",
    2: "e",
    3: "i",
    4: "o",
    5: "u"
  }
  string = string.split("");
  string.forEach((letter, index) => Object.keys(code).forEach(key => {
    if (letter == key) string[index] = code[key]
  }));
  return string.join("");
}

// Desafio 10
function techList(techs = [], name) {
  let result = [];
  techs.sort().forEach(tech => {
    result.push({ tech: tech, name: name })
  })
  return (result == "") ? "Vazio!" : result;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  let counter = 0;
  let result = [];
  numbers.forEach((number, index) => {
    if (index == 0) {
      result.push("(");
      result.push(number);
    } else if (index == 2) {
      result.push(")");
      result.push(number);
    } else if (index == 7) {
      result.push("-");
      result.push(number);
    } else {
      result.push(number);
    }
  })
  return result.join("");
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sum = 0;
  let subtract = 0;
  let flag = true;

  let sides = Object.values(arguments);
  sides.forEach(side1 => {
    sides.forEach(side2 => {
      if (!(side1 == side2)) {
        sum += parseInt(side2);
        subtract -= parseInt(side2);
      }
    })
    if (sum < parseInt(side1)) {
      flag = false;
    }
    if (subtract > parseInt(side1)) {
      flag = false;
    }
    sum = 0;
    subtract = 0;
  })
  return flag;
}

// Desafio 13
function hydrate(string) {
  let counter = 0;
  string = string.split("");
  string.forEach(letter => {
    if (letter.match(/\d/)) counter += parseInt(letter);
  });
  return counter;
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
