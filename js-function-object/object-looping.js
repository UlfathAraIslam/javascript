// array vs object

// array
var shoppingItems = ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'];
var friendsAge = [12, 45, 78, 12, 32, 14];
// object
var friendsAge = {
    rahim: 12,
    samad: 45,
    karim: 78,
    jamal: 12,
    robi: 32,
    kazi: 14
}
var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2
}
// ['books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes']
// to know the properties
const keys = Object.keys(shoppingCart);
console.log(keys);

// // to know the values
const values = Object.values(shoppingCart);
console.log(values);

// to know properties with value
// for loop
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
    console.log(propertyName, propertyValue);
    
}

// for in loop
for(var propertyName in shoppingCart){
    var value = shoppingCart[propertyName];
    console.log(propertyName, value);
}


