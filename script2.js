function techList(lista, name) {
  console.log("1");
  let minhaLista = [];
  console.log(minhaLista);
  //-------Condições-----
  if (lista == 0) {
    return "Vazio!";
  }
  //------Código------
  for (let indice = 0; indice < lista.length; indice += 1) {
    minhaLista.push({
      tech: lista[indice],
      name: name,
    });
  }
  console.log("3");
  //------Saída------
  return minhaLista;
}
//console.log(techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Jorge"));

/**
 *
 * Resolvi - 1. Caso array == 0  -> return 'Vazio!'
 * Resolvi - 2. O segundo parametro precisa ser nomeada: name
 * 3. A estrutura de cada elemento deve ser: 
 * {
        tech: "NomeTech",
        name: name
    }

    Resolvido - 4. Criar uma nova lista com os itens questao anterior
    5. A saida da funcao deve ser uma lista :

    Resolvi - 5,5 .Tal lista deve ter o seguinte formato:
     {
        tech: "NomeTech",
        name: name
    }

    6. Entradas da função: 
    ["React", "Jest", "HTML", "CSS", "JavaScript"] "Lucas"

    Resolvi - 7. Saída =
        [
        {
            tech: "CSS",
            name: "Lucas"
        },
        {
            tech: "HTML",
            name: "Lucas"
        },
        {
            tech: "JavaScript",
            name: "Lucas"
        },
        {
            tech: "Jest",
            name: "Lucas"
        },
        {
            tech: "React",
            name: "Lucas"
        }
        ]
 *
 */
