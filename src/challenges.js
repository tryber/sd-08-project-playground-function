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

function hC(a, b) {
  let rep = 0;
  for (let i = 0; i < a.length; i += 1) {
    if(a[i] === b) {
      rep += 1;
    }
  }

  return rep;
}

// Desafio 6
function highestCount(a) {
  let maj = -100000;

  for (let num = 0; num < a.length; num += 1) {
    if (a[num] > maj) {
      maj = a[num];
    }
  }

  return hC(a, maj);
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
  } else if (dist1 > dist2) {
    return 'cat2';
  }

  return 'cat1';
}

function fB(a) {
  if(a % 3 === 0 && a % 5 === 0) {
    return 'fizzBuzz';
  }

  if (a % 3 === 0) {
    return 'fizz';
  }

  if (a % 5 === 0) {
    return 'buzz';
  }

  return 'bug!';
}

// Desafio 8
function fizzBuzz(a) {
  let resp = [];
  for (let i = 0; i < a.length; i += 1) {
    resp.push(fB(a[i]));
  }
  return resp;
}

function encDecHand(a) {
  switch (a) {
    case 'a':
      return '1';
    case 'e':
      return '2';
    case 'i':
      return '3';
    case 'o':
      return '4';
    case 'u':
      return '5';
    case '1':
      return 'a';
    case '2':
      return 'e';
    case '3':
      return 'i';
    case '4':
      return 'o';
    case '5':
      return 'u';
    default:
      return a;
  }
}

// Desafio 9
function encode(a) {
  let base = a.split('');
  let resp = [];

  for (let i = 0; i < base.length; i += 1) {
    resp.push(encDecHand(base[i]));
  }

  return resp.join('');
}
function decode(a) {
  let base = a.split('');
  let ex = [];

  for (let i = 0; i < base.length; i += 1) {
    ex.push(encDecHand(base[i]));
  }

  return ex.join('');
}

// Desafio 10
function techList(a, name) {
  if (a.length === 0) {
    return 'Vazio!';
  }
  let base = a.sort();
  let resp = [];

  for (let i = 0; i < base.length; i += 1) {
    resp.push({ tech: base[i], name: name });
  }
  return resp;
}

function verifyArray(a) {
  let count = 1;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] < 0 || a[i] > 9) {
      return false;
    }
  }
  return true;
}
function verifyRep (a) {
  let b = a.sort();
  let c = 1;
  for (let i = 1; i < b.length; i += 1) {
    if (b[i] === b[i - 1]) {
      c += 1;
    } else {
      c = 1;
    }

    if (c === 3) {
      return false;
    }
  }

  return true;
}
// Desafio 11
function generatePhoneNumber(a) {
  if (a.length != 11) {
    return 'Array com tamanho incorreto.';
  }

  if (!verifyArray(a) || !verifyRep(a)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let resp = ['('];
  for (let i = 0; i < a.length; i += 1) {
    switch (i) {
      case 2:
        resp.push(') ');
        resp.push(a[i]);
        break;
      case 7:
        resp.push('-');
        resp.push(a[i]);
        break;
      default:
        resp.push(a[i]);
        break;
    }
  }
  
  return resp.join('');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let AB = lineA + lineB;
  let BC = lineB + lineC;
  let CA = lineC + lineA;

  let negAB = Math.abs(lineA - lineB);
  let negBC = Math.abs(lineB - lineC);
  let negCA = Math.abs(lineC - lineA);

  if (negAB > lineC || negBC > lineA) {
    return false;
  }

  if (negCA > lineB || AB < lineC) {
    return false;
  }

  if (BC < lineA || CA < lineB) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate(a) {
  let match = a.match(/(\d+)/g);
  let resp = 0;

  for (let i = 0; i < match.length; i += 1) {
    resp += parseInt(match[i], 10);
  }

  if (resp === 1) {
    return '1 copo de água';
  }
  return `${resp} copos de água`;
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

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 1, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9]));
