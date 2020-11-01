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
  if (base > 0 && height > 0) {
    return (base * height) / 2;
  }
  else {
    return `ERROR > ${base} e ${height} não são números positivos!`;
  }
}

// < Para o teste manual >
// console.log(calcArea(10, 10));


// Desafio 3
function splitSentence(str) {
  let inputStr = "" + str;
  let arrayDeStr = [];
  let auxiliar = '';

  for (let index=0; index<inputStr.length; index+=1) {

    if (inputStr[index] !== ' ') {
      auxiliar += inputStr[index];
    }
    else {
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
  let outputStr = '';
  outputStr = arrStr[inputArrStr.length - 1] + ', ' + arrStr[0];
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
function highestCount(arrNum) {
  let inputArrNum = arrNum;
  let maiorNum = inputArrNum[0];
  let contador = 0;

  for (let index=0; index<inputArrNum.length; index+=1) {
    if (inputArrNum[index] > maiorNum) {
      maiorNum = inputArrNum[index];
    }
  }
  for (let index=0; index<inputArrNum.length; index+=1) {
    if (inputArrNum[index] == maiorNum) {
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
  let outputStr = "";

// Torna as distancias positivas

  if (unidDist1 < 0) {
    unidDist1 *= -1;
  }
  if (unidDist2 < 0) {
    unidDist2 *= -1;
  }


  if (unidDist1 < unidDist2) {
    outputStr = "cat1";
  }
  else if (unidDist1 > unidDist2) {
    outputStr = "cat2";
  }
  else {
    outputStr = "os gatos trombam e o rato foge";
  }
  return outputStr;
}

// < Para o teste manual >
// console.log(catAndMouse(-1, 3, 2));


// Desafio 8
function fizzBuzz(arrNum) {
  let inputArrNumbers = arrNum;
  let outputArr = [];

  for (let index=0; index<inputArrNumbers.length; index+=1) {
    if (inputArrNumbers[index] % 3 == 0 && inputArrNumbers[index] % 5 != 0) {
      outputArr.push('fizz');
    }
    else if (inputArrNumbers[index] % 3 != 0 && inputArrNumbers[index] % 5 == 0) {
      outputArr.push('buzz');
    }
    else if (inputArrNumbers[index] %3 == 0 && inputArrNumbers[index] % 5 == 0) {
      outputArr.push('fizzBuzz');
    }
    else {
      outputArr.push('bug!');
    }
  }
  return outputArr;
}

// < Para o teste manual >
// let arrayteste2 = [2, 15, 7, 9, 45];
// console.log(fizzBuzz(arrayteste2));


// Desafio 9
// a -> 1 \
// e -> 2 \
// i -> 3 \
// o -> 4 \
// u -> 5

function encode(str) {
  let inputStr = str;
  let outputStr = "";

  for (let index in inputStr) {
    switch (inputStr[index]) {
      case 'a':
        outputStr += '1';
        break;
      case 'e':
        outputStr += '2';
        break;
      case 'i':
        outputStr += '3';
        break;
      case 'o':
        outputStr += '4';
        break;
      case 'u':
        outputStr += '5';
        break;
      default :
        outputStr += inputStr[index];
        break;
    }
  }
  return outputStr;
}

// < Para o teste manual >
// console.log(encode("oi e bom te ver nu, ta!"));

function decode(str) {
  let inputStr = str;
  let outputStr = "";

  for (let index in inputStr) {
    switch (inputStr[index]) {
      case '1':
        outputStr += 'a';
        break;
      case '2':
        outputStr += 'e';
        break;
      case '3':
        outputStr += 'i';
        break;
      case '4':
        outputStr += 'o';
        break;
      case '5':
        outputStr += 'u';
        break;
      default :
        outputStr += inputStr[index];
        break;
    }
  }
  return outputStr;
}

// < Para o teste manual >
// console.log(decode("43 2 b4m t2 v2r n5, t1!"));


// Desafio 10
function techList(arrStr, name) {

  let techName = arrStr;
  if (techName.length == 0) {
    let outputErro = "Vazio!";
    return outputErro;
  }
  else {
    techName.sort();
    let outputObj = [];

    for (let index=0; index<techName.length; index+=1) {
      let aux = {};
      aux.tech = techName[index];
      aux.name = name;
      outputObj.push(aux);
    }
    return outputObj;
  }
}

// < Para o teste manual >
// let arrayteste3 = ["React", "Jest", "HTML", "CSS", "JavaScript", "Phython", "C++"];
// console.log(techList(arrayteste3, "Lucas"));


// Desafio 11
function generatePhoneNumber(arrNum) {
  let aux = arrNum;
  let outputStr = '';
  let verificaArray = true;
  let verificaRepetido = true;

  //Verifica condições do array

  for (let index=0; index<aux.length; index+=1) {
    let contador = 0;

    if (aux[index] < 0 || aux[index] > 9) {
      verificaArray = false;
      break;
    }

    for (let j=0 ; j<aux.length; j+=1) {

      if (aux[index] == aux[j]) {
        contador += 1;
      }

      if (contador >= 3) {
        verificaRepetido = false;
        break;
      }
    }
  }

  //Organiza a string de output

  if (aux.length == 11) {
    if (verificaRepetido == false || verificaArray == false) {
      outputStr = "não é possível gerar um número de telefone com esses valores";
    }
    else {
      for (let index in aux) {
        if (index == 0) {
          outputStr = '(' + aux[index];
        }
        else if (index == 1) {
          outputStr += aux[index] + ') ';
        }
        else if (index >= 2 && index <= 5) {
          outputStr += aux[index];
        }
        else if (index == 6) {
          outputStr += aux[index] + "-";
        }
        else {
          outputStr += aux[index];
        }
      }
    }

  }
  else {
    outputStr = "Array com tamanho incorreto.";
  }
  return outputStr;
}

// < Para o teste manual >
// let arrayteste4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(arrayteste4));


// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let itIsTriangle = false;
  let lados = [lineA , lineB , lineC];

  if (lados[0] < lados[1] + lados[2] && lados[0] > Math.abs(lados[1] - lados[2])) {
    itIsTriangle = true;
  }
  else if (lados[1] < lados[2] + lados[0] && lados[1] > Math.abs(lados[2] - lados[0])) {
    itIsTriangle = true;
  }
  else if (lados[2] < lados[0] + lados[1] && lados[2] > Math.abs(lados[0] - lados[1])) {
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
  str = str.split(" ");

  for(let i=0; i<str.length; i+=1) {
    let num = "";
    if(isNaN(str[i])==false){
      num+=str[i];
      output += parseInt(num);
    }
  }

  if (output == 1) {
    return `${output} copo de água`;
  }
  else if (output > 1) {
    return `${output} copos de água`;
  }
  else {
    return `ainda não bebeu nada.`
  }
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
}
