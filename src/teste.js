function highestCount(numbers) {
    let bigger = Math.max.apply(null, numbers);
    let repeat = 0;
    for(let index = 0; index < numbers.length; index +=1){
        if(numbers[index] == bigger){
            repeat += 1;
        }
    }
    return repeat;
    
}
console.log(highestCount([0, 4, 5, 6, 6, 7, 7]));