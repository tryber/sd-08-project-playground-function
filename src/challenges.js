// >>----------> Desafio 1
function compareTrue(primeiroBoleano, segundoBolenao) {
  if (primeiroBoleano == true && segundoBolenao == true) {
    return true;
  } else if(primeiroBoleano == false || segundoBolenao == false){
    return false;
  }
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

  for (let indice = 0; indice <= string.length; indice++) {
    if (string[indice] == ' ' || indice == string.length){
      retorno.push(pegaArray);
      pegaArray = '';
    }else if (string[indice] != ' ') {
      pegaArray += string[indice];
    }
  }
  return retorno;
}
// console.log(splitSentence('wr ra'));

// >>-----------> Desafio 4
function concatName(theArray) {
  let saida = theArray[theArray.length-1] + ', ' + theArray[0];
  return saida;
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
    if (maior == entrada[indice]) {
      repeticoes++ ;
    }
  }
  return repeticoes;
}
  // console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

// >>----------> Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.sqrt(Math.pow((mouse - cat1), 2)); // Fórmula simplificada de menor distância: Teorema de Pitagoras.
  let dCat2 = Math.sqrt(Math.pow((mouse - cat2), 2)); // >>----------> dAB = radix² (A - B)²
  
  if (dCat1 == dCat2) {
    return 'os gatos trombam e o rato foge';

  } else if (dCat1 == 0 || dCat1 < dCat2) {
    return 'cat1';

  } else if (dCat2 == 0 || dCat1 > dCat2) {
    return 'cat2';
  }
}
// console.log(catAndMouse(-1, 3, 4));

// >>----------> Desafio 8
function fizzBuzz(arrayFizz) {
  for (let indice in arrayFizz) {
    if(arrayFizz[indice] % 3 == 0 && arrayFizz[indice] % 5 == 0){
      arrayFizz[indice] = "fizzBuzz";

    } else if (arrayFizz[indice] % 3 == 0) {
      arrayFizz[indice] = "fizz";

    } else if (arrayFizz[indice] % 5 == 0) {
      arrayFizz[indice] = "buzz";
    
    } else {
      arrayFizz[indice] = "bug!";
    }
  }
  return arrayFizz;
  //   if(arrayFizz[indice] % 3 == 0 && arrayFizz[indice] % 5 == 0){
  //     mesageFizz.push("fizzBuzz");

  //   } else if (arrayFizz[indice] % 3 == 0) {
  //     mesageFizz.push("fizz");

  //   } else if (arrayFizz[indice] % 5 == 0) {
  //     mesageFizz.push("buzz");
    
  //   } else {
  //     mesageFizz.push("bug!");
  //   }
  // }
  // return mesageFizz;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// >>----------> Desafio 9
function encode(string) {
  let encode = '';
  for (let indice in string) {
    if (string[indice] == 'a') {
      encode += '1';
    }else if (string[indice] == 'e') {
      encode += '2';
    }else if(string[indice] == 'i') {
      encode += '3';
    }else if(string[indice] == 'o') {
      encode += '4';
    }else if(string[indice] == 'u') {
      encode += '5';
    } else encode +=string[indice];
  }
  return encode;
}
// >>-----> # <-----<<
function decode(string) {
  let decode = '';
  for (let indice in string) {
    if (string[indice] == '1') {
      decode += 'a';
    }else if (string[indice] == '2') {
      decode += 'e';
    }else if(string[indice] == '3') {
      decode += 'i';
    }else if(string[indice] == '4') {
      decode += 'o';
    }else if(string[indice] == '5') {
      decode += 'u';
    } else decode +=string[indice];
  }
  return decode;
}
// let teste = encode('hi there!')
// let teste2 = decode(encode('h3 there!'));
// console.log(teste);
// console.log(teste2);
// console.log(decode('h3 th2r2!'));

// >>----------> Desafio 10
function techList(tech, name) {
  tech.sort();
  let retorna = [];

  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let indice = 0; indice < tech.length; indice += 1) {
    retorna.push({tech: tech[indice], name: name});
  }
  return retorna.sort();
}

// console.log(techList(["React","Jest","HTML","CSS","JavaScript"],"Lucas"));


// >>----------> Desafio 11
function generatePhoneNumber(phone) {
  
  if (phone.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let indice = 0; indice < phone.length; indice += 1) {
    let contaRepeticao = 0;
    
    for(let indiceBusca = 0; indiceBusca < phone.length; indiceBusca += 1) {
      if(phone[indiceBusca] == phone[indice]) {
        contaRepeticao += 1;
      }
      
      if(phone[indice] < 0 || phone[indice] > 9 || contaRepeticao == 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  return `(${phone[0]}${phone[1]}) ${phone[2]}${phone[3]}${phone[4]}${phone[5]}${phone[6]}-${phone[7]}${phone[8]}${phone[9]}${phone[10]}`;
}
// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// >>----------> Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if(lineA < lineB + lineC && lineA > Math.abs(lineB, lineC)) return true;
  
  if(lineB < lineA + lineC && lineB > Math.abs(lineA, lineC)) return true;

  if(lineC < lineA + lineB && lineC > Math.abs(lineA, lineB)){
    return true;
  } else return false;
}
// console.log(triangleCheck(10,14,8));

// Desafio 13
function hydrate(theString) {
  let filtraNumero = /[1-9]/g;
  let pegaNumero = theString.match(filtraNumero);
  let somaArray = 0;
  
  for(index of pegaNumero) {
    somaArray += Number(index);
  }

  if(somaArray === 1) {
    return `${somaArray} copo de água`
  } else if(somaArray > 1) {
    return `${somaArray} copos de água`
  }
}
// let stringRecebida = "1 cachaça, 0 cervejas e 1 copo de vinho";
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