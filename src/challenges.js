// Desafio 1
function compareTrue(a, b) {
  if (a && b) {
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
function splitSentence(str) {
  let array = str.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let str = array[array.length - 1] + ", " + array[0];
  return str;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  array = array.sort();
  let highest = [];
  highest.push(array[array.length - 1]);
  for (let key in array) {
    if (array[key] == highest[0]) {
      highest.push(array[key]);
    }
  }
  return highest.length - 1;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let prox = '';
  if(Math.abs(cat1 - mouse ) < Math.abs(cat2 - mouse)){
    prox = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)){
    prox = 'cat2';
  } else {
    prox = 'os gatos trombam e o rato foge';
  }
  
  return prox;
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let key in array) {
    if (array[key] % 3 === 0 && array[key] % 5 === 0) {
      newArray.push("fizzBuzz");
    } else if (array[key] % 3 === 0) {
      newArray.push("fizz");
    } else if (array[key] % 5 === 0) {
      newArray.push("buzz");
    } else {
      newArray.push("bug!");
    }
  }
  return newArray;
}

// Desafio 9
function encode(str) {
  let newStr = str;
  for(let x =0;x<newStr.length;x += 1){
    if(newStr[x] == 'a'){
      newStr = newStr.replace(/a/g, '1');
    } else if(newStr[x] == 'e'){
      newStr = newStr.replace(/e/g, '2');
    } else if(newStr[x] == 'i'){
      newStr = newStr.replace(/i/g, '3');
    } else if(newStr[x] == 'o'){
      newStr = newStr.replace(/o/g, '4');
    } else if(newStr[x] == 'u'){
      newStr = newStr.replace(/u/g, '5');
    }
  }
  
  return newStr;
}


function decode(str) {
  let newStr = str;
  for(let x =0;x<newStr.length;x += 1){
    if(newStr[x] == '1'){
      newStr = newStr.replace(/1/g, 'a');
    } else if(newStr[x] == '2'){
      newStr = newStr.replace(/2/g, 'e');
    } else if(newStr[x] == '3'){
      newStr = newStr.replace(/3/g, 'i');
    } else if(newStr[x] == '4'){
      newStr = newStr.replace(/4/g, 'o');
    } else if(newStr[x] == '5'){
      newStr = newStr.replace(/5/g, 'u');
    }
  }
  return newStr;
}

// Desafio 10
function techList(array,name) {
  let techArray = [];
  let obj = {};
  if(array.length > 0){
    for(let x = 0; x < array.length; x += 1){
      obj = {
        'tech': array[x],
        'name': name
      }
      techArray.push(obj)
    }
    return techArray;
  } else {
    return 'Vazio!';
  }
  
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
