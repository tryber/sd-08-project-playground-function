function triangleCheck(lineA, lineB, lineC) {
  return (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC) && lineB < lineA + lineC && lineB > Math.abs(lineA - lineC) && lineC < lineA + lineB && lineC > Math.abs(lineA - lineB));
}
console.log(triangleCheck(10, 14, 8000));