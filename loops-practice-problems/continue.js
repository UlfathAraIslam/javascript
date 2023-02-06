var numbers = [45, 56, 30, 60, 20];
for(var i = 0; i< numbers.length; i++){
    var number = numbers[i];
    if(number >50){
        continue;
    }
    console.log(number);
}