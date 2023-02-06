// write a function that will take 3 parameters and will return the min number

function minInArray(numbers) {
    let minNumber = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        if (element < minNumber) {
            minNumber = element;
        }
    }
    return minNumber;
}
const numberArray = [167, 190, 120];
const theMinNumber = minInArray(numberArray);
// console.log(theMinNumber);
function reverseString(text) {
    let reversed = '';
    for (let i = text.length - 1; i >= 0; i--) {
        const element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}

const myString = "GeeksforGeeks";
const reversed = reverseString(myString);
console.log(reversed);