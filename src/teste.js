// Crie uma função chamada fizzBuzz que receba uma array de números e retorne uma array da seguinte forma:

// Para cada número da Array que seja divisível apenas por 3, apresente uma string "fizz";
// Para cada número da Array que seja divisível apenas por 5, apresente uma string "buzz";
// Caso o número seja divisível por 3 e 5, retorne a string "fizzBuzz";
// Caso o número não possa ser dividido por 3 nem por 5, retorne a string "bug!";
// Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar ["bug!", "fizzBuzz", "bug!", "fizz", "fizzBuzz"].

function catAndMouse(mouse, cat1, cat2) {
    let closestCat = "";
    if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
      closestCat = "cat1";
    } else if (Math.abs(cat2 - mouse)  < Math.abs(cat1 - mouse)) {
      closestCat = "cat2";
    } else {
      closestCat = "os gatos trombam e o rato foge";
    }
    return closestCat;
  }
  catAndMouse(1, 0, 2);