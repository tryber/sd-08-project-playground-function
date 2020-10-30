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
function techList(arrayList, name) {
  let array = [];
  let object = {
    tech: arrayList,
    name: name
  }

  for (i=0;i<arrayList.length;i+=1) {
    object.tech = arrayList[i];
    console.log(object);
  }
  return array;
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
