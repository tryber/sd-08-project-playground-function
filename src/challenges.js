// Desafio 1
function compareTrue(valorLogicoA, valorLogicoB){
  if(valorLogicoA === true && valorLogicoB === true){
    return true;}
  else{
    return false;}}

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
function techList(arrayNomesTecnologia, name)
{
  if(arrayNomesTecnologia.length === 0)
  {
    return "Vazio!";
  }

  let novoArrayNomesTecnologiaOrdenado = arrayNomesTecnologia.sort();
  let novoArrayNomesTecnologia = [];

  for(let indice = 0; indice < novoArrayNomesTecnologiaOrdenado.length; indice++)
  {
    let tech = 
    {
      tech: null,
      name: null
    };

    tech.tech = novoArrayNomesTecnologiaOrdenado[indice];
    tech.name = name;

    novoArrayNomesTecnologia.push(tech);
  }

  return novoArrayNomesTecnologia;
}

// console.log(techList([], "Lucas"));
// console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas"));

// Desafio 11
function generatePhoneNumber(arrayNumeroTelefone)
{
  if(arrayNumeroTelefone.length != 11)
  {
    return "Array com tamanho incorreto.";
  }

  let numero;
  let numeroTelefone = "";
  let numeroTelefoneFormatado = "";

  for(let indice = 0; indice < arrayNumeroTelefone.length; indice++)
  {
    numero = arrayNumeroTelefone[indice];

    if(numero < 0 || numero > 9 || contaNumeros(numero, arrayNumeroTelefone) >= 3)
    {
      return "não é possível gerar um número de telefone com esses valores";
    }

    numeroTelefone = numeroTelefone + numero;
  }

  numeroTelefoneFormatado = formataTelefone(numeroTelefone);

  return numeroTelefoneFormatado;
}

function contaNumeros(numero, numeros)
{
    cont = 0;
    for(let pos in numeros)
    {
        if(numeros[pos] === numero)
        {
            cont += 1;
        }
    }
    return cont;
}

function formataTelefone(numeroTelefone)
{
  let numeroTelefoneFormatado = "(" + numeroTelefone.substring(0, 2) + ") " + numeroTelefone.substring(2, 7) + "-" + numeroTelefone.substring(7, 11);

  return numeroTelefoneFormatado;
}

//console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC)
{
  let soma1, somaAbsoluta;

  soma1 = lineA + lineB;
  somaAbsoluta = Math.abs(lineA - lineB)

  if(lineC < soma1 && lineC > somaAbsoluta)
  {
    return true;
  }
  else
  {
    return false;
  }
}

//console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(texto)
{
  let textoSoNumeros = texto.replace(/\D/g, "");
  let somaBebidas = 0;
  let totalCoposDeAgua = 0;

  for(let indice in textoSoNumeros)
  {
    somaBebidas += Number(textoSoNumeros[indice]);
  }

  totalCoposDeAgua = somaBebidas * 1;

  if(totalCoposDeAgua === 1)
  {
    return totalCoposDeAgua + " copo de água";
  }
  else
  {
    return totalCoposDeAgua + " copos de água";
  }
}

//console.log(hydrate("1 cerveja"));
//console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

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
