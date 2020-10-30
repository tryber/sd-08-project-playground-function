// Guilherme Ribeiro
// Desafio 1
function compareTrue(a,b) {
  if (a && b == true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base*height)/2);
}

// Desafio 3
function splitSentence(frase) {
  let string = "";
  let array = [];

  for (i=0 ; i<frase.length ; i+=1) {
    if (frase[i] === " ") {
      array.push(string);
      string = "";
    } else {
      string = string + frase[i];
    }
  }

  array.push(string);

  return array;
}

// Desafio 4
function concatName(name) {
  let string = '';
  
  string = string + name[name.length-1] + ', ' + name[0];

  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins*3+ties);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let maior = arrayNumbers[0];
  let cont = 0;

  for (i=0;i<arrayNumbers.length;i+=1) {
    if (arrayNumbers[i] > maior) {
      maior = arrayNumbers[i];
      cont = 1;
    } else if (arrayNumbers[i] == maior) {
      cont = cont + 1;
    }
  }

  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = 0;
  let dist2 = 0;

  if (mouse > cat1) {
    dist1 = mouse - cat1;
  } else {
    dist1 = cat1 - mouse;
  }

  if (mouse > cat2) {
    dist2 = mouse - cat2;
  } else {
    dist2 = cat2 - mouse;
  }

  if (dist1 == dist2) {
    return 'os gatos trombam e o rato foge';
  } else if (dist1 < dist2) {
    return 'cat1';
  } else {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayStrings = [];

  for (i=0;i<arrayNumbers.length;i+=1) {
    if (arrayNumbers[i] % 3 == 0) {
      if (arrayNumbers[i] % 5 == 0) {
        arrayStrings.push('fizzBuzz');//fizzBuzz
      } else {
        arrayStrings.push('fizz');//fizz
      }
    } else {
      if (arrayNumbers[i] % 5 == 0) {
        arrayStrings.push('buzz');//buzz
      } else {
        arrayStrings.push('bug!');//bug!
      }
    }
  }

  return arrayStrings;
}

// Desafio 9
function encode(string) {
  let frase = '';
  let letra = '';

  for (i=0;i<string.length;i+=1) {
    letra = string[i];
    switch (letra) {
      case 'a':
        frase = frase + '1';
        break;
      case 'e':
        frase = frase + '2';
        break;
      case 'i':
        frase = frase + '3';
        break;
      case 'o':
        frase = frase + '4';
        break;
      case 'u':
        frase = frase + '5';
        break;
      default:
        frase = frase + letra;
        break;
    }
  }

  return frase;
}

function decode(string) {
  let frase = '';
  let letra = '';

  for (i=0;i<string.length;i+=1) {
    letra = string[i];
    switch (letra) {
      case '1':
        frase = frase + 'a';
        break;
      case '2':
        frase = frase + 'e';
        break;
      case '3':
        frase = frase + 'i';
        break;
      case '4':
        frase = frase + 'o';
        break;
      case '5':
        frase = frase + 'u';
        break;
      default:
        frase = frase + letra;
        break;
    }
  }

  return frase;
}

// Desafio 10
function techList(List, name) {
  List = List.sort();
  let orderVector = [];
  let objList = {
    tech: List,
    name: name
  };

  if (List == ''){
    return 'Vazio!';
  } else {
    for (i=0;i<List.length;i+=1) {
      let element = {
        tech: objList.tech[i],
        name: name
      };
      orderVector.push(element);
    }

    return orderVector;
  }
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let countNumbers = [0,0,0,0,0,0,0,0,0,0];
  let ddd = '';
  let first = '';
  let second = '';

  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (i=0;i<arrayNumbers.length;i+=1) {
    if (arrayNumbers[i] < 0 || arrayNumbers[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      for (j=0;j<countNumbers.length;j+=1) {
        if (arrayNumbers[i] == j) {
          countNumbers[j] += 1;
        }
      }
    }
  }

  for (i=0;i<countNumbers.length;i+=1) {
    if (countNumbers[i] > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  for (i=0;i<arrayNumbers.length;i+=1) {
    if (i < 2) {
      ddd = ddd + arrayNumbers[i];
    } else if (i < 7) {
      first = first + arrayNumbers[i];
    } else {
      second = second + arrayNumbers[i];
    }
  }
  let number = '(' + ddd + ') ' + first + '-' + second;

  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = lineA + lineB;
  let sumBC = lineB + lineC;
  let sumCA = lineC + lineA;
  let difAB = lineA - lineB;
  let difBC = lineB - lineC;
  let difCA = lineC - lineA;

  if ((lineA < sumBC && lineA > Math.abs(difBC)) || (lineB < sumCA && lineB > Math.abs(difCA)) || (lineC < sumAB && lineC > Math.abs(difAB))) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(bebidas) {
  let copos = 0;

  for (i=0;i<bebidas.length;i+=1) {
    if (bebidas[i] == 1) {
      copos += 1;
    } else if (bebidas[i] == 2) {
      copos += 2;
    } else if (bebidas[i] == 3) {
      copos += 3;
    } else if (bebidas[i] == 4) {
      copos += 4;
    } else if (bebidas[i] == 5) {
      copos += 5;
    } else if (bebidas[i] == 6) {
      copos += 6;
    } else if (bebidas[i] == 7) {
      copos += 7;
    } else if (bebidas[i] == 8) {
      copos += 8;
    } else if (bebidas[i] == 9) {
      copos += 9;
    }
  }

  let frase = copos + ' copos de água';

  return frase;
}
console.log(hydrate('5 bebidas doidas, 9 cervejas, 2 pingas, 5 tequilas'));


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
