function highestCount(numbers) {
    let repeat = 0;
    let bigger = 0;
    for(let index = 0; index < numbers.length; index += 1){
      if(numbers[index] > bigger){
       bigger = numbers[index];
      }else if(numbers[index] == bigger){
        repeat += 1;
      }
    }
    return repeat;
  }
console.log(highestCount([9, 1, 2, 3, 9, 5, 7, 9, 9]));