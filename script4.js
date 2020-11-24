function triangleCheck(ladoA, ladoB, ladoC) {
  // seu código aqui
  if (ladoA < ladoB + ladoC && ladoA > Math.abs(ladoB - ladoC)) {
    return true;
  } else {
    return false;
  }
}

console.log(triangleCheck(10, 14, 8));
