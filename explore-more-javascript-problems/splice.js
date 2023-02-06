const friends = [12, 45, 32, 22, 44, 62, 29, 69, 87];

// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// will change the original array
// .splice (2, 5) = start from 2 and take 5 elements 

const partial = friends.splice (2, 5, 33333, 5555, 7889);
console.log(partial);
console.log(friends);