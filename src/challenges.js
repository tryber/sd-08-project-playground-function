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
  // criação da array para receber a resposta
  let result = [];
  // tive que criar um laço para varrer a array phrase
  for (let key in phrase) {
    //tenho que pegar a última posição do array e a primeira e estou jogando a resposta na array "result"
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
  //defini variáveis para encontrar a posição dos "cat1" e "cat2" em relação ao rato, destaque que o metodo match.abs serve para definir a posição mesmo que algum dos parâmetros tenham valores negativos.
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  //Criei uma variável que vai receber a resposta
  let result = ''; 
//Essa estrutura vai definir qual dos gatos vai pegar o rato
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
  //Essa é a array que vai receber as respostas
  let sequence = [];
    // Vou varrer o array 
    for (let index = 0; index < numbers.length; index += 1) {
      // Caso encontre numeros divisiveis por 3, 5 ou ambos
      if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
        // Jogo essas frases na array "sequence"
        sequence.push('fizzBuzz');
      } else if (numbers[index] % 5 == 0) {
        sequence.push('buzz');
      } else if (numbers[index] % 3 == 0) {
        sequence.push('fizz');
        // Caso não encontre nenhuma variável vou retornar a palavra 'bug' para o array "sequence"
      }else {
        sequence.push('bug!');
      }
    }
  return sequence;
}


// Desafio 9
function encode(word) {
  // seu código aqui
  // variável responsável por armazenar o resultado da varredura
  let encodePhrase = '';
    //vou varrer a string "word" com a variável key
  for (let key in word) {
      //e substituir vogais por numeros em "encodephrase"
    if (word[key] === 'a') {
      encodePhrase += '1';
    } else if (word[key] === 'e') {
      encodePhrase += '2';
    } else if (word[key] === 'i') {
      encodePhrase += '3';
    } else if (word[key] === 'o') {
      encodePhrase += '4';
    } else if (word[key] === 'u') {
      encodePhrase += '5';
      //caso não tenha vogais vai retornar a posição "original"
    } else {
      encodePhrase += word[key];
    }
  }
  return encodePhrase;
}
function decode(word2) {
  //criação de uma string para receber o resultado
  let decodePhrase = '';
  // varrer a string "word2" com "key"
  for (let key in word2) {
    // e caso encontre números, substitui por vogais e joga o resultado em "decodePhrase"
    if (word2[key] === '1') {
      decodePhrase += 'a';
    } else if (word2[key] === '2') {
      decodePhrase += 'e';
    } else if (word2[key] === '3') {
      decodePhrase += 'i';
    } else if (word2[key] === '4') {
      decodePhrase += 'o';
    } else if (word2[key] === '5') {
      decodePhrase += 'u';
      //caso não encontre numeros vai só repetir o que achou em "decodePhrase"
    } else {
      decodePhrase += word2[key];
    }
  } 
  return decodePhrase;
}


// Desafio 10
// usei esse site para me auxiliar na resposta https://www.mundojs.com.br/2018/04/23/javascript-conhecendo-o-metodo-sort/
function techList(tech, name) {
  // seu código aqui
  // O array tech ficou em ordem alfabética através desse método sort
  let order = tech.sort();
  let result = [];

  
  if (tech.length > 0) {
    //esse laço é responsável por varrer o array que já está em ordem alfabética
    for (let key in order) {
      //criei um objeto que vai receber o array em ordem alfabética + nome e colocar o resultado em "result"
      let object = {};
      object.tech = order[key];
      object.name = name;
      result.push(object);
    }
    //caso o array seja não tenha palavras vai retornar vazio para o "result"
  } else {
    result = 'vazio';
  }
  return result;
 
 
}
console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Tiago"));

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
