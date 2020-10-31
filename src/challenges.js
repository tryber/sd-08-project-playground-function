// Desafio 1
function compareTrue(val1, val2) {
  if (val1 && val2) {
    return true;
  } else {
    return false;
  }
}
//console.log(compareTrue(true, true));
//console.log(compareTrue(false, true));
//console.log(compareTrue(true, false));
//console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  let area = 0;
  area = (base * height) / 2;
  return area;
}
//console.log(calcArea(5, 10));

// Desafio 3
function splitSentence(string) {
  let stringSplit = [];
  stringSplit = string.split(/[ ]/);
  return stringSplit;
}
//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(nomes) {
  let nameConcat = [];
  nameConcat = nomes[nomes.length - 1] + ", " + nomes[0];
  return nameConcat;
}
//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(winns, ties) {
  let victories = [];
  let empate = [];
  let pontos = [];
  victories = 3 * winns;
  empate = 1 * ties;
  pontos = victories + empate;
  return pontos;
}
//console.log(footballPoints(4, 3))


// Desafio 6
function highestCount(numeros) {
  let contNum = 0;
  let maiorNum = numeros[0];
  for (let cont = 0; cont < numeros.length; cont++) {
    if (numeros[cont] > maiorNum) {
      maiorNum = numeros[cont];
    }
  }
  for (let cont = 0; cont < numeros.length; cont++) {
    if (maiorNum === numeros[cont]) {
      contNum++;
    }
  }
  return contNum;
}
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {


  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
//console.log(catAndMouse(2, 6, 9));
//console.log(catAndMouse(2, 9, 6));
//console.log(catAndMouse(2, 2, 2));
//console.log(catAndMouse(12, 6, 9));
//console.log(catAndMouse(12, 9, 6));
//console.log(catAndMouse(0, 1, 2));

// Desafio 8
function fizzBuzz(array) {
  let newFizzBuzz = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 5 == 0 && array[i] % 3 == 0) {
      newFizzBuzz.push("fizzBuzz");
    } else if (array[i] % 3 == 0) {
      newFizzBuzz.push("fizz");
    } else if (array[i] % 5 == 0) {
      newFizzBuzz.push("buzz");
    } else {
      newFizzBuzz.push("bug!");
    }
  }
  return newFizzBuzz;
}
//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(string) {
  let troca = string;
  for (i in troca) {
    if (troca[i] == "a") {
      troca = troca.replace(troca[i], "1");
    }
    if (troca[i] == "e") {
      troca = troca.replace(troca[i], "2");
    }
    if (troca[i] == "i") {
      troca = troca.replace(troca[i], "3");
    }
    if (troca[i] == "o") {
      troca = troca.replace(troca[i], "4");
    }
    if (troca[i] == "u") {
      troca = troca.replace(troca[i], "5");
    }
  }
  return troca;
}
//console.log(encode("hi there!"));

function decode(string) {
  let troca = string;

  for (i in troca) {
    if (troca[i] == "1") {
      troca = troca.replace(troca[i], "a");
    }
    if (troca[i] == "2") {
      troca = troca.replace(troca[i], "e");
    }
    if (troca[i] == "3") {
      troca = troca.replace(troca[i], "i");
    }
    if (troca[i] == "4") {
      troca = troca.replace(troca[i], "o");
    }
    if (troca[i] == "5") {
      troca = troca.replace(troca[i], "u");
    }
  }
  return troca;
}
//console.log(decode("h3 th2r2!"));

// Desafio 10
function techList(tecnologia, name) {
  if (tecnologia.length === 0) {
    return "Vazio!"
  } else {
    let tecnoligaOrdenada = tecnologia.sort();
    let list = [];
    for (i in tecnoligaOrdenada) {
      let objeto = {};
      objeto["tech"] = tecnologia[i];
      objeto["name"] = name;
      list.push(objeto);
    }
    return list;
  }
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(array) {
  if (array.length != 11) {
    return "Array com tamanho incorreto.";
  }
  for (let key in array) {
    let count = 0;
    if (array[key] > 9 || array[key] < 0) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    for (let i = 0; i < array.length; i += 1) {
      if (array[key] == array[i]) {
        count += 1;
      }
      if (count >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  let numTelefone = "(" + array[0] + array[1] + ") " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9] + array[10];
  return numTelefone;
}
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 1]));
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 1]));
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 90]));
//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 1, 9]));

// Desafio 12
function triangleCheck(num1, num2, num3) {
  if (num1 > (num2 + num3)) {
    return false;
  } else if (num2 > (num1 + num3)) {
    return false;
  } else if (num3 > (num1 + num2)) {
    return false;
  }
  if (num1 < (Math.abs(num2 - num3))) {
    return false;
  } else if (num2 < (Math.abs(num1 - num3))) {
    return false;
  } else if (num3 < (Math.abs(num1 - num2))) {
    return false;
  }
}
//console.log(triangleCheck(16, 9, 2));
//console.log(triangleCheck(10, 3, 4));
//console.log(triangleCheck(6, 2, 2));
//console.log(triangleCheck(12, 17, 4));
//console.log(triangleCheck(5, 10, 3));

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
