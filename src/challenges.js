// >>----------> Desafio 1
function compareTrue(primeiroBoleano, segundoBolenao) {
  
  if (primeiroBoleano == true && segundoBolenao == true) {
    return true;
  } else if(primeiroBoleano == false || segundoBolenao == false){
    return false;
  }
}
// let a = true, b = false;
// console.log(compareTrue(a, b));

// >>----------> Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
// console.log(calcArea(2, 6));

// >>----------> Desafio 3
function splitSentence(string) {
  let retorno = [];
  let pegaArray = '';

  for (let indice = 0; indice <= string.length; indice++) {
    if (string[indice] == ' ' || indice == string.length){
      retorno.push(pegaArray);
      pegaArray = '';
    }else if (string[indice] != ' ') {
      pegaArray += string[indice];
    }
  }
  return retorno;
}
// console.log(splitSentence('wr ra'));

// >>-----------> Desafio 4
function concatName(theArray) {
  let saida = theArray[theArray.length-1] + ', ' + theArray[0];
  return saida;
}
// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// >>----------> Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// console.log(footballPoints(1, 3));

// >>----------> Desafio 6
function highestCount(entrada) {
  let maior = Math.max.apply(Math, entrada);
  
  let repeticoes = 0;

  for (let indice in entrada) {
    if (maior == entrada[indice]) {
      repeticoes++ ;
    }
  }
  return repeticoes;
}
  // console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9]));

// >>----------> Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.sqrt(Math.pow((mouse - cat1), 2)); // Fórmula simplificada de menor distância: Teorema de Pitagoras.
  let dCat2 = Math.sqrt(Math.pow((mouse - cat2), 2)); // >>----------> dAB = radix² (A - B)²
  
  if (dCat1 == dCat2)  {
    return 'os gatos trombam e o rato foge';

  } else if (dCat1 == 0 || dCat1 < dCat2) {
    return 'cat1';

  } else if (dCat2 == 0 || dCat1 > dCat2) {
    return 'cat2';
  }
}
// console.log(catAndMouse(-1, 3, 4));

// >>----------> Desafio 8
function fizzBuzz(arrayFizz) {
  let mesageFizz = [];

  for (let indice in arrayFizz) {
    if(arrayFizz[indice] % 3 == 0 && arrayFizz[indice] % 5 == 0){
      mesageFizz.push("fizzBuzz");

    } else if (arrayFizz[indice] % 3 == 0) {
      mesageFizz.push("fizz");

    } else if (arrayFizz[indice] % 5 == 0) {
      mesageFizz.push("buzz");
    
    } else {
      mesageFizz.push("bug!");
    }
  }
  return mesageFizz;
}
// console.log(fizzBuzz([2, 15, 7, 9, 45]));

// >>----------> Desafio 9
function encode(string) {
  let encode = '';
  for (let indice in string) {
    if (string[indice] == 'a') {
      encode += '1';
    }else if (string[indice] == 'e') {
      encode += '2';
    }else if(string[indice] == 'i') {
      encode += '3';
    }else if(string[indice] == 'o') {
      encode += '4';
    }else if(string[indice] == 'u') {
      encode += '5';
    } else encode +=string[indice];
  }
  return encode;
}
// >>-----> # <-----<<
function decode(string) {
  let decode = '';
  for (let indice in string) {
    if (string[indice] == '1') {
      decode += 'a';
    }else if (string[indice] == '2') {
      decode += 'e';
    }else if(string[indice] == '3') {
      decode += 'i';
    }else if(string[indice] == '4') {
      decode += 'o';
    }else if(string[indice] == '5') {
      decode += 'u';
    } else decode +=string[indice];
  }
  return decode;
}
// let teste = encode('hi there!')
// let teste2 = decode(encode('h3 there!'));
// console.log(teste);
// console.log(teste2);
// console.log(decode('h3 th2r2!'));

// >>----------> Desafio 10
function techList(arrayObjects) {

  // seu código aqui
}
let entrada = [
{
  tech: "React",
  name: "Lucas"
},
{
  tech: "Jest",
  name: "Marciano"
}, 
{
  tech: "HTML",
  name: "Covidelson"
}, 
{
  tech: "CSS",
  name: "Quarentenelson"
}, 
{
  tech: "JavaScript",
  name: "Richardelson"
}, 
{
  tech: "Lucas",
  name: "Amanhandelson"
}];
console.log(entrada[0].tech);


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
