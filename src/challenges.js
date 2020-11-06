// >>----------> Desafio 1
function compareTrue(primeiroBoleano, segundoBolenao) {
  if (primeiroBoleano === true && segundoBolenao === true) return true;
  else if (primeiroBoleano === false || segundoBolenao === false) return false;
}
// let a = true, b = false;
// console.log(compareTrue(a, b));

// >>----------> Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(2, 6));

// >>----------> Desafio 3
function splitSentence(string) {
  let retorno = [];
  let pegaArray = '';

  for (let indice = 0; indice <= string.length; indice += 1) {
    if (string[indice] === ' ' || indice === string.length) {
      retorno.push(pegaArray);
      pegaArray = '';
    } else if (string[indice] !== ' ') {
      pegaArray += string[indice];
    }
  }
  return retorno;
}
// console.log(splitSentence('wr ra'));

// >>-----------> Desafio 4
function concatName(theArray) {
  return `${theArray[theArray.length - 1]}, ${theArray[0]}`;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// >>----------> Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// console.log(footballPoints(1, 3));

// >>----------> Desafio 6
function highestCount(entrada) {
  let maior = Math.max.apply(Math, entrada);
  let repeticoes = 0;

  for (let indice in entrada) {
    if (maior === entrada[indice]) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}
  // console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

// >>----------> Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.sqrt((mouse - cat1) ** 2); // menor distância: Teorema de Pitagoras.
  let dCat2 = Math.sqrt((mouse - cat2) ** 2); // >>----------> dAB = radix² (A - B)²
  let resultado = '';
  if (dCat1 === dCat2) resultado = 'os gatos trombam e o rato foge';
  else if (dCat1 === 0 || dCat1 < dCat2) resultado = 'cat1';
  else if (dCat2 === 0 || dCat1 > dCat2) resultado = 'cat2';
  return resultado;
}
// console.log(catAndMouse(-10, -15, -2));

// >>----------> Desafio 8
function fizzBuzz(arrayFizz) {
  for (let i = 0; i < arrayFizz.length; i += 1) {
    if ((arrayFizz[i] % 3) === 0 && (arrayFizz[i] % 5) === 0) {
      arrayFizz[i] = 'fizzBuzz';
    } else if ((arrayFizz[i] % 3) === 0) {
      arrayFizz[i] = 'fizz';
    } else if ((arrayFizz[i] % 5) === 0) {
      arrayFizz[i] = 'buzz';
    } else arrayFizz[i] = 'bug!';
  }
  return arrayFizz;
}
// console.log(fizzBuzz([1,3,5,15]))

// >>----------> Desafio 9
function encode(string) {
  let theEncode = '';
  for (let indice of string) {
    if (indice === 'a') {
      theEncode += '1';
      indice = '';
    } else if (indice === 'e') {
      theEncode += '2';
      indice = '';
    } else if (indice === 'i') {
      theEncode += '3';
      indice = '';
    } else if (indice === 'o') {
      theEncode += '4';
      indice = '';
    } else if (indice === 'u') {
      theEncode += '5';
      indice = '';
    } else theEncode += indice;
  }
  return theEncode;
}
// >>-----> # <-----<<
function decode(string) {
  let theDecode = '';
  for (let indice of string) {
    if (indice === '1') {
      theDecode += 'a';
      indice = '';
    }
    if (indice === '2') {
      theDecode += 'e';
      indice = '';
    }
    if (indice === '3') {
      theDecode += 'i';
      indice = '';
    }
    if (indice === '4') {
      theDecode += 'o';
      indice = '';
    }
    if (indice === '5') {
      theDecode += 'u';
      indice = '';
    } else theDecode += indice;
  }
  return theDecode;
}
// console.log(encode('hi there!jj'));
// console.log(decode('h3 th2r2!'));

// >>----------> Desafio 10
function techList(tech, name) {
  tech.sort();
  let retorna = [];

  if (tech.length === 0) return 'Vazio!';
  for (let indice = 0; indice < tech.length; indice += 1) {
    retorna.push({ tech: tech[indice], name });
  }
  return retorna.sort();
}
// console.log(techList(["React","Jest","HTML","CSS","JavaScript"],"Lucas"));

// >>----------> Desafio 11
function generatePhoneNumber(phone) {
  if (phone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let indice = 0; indice < phone.length; indice += 1) {
    let contaRepeticao = 0;
    for (let indiceBusca = 0; indiceBusca < phone.length; indiceBusca += 1) {
      if (phone[indiceBusca] === phone[indice]) contaRepeticao += 1;
      if (phone[indice] < 0 || phone[indice] > 9 || contaRepeticao === 3) return 'não é possível gerar um número de telefone com esses valores'
    }
  }
  let numeroDeTelefone = `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
  return numeroDeTelefone;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// >>----------> Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let validaTriangulo = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB, lineC)) {
    validaTriangulo = true;  // >-----> Math.abs retorna a diferença absoluta
  } else if (lineB < lineA + lineC && lineB > Math.abs(lineA, lineC)) {
    validaTriangulo = true;
  } else if (lineC < lineA + lineB && lineC > Math.abs(lineA, lineB)) {
    validaTriangulo = true;
  }
  return validaTriangulo;
}
// console.log(triangleCheck(10,14,3));

// >>----------> Desafio 13
function hydrate(theString) {
  let filtraNumero = /[1-9]/g; // filtra numeros de 1 a 9
  let pegaNumero = theString.match(filtraNumero);
  let somaArray = 0;
  let retorno;
  // for (let i = 0, total = 0; i < pegaNumero.length; total += pegaNumero[i++]);
  for (let index of pegaNumero) {
    somaArray += Number(index);
  }
  if (somaArray === 1) retorno = `${somaArray} copo de água`;
  if (somaArray > 1) retorno = `${somaArray} copos de água`;
  return retorno;
}
// let stringRecebida = "1 cachaça, 5 cervejas e 1 copo de vinho";
// console.log(hydrate(stringRecebida));

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
// function teste(string) {
//   let result = string.split(' ');
//   return result;
// }
// console.log(teste('Wagner Moreira'));
