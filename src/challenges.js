// Desafio 1
function compareTrue(a, b) {
  return a && b;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(names) {
  const last = names.length - 1;
  return `${names[last]}, ${names[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function count(arr) {
  let counter = {};
  for (let i = 0; i < arr.length; i += 1) {
    let cur = arr[i];
    if (!counter[cur]) {
      counter[cur] = 1;
    } else {
      counter[cur] += 1;
    }
  }
  return counter;
}

function highestCount(numbers) {
  let counter = count(numbers);
  let highest = Math.max(...numbers);
  return counter[highest];
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(cat1 - mouse);
  let distCat2 = Math.abs(cat2 - mouse);
  let result = 'os gatos trombam e o rato foge';
  if (distCat1 < distCat2) result = 'cat1';
  if (distCat2 < distCat1) result = 'cat2';
  return result;
}

// Desafio 8
// https://github.com/tryber/sd-08-project-playground-function/blob/vivianeflorido-project-playground-function/src/challenges.js
function classify(num) {
  if (num % 3 === 0 && num % 5 === 0) return 'fizzBuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return 'bug!';
}

function fizzBuzz(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i += 1) {
    let cur = numbers[i];
    result.push(classify(cur));
  }
  return result;
}

// Desafio 9
// Tive vários insights fazendo pair programing com a Viviane (https://github.com/vivianeflowt)
// e resolvi fazer um refatoramento nesse requisito
const vowels = ['a', 'e', 'i', 'o', 'u'];

function codeToCh(code) {
  return vowels[code - 1] || code;
}

function chToCode(ch) {
  let index = vowels.indexOf(ch);
  if (index !== -1) return index + 1;
  return ch;
}

function encode(str) {
  let result = '';
  for (let i = 0, len = str.length; i < len; i += 1) {
    result += chToCode(str[i]);
  }
  return result;
}

function decode(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    let code = str[i];
    result += codeToCh(code);
  }
  return result;
}

// Desafio 10
function techList(tecnologias, name) {
  tecnologias = tecnologias.sort();
  let lista = [];
  for (let tecnologia of tecnologias) {
    lista.push({
      tech: tecnologia,
      name,
    });
  }
  return lista.length > 0 ? lista : 'Vazio!';
}

// Desafio 11
function validNumbers(digits) {
  return !digits.find(cur => cur < 0 || cur > 9);
}

function validCount(digits) {
  let counter = count(digits);
  for (let cur in counter) {
    if (counter[cur] >= 3) return false;
  }
  return true;
}

function generatePhoneNumber(digits) {
  if (digits.length !== 11) return 'Array com tamanho incorreto.';
  if (validCount(digits) && validNumbers(digits)) {
    let numeroStr = digits.join('');
    let ddd = numeroStr.slice(0, 2);
    let partA = numeroStr.slice(2, 7);
    let partB = numeroStr.slice(7, 11);
    return `(${ddd}) ${partA}-${partB}`;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB;
}

// Desafio 13
function hydrate(beverages) {
  let arr = beverages.match(/\d+/g);
  let numeroDeCopos = arr.map(Number).reduce((acc, cur) => acc + cur);
  return `${numeroDeCopos} copo${numeroDeCopos > 1 ? 's' : ''} de água`;
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
