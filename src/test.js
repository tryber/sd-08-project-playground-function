// const multipliesFor2 = (arrayNumber)=> {
//   let cont = []
//   arrayNumber.forEach((element) => {
//   if(element % 3 === 0 && element % 5 === 0) {
//     cont.push('fizzBuzz');
//   } else if (element % 3 === 0) {
//     cont.push('fizz')
//   } else if (element % 5 === 0) {
//     cont.push('buzz')
//   } else {
//     cont.push('bug')
//   }
// })
// return console.log(cont)
// };

// multipliesFor2([2, 15, 7, 9, 45])

const multipliesFor2 = (arrayNumber)=> 
  arrayNumber.reduce((acc, curr, index, arr) => {
  if(arr[index] % 3 === 0 && arr[index] % 5 === 0) {
    acc +='fizzBuzz';
  } else if (arr[index] % 3 === 0) {
    acc += 'fizz'
  } else if (arr[index] % 5 === 0) {
    acc += 'buzz'
  } else {
    acc =+ 'bug'
  }
  return acc
})

;

console.log(multipliesFor2([2, 15, 7, 9, 45]))