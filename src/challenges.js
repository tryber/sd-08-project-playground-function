// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 && value2){
    return true;
  } else {
    return false;
  }
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
   return phrase[phrase.length-1] + ', ' + phrase[0];
  }
  
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
 return wins * 3 + ties;
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
  
  if (positionCat1 < positionCat2) {
      return 'cat1';
    } else if (positionCat2 < positionCat1) {
      return 'cat2';
    } else {
      return 'os gatos trombam e o rato foge';
    }
    
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
