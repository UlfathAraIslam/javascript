function reverseWords(str){
const words = str.split(' ');
console.log(words);
    // ['I', 'am', 'a', 'good', 'boy']
    const result = [];
    for(var i = words.length -1; i >= 0; i--){
        const element = words[i];
        result.push(element);
    }
    // console.log(result);
    const reversed = result.join(' ');
    // console.log(reversed);
    return reversed;
}
const myString = 'I am a good boy';
const wordReversed = reverseWords(myString);
console.log(wordReversed);