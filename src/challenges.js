// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  let result = '';
  if (value1 && value2){
    result = true;
  } else {
    result = false;
  }
  return result;
}


// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height)/2;
  return area;
}


// Desafio 3
//Apesar de não termos visto o conteúdo "split" usei esse site para aprender sobre e responder ao exercicio - https://hcode.com.br/blog/dividindo-strings-com-metodo-split
function splitSentence(separate) {
  // seu código aqui
  return separate.split(' ');
}
  

// Desafio 4 
function concatName(phrase) {
  // seu código aqui
  let result = [];
  for (let key in phrase) {
    result = phrase[phrase.length-1] + ', ' + phrase[0];
  }
  return result;
  }
  
  
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let points = 0;
  points = wins * 3 + ties;
  return points;
}


// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let bigger = numbers[0];
  let bigger2 = 0;
  for (let counter = 0; counter < numbers.length; counter += 1) {
     if (bigger < numbers[counter]) {
       bigger = numbers[counter];
     }
  }
  for (let index in numbers) {
    if (bigger === numbers[index]) {
      bigger2 += 1;
    }
  }
  return bigger2;
}


// Desafio 7
// Usei o site https://www.w3schools.com/jsref/jsref_abs.asp para aprender mais sobre o método match.abs() 
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  let result = ''; 

  if (positionCat1 < positionCat2) {
      result = 'cat1';
    } else if (positionCat2 < positionCat1) {
      result ='cat2';
    } else {
      result = 'os gatos trombam e o rato foge';
    }
  return result;
}


// Desafio 8
function fizzBuzz(numbers) {
  // seu código aqui
  let sequence = [];
    for (let index = 0; index < numbers.length; index += 1) {
      if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
        sequence.push('fizzBuzz');
      } else if (numbers[index] % 5 == 0) {
        sequence.push('buzz');
      } else if (numbers[index] % 3 == 0) {
        sequence.push('fizz');
      }else {
        sequence.push('bug!');
      }
    }
  return sequence;
}


// Desafio 9
function encode(word) {
  // seu código aqui
let newphrase = '';
    //vou varrer a string "word"
  for (let key in word) {
      //se achar "a" vai substituir por 1 na variável nova frase
    if (word[key] === 'a') {
      newphrase += '1';
      //caso não ache pode repetir a palavra da string
    } else {
      newphrase += word[key];
    }
  }
  return newphrase;
}
//function decode() {
  // seu código aqui
//}
console.log(encode('dazan'));

// Desafio 10
function techList() {
  // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB) {
    return true;
  } else {
    return false;
  }
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
