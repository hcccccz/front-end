//array
const items = ["book", "table", "chair", "kite"];

for (const item of items) {
    console.log(item);
}


//object
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'}
]

for (const user of users) {
    console.log(user.name);
}

//string
const str = "hello world";
for (const letter of str) {
    console.log(letter);
}

//map
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value] of map) {
    console.log(key, value);
}