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
function count2(array){
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
}
function highestCount(array) {
  // seu código aqui
  let repete = 0;
  let num = 0;
  count2(array);
  return repete;
}

// Desafio 7
function cas1Case2(case1,case2){
  if (case1 < case2){
    return 'cat1';
  } else if (case2 < case1) {
    return 'cat2';
  } else if (case1 == case2) {
    return 'os gatos trombam e o rato foge';
  }
}
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let case1 = Math.abs(cat1 - mouse);
  let case2 = Math.abs(cat2 - mouse);
  return cas1Case2(case1,case2);
}

// Desafio 8
function fizzBuzz2(array){
  for(let i in array){
    if(array[i] % 3 == 0 && array[i] % 5 == 0){
      newArray.push('fizzBuzz');
    } else if (array[i] % 3 == 0){
      newArray.push('fizz');
    } else if(array[i] % 5 == 0){
      newArray.push('buzz')
    } else {
      newArray.push('bug!')
    }
  }
}
function fizzBuzz(array) {
  let newArray = [];
  fizzBuzz2(array);
  return newArray;
}

// Desafio 9
function encode2(word){
  for(let i in word){
    if(word[i] === 'a'){
      novoWord += '1';
    }
    if(word[i] === 'e'){
      novoWord += '2';
    }
    if(word[i] === 'i'){
      novoWord += '3';
    }
    if(word[i] === 'o'){
      novoWord += '4';
    }
    if(word[i] === 'u'){
      novoWord += '5';
    } else if( word[i] !== 'a' && word[i] !== 'e' && word[i] !== 'i' && word[i] !== 'o' && word[i] !== 'u'){
      novoWord += word[i]
    }
  }
}
function encode(word) {
  let novoWord = '';
  encode2(word);
  return novoWord
}
function decode2(word2){
  for(let i in word2){
    if(word2[i] === '1'){
      novoWord2 += 'a';
    }
    if(word2[i] === '2'){
      novoWord2 += 'e';
    }
    if(word2[i] === '3'){
      novoWord2 += 'i';
    }
    if(word2[i] === '4'){
      novoWord2 += 'o';
    }
    if(word2[i] === '5'){
      novoWord2 += 'u';
    } else if( word2[i] !== '1' && word2[i] !== '2' && word2[i] !== '3' && word2[i] !== '4' && word2[i] !== '5'){
      novoWord2 += word2[i]
    }
  }
}
function decode(word2) {
  let novoWord2 = '';
  decode2(word2);
  return novoWord2
}

// Desafio 10
function techList(tech, name) {
  let obj = [];
  tech.sort();
  if(tech.length > 0){
    for(let key in tech){
      obj.push(
        {
          tech: tech[key],
          name: name,
        }
      );
    }
    return obj;
  }
  return 'Vazio!'
}

// Desafio 11
function naoPossivel(array){
  for (let i = 0; i < array.length; i += 1) {
    let sum = 0;
    if (array[i] < 0 || array[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let j = 0; j < array.length; j += 1) {
      if (array[i] === array[j]){
        sum += 1;
        if (sum >= 3){
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
}

function geraTel(array){
  for(let i in array){
    if(i == 0){
        telefone += '('+array[0]
    }
    if(i == 1){
        telefone += array[1]+') '
    }
    if(i == 7){
        telefone += '-'+array[7];
    }
    if(i == 2 || i == 3  || i == 4  || i == 5 || i == 6 || i == 8 || i == 9  || i == 10){
        telefone += array[i];
    }
}
}

}
function generatePhoneNumber(array) {
  let telefone = '';
  if (array.length === 11) {
    naoPossivel(array)
    geraTel(array)
    return telefone;
  }
  return 'Array com tamanho incorreto.';
}

// Desafio 12
function triangleCheck(lineA,lineB,lineC) {
let result = false;
  let sumAB = lineA + lineB;
  let sumBC = lineB + lineC;
  let sumAC = lineA + lineC;

  let chekA = lineA < sumBC;
  let chekB = lineB < sumAC;
  let chekC = lineC < sumAB;
if(chekA && chekB && chekC){
  result = true
}

return result;
}

// Desafio 13
function hydrate(word) {

  let numeros = word.replace(/\D+/g, "");
  let numCopos = 0;
  for(let i in numeros){

         numCopos += Number(numeros[i]);

  }
  if(numCopos === 1){
    return numCopos+' copo de água'
  }
  return numCopos+' copos de água'
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
