// Desafio 1
function compareTrue(a,b) {
  // seu código aqui
  return(a && b);
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  return(base*height)/2;
}

// Desafio 3
function splitSentence(word) {
  let sentenceArray = [];
  word = word.split(' ');
  for (let i in word) {
    sentenceArray.push(word[i]);
  }
  return sentenceArray;
}

// Desafio 4
function concatName(param1) {
  // seu código aqui
  return param1[param1.length -1]+', '+param1[0];

}

// Desafio 5
function footballPoints(wins,ties) {
  // seu código aqui
  return (wins*3) + ties;
}

// Desafio 6
function highestCount(array) {
  // seu código aqui
  let repete = 0;
  let num = 0;
  for(let i in array){
      if(array[i] > num){
          num = array[i];
      }
  }
  for(let x in array){
      if(num == array[x]){
          repete += 1;
      }
  }


  return repete;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
  let case1 = mouse - cat1;
  let case2 = mouse - cat2;
  if(case1 > case2){
    return "cat1";
  }elseif(case1 < case2) {
    return "cat2";
  }else{
    return "os gatos trombam e o rato foge";
  }

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
