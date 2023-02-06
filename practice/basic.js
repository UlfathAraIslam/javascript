let friends = 'kabul';
const friendsType = typeof('kabul');
// console.log(friendsType);

let isHappy = true;
const isHappyType = typeof(isHappy);
// console.log(isHappyType);

let numbers = 1223;
const numbersType = typeof(numbers);
// console.log(numbersType);

let age = 12;
age = 13;
const countryName = 'Bangladesh';

// console.log(age, countryName);

let num1 = 6;
let num2 = 5;
const sum = num1 + num2;
// console.log(sum);

const substract = num1 - num2;
// console.log(substract);

const multyplycation = num1 * num2;
// console.log(multyplycation);

const devition = num1 / num2;
// console.log(devition);

const remaider = num1 % num2;
// console.log (remaider);

if ( num1 > num2 || num2 < num1 || num1 == num2 || num1 != num2 || num1 <= num2 || num1 >= num2 ){
    // console.log (true);
}
// else { console.log(false)};

if (num1 > num2 && num1 != num2){
    // console.log('num1 is greater than num2');
}
else if ( num2 < num1 || num1 >= num2){
    // console.log('num2 is greater than num 2')
}

// odd number 7 - 19
let num = 5;
while(num < 19){
    
    num = num + 2;
    // console.log(num);
}

let array =  [2,4,5,6,7,9, 10,90];
// console.log (array.length);
array [4] = 100;
// console.log('new number added:', array);

//  add & remove element
let myFriends = ['rahi', 'jolly', 'poly'];
myFriends.push('molly', 'loly');
myFriends.pop();
// console.log(myFriends);

// to show all elements in a for loop
for(let i = 0; i < myFriends.length; i++){
    // console.log('all elements:', myFriends);
}
//  numbers greater than 80   
let nums = [56, 89, 90, 100, 44,999];
let greaterNum = nums[0];
for(let i = 0; i < nums.length; i++){
    const num = nums[i];
    if (nums[i] > greaterNum){
        greaterNum = nums[i];
        // console.log(greaterNum);
    }
    
    // if(num > 80){
    //     console.log(num);
    // }
}


// multiply for 3 numbers
function multyply(num1, num2, num3){
    let result = num1 * num2 * num3;
    return result;
}
const result = multyply(1,2, 3);
// console.log(result);

// change a property of an object
let friend = {
    name : 'mala',
    age : 23,
    isHappy: true,
}
// console.log('friends name:', friend.name);

// feet to inch
function feetToInch(feet){
    const inch = feet * 12;
    return inch;
}
const dadaFeet = 5;
const dadaInches = feetToInch(dadaFeet);
// console.log(dadaInches);

// centimeter To Meter
function centimeterToMeter(centimeter){
    // const meter = centimeter * 0.01;
        const meter = centimeter/100;

    return meter;
}
const dadaCentimeter = 150;
const dadaMeter = centimeterToMeter(dadaCentimeter);
// console.log(dadaMeter);





