// write a number that will take 3 numbers will return the max number , min number
const num1 = 23;
const num2 = 13;
const num3 = 50;
// else if
if (num1 > num2 && num1 > num3) {
    console.log('num1 will be the max number');
}
else if (num2 > num1 && num2 > num3) {
    console.log('num2 is max number');
}
else if (num3 > num1 && num3 > num2) {
    console.log('num3 is max number');
}

// Math.max
console.log('max number', Math.max(num1, num2, num3));
console.log('min number:', Math.min(num1, num2, num3));