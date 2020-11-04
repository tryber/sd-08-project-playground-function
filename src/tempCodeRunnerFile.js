function fizzBuzz(array) {
  let resultado = []

    for (i in array) {
      if (array[i] % 3 === 0 && array[i] % 5 === 0) {
        resultado.push("fizzBuzz")

      } else if (array[i] % 3 === 0){
        resultado.push("fizz")

      } else if(array[i] % 5 === 0) {
        resultado.push("buzz")

      } else {
        resultado.push("bug")
      }
    } return resultado
} fizzBuzz([2, 15, 7, 9, 45])