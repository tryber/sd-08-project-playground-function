// Desafio 1
function compareTrue(a, b) {
  return a && b;
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
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(array) {
  let maior = 0;
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === maior) {
      count++;
    }
    if (array[i] > maior) {
      maior = array[i];
      count = 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dis1 = Math.abs(mouse - cat1);
  let dis2 = Math.abs(mouse - cat2);
  if (dis1 === dis2) return "os gatos trombam e o rato foge";
  return dis1 > dis2 ? "cat2" : "cat1";
}

// Desafio 8
function fizzBuzz(array) {
  let result = array.map((e) => {
    if (e % 3 === 0 && e % 5 === 0) return "fizzBuzz";
    if (e % 3 === 0) return "fizz";
    if (e % 5 === 0) return "buzz";
    return "bug!";
  });
  return result;
}

// Desafio 9
function encode(string) {
  return string
    .split("")
    .map((e) => {
      return "aeiou".split("").indexOf(e) > -1
        ? "aeiou".split("").indexOf(e) + 1
        : e;
    })
    .join("");
}

function decode(string) {
  return string
    .split("")
    .map((e) => {
      return Number.isInteger(parseInt(e))
        ? "aeiou".split("")[parseInt(e) - 1]
        : e;
    })
    .join("");
}

// Desafio 10
function techList(array, name) {
  if (array.length === 0) return "Vazio!";
  array.sort();
  return array.map((e) => {
    return (temp = {
      tech: e,
      name: name,
    });
  });
}

// Desafio 11 //(12) 34567-8901
function generatePhoneNumber(a) {
  if (a.length != 11) return "Array com tamanho incorreto.";
  if (highestCount1(a) >= 3)
    return "não é possível gerar um número de telefone com esses valores";
  for (let i in a) {
    if (a[i] < 0 || a[i] > 9)
      return "não é possível gerar um número de telefone com esses valores";
  }
  return (
    "(" +
    a[0] +
    "" +
    a[1] +
    ") " +
    a[2] +
    "" +
    a[3] +
    "" +
    a[4] +
    "" +
    a[5] +
    "" +
    a[6] +
    "-" +
    a[7] +
    "" +
    a[8] +
    "" +
    a[9] +
    "" +
    a[10]
  );
}

function highestCount1(array) {
  let maxcount = 0;
  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        count++;
      }
    }
    if (count > maxcount) {
      maxcount = count;
    }
  }
  return maxcount;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (
    lineA < lineB + lineC &&
    lineA > Math.abs(lineB - lineC) &&
    lineB < lineA + lineC &&
    lineB > Math.abs(lineA - lineC) &&
    lineC < lineB + lineA &&
    lineC > Math.abs(lineB - lineA)
  );
}

// Desafio 13
function hydrate(s) {
  let count = 0;
  s.split("").forEach((e) => {
    if (Number.isInteger(parseInt(e))) {
      count += parseInt(e);
    }
  });
  return count === 1 ? count + " copo de água" : count + " copos de água";
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
