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
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return "cat1";
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
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

    if((lineA < lineB + lineC &&  lineA > Math.abs(lineB - lineC)) && (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) && lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
        return true;
    } else {
      return false;
    }
  }

// Desafio 13
function hydrate(bebidas) {
  let numeroDeCopos = 0;
  for(let index in bebidas) {
    if (parseInt(bebidas[index])) {
      numeroDeCopos += parseInt(bebidas[index]);
    }
  }
    if (numeroDeCopos === 1) {
      return numeroDeCopos + " copo de água";
    } else {
      return numeroDeCopos + " copos de água";
    }
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
