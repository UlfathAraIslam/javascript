// use push to add element to an array as a last element of the array

var numbers = [1, 2, 3, 4];
numbers.push(5);
console.log(numbers);
var friends = ["sana", "rana"];
friends.push("mana");
console.log(friends);

// use pop to get last element 
numbers.pop();
console.log(numbers);

// get to know the element which is popped
var element = numbers.pop();
console.log(element);

// use shift to add an element to the beginning of an array
var siblings = ["ayra", "amira"];
siblings.unshift("alisha");
console.log(siblings);


// remove the first item of an array

var family = ["father", "mother", "brother"];
family.shift();
console.log(family);

