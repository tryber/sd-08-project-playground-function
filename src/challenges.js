// Desafio 1
function compareTrue(bool1, bool2) {
  // seu código aqui

  if (bool1 && bool2) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let splittedSentence = [];
  let index = 0;
  let arrayIndex = 0;
  for (let pos = 0; pos < sentence.length; pos += 1) {
    if (sentence.slice(pos, (pos + 1)) === ' ') {
      splittedSentence[arrayIndex] = sentence.slice(index, pos);
      index = pos + 1;
      arrayIndex += 1;
    } else if (pos === (sentence.length - 1)) {
      splittedSentence[arrayIndex] = sentence.slice(index, (pos + 1));
    }
  }
  return splittedSentence;
}

// Desafio 4
function concatName(arrayOfNames) {
  // seu código aqui
  let firstName = arrayOfNames[0];
  let lastName = arrayOfNames[arrayOfNames.length - 1];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(arrayOfNumbers) {
  // seu código aqui
  let higherNumber = arrayOfNumbers[0];
  let countNumber = 0;
  for (let pos = 1; pos < arrayOfNumbers.length; pos += 1) {
    if (higherNumber < arrayOfNumbers[pos]) {
      higherNumber = arrayOfNumbers[pos];
    }
  }
  for (let key = 0; key < arrayOfNumbers.length; key += 1) {
    if (higherNumber === arrayOfNumbers[key]) {
      countNumber += 1;
    }
  }
  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if ((Math.abs(cat1 - mouse)) < (Math.abs(cat2 - mouse))) {
    return 'cat1';
  } else if ((Math.abs(cat1 - mouse)) > (Math.abs(cat2 - mouse))) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  // seu código aqui
  let fizbuz = [];
  for (let pos = 0; pos < arrayOfNumbers.length; pos += 1) {
    if (arrayOfNumbers[pos] % 3 === 0 && arrayOfNumbers[pos] % 5 === 0) {
      fizbuz.push('fizzBuzz');
    } else if (arrayOfNumbers[pos] % 3 === 0) {
      fizbuz.push('fizz');
    } else if (arrayOfNumbers[pos] % 5 === 0) {
      fizbuz.push('buzz');
    } else {
      fizbuz.push('bug!');
    }
  }
  return fizbuz;
}

// Desafio 9
function encode(sentence) {
  // seu código aqui
  let newSentence = '';
  for (let pos = 0; pos < sentence.length; pos += 1) {
    switch (sentence.slice(pos, pos + 1)) {
      case 'a':
        newSentence += '1';
        break;
      case 'e':
        newSentence += '2';
        break;
      case 'i':
        newSentence += '3';
        break;
      case 'o':
        newSentence += '4';
        break;
      case 'u':
        newSentence += '5';
        break;
      default:
        newSentence += sentence.slice(pos, pos + 1);
    }
  }
  return newSentence;
}

function decode(sentence) {
  // seu código aqui
  let newSentence = '';
  for (let pos = 0; pos < sentence.length; pos += 1) {
    switch (sentence.slice(pos, pos + 1)) {
      case '1':
        newSentence += 'a';
        break;
      case '2':
        newSentence += 'e';
        break;
      case '3':
        newSentence += 'i';
        break;
      case '4':
        newSentence += 'o';
        break;
      case '5':
        newSentence += 'u';
        break;
      default:
        newSentence += sentence.slice(pos, pos + 1);
    }
  }
  return newSentence;
}

// Desafio 10
function techList(array, name) {
  // seu código aqui
  let sortedArray = array.sort();
  let listSkills = [];

  if (sortedArray.length !== 0) {
    for (let pos = 0; pos < sortedArray.length; pos += 1) {
      let skills = {};
      skills.tech = sortedArray[pos];
      skills.name = name;
      listSkills[pos] = skills;
    }
    return listSkills;
  } else {
    return 'Vazio!';
  }
}

// Desafio 11
function generatePhoneNumber(array) {
  // seu código aqui
  let phoneNumber = '';
  // Inicializa um novo array com o objeto criado acima.
  let newArray = [];
  // Verifica se o array é maior ou menor que 11, caso for, 
  // encerra a função retornando o valor abaixo.
  if (array.length != 11) {
    return 'Array com tamanho incorreto.';
  } else {
    // 'For' para verificar cada posição do array de 11 elementos.
    for (let pos = 0; pos < array.length; pos += 1) {
      let isReapeted = false;
      // Condição para verificar se algum dos elementos é menor que zero ou maior que nove, caso seja, retorna valor abaixo encerrando a função.
      if (array[pos] < 0 || array[pos] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
        break;
      } else {
        // 'For' para verificar cada posição do newArray criado no início da função.
        for (let key = 0; key < newArray.length; key += 1) {
          // Se alguma das posições de newArray for igual ao array na pos atual do loop, o valor da propriedade repeat do objeto dentro do newArray na posição key será incrementado e o valor de isRepeated é alterado para true para futura comparação.
          if (newArray[key].numero == array[pos]) {
            newArray[key].repeat += 1;
            isReapeted = true;
          }
        }
        // Se o valor de isRepeated não foi alterado para true, ou seja, não houve repetição do número do array na posição pos, o número em questão é adicionado em um novo objeto e esse objeto é adicionado no objArray. O valor de isReapeted retorna a false no início do primeiro 'for'.
        if (!isReapeted) {
          let objArray = {};
          objArray.numero = array[pos];
          objArray.repeat = 1;
          newArray.push(objArray);
        }
      }
    }
    // Verificar se há algum número com mais de 3 repeats.
    for (let chave in newArray) {
      if (newArray[chave].repeat >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
        break;
      } else if (chave == (newArray.length -1)) {
        // Constrói o phoneNumber no formato solicitado.
        for (let posPhone = 0; posPhone < array.length; posPhone += 1) {
          switch (posPhone) {
            case 0:
              phoneNumber += '(' + array[posPhone];
              break;
            case 2:
              phoneNumber += ') ' + array[posPhone];
              break;
            case 7:
              phoneNumber += '-' + array[posPhone];
              break;
            default:
              phoneNumber += array[posPhone];
          }
        }
        return phoneNumber;
      }
    }
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let linhaA = lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
  let linhaB = lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC);
  let linhaC = lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB);
  if (linhaA == true && linhaB == true && linhaC == true) {
    return true;
  } else{
    return false;
  }
}

// Desafio 13
function hydrate(string) {
  // seu código aqui
  let coposDeAgua = 0;
  let number = string.match(/\d+/g).map(Number);
  for (let pos = 0; pos < number.length; pos += 1) {
    coposDeAgua += number[pos];
  }
  if (coposDeAgua == 1) {
    return coposDeAgua + ' copo de água';
  } else {
    return coposDeAgua + ' copos de água';
  }
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
