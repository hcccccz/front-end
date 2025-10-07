function getCelsius(F){
    celsius = (F - 32) * 5 / 9;
    return celsius
}

console.log(`The temperature is ${getCelsius(32)}\xB0`);



function minmax(numbers) {
    min = Math.min(...numbers);
    max = Math.max(...numbers);
    return {min, max};
}
const arr = [1, 2, 3, 4, 5];
console.log(minmax(arr));

(function(width, height) {
     console.log(`the width is ${width} and height is ${height} and area is ${width * height} `);
})(4,5);