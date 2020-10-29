function highestCount(numeros) {
    let biggerNumber = 0
    let repeat = 0
    for(let index in numeros){
        if(numeros[index] > biggerNumber){
            biggerNumber = numeros[index]
        }
        else{}
    }
    for(let i in numeros){
        if(numeros[i] === biggerNumber){
            repeat += 1
        }
    }
    return repeat
  }

  console.log(highestCount([9, 9, 2, 3, 9, 5, 7]))