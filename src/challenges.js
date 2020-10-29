// Desafio 1
function compareTrue(booleanOne, booleanTwo) {
  if (booleanOne && booleanTwo) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  var splitString = string.split(" ");
  return splitString;
}

// Desafio 4
function concatName(array) {
  let concat = array[array.length - 1] + ", " + array[0];
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}

// Desafio 6
function highestCount(array) {
  let sortArray = array.sort(function (a, b) { return a - b });
  let highestNumber = sortArray[sortArray.length - 1];
  console.log(sortArray);
  let repeatCount = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] == highestNumber) {
      repeatCount += 1;
    }
  }
  return repeatCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);

  if (distCat1 < distCat2) {
    return "cat1";
  } else if (distCat2 < distCat1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(array) {
  let novaArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
      novaArray.push("fizzBuzz")
    } else if (array[i] % 3 == 0) {
      novaArray.push("fizz");
    } else if (array[i] % 5 == 0) {
      novaArray.push("buzz");
    } else {
      novaArray.push("bug!");
    }
  }
  return novaArray;
}

// Desafio 9
function encode(string) {
  let encodeLetters = ["a", "e", "i", "o", "u"]
  let encodedValues = [1, 2, 3, 4, 5]

  //Passa a string para um array
  let encodedString = string.split("");

  for (let i = 0; i < encodedString.length; i += 1) {
    //Compara se a letra atual é igual a ela mesma mas em caixa baixa porque queremos substituir apenas as lowe case
    //&&  Procura essa letra minuscula no encodeLetters, se devolver -1 é porque a letra não está la
    if (encodedString[i] == encodedString[i].toLowerCase() && encodeLetters.indexOf(encodedString[i]) != -1) {
      //Substitui a letra atual de encodedString pelo número equivalente no encodedValues
      encodedString[i] = encodedValues[encodeLetters.indexOf(encodedString[i])];
    }
  }

  //Une todos os elementos do array
  return encodedString.join("");
}

function decode(string) {
  let encodeLetters = ["a", "e", "i", "o", "u"];

  //Precisei colocar os números como string porque o indexOf estava retornando -1
  let encodedValues = ["1", "2", "3", "4", "5"];

  //Passa a string para um array
  let encodedString = string.split("");

  for (let i = 0; i < encodedString.length; i += 1) {
    //Verificar se a posição atual da encodedString é igual a alguma das posições de encodedValues
    if (encodedValues.indexOf(encodedString[i]) != -1) {
      //Substitui o número pela letra equivalente
      encodedString[i] = encodeLetters[encodedValues.indexOf(encodedString[i])];
    }
  }

  //Une todos os elementos do array
  return encodedString.join("");
}

// Desafio 10
function techList(array, name) {
  let sortArray = array.sort();
  let newArray = [];
  for (let key in array) {
    let insert = {
      tech: array[key], 
      name: name
    }
    newArray.push(insert)
  }

  if (array.length == 0) {
    return "Vazio!";
  } else {
    return newArray;
  }
  
}

// Desafio 11
function generatePhoneNumber(array) {
  if(array.length != 11){
    return "Array com tamanho incorreto.";
  }

  for(let key in array)  {
    let counter = 0;
    if(array[key]>9 || array[key]<0){
      return "não é possível gerar um número de telefone com esses valores";
    }

    for(let i = 0; i<array.length; i+=1){
      if(array[key] == array[i]){
        counter += 1;
      }
      if(counter >= 3){
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  }
  let formatNumber = `(${array[0]}${array[1]}) ${array[2]}${array[2]}${array[3]}${array[4]}-${array[5]}${array[6]}${array[7]}${array[8]}`;
  return formatNumber;
}

console.log(generatePhoneNumber([9, 2, 3, 0, 5, -6, 7, 8, -7, 0, 1]));

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
