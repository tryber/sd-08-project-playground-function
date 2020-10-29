// Desafio 1
function compareTrue(value1,value2) {
  return value1 &&value2;
}

// Desafio 2
function calcArea(base,height) {
  let area = (base*height)/2;
  return area;
}

// Desafio 3
function splitSentence(string) {
    let list = string.split(" ");
    return list;
}

// Desafio 4
function concatName(array) {
  let arrayFinal= [];
  arrayFinal.push(array[array.length-1]);
  arrayFinal.push(array[0]);
  return arrayFinal.join(", ");
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins * 3 + ties;
  return (points);
}

// Desafio 6
function highestCount(array) {
  let countlist = {};
  let n = 0;
  let freq = 0;
  for (let i = 0; i < array.length; i += 1) {
    let num = array[i];
    countlist[num]= countlist[num]? countlist[num]+1 : 1;
  }
  for(j in countlist){
    if (j >= n) {
        n = j;
        freq=countlist[j];   
    }
}
return freq;     
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  dmouseCat1 = Math.abs(mouse-cat1);
  dmouseCat2 = Math.abs(mouse-cat2);
  console.log(dmouseCat1,dmouseCat2);
  if (dmouseCat2 > dmouseCat1){
    return 'cat1';
  } else if (dmouseCat1 > dmouseCat2){
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  } 
}

// Desafio 8
function fizzBuzz(array) {
  list = [];
  for (i in array){
      if (array[i]%3  == 0 && array[i]%5 == 0){
          list.push('fizzBuzz');
      } else if (array[i]%3 ==0 || array[i]%5 == 0) {
          if (i%3 ==0){
              list.push('fizz');
          } else {
            list.push('buzz');
          }     
      } else {
        list.push('bug!');
      }     
  }
  return list;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

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
}
