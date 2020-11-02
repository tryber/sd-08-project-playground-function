// Desafio 1
function compareTrue(x, y) {
  let r;
  if (x && y) {
    r = true;
  } else {
    r = false;
  }
  return r;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}
// Desafio 4
function concatName(arrayStrings) {
  let array = [];
  let ultima = arrayStrings[arrayStrings.length - 1];
  let primeira = arrayStrings[0];
  array = `${ultima}, ${primeira}`;
  return array;
}
// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}
// Desafio 6
function highestCount(arrayN) {
  let max = Math.max(...arrayN);
  let rep = 0;
  for (let i in arrayN) {
    if (max === arrayN[i]) {
      rep += 1;
    }
  }
  return rep;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let gato1 = Math.abs(mouse - cat1);
  let gato2 = Math.abs(mouse - cat2);
  let r = "";
  if (gato1 < gato2) {
    r = "cat1";
  } else if (gato2 < gato1) {
    r = "cat2";
  } else {
    r = "os gatos trombam e o rato foge";
  }
  return r;
}
// Desafio 8
function fizzBuzz(arrayFizz) {
  let arrayRetorno = [];
  for (let i = 0; i < arrayFizz.length; i += 1) {
    if (arrayFizz[i] % 3 === 0 && arrayFizz[i] % 5 === 0) {
      arrayRetorno.push(`fizzBuzz`);
    } else if (arrayFizz[i] % 3 === 0 && arrayFizz[i] % 5 !== 0) {
      arrayRetorno.push("fizz");
    } else if (arrayFizz[i] % 3 !== 0 && arrayFizz[i] % 5 === 0) {
      arrayRetorno.push("buzz");
    } else {
      arrayRetorno.push("bug!");
    }
  }
  return arrayRetorno;
}
// Desafio 9
function encode(p) {
  let a = p.replace(/a/gi, "1");
  let e = a.replace(/e/gi, "2");
  let i = e.replace(/i/gi, "3");
  let o = i.replace(/o/gi, "4");
  let u = o.replace(/u/gi, "5");
  return u;
}
function decode(p) {
  let a = p.replace(/1/gi, "a");
  let e = a.replace(/2/gi, "e");
  let i = e.replace(/3/gi, "i");
  let o = i.replace(/4/gi, "o");
  let u = o.replace(/5/gi, "u");
  return u;
}
// Desafio 10
function techList(array, name) {
  let objRetorno;
  let objSort = array.sort();
  if (array !== "") {
    for (let i = 0; i < array.length; i += 1) {
      objRetorno.push({
        tech: objSort[i],
        name: name,
      });
    }
  } else {
    objRetorno = "Vazio!";
  }
  return objRetorno;
}
// Desafio 11
function generatePhoneNumber(n) {
  let numeroT;
  let retorno = `(${n[0]}${n[1]}) ${n[2]}${n[3]}${n[4]}${n[5]}${n[6]}-${n[7]}${n[8]}${n[9]}${n[10]}`;
  function find(n2, val) {
    let repeat = [];
    let i = -1;
    let cont = 0;
    while ((i = n2.indexOf(val, i + 1)) !== -1) {
      // Consultei no Google essa linha
      repeat.push(i);
    }
    cont = repeat.length;
    return cont;
  }
  // função acima conta quantas vezes o número se repete
  if (n.length === 11) {
    for (let i = 0; i < n.length; i += 1) {
      numeroT = find(n, n[i]);
      if (n[i] < 0 || n[i] > 9 || numeroT >= 3) {
        return "não é possível gerar um número de telefone com esses valores";
      }
    }
  } else {
    return "Array com tamanho incorreto.";
  }
  return retorno;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (
    lineA < lineB + lineC &&
    lineB < lineA + lineC &&
    lineC < lineB + lineA &&
    lineA > Math.abs(lineB - lineC) &&
    lineB > Math.abs(lineA - lineC) &&
    lineC > Math.abs(lineB - lineA)
  ) {
    return true;
  } else {
    return false;
  }
}
// Desafio 13
function hydrate(string) {
  let repl = string.replace(/\s/g, "");
  let int = 0;
  let r = "";
  for (let i = 0; i < repl.length; i += 1) {
    if (isNaN(repl[i]) == false) {
      int += parseInt(repl[i], 10);
    }
  }
  if (int === 1) {
    r = `${int} copo de água`;
  } else {
    r = `${int} copos de água`;
  }
  return r;
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
};
