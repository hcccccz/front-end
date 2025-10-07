for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//nest loop
for (let i = 1; i <= 10; i++) {
    console.log('Number' + i);

    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} == ${i * j}`);
    }
}


//loop through array
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i])
}

