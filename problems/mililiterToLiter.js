function mililiterToLiter(mililiter){
    const liter = mililiter/1000;
    return liter;

}
const myWaterMililiter = 105;
const myWaterLiter = mililiterToLiter(myWaterMililiter);
console.log(myWaterLiter);