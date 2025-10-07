const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction'];

let result = words.filter(word => word.length  >= 5);


result.forEach(word => console.log(word));

console.log("------------------------------------")

result = words.filter(word => {
    if (word.length >= 5) {
        return word;
    }
});



result.forEach(word => console.log(word));


//same with forEach
result = [];
words.forEach(word => {
    if (word.length >= 5) {
        result.push(word);
    }
})
result.forEach(word => console.log(word));