const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];
// .slice(2, 5)= slice start from 2 and end before 5
const partial = friends.slice(2, 5);
console.log(partial);

// after slicing main array will be same as before
console.log(friends);