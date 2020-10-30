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
function getHighestNumber(array){
  let maxNumber = array.reduce(function(a,b) {
    return Math.max(a,b);
  });
  return maxNumber;
};
function highestCount(array) {
let number = getHighestNumber(array);
let freq = 0;
for (i in array) {
  (array[i] == number)? freq += 1: freq = freq;
}
return freq;
}

// Desafio 7

function calculateDistance(mouse,cat){
  let dmouseCat = Math.abs(mouse-cat);
  return dmouseCat
}

function catAndMouse(mouse, cat1, cat2) {
  let dmouseCat1 = calculateDistance(mouse,cat1);
  let dmouseCat2 = calculateDistance(mouse,cat2);
  let statement = (dmouseCat1 == dmouseCat2)?'os gatos trombam e o rato foge': (dmouseCat1 > dmouseCat2)? 'cat2': 'cat1';
  return statement;  
}


// Desafio 8
function fizzBuzz(array) {
  list = [];
  for (i in array){
      if (array[i]%3  == 0 && array[i]%5 == 0){
          list.push('fizzBuzz');
      } else if (array[i]%3 ==0 || array[i]%5 == 0) {
          if (array[i]%3 ==0){
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
function encode(text){
  let t_a = text.replace(/a/g,"1");
  let t_e = t_a.replace(/e/g,"2");
  let t_i = t_e.replace(/i/g,"3");
  let t_o = t_i.replace(/o/g,"4");
  let t_u = t_o.replace(/u/g,"5");
  return t_u;
}

function decode(text){
  let t_a = text.replace(/1/g,"a");
  let t_e = t_a.replace(/2/g,"e");
  let t_i = t_e.replace(/3/g,"i");
  let t_o = t_i.replace(/4/g,"o");
  let t_u = t_o.replace(/5/g,"u");
  return t_u;
}
// Desafio 10
function techList(array,name){
  array.sort();
  let listWithObjects = [];
  objectInLIst = {};
  if (array.length == 0){
    return 'Vazio!';
  } else {
    for(i in array) {
      listWithObjects.push(objectInLIst = {
          'tech' : array[i],
          'name' : name,
      });
    }
    return listWithObjects;  
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
}
