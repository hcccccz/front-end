const todo = new Object();

todo.id = 1;
todo.name = 'buy milk';
todo.completed = false;

console.log(todo);


const person = {
    address: {
        lat: 42.9891,
        lng: -71.1231
    }
}

// 直接通过变量创建object
const min = 1;
const max = 5;

const newObj = {min, max};

person.address.lat

//spread
const obj1 = {a: 1, b:2};
const obj2 = {c:3, d:4};

const obj3 = {...obj1, ...obj2};
console.log(obj3);

//same as spead
const obj4 = Object.assign({}, obj1, obj2);

//get all keys
let x = Object.keys(todo);
console.log(x);

x = Object.keys(todo).length;
console.log(x);

//get all values
x = Object.values(todo);
console.log(x);

//get key-value pairs
x = Object.entries(todo);
console.log(x);

//has property
x = todo.hasOwnProperty('name');
console.log(x);