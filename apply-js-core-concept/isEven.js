// console.log(4/2);
// console.log(88/2);
// console.log(666/2);
// console.log(4998/2);

// console.log(47 / 2);
// console.log(887 / 2);
// console.log(6667 / 2);
// console.log(49997 / 2);

// 2 die vag korle jodi vagfol 0 = even, 1 = odd;

// console.log(4%2);
// console.log(88%2);
// console.log(666%2);
// console.log(4998%2);

// console.log(47%2);
// console.log(887% 2);
// console.log(6667% 2);
// console.log(49997% 2);


function isEven(number){
const remainder = number % 2;
// console.log(remainder);
if( remainder === 0){
    return true;
}
else{
    return false;
}
}
const myNumberIsEven = isEven(303);
console.log(myNumberIsEven);
const herNumberIsOdd = isEven(1280);
console.log(herNumberIsOdd);

