const numbers = [1, 2, 3, 4, 5, 6];

const sumNumber = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 2);

console.log(sumNumber);


//same thing using for loop

const sum3 = () => {
    let acc = 0;
    let init = 2
    acc += init;
    for (const cur of numbers) {
        acc += cur;
    }
    return acc;
}

console.log(sum3());


const cart = [
    {id: 1, name: "product 1", price: 130},
    {id: 2, name: "product 2", price: 144},
    {id: 3, name: "product 3", price: 110}
];

const totalPrice = cart.reduce((acc, cur) => {
    return acc + cur.price
},0);
console.log(totalPrice);
