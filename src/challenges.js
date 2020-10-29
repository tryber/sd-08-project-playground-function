// Desafio 1
function compareTrue(valorLogicoA, valorLogicoB) 
{
  if(valorLogicoA === true && valorLogicoB === true)
  {
    return true;
  }
  else
  {
    return false;
  }
}

// console.log(compareTrue(true, true));
// console.log(compareTrue(false, true));

// Desafio 2
function calcArea(base, height) 
{
  return (base * height) / 2;
}

//console.log(calcArea(10, 4));

// Desafio 3
function splitSentence(texto) 
{
  return texto.split(" ");
}

//console.log(splitSentence("go Trybe"));

// Desafio 4
function concatName(array) 
{
  return array[array.length - 1] + ', ' + array[0];
}

//console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) 
{
  return wins * 3 + ties;
}

//console.log(footballPoints(10, 3));

// Desafio 6
function highestCount(arrayNumeros) 
{
  let cont = 0;
  let maiorValor = maiorNumeroDoVetor(arrayNumeros);

  for (let pos in arrayNumeros) 
  {
      if (arrayNumeros[pos] === maiorValor) 
      { 
          cont += 1;
      }        
  }    

  return cont;
}

function maiorNumeroDoVetor(arrayNumeros)
{
  let maiorValor = arrayNumeros[0];
  for (let pos in arrayNumeros) 
  {
      if (arrayNumeros[pos] > maiorValor) 
      { 
          maiorValor = arrayNumeros[pos];
      }        
  }    

  return maiorValor;
}

//console.log(maiorNumeroDoVetor([9, 1, 2, 3, 9, 5, 7]));
//console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) 
{
  let distanciaEntreRatoGato1 = 0;
  let distanciaEntreRatoGato2 = 0;

  distanciaEntreRatoGato1 = Math.abs(mouse - cat1);
  distanciaEntreRatoGato2 = Math.abs(mouse - cat2);

  if(distanciaEntreRatoGato1 === distanciaEntreRatoGato2)
  {
    return "os gatos trombam e o rato foge";
  }
  else if(distanciaEntreRatoGato1 > distanciaEntreRatoGato2)
  {
    return "cat2";
  }
  else
  {
    return "cat1";
  }

}

// console.log(catAndMouse(0, 3, 2));
// console.log(catAndMouse(10, 4, 22));
// console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrayNumeros) 
{
  let arrayFizzBuzz = [];
  let numero;

  for(let indice = 0; indice < arrayNumeros.length; indice++)
  {
    numero = arrayNumeros[indice];

    if(numero % 3 == 0 && numero % 5 == 0)
    {
      arrayFizzBuzz.push("fizzBuzz");
    }
    else if(numero % 3 != 0 && numero % 5 != 0)
    {
      arrayFizzBuzz.push("bug!");
    }
    else if(numero % 5 == 0)
    {
      arrayFizzBuzz.push("buzz");
    }
    else if(numero % 3 == 0)
    {
      arrayFizzBuzz.push("fizz");
    }
  }

  return arrayFizzBuzz;
}

//console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(texto) 
{
  let novoTexto = "";
  let palavra;

  for (let pos in texto)
  {
    palavra = texto[pos];

    switch (palavra) 
    {
      case 'a':
        novoTexto = novoTexto + "1";
        break;
      case 'e':
        novoTexto = novoTexto + "2";
        break;
      case 'i':
        novoTexto = novoTexto + "3";
        break;
      case 'o':
        novoTexto = novoTexto + "4";
        break;
      case 'u':
        novoTexto = novoTexto + "5";
        break;
      default:
        novoTexto = novoTexto + palavra;
    }
  }

  return novoTexto;
}
function decode(texto) 
{
  let novoTexto = "";
  let palavra;

  for (let pos in texto)
  {
    palavra = texto[pos];

    switch (palavra) 
    {
      case '1':
        novoTexto = novoTexto + "a";
        break;
      case '2':
        novoTexto = novoTexto + "e";
        break;
      case '3':
        novoTexto = novoTexto + "i";
        break;
      case '4':
        novoTexto = novoTexto + "o";
        break;
      case '5':
        novoTexto = novoTexto + "u";
        break;
      default:
        novoTexto = novoTexto + palavra;
    }
  }

  return novoTexto;
}

// console.log(encode("hi there!"));
// console.log(decode("h3 th2r2!"));

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
