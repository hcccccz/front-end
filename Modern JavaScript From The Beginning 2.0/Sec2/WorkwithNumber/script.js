let x;

x = 5;

s = x.toString();


s = x.toFixed(5); //to string with decimal

s1 = x.toPrecision(5); //和toFixed 一样 但四舍五入

s2 = x.toExponential(5);

console.log(s, typeof s);
console.log(s1, typeof s1);
console.log(s2, typeof s2);