function factorial(number){
    let result = 1;
    let num = 1;
    while(num <= 7){
        result = result * num;
        num++;
    }
    return (result);
}
const result = factorial(7);
console.log(result);