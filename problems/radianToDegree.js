// 1rad × 180/π 
// function radianToDegree(radian) {
// if (typeof radian != 'number') {
//     return "Provide valid input"
// }
// const PI = 3.14159265359;
// const degree = (radian * (180 / PI)).toFixed(2);
// return degree;
// }

// let result = radianToDegree(10);
// console.log(result);

function radianToDegree(radian){
    if (typeof radian != 'number'){
        return 'provide valid input'
    }
    const PI = 3.141592265359;
    const degree = (radian * (180 / PI)).toFixed(2);
    return degree;
}
const result = radianToDegree(10);
console.log(result);