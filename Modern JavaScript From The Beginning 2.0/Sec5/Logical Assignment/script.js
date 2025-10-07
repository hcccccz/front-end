// || asign the right side value only if left is falsy
// return first true or last one
let a = false;

if (!a) {
    a = 10;
}
a = a || 10;

//&& assign the right side value only if left is true
// return first false or last one

let b = true;
if (b) {
    b = 10;
}
b = b && 10;

// ?? assign the right side value only if left is null or undefined
let c = null;
if (c === null || c === undefined) {
    c = 20;
}

c = c||20;