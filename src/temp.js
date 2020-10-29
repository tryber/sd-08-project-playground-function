function highestCount(array) {

    let bigger = array[0]
    let quantityOfBiggerNumber = 0;


   // let bigger = quantityOfNumbersFound[0];

      for ( let i = 1; i < array.length; i += 1) {
              if (bigger < array[i] ) {
                  bigger = array[i];
              }
      }
      for ( let i = 0; i < array.length; i += 1) {
        if ( array[i] == bigger) {
            quantityOfBiggerNumber += 1;
        }
    }
    console.log(quantityOfBiggerNumber)

  }

  highestCount([9, 1, 2, 3, 9, 5, 7])

  console.log(highestCount([9, 1, 2, 3, 9, 5, 7]))



  let quantityOfNumbersFound = [];
      for (let index = 0; index < array.length; index += 1) {
          let numberToCheck =  array[index];
          let quantityOfNumbers = 0;
          for ( let index2 = 0; index2 < array.length; index2 += 1 ) {
                  if (numberToCheck == array[index2]) {
                      quantityOfNumbers = quantityOfNumbers + 1;
                  }
          }
          quantityOfNumbersFound[index] = quantityOfNumbers;
      }
      //console.log(quantityOfNumbersFound)

      //console.log(quantityOfNumbersFound.indexOf(bigger))
      let numberMostRepeated = quantityOfNumbersFound.indexOf(bigger);

      //return array[numberMostRepeated]