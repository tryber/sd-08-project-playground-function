// Crie uma função que recebe um array de nomes de tecnologias que você quer aprender. Essa função deve receber também um segundo parâmetro chamado name com um nome.

// Para cada tecnologia no array, crie um objeto com a seguinte estrutura:

// {
//   tech: "NomeTech",
//   name: name
// }
// Estes objetos devem ser inseridos em uma nova lista em ordem crescente a partir do campo tech no objeto.

// A saída da sua função deve ser uma lista de objetos ordenada pelo campo tech dos objetos com o formato acima.

// Exemplo:

// Entradas da função:

// ["React", "Jest", "HTML", "CSS", "JavaScript"]
// "Lucas"

// // Saída:

// [
//   {
//     tech: "CSS",
//     name: "Lucas"
//   },
//   {
//     tech: "HTML",
//     name: "Lucas"
//   },
//   {
//     tech: "JavaScript",
//     name: "Lucas"
//   },
//   {
//     tech: "Jest",
//     name: "Lucas"
//   },
//   {
//     tech: "React",
//     name: "Lucas"
//   }
// ]
// Caso o array venha vazio sua função deve retornar 'Vazio!'

let arry = [];
  let aOrdem = tech.sort();

  if(aOrdem.length === 0){
      return 'Vazio!'
  }

  for (let cont = 0; cont < tech.length-1; cont +=1){
    array.push({
      tehc: array[cont];
      name: name
    })
  }



  