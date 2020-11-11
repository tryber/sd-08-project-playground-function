// Desafio 1
function compareTrue(x, y) {
  if (x && y === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  let separador = frase.split(' ')
  return separador;
}

// Desafio 4
function concatName(nome) {
  return nome[nome.length - 1] + ', ' + nome[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(num) {
// para fazer esse codigo utilizei a fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max  
  let maiorNumero = Math.max(...num);
  let contagem = 0;
  for (let n = 0; n < num.length; n += 1) {
    if (num[n] === maiorNumero) {
      contagem += 1;
    }
  }
  return contagem;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
// para fazer esse código consultei essa fonte: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/abs  
  let diffCat1 = Math.abs(mouse - cat1);
  let diffCat2 = Math.abs(mouse - cat2);
  if (diffCat1 === diffCat2) {
    return 'os gatos trombam e o rato foge'    
  } else if (diffCat1 < diffCat2) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}

// Desafio 8
function fizzBuzz(num) {
  let result = [];
  for (let n = 0; n < num.length; n += 1) {
    if (num[n] % 3 === 0 && num[n] % 5 === 0) {
      result[n] = 'fizzBuzz';
    } else if (num[n] % 5 === 0) {
      result[n] = 'buzz';
    } else if (num[n] % 3 === 0) {
      result[n] = 'fizz';
    } else {
      result[n] = 'bug!';
    }
  }
  return result;
}

// Desafio 9
function encode(string) {
  let i;
    let encrypt = '';
  for (i of string){
    if (i === 'a') {
      encrypt += '1';
    } else if (i === 'e') {
      encrypt += '2';
    } else if (i === 'i') {
      encrypt += '3';
    } else if (i === 'o') {
      encrypt += '4';
    } else if (i === 'u') {
      encrypt += '5';
    } else { 
      encrypt += i;
    }
  }
  return encrypt
}
function decode(string) {
  let i;
    let decrypt = '';
  for (i of string) {
    if (i === '1') {
      decrypt += 'a';
    } else if (i === '2') {
      decrypt += 'e';
    } else if (i === '3') {
      decrypt += 'i';
    } else if (i === '4') {
      decrypt += 'o';
    } else if (i === '5') {
      decrypt += 'u';
    } else { 
      decrypt += i;
    }
  }
  return decrypt
}


// Desafio 10
function techList(x,y) {
  let lista = []
  let sorter = x.sort()
  if (x.length === 0) {
    return 'Vazio!'
  } else {
    for (let i = 0; i < sorter.length; i+= 1) {
      let object = {};
      object['tech'] = sorter[i];
      object['name'] = y;
      lista.push(object)
    }
  }
  return lista
}

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  for (let i = 0; i < array.length; i += 1) {
    let count = 0;
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let x = 0; x < array.length; x += 1) {
      if (array[x] === array[i]) {
        count += 1;
      } 
      if (count >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return '(' + array[0] + array [1] + ')' + ' ' + array[2] + array[3] + array[4] + array[5] + array[6] + '-' + array[7] + array[8] + array[9] + array[10]
}

// Desafio 12
function triangleCheck(a,b,c) {
  let check;
  if (a < (b+c) && a > Math.abs(b-c) || b < (a+c) && b > Math.abs(a-c) || c < (b+a) && c > Math.abs(b-a)) {
    check = true;
  } else {
    check = false;
  }
  return check
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
