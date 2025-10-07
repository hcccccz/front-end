const node = document.getElementById('app-id');

let out = node.id

out = node.className;

out = node.getAttribute('id');

node.setAttribute('class', 'title'); //set attribute class

// get / change content
out = node.textContent;
out = node.innerText;
out = node.innerHTML;

//change style
node.style.color = 'red'
node.style.backgroundColor = 'black';
node.style.padding = '10px';

// document.querySelector()

out = document.querySelector('h1'); //only first h1

out = document.querySelector('#app-title') //select by id
out = document.querySelector('.container') //select by class
out = document.querySelector('input[type="text"]') //select by attribute
out = document.querySelector('li:nth-child(2)');

// console.log(out)

//querySelector  other than document
const list = document.querySelector('ul');
const firstItem = list.querySelector('li');
firstItem.style.color = "blue";