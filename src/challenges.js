// Desafio 1
function compareTrue(num1,num2) {
  if (num1 == true && num2 == true) {
    return true;
  }

else { 
    return false;  
  }
}

// Desafio 2
function calcArea(base, height) {
    let areaTriangulo = (base*height)/2
    return areaTriangulo
}

// Desafio 3
function splitSentence(string) {
  let array = string.split(" ");
  return array;  
}

// Desafio 4
function concatName(lista) {
  let ultimo = [];
  let primeiro = [];
   ultimo.push(lista[lista.length -1]);
   primeiro.push(lista[0]);
   ultimo = ultimo.toString();
   primeiro = primeiro.toString();
   resposta = ultimo + ", " + primeiro;
    return resposta;
  } 
     
// Desafio 5
function footballPoints(wins,ties) {
    let finalScore = wins*3 + ties;
    return finalScore;
}

// Desafio 6
function highestCount(numeros) {
  let max = Math.max.apply(null, numeros)
  contador=0;
  for (let index = 0; index<numeros.length; index+=1) {
    if (numeros[index] === max){
      contador += 1
    } 
  } return contador;
} 

// Desafio 7
function catAndMouse(mouse,cat1,cat2) {
  cat1=cat1-mouse;
  cat2=cat2-mouse;
  if (Math.abs(cat1) < Math.abs(cat2)){
    return "cat1";
  }
  
  else if (Math.abs(cat2) < Math.abs(cat1)) {
    return "cat2"
    }
  else if (Math.abs(cat2) == Math.abs(cat1)){
    return "os gatos trombam e o rato foge";
  }
  }

// Desafio 8
function fizzBuzz(array) {
  let resposta = []
  for (let index = 0; index<array.length;index+=1){
    if (array[index]%3 == 0 && array[index]%5==0) {
      resposta.push ("fizzBuzz");
      
    }
    else if (array[index]%3 == 0 && array[index]%5 != 0) {
      resposta.push("fizz");
      
    }
    else if (array[index]%3 != 0 && array[index]%5 == 0) {
      resposta.push("buzz");
    
    }
    else if (array [index]%3 != 0 && array[index]%5 != 0) {
      resposta.push ("bug!");
    }

  }
    return resposta
}

// Desafio 9
function encode(string) {
    while (string.indexOf('a') != -1) {
      string = string.replace('a', 1);
    }

    while (string.indexOf('e') != -1) {
      string = string.replace('e', 2);
    } 

    while (string.indexOf('i') != -1) {
      string = string.replace('i', 3);
    }

    while (string.indexOf('o') != -1) {
      string = string.replace('o', 4);
    }

    while (string.indexOf('u') != -1) {
      string = string.replace('u', 5);
    } return string 
  } 
    
function decode(codigo) {
  while (codigo.indexOf(1) != -1) {
    codigo = codigo.replace(1, 'a');
  }

  while (codigo.indexOf(2) != -1) {
    codigo = codigo.replace(2, 'e');
  } 

  while (codigo.indexOf(3) != -1) {
    codigo = codigo.replace(3, 'i');
  }

  while (codigo.indexOf(4) != -1) {
    codigo = codigo.replace(4, 'o');
  }

  while (codigo.indexOf(5) != -1) {
    codigo = codigo.replace(5, 'u');
  } return codigo 
  }
  

// Desafio 10
function techList(listaTech, nome) {    
  let resposta = []
  let arrayOrdem = listaTech.sort ()
    if (listaTech.length === 0) {
    return "Vazio!";
  } else 
    for (let i = 0; i < listaTech.length; i += 1) {
      let objeto = {};  
      objeto.tech = arrayOrdem[i];
      objeto.name = nome;
      resposta.push (objeto) 
      
  }   return resposta
}      
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let confereA = lineA < lineB + lineC &&
        (lineA > Math.abs(lineB - lineC));

    let confereB = lineB < lineA + lineC &&
        (lineB > Math.abs(lineA - lineC));

    let confereC = lineC < lineB + lineA &&
        (lineC > Math.abs(lineA - lineB)); 

     return confereA && confereB && confereC;
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

