
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'raspberry'];

let x;


x = fruits.concat(berries);

//or using spread operator
x = [...fruits, ...berries];
console.log(x);

//flatten array
const arr = [1,2,[3,4]];
arr.flat()
console.log(arr);

//static method
x = Array.isArray(arr)


x = Array.from('12345')

const a = 1
