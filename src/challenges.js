// Desafio 1
function compareTrue(n1,n2) {
  if(n1 && n2) {
    return true
  } else {
    return false
  }
}
// Desafio 2
function calcArea(base, height) {
  let calculo = (base * height) / 2;
  return calculo;
}

// Desafio 3
function splitSentence(frase) {
  frase = frase.split(/\s+/);
  return frase;
}

// Desafio 4
function concatName(nome) {
  
  let resultado = nome[nome.length - 1] + ", " + nome[0];
    return resultado;
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = wins * 3 + ties *1;
  return resultado;
}

// Desafio 6
function highestCount(valores) {
  let maiorNumero = 0;
  let cont = [];
  for(let i = 0; i < valores.length; i += 1){
    if(valores[i] > maiorNumero) {
      maiorNumero = valores[i];
    }
  }
  for(let index in valores) {
    if(valores[index] == maiorNumero) {
        cont.push(valores[index]);
    }

  }
  return cont.length;
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(numeros) {
  let resultado = [];
  for(let i = 0; i < numeros.length; i += 1) {
    if(numeros[i] % 3 == 0 && numeros[i]% 5 == 0) {
      resultado.push("fizzBuzz");
    } else if (numeros[i] % 3 == 0) {
      resultado.push("fizz");
    } else if (numeros[i] % 5 == 0) {
      resultado.push("buzz");
    } else {
      resultado.push("bug!");
    }
  }
    return resultado;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(tech, name) {

    if(tech.length === 0) {
      return "Vazio!";
}
    tech.sort();
    let lista = [];
    for(let index in tech) {
      lista.push ({
        tech: tech[index],
        name: name,
      });
    }
    return lista;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
    
    Math.abs(lineA, lineB, lineC);
  
    if(lineA < lineB + lineC &&  lineA > lineB - lineC) {
        return true;
    } else if(lineB < lineA + lineC && lineB > lineA - lineC) {
        return true;
    } else if(lineC < lineA + lineB && lineC > lineA - lineB) {
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
