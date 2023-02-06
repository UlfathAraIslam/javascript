/*
input: [-1, 2,-3,4,,5,6,-7,8,-9,10]
output: 3
*/ 
// let numbers = [-1, 2, -3, 4, , 5, 6, -7, 8, -9, 10];
// let count = 0;
// for(let i = 0; i< numbers.length; i++){
// const element = numbers[i];
// // console.log(element);
// if(element > 5){
//     console.log("yes");
//     count = count + 1;
// }
// else(element < 5) {
//         console.log("no");
// }
// }

function greaterThanFive(numbers){
    let count = 0;

    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if (element > 5){
            count++;
        }
        // count++;
        // count = count + 1
        // count+=1
    }
    return count;
}
let result = greaterThanFive([-1, 2, -3, 4, , 5, 6, -7, 8, -9, 10]);
console.log(result);