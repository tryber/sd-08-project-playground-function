// Desafio 1
function compareTrue(valor1, valor2) {
  if (valor1 == true && valor2 == true) {
    return(true);
  } else {
    return(false);
  }  
}

// Desafio 2
function calcArea(base, height) {
  return((base*height)/2);
}

// Desafio 3
function splitSentence(string) {
  let novaString = string.split(" ");
  return(novaString);
}

// Desafio 4
function concatName(ordenar) {
  let ordenado = ordenar[ordenar.length-1] + ", " + ordenar[0];
  return(ordenado);
}

// Desafio 5
function footballPoints(wins, ties) {
  return((wins*3)+(ties*1));
}

// Desafio 6
function highestCount(numbers) {
  let contador = 0;
  let maior = 0
  for (indice = 0; indice < numbers.length; indice += 1) {
    if (maior < numbers[indice]){
    maior = numbers[indice];
    contador = 1;
    } else if (maior == numbers[indice]){
      contador += 1;
    }
  }
  return(contador);
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaCat1 = Math.abs(mouse-cat1);
  let distanciaCat2 = Math.abs(mouse-cat2);
  if (distanciaCat1 > distanciaCat2) {
    return("cat2");
  } else if (distanciaCat1 < distanciaCat2) {
    return("cat1");
  } else {
    return("os gatos trombam e o rato foge");
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let vetorResposta = []
  for (index = 0; index < numeros.length; index +=1) {
    if (numeros[index]%3 && numeros[index]%5 != 0) {
      vetorResposta.push("bug!");
    } else if (numeros[index]%3 == 0 && numeros[index]%5 == 0) {
      vetorResposta.push("fizzBuzz");
    }else if (numeros[index]%5 == 0) {
      vetorResposta.push("fizz")
    } else if (numeros[index]%3 == 0) {
      vetorResposta.push("buzz");
    }
  }
  return(vetorResposta);
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
