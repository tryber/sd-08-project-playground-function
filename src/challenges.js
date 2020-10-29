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
    let distCat1 = cat1 - mouse;
    let distCat2 = cat2 - mouse;
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
function encode() {
    // seu código aqui
}

function decode() {
    // seu código aqui
}

// Desafio 10
function techList() {
    // seu código aqui
}

// Desafio 11
function generatePhoneNumber() {
    // seu código aqui
}

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