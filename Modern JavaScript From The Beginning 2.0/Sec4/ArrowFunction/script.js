

const add = (a, b) => {
    return a + b;
};


const substract = (a, b) => a - b;

const double = a => a*2;


//returning a object
const createObj = () => ({
    name: 'Brad'
});



let numbers = [1, 2, 3, 4, 5];
numbers.forEach(n => {
    return n+1;
});

console.log(numbers);