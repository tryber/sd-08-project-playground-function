let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1,2];

let nNumber = [];

if (number.length > 11) {
    console.log("Array com tamanho incorreto.");
} else if (){
    
}

else {
    for (let i = 0; i < number.length; i += 1) {
        if (nNumber[0] === undefined) {
            nNumber.push('(');
            nNumber.push(number[i]);
        } else if (nNumber.length < 3) {
            nNumber.push(number[i]);
            nNumber.push(') ');
        } else if (nNumber.length < 9) {
            nNumber.push(number[i]);
        } else if (nNumber.length === 9) {
            nNumber.push('-', number[i]);
        } else if (i < number.length) {
            nNumber.push(number[i]);
        }
        console.log(nNumber);
    }
}