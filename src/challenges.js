// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue && secondValue) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');

// Usei o método split que relembrei em https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string. , esse método corta a string sempre que passa pelo valor especificado (nesse caso um espaço) e ordena os "pedaços" em um array.
}

// Desafio 4
function concatName(name) {
  return `${name[name.length - 1]}, ${name[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(numbers) {
  function highestNumber(number) {
    let maxNumber = Math.max.apply(null, numbers);
    return number === maxNumber;
  }
  let max = numbers.filter(highestNumber);
  return max.length;
//Aprendi a usar o apply nesse site https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/ , ele permite que o Math.max funcione em arrays.
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let win;
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    win = 'os gatos trombam e o rato foge';
  } else if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    win = 'cat1';
  } else if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    win = 'cat2';
  }
  return win;
// Usei a função de valor absoluto que aprendi nesse site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs , essa função retorna o módulo do valor do input.
}

// Desafio 8
function fizzBuzz(numbers) {
  let answers = [];
  for (let index in numbers) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      answers.push('fizzBuzz');
    } else if (numbers[index] % 3 === 0) {
      answers.push('fizz');
    } else if (numbers[index] % 5 === 0) {
      answers.push('buzz');
    } else {
      answers.push('bug!');
    }
  }
  return answers;
}

// Desafio 9
function encode(message) {
  let newMessage = '';
  for (let index in message) {
    if (message[index] === 'a') {
      newMessage += '1';
    } else if (message[index] === 'e') {
      newMessage += '2';
    } else if (message[index] === 'i') {
      newMessage += '3';
    } else if (message[index] === 'o') {
      newMessage += '4';
    } else if (message[index] === 'u') {
      newMessage += '5';
    } else {
      newMessage += message[index];
    }
  }
  return newMessage;
}
function decode(message) {
  let newMessage = '';
  for (let index in message) {
    if (message[index] === '1') {
      newMessage += 'a';
    } else if (message[index] === '2') {
      newMessage += 'e';
    } else if (message[index] === '3') {
      newMessage += 'i';
    } else if (message[index] === '4') {
      newMessage += 'o';
    } else if (message[index] === '5') {
      newMessage += 'u';
    } else {
      newMessage += message[index];
    }
  }
  return newMessage;
}

// Desafio 10
function techList(techArray, name) {
  if (techArray.length === 0) {
    return "Vazio!";
  }
  techArray.sort();
  let answer = [];
  for (let key in techArray) {
    item = {
      tech: techArray[key],
      name: name
    }
    answer.push(item);
  }
  return answer;
// Eu não estava conseguindo configurar a resposta ao array vazio então dei uma olhada no código do Cajueiro, ele usou o método length (que em um array vazio é igual a zero) para isso. Não acredito que deixei passar algo tão simples! O link do repositório dele: https://github.com/tryber/sd-08-project-playground-function/tree/douglas-cajueiro-project-playground-function
}

// Desafio 11
function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let index;
  function repetition(number) {
    for (index in numbers) {
      return number == numbers[index];
    }
  }
  let num = numbers.filter(repetition)
  if (numbers[index] < 0 || numbers[index] > 9 || num.length >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  else {
    return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  }
} console.log(generatePhoneNumber([]))

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
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
