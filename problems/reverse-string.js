// for reverse, we need the last letter of a word,  

let str = 'Alexis';
// length = 6
// last index = 6-1 = 5
// i-- ===> 5, 5-1 = 4, 4-1 = 3, 3- 1 = 2, 2 -1 = 1, 1-1 = 0 
// first string is empty ""

let reverseString = "";
for(let i = str.length-1; i >= 0; i--){
    const element = str[i];
    reverseString = reverseString + element;
}