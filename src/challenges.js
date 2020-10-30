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

  for (let num = 0; num < a.length; num += 1) {
    if (a[num] > maj) {
      maj = a[num];
    }
  }
  for (let num = 0; num < a.length; num += 1) {
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
  } else if (dist1 > dist2) {
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
      }
      resp.push('fizz');
    } else if (a[i] % 5 === 0) {
      resp.push('buzz');
    } else {
      resp.push('bug!');
    }
  }
  return resp;
}

// Desafio 9
function encode(a) {
  let base = a.split('');
  let resp = [];

  for (let i = 0; i < base.length; i += 1) {
    switch (base[i]) {
      case 'a':
        resp.push('1');
        break;
      case 'e':
        resp.push('2');
        break;
      case 'i':
        resp.push('3');
        break;
      case 'o':
        resp.push('4');
        break;
      case 'u':
        resp.push('5');
        break;
      default:
        resp.push(base[i]);
        break;
    }
  }

  return resp.join('');
}
function decode(a) {
  let base = a.split('');
  let resp = [];

  for (let i = 0; i < base.length; i += 1) {
    switch (base[i]) {
      case '1':
        resp.push('a');
        break;
      case '2':
        resp.push('e');
        break;
      case '3':
        resp.push('i');
        break;
      case '4':
        resp.push('o');
        break;
      case '5':
        resp.push('u');
        break;
      default:
        resp.push(base[i]);
        break;
    }
  }

  return resp.join('');
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

    if (i > 0 && a[i] === a[i - 1]) {
      count += 1;
    } else {
      count = 1;
    }

    if (count === 3) {
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

  if (!verifyArray(a)) {
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

  if (negAB > lineC || negBC > lineA || negCA > lineB || AB < lineC || BC < lineA || CA < lineB) {
    return false;
  }

  return true;
}

// Desafio 13
function hydrate(a) {
  let match = a.match(/(\d+)/g);
  let resp = 0;

  for (let i = 0; i < match.length; i += 1) {
    resp += parseInt(match[i]);
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
console.log(fizzBuzz([9, 25]));
console.log(encode('Hi, guys, whats up?'));
console.log(decode(encode('Hi, guys, whats up?')));
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 19, 1, 1]));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 9, 9, 9, 1, 1]));
console.log(triangleCheck(10,12,11));
console.log(triangleCheck(1,1,11));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
