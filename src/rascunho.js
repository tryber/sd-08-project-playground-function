function fizzBuzz(arr) {
    let result = []
    for(let i in arr){
        if(arr[i] % 3 == 0 && arr[i] % 5 == 0){
            result.push("fizzBuzz")
        }
        else if(arr[i] % 3 == 0){
            result.push("fizz")
        }
        else if(arr[i] % 5 == 0){
            result.push("buzz")
        }
        else{
            result.push("bug!")
        }
    }
    return result;
  }

  console.log(fizzBuzz([2, 15, 7, 9, 45]));