// Desafio 1
function compareTrue(a,b) {
  return(a && b)
}
// Desafio 2
function calcArea(base,height) {
  return(base*height)/2
}

// Desafio 3
function splitSentence(resultado) {
  return resultado.split(" ");
}

// Desafio 4
function concatName(param1) {
  return param1[param1.length -1]+ ', '+ param1[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numeros) {
  let maiorValor = numeros[0];
  for (let i = 0; i < numeros.length; i += 1){
    if (numeros[i] > maiorValor){
      maiorValor = numeros[i];
    }
  }
  let repetido = 0;
  for (let j = 0; j < numeros.length; j += 1){
    if (numeros[j] === maiorValor){
      repetido += 1;
    }
  }
  return repetido;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2){
    let distanciaRatoGato1 = Math.abs(cat1 - mouse);
    let distanciaRatoGato2 = Math.abs(cat2 - mouse);
    let ganhador;
    if(distanciaRatoGato1 === distanciaRatoGato2)
    {
      let trombar = "os gatos trombam e o rato foge"
      return trombar;
    }
    else if(distanciaRatoGato1 > distanciaRatoGato2)
    {
      ganhador = "cat2"
      return ganhador;
    }
    else
    {
      ganhador = "cat1"
      return ganhador ;
    }
  
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1){
    if (array[i] % 3 == 0 && array[i] % 5 == 0){
      resultado.push("fizzBuzz")
    } else if (array[i] % 3 == 0){
      resultado.push("fizz");
    } else if (array[i] % 5 == 0){
      resultado.push("buzz");
    } else {
      resultado.push("bug!")
    }
  }
  return resultado;
}

// Desafio 9
function encode(string) {
  let cod = "";
  for (let index = 0; index < string.length; index += 1){
    if (string[index] == "a"){
      cod += "1";
    } else if (string[index] == "e"){
      cod += "2";
    } else if (string[index] == "i"){
      cod += "3";
    } else if (string[index] == "o"){
      cod += "4";
    } else if (string[index] == "u"){
      cod += "5";
    } else {
      cod += string[index]
    }
  }
  return cod;
}
function decode(cod) {
  let frase = "";
  for (let index = 0; index < cod.length; index += 1){
    if (cod[index] == "1"){
      frase += "a";
    } else if (cod[index] == "2"){
      frase += "e";
    } else if (cod[index] == "3"){
      frase += "i";
    } else if (cod[index] == "4"){
      frase += "o";
    } else if (cod[index] == "5"){
      frase += "u";
    } else {
      frase += cod[index]
    }
  }
  return frase;
}

// Desafio 10
function techList(techArray, seuNome) {
  let array = techArray.sort();
  let vazio = "Vazio!";
  let saida = [];

  if (techArray.length > 0){
    for (let key in array){
        let objeto = {};
        objeto.tech = array[key];
        objeto.name = seuNome;
        saida.push(objeto);
  }
    return saida;
} else {
    return vazio;
}
}

// Desafio 11
function generatePhoneNumber(number) {
  let phone = "";
  let error = "Array com tamanho incorreto."
  let sorry = "não é possível gerar um número de telefone com esses valores"
  if (number.length == 11){
      let sorted = number.slice().sort();
      for (let key = 0; key < number.length; key+= 1){
          anterior = (key-1);
          proximo = (key+1);
          if (sorted[key] < 0 || sorted[key] > 9){
              return sorry;
              break;
          } else if (sorted[key] == sorted[anterior] && sorted[key] == sorted[proximo]){
              return sorry;
              break;
          } else if (key == 0){
              phone += "(";
              phone += number[key];
          } else if (key == 1){
              phone += number[key];
              phone += ")";
              phone += " ";
          } else if (key > 1 && key < 6){
              phone += number[key];   
          } else if (key == 6) { 
              phone += number[key]
              phone += "-"
          } else if (key >= 7) {
              phone += number[key];
          }
      }
      return phone;
  } else {
      return error;
  }
}

// Desafio 12
function triangleCheck(linhaA, linhaB, linhaC) {
   let soma, somaAbsoluta;
    soma = linhaA + linhaB;
    somaAbsoluta = Math.abs(linhaA - linhaB)

  if(linhaC < soma && linhaC > somaAbsoluta)
  {
    return true;
  }
  else
  {
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