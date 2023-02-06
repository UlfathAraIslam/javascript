const lyrics =  "hello it's not lyrics it a string";
// const doesExist = lyrics.includes('hello');
const searchString = 'hello';
const lyricsLowerCase = lyrics.toLowerCase();
const searchStringLower = searchString.toLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
// in one line 
const doesExistOneLine = lyrics.toLowerCase().includes(searchString.toLowerCase);

console.log(doesExist);


// index of string

// console.log(lyrics.indexOf('hello'));
if(lyrics.indexOf('hello') !== -1){
    console.log('exists in string');
}
else{
    console.log("don't exist");
}

// startsWith
console.log(lyrics.startsWith('hello'));

// endsWith
const fileName = "mybiodata.pdf";
const otheFile = "mypic.png";

console.log(fileName.endsWith('.pdf'));
