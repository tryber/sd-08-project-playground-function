// Desafio 1
function compareTrue(a, b) {
  return (a && b);
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(a) {
  return a.split(' ');
}

// Desafio 4
function concatName(name) {
  let resp = `${name[name.length - 1]}, ${name[0]}`;
  return resp;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(a) {
  let maj = -100000;
  let rep = 0;

  for (let num in a) {
    if (a[num] > maj) {
      maj = a[num];
    }
  }
  for (let num in a) {
    if (a[num] === maj) {
      rep += 1;
    }
  }

  return rep;
}

function calcDist(a, b) {
  return Math.abs(b - a);
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = calcDist(mouse, cat1);
  let dist2 = calcDist(mouse, cat2);

  if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
  else if (dist1 > dist2) {
    return 'cat2';
  }

  return 'cat1';
}

// Desafio 8
function fizzBuzz(a) {
  let resp = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 3 === 0) {
      if (a[i] % 5 === 0) {
        resp.push('fizzBuzz');
        continue;
      }
      resp.push('fizz');
      continue;
    }
    else if (a[i] % 5 === 0) {
      resp.push('fizz');
      continue;
    }
    resp.push('bug!');
    continue;
  }
  return resp;
}

// Desafio 9
function encode(a) {
  let base = a.split('');
  let resp = [];

  for (let i = 0; i < base.length; i += 1) {
    if (base[i] === 'a') {
      resp.push('1');
    }
    else if (base[i] === 'e') {
      resp.push('2');
    }
    else if (base[i] === 'i') {
      resp.push('3');
    }
    else if (base[i] === 'o') {
      resp.push('4');
    }
    else if (base[i] === 'u') {
      resp.push('5');
    }
    else {
      resp.push(base[i]);
    }
  }

  return resp.join('');
}
function decode(a) {
  let base = a.split('');
  let resp = [];

  for (let i = 0; i < base.length; i += 1) {
    if (base[i] === '1') {
      resp.push('a');
    }
    else if (base[i] === '2') {
      resp.push('e');
    }
    else if (base[i] === '3') {
      resp.push('i');
    }
    else if (base[i] === '4') {
      resp.push('o');
    }
    else if (base[i] === '5') {
      resp.push('u');
    }
    else {
      resp.push(base[i]);
    }
  }

  return resp.join('');
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

console.log(compareTrue(true, false));
console.log(compareTrue(true, true));
console.log(calcArea(12, 4));
console.log(splitSentence('The Best Game Dev'));
console.log(concatName(['Natanael', 'Enéas', 'da', 'Silva', 'Neto']));
console.log(footballPoints(3, 2));
console.log(highestCount([1, 2, 9, 9, 15, 15, 15]));
console.log(catAndMouse(0, 2, 3));
console.log(catAndMouse(0, -4, 3));
console.log(catAndMouse(0, -3, 3));
console.log(fizzBuzz([2, 3, 15, 5, 12, 11]));
console.log(encode('Hi, guys, whats up?'));
console.log(decode(encode('Hi, guys, whats up?')));