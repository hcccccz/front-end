const people = [
{
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: 111-111-111,
    age: 30
},
{
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: 222-222-222,
    age: 25
},
{
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: 333-333-333,
    age: 45
},
{
    firstName: 'Sara',
    lastName: 'Koe',
    email: 'sara@gmail.com',
    phone: 444-444-444,
    age: 23
},
{
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: 555-555-555,
    age: 23
}
];

youngPeople = people.filter(people => {
    if (people.age <= 25) {
        return people;
}}).map((people) => {
    return {
            firstName: people.firstName,
            lastName: people.lastName,
            email: people.email};
    });

console.log(youngPeople);


const numbers = [2, -30, 50, 20, -12, -9, 7];

negSum = numbers.filter(num => num < 0).reduce((acc, cur) => {
    return acc + cur;
});

console.log(negSum);


const words = ['coder', 'programmer', 'developer'];
const upperWord = words.map(word => {
    const new_word = word[0].toUpperCase() + word.slice(1, word.length);
    return new_word;
});


upperWord.forEach(word => console.log(word));
