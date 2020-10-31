// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true;
  }
  return false;
}
compareTrue(true, true);

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}
calcArea(10, 5);

function splitSentence(frase) {
  let x = frase.split(" ");
  return x;
}
splitSentence("Fabio Higor de Almeida");

// Desafio 4

function concatName(nomes) {
  let ultima = nomes.pop();
  let primeira = nomes.shift();
  let final = ultima + ", " + primeira;
  // final.push(primeira);
  // final.unshift(ultima);
  return final;
}
let nomes = ["Lucas", "Cassiano", "Ferraz", "Paolillo"];
concatName(nomes);

// Desafio 5
function footballPoints(highestCount, ties) {
  let vitorias = highestCount * 3;
  let empates = ties;
  let result = empates + vitorias;
  return result;
}
footballPoints(5, 3);

// Desafio 6
function highestCount(num) {
  let max = Math.max(...num);
  let y = 0;

  for (let i = 0; i < num.length; i += 1) {
    if (num[i] === max) {
      y += 1;
    }
  }
  return y;
}
let num = [9, 1, 2, 3, 9, 5, 7];
highestCount(num);

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let p1 = Math.abs(cat1 - mouse);
  let p2 = Math.abs(cat2 - mouse);
  if (p1 === p2) {
    let m1 = "os gatos trombam e o rato foge";
    return m1;
  } else if (p1 > p2) {
    let g2 = "cat2";
    return g2;
  } else if (p1 < p2) {
    let g1 = "cat1";
    return g1;
  }
}
catAndMouse(1, 2, 5);

// Desafio 8
function fizzBuzz(a) {
  console.log(a);
  let mostrar = [];
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] % 3 === 0 && a[i] % 5 === 0) {
      mostrar[i] = "fizzBuzz";
    } else if (a[i] % 3 === 0) {
      mostrar[i] = "fizz";
    } else if (a[i] % 5 === 0) {
      mostrar[i] = "buzz";
    } else {
      mostrar[i] = "bug!";
    }
  }
  return mostrar;
}
let arr = [2, 15, 7, 9, 45];
fizzBuzz(arr);

// Desafio 9
let st = "hi there!";
function encode(a) {
  repleM = a.replace(/a/g, "1");
  repleM = repleM.replace(/e/g, "2");
  repleM = repleM.replace(/i/g, "3");
  repleM = repleM.replace(/o/g, "4");
  repleM = repleM.replace(/u/g, "5");
  return repleM;
}
encode(st);

let stnum = "h3 th2r2!";
function decode(c) {
  reple = c.replace(/1/g, "a");
  reple = reple.replace(/2/g, "e");
  reple = reple.replace(/3/g, "i");
  reple = reple.replace(/4/g, "o");
  reple = reple.replace(/5/g, "u");
  return reple;
}
decode(stnum);

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

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
};
