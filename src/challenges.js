// Desafio 1
function compareTrue(bol1, bol2) {
  let output = false;
  if (bol1 === true && bol2 === true) {
    output = true;
  }
  return output;
}

// < Para o teste manual >
// let a = true;
// let b = true;
// console.log(compareTrue(a, b));


// Desafio 2
function calcArea(base, height) {
  let output;
  if (base > 0 && height > 0) {
    output = (base * height) / 2;
  } else {
    output = `ERROR > ${base} e ${height} não são números positivos!`;
  }
  return output;
}

// < Para o teste manual >
// console.log(calcArea(10, 10));


// Desafio 3
function splitSentence(str) {
  let inputStr = '';
  inputStr = str;
  let arrayDeStr = [];
  let auxiliar = '';

  for (let index = 0; index < inputStr.length; index += 1) {
    if (inputStr[index] !== ' ') {
      auxiliar += inputStr[index];
    } else {
      arrayDeStr.push(auxiliar);
      auxiliar = '';
    }
  }
  arrayDeStr.push(auxiliar);

  return arrayDeStr;
}

// < Para o teste manual >
// console.log(splitSentence("go Trybe"));


// Desafio 4
function concatName(arrStr) {
  let inputArrStr = arrStr;
  let outputStr = arrStr[inputArrStr.length - 1].concat(', ', arrStr[0]);
  return outputStr;
}

// < Para o teste manual >
// let testeArray = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
// console.log(concatName(testeArray));


// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// < Para o teste manual >
// console.log(footballPoints(5, 3));

// Desafio 6
function getHighestNum(arrNum) {
  let maiorNum = arrNum[0];
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] > maiorNum) {
      maiorNum = arrNum[index];
    }
  }
  return maiorNum;
}

function highestCount(arrNum) {
  let maiorNum = getHighestNum(arrNum);
  let contador = 0;

  for (let x in arrNum) {
    if (arrNum[x] === maiorNum) {
      contador += 1;
    }
  }

  return contador;
}

// < Para o teste manual >
// let arrayteste = [9, 1, 2, 3, 9, 5, 7];
// console.log(highestCount(arrayteste));


// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let unidDist1 = cat1 - mouse;
  let unidDist2 = cat2 - mouse;
  let outputStr = '';

// Torna as distancias positivas

  if (unidDist1 < 0) {
    unidDist1 *= -1;
  }
  if (unidDist2 < 0) {
    unidDist2 *= -1;
  }


  if (unidDist1 < unidDist2) {
    outputStr = 'cat1';
  } else if (unidDist1 > unidDist2) {
    outputStr = 'cat2';
  } else {
    outputStr = 'os gatos trombam e o rato foge';
  }

  return outputStr;
}

// < Para o teste manual >
// console.log(catAndMouse(-1, 3, 2));


// Desafio 8
function fizzBuzz(arrNum) {
  let outputArr = [];

  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] % 3 === 0 && arrNum[index] % 5 !== 0) {
      outputArr.push('fizz');
    } else if (arrNum[index] % 3 !== 0 && arrNum[index] % 5 === 0) {
      outputArr.push('buzz');
    } else if (arrNum[index] % 3 === 0 && arrNum[index] % 5 === 0) {
      outputArr.push('fizzBuzz');
    } else {
      outputArr.push('bug!');
    }
  }

  return outputArr;
}

// < Para o teste manual >
// let arrayteste2 = [2, 15, 7, 9, 45, 10];
// console.log(fizzBuzz(arrayteste2));


// Desafio 9
// a -> 1 \
// e -> 2 \
// i -> 3 \
// o -> 4 \
// u -> 5

function encode(str) {
  let outputStr = '';

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === 'a') {
      outputStr += '1';
    } else if (str[index] === 'e') {
      outputStr += '2';
    } else if (str[index] === 'i') {
      outputStr += '3';
    } else if (str[index] === 'o') {
      outputStr += '4';
    } else if (str[index] === 'u') {
      outputStr += '5';
    } else {
      outputStr += str[index];
    }
  }

  return outputStr;
}

// < Para o teste manual >
// console.log(encode("oi e bom te ver nu, ta!"));

