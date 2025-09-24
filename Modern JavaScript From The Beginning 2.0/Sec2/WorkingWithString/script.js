let  x;

const name = 'John';
const age = 31;

//Template Literals
x = `Hello my name is ${name} and my age is ${age}`;
console.log(x);

//String property and method;

const s = 'Hello world';

//length
x = s.length

console.log('String length is ', x);

//access value by key
x = s[0];
console.log(x);

//show all property and method
x = s.__proto__;
console.log(x);

x = s.toUpperCase();
console.log(x);

x = s.charAt(0);
console.log(x);


x = s.indexOf('H');
console.log(x);

x = s.substring(0,4);
console.log(x);

x = s.slice(0,4);
console.log(x);

x = '    Hello world    '
x = x.trim();
console.log(x);

x = s.replace('world', 'John');
console.log(x);

x = s.includes('world');
console.log(x);

x = s.valueOf();
console.log(x);

x = s.split(' ');
console.log(x);

x = s.split('');
console.log(x);