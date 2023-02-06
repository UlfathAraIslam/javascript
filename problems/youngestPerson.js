let persons= [

    { name: 'sakib', age: 30 },

    { name: 'samiul', age: 20 },

    { name: 'sahid', age: 50 },

    { name: 'samin', age: 10 }

]
let youngest = persons[0];
function youngestPerson(persons){
    for(let i = 0; i < persons.length; i++){
        const person = persons[i];
        if(person.age < youngest.age){
            youngest = person;
        }
    }
    return youngest;
}
const younger = youngestPerson(persons);
console.log('youngest one:',younger);
