//default param

function registerUser(user='bot') {
    return user + 'is registered';
}


//rest params
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1,2,3));

//object as param
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is login`
}

//array as param
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];
    return item;
}
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getRandom(items));
