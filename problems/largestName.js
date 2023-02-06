/*
Jhon
Alexis

reverse: sixelA

*/ 
function reverseName(nameOne, nameTwo){
    let friendOneLength = nameOne.length;
    let friendTwoLength = nameTwo.length;

    if(friendOneLength> friendTwoLength){
        return nameOne.split("").reverse().join("");

    }
    else{
        return nameTwo.split("").reverse().join("");
    }
}
const result = reverseName('jhon', 'Alexis');
console.log(result);