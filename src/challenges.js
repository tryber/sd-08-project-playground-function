function encontraMaior(vetor) {
  let maior = vetor[0];
  for (let index = 0; index < vetor.length; index += 1) {
    if (vetor[index] > maior) {
      maior = vetor[index];
    }
  }
  return maior;
}

function encontraQuantidadeMaior(vetor, maior) {
  let count = 0;
  for (let index = 0; index < vetor.length; index += 1) {
    if (vetor[index] === maior) {
      count += 1;
    }
  }
  return count;
}

function calculaDistancia(pos1, pos2) {
  return Math.abs(pos1 - pos2);
}

function dividePor3(num) {
  if (num % 3 === 0) {
    return 1;
  }
  return 0;
}

function dividePor5(num) {
  if (num % 5 === 0) {
    return 3;
  }
  return 0;
}

function refatoraVetor(vetor) {
  for (let index = 0; index < vetor.length; index += 1) {
    switch (vetor[index]) {
      case 1:
        vetor[index] = 'fizz';
        break;
      case 3:
        vetor[index] = 'buzz';
        break;
      case 4:
        vetor[index] = 'fizzBuzz';
        break;
      default:
        vetor[index] = 'bug!';
        break;
    }
  }
  return vetor;
}

function objetoComNomeTecnologia(nome, tecnologia) {
  let obj = {
    tech: tecnologia,
    name: nome,
  };
  return obj;
}

function ladoMaiorQueSomaOutros(a, b, c) {
  let cond1 = a / (b + c);
  let cond2 = b / (a + c);
  let cond3 = c / (a + b);
  if (cond1 > 1 || cond2 > 1 || cond3 > 1) {
    return false;
  }
  return true;
}

function ladoMenorQueSubOutros(a, b, c) {
  let cond1 = a - Math.abs(b - c);
  let cond2 = b - Math.abs(a - c);
  let cond3 = c - Math.abs(a - b);
  let resultado = cond1 * cond2 * cond3;
  if (resultado < 0) {
    return false;
  }
  return true;
}

function ehNumero(caractere) {
  for (let index = 1; index <= 9; index += 1) {
    if (index == caractere) {
      return index;
    }
  }
  return 0;
}

// Desafio 1
function compareTrue(parametro1, parametro2) {
  return parametro1 && parametro2;
}
// Desafio 2
function calcArea(base, height) {
  let areaTriangulo = (base * height) / 2;
  return areaTriangulo;
}

// Desafio 3
function splitSentence(frase) {
  let vetor = frase.split(' ');
  return vetor;
}
// Desafio 4
function concatName(vetor) {
  let primeiraPalavra = vetor[0];
  let ultimaPalavra = vetor[vetor.length - 1];
  return `${ultimaPalavra}, ${primeiraPalavra}`;
}
// Desafio 5
function footballPoints(wins, ties) {
  let pontos = (wins * 3) + ties;
  return pontos;
}
// Desafio 6
function highestCount(vetor) {
  let maior = encontraMaior(vetor);
  return encontraQuantidadeMaior(vetor, maior);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = calculaDistancia(cat1, mouse);
  let distanciaCat2 = calculaDistancia(cat2, mouse);

  if (distanciaCat1 > distanciaCat2) {
    return 'cat2';
  } else if (distanciaCat2 > distanciaCat1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}
// Desafio 8
function fizzBuzz(vetor) {
  let divide = 0;
  for (let index = 0; index < vetor.length; index += 1) {
    divide += dividePor3(vetor[index]);
    divide += dividePor5(vetor[index]);
    vetor[index] = divide;
    divide = 0;
  }
  let vetorRefatorado = refatoraVetor(vetor);
  return vetorRefatorado;
}
// Desafio 9
function encode(codificar) {
  let codificado = codificar
    .split('a')
    .join('1')
    .split('e')
    .join('2')
    .split('i')
    .join('3')
    .split('o')
    .join('4')
    .split('u')
    .join('5');
  return codificado;
}
function decode(decodificar) {
  let decodificado = decodificar
    .split('1')
    .join('a')
    .split('2')
    .join('e')
    .split('3')
    .join('i')
    .split('4')
    .join('o')
    .split('5')
    .join('u');
  return decodificado;
}
// Desafio 10
function techList(vetor, name) {
  let arrayRetorno = [];
  let vetorOrdenado = vetor.sort();
  for (let index = 0; index < vetorOrdenado.length; index += 1) {
    arrayRetorno.push(objetoComNomeTecnologia(name, vetorOrdenado[index]));
  }
  if (arrayRetorno.length === 0) {
    return 'Vazio!';
  }
  return arrayRetorno;
}

function confereVetor(vetor) {
  for (let index = 0; index < vetor.length; index += 1) {
    if (vetor[index] < 0 || vetor[index] > 9) {
      return false;
    }
  }
  return true;
}

function confereRepeticoes(vetor) {
  let count = 0;
  for (let index = 0; index < vetor.length; index += 1) {
    for (let j = index; j < vetor.length; j += 1) {
      if (vetor[j] === vetor[index]) {
        count += 1;
      }
    }
    if (count > 2) {
      return false;
    }
    count = 0;
  }
  return true;
}

// Desafio 11
function generatePhoneNumber(vetor) {
  if (vetor.length !== 11) {
    return 'Array com tamanho incorreto.';
  } else if (confereVetor(vetor) && confereRepeticoes(vetor)) {
    let numero = `(${vetor.slice(0, 2).join('')}) ${vetor
      .slice(2, 7)
      .join('')}-${vetor.slice(7, 11).join('')}`;
    return numero;
  }
  return 'não é possível gerar um número de telefone com esses valores';
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let pode1 = ladoMaiorQueSomaOutros(lineA, lineB, lineC);
  let pode2 = ladoMenorQueSubOutros(lineA, lineB, lineC);
  return pode1 && pode2;
}

// Desafio 13
function hydrate(frase) {
  let coposDeAgua = 0;
  for (let index = 0; index < frase.length; index += 1) {
    coposDeAgua += ehNumero(frase[index]);
  }
  if (coposDeAgua === 1) {
    return '1 copo de água';
  }
  return `${coposDeAgua} copos de água`;
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