function decode(str) {
  let outputStr = '';

  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '1') {
      outputStr += 'a';
    } else if (str[index] === '2') {
      outputStr += 'e';
    } else if (str[index] === '3') {
      outputStr += 'i';
    } else if (str[index] === '4') {
      outputStr += 'o';
    } else if (str[index] === '5') {
      outputStr += 'u';
    } else {
      outputStr += str[index];
    }
  }

  return outputStr;
}

// < Para o teste manual >
// console.log(decode("43 2 b4m t2 v2r n5, t1!"));


// Desafio 10
function techList(arrStr, name) {
  let outputObj = [];

  if (arrStr.length === 0) {
    outputObj.push('Vazio!');
  } else {
    arrStr.sort();

    for (let index = 0; index < arrStr.length; index += 1) {
      let aux = {};
      aux.tech = arrStr[index];
      aux.name = name;
      outputObj.push(aux);
    }
  }
  return outputObj;
}

// < Para o teste manual >
// let arrayteste3 = ["React", "Jest", "HTML", "CSS", "JavaScript", "C++"];
// console.log(techList(arrayteste3, "Lucas"));


// Desafio 11
function verifyArrNum(arrNum) {
  let verificaArray = true;
  for (let index = 0; index < arrNum.length; index += 1) {
    if (arrNum[index] < 0 || arrNum[index] > 9) {
      verificaArray = false;
    }
  }
  return verificaArray;
}

function verifyRepetition(arrNum) {
  let verificaRepetido = true;
  for (let index = 0; index < arrNum.length; index += 1) {
    let contador = 0;

    for (let j = 0; j < arrNum.length; j += 1) {
      if (arrNum[index] === arrNum[j]) {
        contador += 1;
      }

      if (contador >= 3) {
        verificaRepetido = false;
      }
    }
  }
  return verificaRepetido;
}


function generatePhoneNumber(arrNum) {
  let outputStr = '';
  let verificaArray = verifyArrNum(arrNum);
  let verificaRepetido = verifyRepetition(arrNum);

  if (arrNum.length === 11) {
    if (verificaRepetido === false || verificaArray === false) {
      outputStr = 'não é possível gerar um número de telefone com esses valores';
    } else {
      for (let index in arrNum) {
        if (index === '0') {
          outputStr = outputStr.concat('(', arrNum[index]);
        } else if (index === '1') {
          outputStr = outputStr.concat(arrNum[index], ') ');
        } else if (index >= 2 && index <= 5) {
          outputStr += arrNum[index];
        } else if (index === '6') {
          outputStr = outputStr.concat(arrNum[index], '-');
        } else {
          outputStr += arrNum[index];
        }
      }
    }
  } else {
    outputStr = 'Array com tamanho incorreto.';
  }

  return outputStr;
}

// < Para o teste manual >
// let arrayteste4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(arrayteste4));


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let itIsTriangle = false;
  let lados = [lineA, lineB, lineC];

  if (lados[0] < lados[1] + lados[2] && lados[0] > Math.abs(lados[1] - lados[2])) {
    itIsTriangle = true;
  } else if (lados[1] < lados[2] + lados[0] && lados[1] > Math.abs(lados[2] - lados[0])) {
    itIsTriangle = true;
  } else if (lados[2] < lados[0] + lados[1] && lados[2] > Math.abs(lados[0] - lados[1])) {
    itIsTriangle = true;
  }

  return itIsTriangle;
}

// < Para o teste manual >
// console.log(triangleCheck(14, 8, 10));


// Desafio 13
// Solução com o entendimento via "https://www.codegrepper.com/code-examples/delphi/how+to+exract+numbers+from+string+in+js"
function hydrate(str) {
  let output = 0;
  let outputStr = '';
  str = str.split(' ');

  for (let i = 0; i < str.length; i += 1) {
    let num = '';
    if (isNaN(str[i]) === false) {
      num += str[i];
      output += parseInt(num);
    }
  }

  if (output === 1) {
    outputStr = `${output} copo de água`;
  } else if (output > 1) {
    outputStr = `${output} copos de água`;
  } else {
    outputStr = 'ainda não bebeu nada.';
  }
  return outputStr;
}

// < Para o teste manual >
// console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));


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
