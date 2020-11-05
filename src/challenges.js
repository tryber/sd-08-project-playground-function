// Desafio 1
function compareTrue(boolean1, boolean2) {
  return (boolean1 && boolean2)
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2)
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ')
}

// Desafio 4
function concatName(arrStr) {
  return arrStr[arrStr.length - 1] + ', ' + arrStr[0]
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties 
}

// Desafio 6
function highestCount(array) {
  let maior = [Math.max(...array)];
  let countMax = [];
  for (let num in array) {
      if (array[num] == maior) {
        countMax.push(num);
      };
  };  
    return countMax.length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse - cat1);
  let distanciaCat2 = Math.abs(mouse - cat2);

  if (distanciaCat1 < distanciaCat2) {
      return 'cat1';
  }   else if (distanciaCat1 > distanciaCat2) {
      return 'cat2';
  }   else {
      return 'os gatos trombam e o rato foge';
  }
}

// função divisíveis
function divisively (num) {
  if ((num % 3 == 0) && (num % 5 == 0)) {
      return 'fizzBuzz'
  } else if (num % 5 == 0) {
      return 'buzz'
  } else if (num % 3 == 0) {
      return 'fizz'
  } else {
      return 'bug!'
  }
}

// Desafio 8
function fizzBuzz(array) {
  let arr = [];
  for (let num in array) {
    arr.push(divisively(array[num]));
  }
  return arr;
}

// Desafio 9
function encode(string) {
  let stringSwap = { "a": "1", "e": "2", "i": "3", "o": "4", "u": "5" };
  let encondeResult = "";
  encondeResult = string.replace(/[aeiou]/gi, m => stringSwap[m]);

  return encondeResult;
}
function decode(string) {
  let stringSwap = { "1": "a", "2": "e", "3": "i", "4": "o", "5": "u" }
  let encondeResult = "";
  encondeResult = string.replace(/[12345]/gi, m => stringSwap[m]);

  return encondeResult;
}

// Desafio 10
function techList(tech, name) {
  let resultArray = [];
  let orderedTechList = tech.sort();
  if (tech.length === 0) {
    return "Vazio!";
  }
  for (let i in orderedTechList) {
    resultArray.push({
      tech: orderedTechList[i],
      name: name,
    });
  }
  return resultArray;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = '';
  let counts = [];
  let rawString = array.join('');
  result = rawString.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else {
    array.forEach(function (i) {
      counts[i] = (counts[i] || 0) + 1;
    });
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] < 0 || array[i] > 9 || counts[i] >= 3) {
        result = 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaAB = lineA + lineB > lineC;
  let somaAC = lineA + lineC > lineB;
  let somaBC = lineB + lineC > lineA;

  return somaAB && somaAC && somaBC;
}

// Desafio 13
function hydrate(string) {
  let onlyNumbersArray = string.match(/\d+/g).map(Number);
  let somaArray = onlyNumbersArray.reduce(
    (drinks1, drinks2) => drinks1 + drinks2);
  let result = '';
  if (somaArray === 1) {
    result = `${somaArray} copo de água`;
  } else {
    result = `${somaArray} copos de água`;
  }
  return result;
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
