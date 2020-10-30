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
      vetorResposta.push("buzz")
    } else if (numeros[index]%3 == 0) {
      vetorResposta.push("fizz");
    }
  }
  return(vetorResposta);
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))


// Desafio 9
function encode(codigo) {
  if (typeof(codigo) == "string") {
    let codigoNovo = ""
    codigoNovo = codigo.replace(/a/g, "1");
    codigoNovo = codigoNovo.replace(/e/g, "2");
    codigoNovo = codigoNovo.replace(/i/g, "3");
    codigoNovo = codigoNovo.replace(/o/g, "4");
    codigoNovo = codigoNovo.replace(/u/g, "5");
    return(codigoNovo);
  }
}

function decode(codigo) {
  if (typeof(codigo) == "string") {
    let codigoNovo = ""
    codigoNovo = codigo.replace(/1/g, "a");
    codigoNovo = codigoNovo.replace(/2/g, "e");
    codigoNovo = codigoNovo.replace(/3/g, "i");
    codigoNovo = codigoNovo.replace(/4/g, "o");
    codigoNovo = codigoNovo.replace(/5/g, "u");
    return(codigoNovo);
  }
}

// Desafio 10
function techList(tech, name) {
  if (tech.length != 0){
    let objetos = [];
    tech.sort();
    for (index = 0; index < tech.length; index += 1){
      objetos.push(new Object({
      tech: tech[index],
      name: name}));
    }
    return(objetos);
  } else {
    return("Vazio!");
  }
}


// Desafio 11
function generatePhoneNumber(vetor) {
  if (vetor.length != 11){
    return("Array com tamanho incorreto.");
  }
  for (index = 0; index < vetor.length; index +=1){
    let contadorRepetido = 0;
    if (vetor[index] < 0){
      return("não é possível gerar um número de telefone com esses valores");
    } else if (vetor[index] > 9){
      return("não é possível gerar um número de telefone com esses valores");
    }
  
    for (segundoIndex = vetor.length; segundoIndex > index; segundoIndex -= 1) {
      if (vetor[segundoIndex-1] == vetor[index]){
        contadorRepetido +=1;
      } 
      if (contadorRepetido > 2) {
        return("não é possível gerar um número de telefone com esses valores");
      } 
    }
    contadorRepetido = 0;
  }
  
  let espaco = "-";
  let final = "";
  for (index = 1; index < vetor.length; index +=1) { 
    
    if (index == 1){
      final = "(" + vetor[index-1] + vetor[index] + ") ";
    } else if (index > 0 && index < 7) {
      final += vetor[index];
    } else if (index == 7) {
      final += espaco + vetor[index];
    } else if (index > 7) {
      final += vetor[index];
    }
  }
  return(final);
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
