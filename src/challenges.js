// Desafio 1
function compareTrue(valor1, valor2) {
  let verd = true

  if (valor1 && valor2 === verd) {
    return true
  }
  else {
    return false
  }
}
console.log(compareTrue(true, true))

// Desafio 2
function calcArea(base, height) {

  let calculo = (base * height) / 2

  return calculo
}
console.log(calcArea(20, 4))

// Desafio 3 
function splitSentence(string) {

  let spliting = string.split(' ');

  return spliting

}
console.log(splitSentence("oi meu nome e mateus"))



// Desafio 4  s
function concatName(array) {





  return array[array.length - 1] + "," + " " + array[0]
}




console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))

// Desafio 5
function footballPoints(wins, ties) {

  let vitorias = wins * 3
  let empates = ties * 1

  return vitorias + empates



}

console.log(footballPoints(9, 5))

// Desafio 6
function highestCount(seq) {

  let maior = Math.max.apply(null, seq)

  let contador = 0;

  for (let i = 0; i < seq.length; i++) {
    if (seq[i] == maior) {
      contador += 1;
    }
  }

  return contador

}

console.log(highestCount([9, 1, 9, 3, 9, 5, 7]))

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let posicaofalta1 = Math.abs(mouse - cat1);
  let posicaofalta2 = Math.abs(mouse - cat2);

  if (posicaofalta1 < posicaofalta2) {
    return "cat1"
  }
  else if (posicaofalta2 < posicaofalta1) {
    return "cat2"
  }
  else {
    return "os gatos trombam e o rato foge"
  }




}

console.log(catAndMouse(6, 4, 3))

// Desafio 8
function fizzBuzz(nmrs) {

  let sequencia = [];

  for (let i = 0; i < nmrs.length; i += 1) {

    if (nmrs[i] % 3 == 0 && nmrs[i] % 5 != 0) {
      sequencia.push("fizz")
    }
    else if (nmrs[i] % 5 == 0 && nmrs[i] % 3 != 0) {
      sequencia.push("buzz")
    }
    else if (nmrs[i] % 3 == 0 && nmrs[i] % 5 == 0) {

      sequencia.push("fizzBuzz")

    }
    else if (nmrs[i] % 3 != 0 && nmrs[i] % 5 != 0)
      sequencia.push("bug!")


  }
  return sequencia

}

console.log(fizzBuzz([2, 15, 7, 9, 45]))

// Desafio 9
function encode(palavra) {

  let list = palavra.split("")

  for (let i = 0; i < list.length; i++) {
    if (list[i] == "a") {
      list[i] = 1
    }
    else if (list[i] == "e") {
      list[i] = 2
    }
    else if (list[i] == "i") {
      list[i] = 3
    }
    else if (list[i] == "o") {
      list[i] = 4
    }
    else if (list[i] == "u") {
      list[i] = 5
    }
  }
  let zen = list.join("")

  return zen


}
console.log(encode("hi there"))

function decode(palavra1) {

  let list1 = palavra1.split("")

  for (let i = 0; i < list1.length; i++) {
    if (list1[i] == 1) {
      list1[i] = "a"
    }
    else if (list1[i] == 2) {
      list1[i] = "e"
    }
    else if (list1[i] == 3) {
      list1[i] = "i"
    }
    else if (list1[i] == 4) {
      list1[i] = "o"
    }
    else if (list1[i] == 5) {
      list1[i] = "u"
    }
  }
  let zen1 = list1.join("")

  return zen1

}

console.log(decode("h3 th2r2!"))

// Desafio 10
function techList(tec, name) {


  let listaOrdena = tec.sort();

  let arrayvazio = "";
  let arraycriado = [];


  if (listaOrdena.length === 0) {
    return "Vazio!"
  }

  for (let key in tec) {

    if (listaOrdena === []) {
      arrayvazio = "Vazio!"

    }
    else {

      arraycriado.push({
        tech: listaOrdena[key],
        name: name
      })

    }

  }

  return arraycriado
}

console.log(techList(["tec1", "tec2", "tec3"], "zin"))

// Desafio 11
function generatePhoneNumber(array) {


  if (array.length != 11) {
    return "Array com tamanho incorreto"
  }


  for (let i = 0; i < array.length; i++) {
    let cont = 0;
    for (let i1 = 0; i1 < array.length; i1++) {
      if (array[i] == array[i1]) {
        cont = cont + 1
      }


      
       if (array[i] < 0 || array[i] > 9 || cont >= 3) {

        return "não é possível gerar um número de telefone com esses valores"

      }
      
        
    

    }
    return  "(" + array[0] + array[1] + ")" + " " + array[2] + array[3] + array[4] + array[5] + array[6] + "-" + array[7] + array[8] + array[9]+ array[10]



  }
}

  //funcao e $

  console.log(generatePhoneNumber([3, 4, 8, 4, 3, 6, 5, 8, 9, 0, 1]))
  
  // Desafio 12
  function triangleCheck(lineA, lineB, lineC) {

    if (lineA < (lineB + lineC) && Math.abs(lineA > (lineB - lineC))) {
      return true
    }
    else {
      return false
    }



  }

  console.log(triangleCheck(10, 14, 8))



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
