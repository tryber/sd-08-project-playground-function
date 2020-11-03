// Desafio 1
function compareTrue(a, b) {
  if (a && b) return true;
  return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}
// Desafio 4
function concatName(arrayNames) {
  return `${arrayNames.pop()}, ${arrayNames[0]}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}
// Desafio 6
function highestCount(arrayHighestCount) {
  let topNumber = arrayHighestCount[0];
  let cont = 0;
  for (i in arrayHighestCount) {
    if (arrayHighestCount[0] < arrayHighestCount[i]) {
      topNumber = arrayHighestCount[i];
    }
  }
  for (j in arrayHighestCount) {
    if (topNumber === arrayHighestCount[j]); {
      cont++;
    }
  }
  return cont;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) return "cat1";
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
  if (Math.abs(mouse - cat2) < Math.abs(mouse - cat1)) return "cat2";
  return "os gatos trombam e o rato foge";
}
// Desafio 8
function fizzBuzz(arrayNumbers) {
  let newArray = [];
  for (i in arrayNumbers) {
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      newArray.push("fizzBuzz");
    } else if (arrayNumbers[i] % 3 === 0) {
      newArray.push("fizz");
    } else if (arrayNumbers[i] % 5 === 0) {
      newArray.push("buzz");
    } else {
      newArray.push("bug!");
    }
  }
  return newArray;
}
// Desafio 9
function encode(string) {
  return string.split('a')
  .join('1')
  .split('e')
  .join('2')
  .split('i')
  .join('3')
  .split('o')
  .join('4')
  .split('u')
  .join('5');
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split/
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
}
function decode(string) {
 return string.split('1')
 .join('a')
 .split('2')
 .join('e')
 .split('3')
 .join('i')
 .split('4')
 .join('o')
 .split('5')
 .join('u');
}
// Desafio 10
function techList(arrTacName, name) {
  if(arrTacName.length === 0) return "Vazio!";
  let newArr = [];
  for (i in arrTacName) {
    newArr[i] = {
      tech: arrTacName[i], name: name
    };
  }
  newArr.sort(function (a, b) {
    //developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    if (a.tech > b.tech) {
      return 1;
    }
    if (a.tech < b.tech) {
      return -1;
    }
    return 0;
    });
  return newArr;
}
// Desafio 11
function generatePhoneNumber(n) {
  if (n.length != 11) return "Array com tamanho incorreto.";
  for (let i in n) {
    if (n[i] < 0 || n[i] > 9) {
      return "não é possível gerar um número de telefone com esses valores";
    }
    let cont = 0;
    for (let j in n) {
      if (n[i] == n[j]) {
        cont++;
        if (cont == 3) {
          return "não é possível gerar um número de telefone com esses valores";
        }
      }
    }
  }
  return `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if( Math.abs(lineA < lineB+lineC) && Math.abs(lineB <lineA+lineC) && Math.abs(lineC < lineA + lineB)) return true
  return false;
}
// Desafio 13
function hydrate(srt) {
  let exit = 0;
  let arr = srt.match(/\d+/g);
  // https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  for(let i in arr ){
   exit += parseInt(arr[i]);
  //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  }
  if(exit == 1) return `${exit} copo de água`;
  return `${exit} copos de água`;
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
