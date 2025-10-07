
console.log("Break")
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log("Breaking...");
        break;
    }
    console.log(i);
}

console.log("Continue");
for (let i =0; i <= 20; i++) {
    if (i === 15) {
        console.log("Continuing");
        continue;
    }
    console.log(i);
}