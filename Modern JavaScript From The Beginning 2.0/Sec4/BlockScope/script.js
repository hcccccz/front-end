//global scope

if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
}

console.log(a); //エラー
console.log(b); //エラー
console.log(c); //ok