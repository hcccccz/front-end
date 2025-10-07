let output;

//Get child element from parent

const parent = document.querySelector('.parent');
output = parent.children;

output = parent.children[1];
output = parent.children[1].innerText;
output = parent.children[1].className;
output = parent.children[1].className;

parent.children[1].innerText = 'Child Two';


parent.firstElementChild.innerText = 'Child one';
parent.lastElementChild.innerText = 'Child last';

//get parent from child

const child = document.querySelector('.child');
output = child.parentElement;
child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';


//Sibling
const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem;
output = secondItem.nextElementSibling;
output = secondItem.previousElementSibling;

console.log(output);