let d;

d = new Date();

let x = d.toString();

console.log(x);

d = new Date(2021, 0, 21);
console.log(d);

d = new Date('2021-07-10T12:21');
console.log(d)

d = Date.now();

d = new Date();
x = d.getTime(); //timestamp
console.log(x);

x = d.valueOf();
console.log(x); //timestamp

x = d.getFullYear()
console.log(x);

x = d.getMonth() + 1;
console.log(x);

x = d.getDate();
console.log(x);

x = d.getDay();
console.log(x)

x = d.getHours();
console.log(x);

x = `${d.getFullYear()}-${d.getMonth()+1}-${d.getDate()}`
console.log(x);

x = Intl.DateTimeFormat('en-US').format(d);
console.log(x);