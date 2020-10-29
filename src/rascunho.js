function triangleCheck(lineA, lineB, lineC) {
    let a = Math.abs(lineA);
    let b = Math.abs(lineB);
    let c = Math.abs(lineC);
  
    if (a < b + c && b < a + c && c < a + b) {
      if(a > Math.abs(b - c) && b > Math.abs(a - c) && c > Math.abs(a - b)){
          return true;
      }
    } else {
      return false;
    }
  }

  console.log(triangleCheck(20,4,3))