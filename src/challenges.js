// Desafio 1
function compareTrue(valor_1, valor_2) {
  (valor_1 && valor_2)? true: false;
}

// Desafio 2
function calcArea(height,base) {
  let area = (base*altura)/2;
  console.log(area);
}

// Desafio 3
function splitSentence(string) {
  let list = string.split(" ");
  console.log(list);
}

// Desafio 4
function concatName(array) {
  let arrayFinal= [];
  arrayFinal.push(array[array.length-1]);
  arrayFinal.push(array[0]);
  console.log(arrayFinal.join(" "));
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = wins*3 + ties;
  console.log(points);
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
  console.log(freq);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  dmouseCat1 = Math.abs(mouse-cat1);
  dmouseCat2 = Math.abs(mouse-cat2);
  console.log(dmouseCat1,dmouseCat2)
  if (dmouseCat2 > dmouseCat1){
    console.log('cat1');
  }
  else if (dmouseCat1 > dmouseCat2){
    console.log('cat2');
  }
  else 
    console.log('os gatos trombam e o rato foge');

// Desafio 8
function fizzBuzz(array) {
  list = [];
  for (i in array){
      if (array[i]%3  == 0 && array[i]%5 == 0){
          list.push('fizzBuzz');
      } 
      else if (array[i]%3 ==0 || array[i]%5 == 0) {
          if (i%3 ==0){
              list.push('fizz');
          }
          else
              list.push('buzz');
      }
      else 
          list.push('bug!');
  }
  console.log(list);
}

// Desafio 9
function encode(string) {
  let alfabeto = {
      vogais: ['blankspace','a','e','i','o','u'],
      consoantes: [' ','!','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','y','x','z'],
  }
  let list = string.split("");
  let listForEncode = [];
  for (i in list){
      for(vogal in alfabeto.vogais) {
          if (list[i] == alfabeto.vogais[vogal]) {
          listForEncode.push(vogal);
          break
          }
      }
      for(consoante in alfabeto.consoantes){
          if (list[i] == alfabeto.consoantes[consoante]) {
              listForEncode.push(alfabeto.consoantes[consoante]);
              break
          }
      }
  }
  console.log(listForEncode.join(""));  
}

function decode(string) {
  let alfabeto = {
      vogais: ['blankspace','a','e','i','o','u'],
      consoantes: [' ','!','b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','y','x','z'],
  }
  let list = string.split("");
  let listForEncode = [];
  for (i in list){
      for(vogal in alfabeto.vogais) {
          if (list[i] == vogal) {
          listForEncode.push(alfabeto.vogais[vogal]);
          break
          }
      }
      for(consoante in alfabeto.consoantes){
          if (list[i] == alfabeto.consoantes[consoante]) {
              listForEncode.push(alfabeto.consoantes[consoante]);
              break
          }
      }
  }
  console.log(listForEncode.join(""));  
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
