// Math.pow
const result = Math.pow(3,2);
// console.log(result);

// Math.abs

const num1 = 25;
const num2 = 50;
const gap = Math.abs(num1 - num2);
// console.log(gap);
if(gap < 5){
    // console.log('you can be friend');
}
else{
    // console.log('you can apart');
}

// Math.round

const number = 2.878897;
const fullNumber = Math.round(number);
// console.log(fullNumber);

// Math.ceil
const result2 = Math.ceil(2.34545);
// console.log(result2);

// Math.floor
const result3 = Math.floor(444.555);
// console.log(result3);


//Math.random

for(let i = 0; i < 20; i++){
    const random = Math.round(Math.random() * 6);
    // console.log(random);
}


const number1 = -78;
const answer = Math.abs(number1);
console.log(answer);
