const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
    firstName,
    lastName,
    age
}

console.log(person.age);

//Destucturing
const todo = {
    id: 1,
    title: 'Take out trash'
}

const {id, title} = todo;
console.log(id, title);

//Destructuring array

const numbers = [23, 67, 33, 49];
[first, second, ...rest] = numbers;
