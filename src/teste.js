function highestCount(input) {
    let arrayBase = []; 
     
    
    for (let i = 0; i < input.length; i+=1){
           arrayBase.push(input[i]);
    }
    arrayBase.sort(function(a, b){
        return a-b;
    });
    let numberOfRepeats = 1; 
    for(let i=arrayBase.length-1; i >= 0; i -= 1)
    if (arrayBase[i] == arrayBase[i-1]){
    numberOfRepeats += 1
    } else {
    break;
    }

    console.log(numberOfRepeats)
  }highestCount([9,1,2,3,9,5,7])