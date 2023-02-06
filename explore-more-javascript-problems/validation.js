// if thre's number or string we can use if condition
function add(num1, num2){

    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'please enter a number';
    }
    return num1 + num2;
}
const result = add(12, 15);
const result2 = add(12, '15');
console.log(result);
console.log(result2);

// multiply
function multiply(num1, num2){
    return num1 * num2;
}
// dont use ---> const output = multiply(2*3);
const output = multiply(2,3);
console.log('multiply', output);