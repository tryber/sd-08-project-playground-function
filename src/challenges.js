// Desafio 1
function compareTrue(boolean1, boolean2) {
    return boolean1 && boolean2
}

// Desafio 2
function calcArea(base, height) {
    return (base * height) / 2
}

// Desafio 3
function splitSentence(string) {

    string = string.trim(); // Removing whitespaces from both ends of the string

    let stringsArray = [];
    stringsArray[0] = "";
    let index = 0;

    //Runnig across the string
    for (let char = 0; char < string.length; char += 1) {

        //If current character is not a space
        if (string[char] !== " ") {

            //Current character is concatenated to the current array position
            stringsArray[index] += string[char];

        } else {
            //If its a space, creates a new position in the array and initializes it as an empty String
            index += 1;
            stringsArray[index] = "";
        }

    }
    return stringsArray;
}

// Desafio 4
function concatName(fullName) {

    let firstName = fullName[0];
    let lastName = fullName[fullName.length - 1];

    return `${lastName}, ${firstName}`;

}

// Desafio 5
function footballPoints(wins, ties) {
    return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(numbersArray) {

    //Running highest(), that returns the position of the highest number
    let highestNum = numbersArray[highest(numbersArray)];

    //Stores the counting
    let counter = 0;

    //Running across the numbersArray
    for (let value = 0; value < numbersArray.length; value += 1) {

        //If it contains the highest number
        if (numbersArray[value] === highestNum) {
            counter += 1;
        }

    }

    //Returning the amount of times the highest number was found
    return counter;

}

function highest(array) {

    //Storing the current highest number 
    //(It stores the first value)
    let topNum = array[0]

    //Storing the current highest number's index
    let topIndex = 0

    //Running across the array
    //(It starts on the index 1, that will be compared to the index 0)
    for (let num = 1; num < array.length; num += 1) {

        //Comparing the current value to the current highest number
        if (array[num] > topNum) {

            //Storing its number
            topNum = array[num];

            //Storing its index
            topIndex = num;
        }

    }

    //Returning the index of the highest number found in the array
    return topIndex;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

    //Storing the distance between each cat and the mouse
    let distCat1 = Math.abs(cat1 - mouse);
    let distCat2 = Math.abs(cat2 - mouse);
    let result = "";

    if (distCat1 < distCat2) {
        result = "cat1";

    } else if (distCat2 < distCat1) {
        result = "cat2";

    } else {
        result = "os gatos trombam e o rato foge";
    }
    return result;
}

// Desafio 8
function fizzBuzz(arrayOfNum) {

    let fizzBuzzArray = [];

    //Running across the array of numbers given as a parameter
    for (let val = 0; val < arrayOfNum.length; val += 1) {


        if (
            //If current number is divisible by 3 and 5
            arrayOfNum[val] % 3 === 0 &&
            arrayOfNum[val] % 5 === 0
        ) {

            fizzBuzzArray.push("fizzBuzz");

        } else if (
            //If current number is divisible by 3
            arrayOfNum[val] % 3 === 0
        ) {

            fizzBuzzArray.push("fizz");

        } else if (
            //If current number is divisible by 5
            arrayOfNum[val] % 5 === 0
        ) {

            fizzBuzzArray.push("buzz");

        } else {
            //Else
            fizzBuzzArray.push("bug!");
        }

    }

    //Returning generated array
    return fizzBuzzArray;

}

// Desafio 9
function encode(phrase) {

    //Declaring arrays for conversion
    let vowels = ["a", "e", "i", "o", "u"];
    let numbers = ["1", "2", "3", "4", "5"];
    let encoded = "";

    //Running across the whole phrase, character by character
    for (let char = 0; char < phrase.length; char += 1) {

        //If current character is found in vowels array
        if (vowels.indexOf(phrase[char]) >= 0) {

            //The corresponding number is concatenated to the encoded String
            encoded += numbers[vowels.indexOf(phrase[char])];

        } else {
            encoded += phrase[char];
        }

    }

    //Returning the encoded phrase
    return encoded
}

function decode(phrase) {

    //Declaring arrays for conversion
    let vowels = ["a", "e", "i", "o", "u"];
    let numbers = ["1", "2", "3", "4", "5"];
    let decoded = "";

    //Running across the whole phrase, character by character
    for (let char = 0; char < phrase.length; char += 1) {

        //If current character is found in numbers array
        if (numbers.indexOf(phrase[char]) >= 0) {

            //The corresponding number is concatenated to the decoded String
            decoded += vowels[numbers.indexOf(phrase[char])];

        } else {
            decoded += phrase[char];
        }

    }

    //Returning the decoded phrase
    return decoded
}

// Desafio 10
function techList(techArray, namePar) {

    let sortedArray = techArray.sort();

    let list = [];

    if (techArray.length == 0) {
        return "Vazio!"

    } else {

        //Running through the techArray
        for (let tec = 0; tec < techArray.length; tec += 1) {

            list.push({
                tech: sortedArray[tec],
                name: namePar
            })

        }
        return list;
    }
}

// Desafio 11
function generatePhoneNumber(array11) {

    //Putting all the digits together in a String
    let numNoMask = array11.join("");

    let ddd = "";
    let leftNumber = "";
    let rightNumber = "";
    let numberWithMask = "";

    if (array11.length !== 11) {
        return "Array com tamanho incorreto."
    } else {

        //On the following, I used the concepts learned here:
        //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/slice


        //Picking the area code 
        ddd = numNoMask.slice(0, 2);

        //Picking the left half of the phone number
        leftNumber = numNoMask.slice(2, 7)

        //Picking the right half of the phone number
        rightNumber = numNoMask.slice(7, 11)

    }

    //Applying the telephone mask to the number
    numberWithMask = `(${ddd}) ${leftNumber}-${rightNumber} `

    //Returning the masked telephone number
    return numberWithMask;

}

console.log(generatePhoneNumber([2, 1, 3, 5, 7, 5, 4, 1, 9, 3, 2]));

// Desafio 12
function triangleCheck() {
    // seu código aqui
}

// Desafio 13
function hydrate() {
    // seu código aqui
}


module.exports = {
    calcArea,
    catAndMouse,
    compareTrue,
    concatName,
    decode,
    encode,
    fizzBuzz,
    footballPoints,
    generatePhoneNumber,
    techList,
    highestCount,
    hydrate,
    splitSentence,
    triangleCheck,
}