function highestCount(array) {
  // seu código aqui
  array.sort();
  
  let greatest = array[array.length - 1];

  for (let contador = array.length - 1; contador >= 0; contador -= 1) {
    if (greatest === array[contador]) {
      contador += 1;
    }
  }

  return contador;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));