
x = Math.floor(Math.random() * 100 + 1); //Number between 0-100
y  = Math.floor(Math.random() * 50 + 1); //random number 0-50

let sum = x + y;
let sumOutput = `${x} + ${y} = ${sum}`;
console.log(sumOutput);

let diff = x - y;
let diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput)

let product = x * y;
let proOutput = `${x} * ${y} = ${product}`
console.log(proOutput);


let quote = x / y;
let quoOutput = `${x} / ${y} = ${quote}`
console.log(quoOutput);



// console.log(`x is ${x}, y is ${y},
//             Sum ${x + y},
//             Difference ${x - y},
//             Product ${x * y},
//             Quotient ${x / y},
//             Module ${x % y}`);
