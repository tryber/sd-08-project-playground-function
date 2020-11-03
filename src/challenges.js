// Desafio 1
function compareTrue(n1, n2) {
  if (n1 % 2 == 1 && n2 % 2 == 1) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  calcArea = (base * height) / 2;
  return calcArea;
}

// Desafio 3
function splitSentence(frase) {
  splitSentence = frase.split(" ");
  return splitSentence;
}

/// Desafio 4
function concatName(arrayString) {
  let primeiroUltimo =
    arrayString[arrayString.length - 1] + ", " + arrayString[0];
  return primeiroUltimo;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties * 1;
  console.log(pontos);
  return pontos;
}

// Desafio 6
function highestCount(numbers) {
  let maiorNumber = 0;
  let contador = 0;

  for (let index = 0; index < numbers.length; index++) {
    if (maiorNumber < numbers[index]) {
      maiorNumber = numbers[index];
    }
  }

  for (let index2 = 0; index2 < numbers.length; index2++) {
    if (maiorNumber == numbers[index2]) {
      contador++;
    }
  }
  console.log(contador);

  return contador;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diferencaCat1 = Math.abs(mouse - cat1);
  let diferencaCat2 = Math.abs(mouse - cat2);

  if (diferencaCat1 < diferencaCat2) {
    return "cat1";
  } else if (diferencaCat2 < diferencaCat1) {
    return "cat2";
  }
  return "os gatos trombam e o rato foge";
}

// Desafio 8
function fizzBuzz(array) {
  const newArray = [];
  for (let valor of array) {
    if (valor % 3 == 0 && valor % 5 == 0) {
      newArray.push("fizzBuzz");
    } else if (valor % 5 == 0) {
      newArray.push("buzz");
    } else if (valor % 3 == 0) {
      newArray.push("fizz");
    } else {
      newArray.push("bug!");
    }
  }
  return newArray;
}

const objetoVogal = {
  ["a"]: 1,
  ["e"]: 2,
  ["i"]: 3,
  ["o"]: 4,
  ["u"]: 5,
};

const objetoNumero = {
  1: "a",
  2: "e",
  3: "i",
  4: "o",
  5: "u",
};

// Desafio 9
function encode(palavra) {
  const palavraArray = Array.from(palavra);
  for (let pos in palavraArray) {
    let letra = palavraArray[pos];
    if (letra in objetoVogal) {
      palavraArray[pos] = objetoVogal[letra];
    }
  }
  return palavraArray.join("");
}

function decode(palavra) {
  const palavraArray = Array.from(palavra);
  for (let pos in palavraArray) {
    let letra = palavraArray[pos];
    if (letra in objetoNumero) {
      palavraArray[pos] = objetoNumero[letra];
    }
  }
  return palavraArray.join("");
}

// Desafio 10
function techList(name) {}

// Desafio 11
function generatePhoneNumber(numeros) {
  const numeroTelefone = numeros.join("");
  const counts = {};
  numeros.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1;
  });
  const numeroRepetiu = Boolean(
    Object.values(counts).find((numero) => numero >= 3)
  );
  const numeroNegativo = Boolean(numeros.find((numero) => numero < 0));
  const numeroMaior9 = Boolean(numeros.find((numero) => numero > 9));
  const ddd = numeroTelefone.slice(0, 2);
  const telefoneInicio = numeroTelefone.slice(2, 7);
  const telefoneFinal = numeroTelefone.slice(7, 11);
  const numeroCompleto = `(${ddd})${telefoneInicio}-${telefoneFinal}`;

  if (numeroMaior9 || numeroRepetiu || numeroNegativo) {
    return "não é possível gerar um número de telefone com esses valores";
  }

  if (numeros.length === 11) {
    return numeroCompleto;
  } else if (numeros.length !== 11) {
    return "Array com tamanho incorreto";
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {}

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
};
