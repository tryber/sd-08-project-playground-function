// Desafio 1
function compareTrue(param1, param2) {
  // seu código aqui
  if (param1 === true && param2 === true) {
    return true;
  } else {
    return false;
  } 
} console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let area = (base * height) / 2;
  return area;
} console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(tryber) {
  // seu código aqui
  let resultado = tryber.split(" ");
  return resultado;
}
  console.log(splitSentence("go trybe"));

// Desafio 4
function concatName(nomeCompleto) {
  // seu código aqui
  let nomeConc = nomeCompleto[""];
  for(let index = nomeCompleto.length; index > 0; index -= 1) {
    nomeConc = nomeCompleto[nomeCompleto.length - 1] + ", " + nomeCompleto[0]; 
  }
  return nomeConc;
} 
  console.log(concatName(["Lucas", "Cassiano", "Ferraz", "Paolillo"]));

  // Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let totalPontos = 0;
  let pontosVit = 3;
  let pontosEmp = 1;
  totalPontos = (pontosVit * wins) + (pontosEmp * ties);
  return totalPontos;
}
  console.log(footballPoints(2, 1));

// Desafio 6
function highestCount(numbers) {
  // seu código aqui
  let maiorNum = 0;
  let quantMaiAp = 0;
  for(let index in numbers) {
    if (numbers[index] > maiorNum) {
      maiorNum = numbers[index];
    }
  } 
    for(let index2 = 0; index2 < numbers.length; index2 += 1) {
      if (numbers[index2] === maiorNum) {
        quantMaiAp += 1
      }
    }
  
  
  return quantMaiAp;
}

  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let numbers =[];

for(let index = 1; index <= 15; index += 1){
    numbers.push(index);
}

}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let resultado = [];
  for(let index = 0; index < numeros.length; index += 1) {
    if (numeros[index] % 3 == 0 && numeros[index] % 5 == 0) {
      resultado.push ("fizzBuzz");
    } else if (numeros[index] % 3 == 0) {
      resultado.push ("fizz");
    } else if (numeros[index] % 5 == 0) {
      resultado.push ("buzz");
    } else {
      resultado.push ("bug!");
    }
    } 
    return resultado;
  }
  console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList(tech, name) {
  // seu código aqui
  //para resolver esta questão eu consultei as dúvidas de vários colegas no Slack
  tech.sort();
  let resultado = [];
  if (tech.length == 0) {
    return "Vazio!";
  } else {
    for(let index = 0; index < tech.length; index += 1) {
      let objeto = {
        tech: tech[index],
        name: name,
      };
      resultado.push(objeto);
    }
    return resultado;
  }
}

console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Víctor"));

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
