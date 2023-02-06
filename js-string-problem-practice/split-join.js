const lyrics = 'tumi bondhu kala pakhi ami jeno ki. bosonto kale tomai bolte pari ni.'
const parts = lyrics.split(' ');
const sentences = lyrics.split('.');
const chars = lyrics.split('');
console.log(chars);

// slice
const partial = lyrics.slice(5,8);
// console.log(partial);

// substring
const partial2 = lyrics.slice(5, 8);
// console.log(partial2);

const lines = [
    'tumi bondhu kala pakhi ami jeno ki',
    ' bosonto kale tomai bolte pari ni',
]
const newSong = lines.join('. ');
console.log(newSong);