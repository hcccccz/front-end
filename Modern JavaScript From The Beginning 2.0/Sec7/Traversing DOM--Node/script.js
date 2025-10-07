let output;

const parent = document.querySelector('.parent')

output = parent.childNodes;

output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;

output = parent.childNodes[3].textContent;
output = parent.childNodes[3].nodeName;
output = parent.childNodes[3].outerHTML;
console.log(output);
