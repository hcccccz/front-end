let output = document.documentElement; //all element

output = document.head; //get head

output = document.body; //get body

output = document.body.children;

output = document.doctype;

output = document.URL;

output = document.characterSet;
output = document.contentType;

output = document.forms;

output = document.forms[0].id;
output = document.forms[0].method;


document.forms[0].id = 'new-id';

output = document.links;
// output = document.links[0].href;
output = document.forms[0].classList;
output = document.forms[0].className;

output = document.images;

const forms = Array(document.forms);

forms.forEach((form) => {
    console.log(form);
});


console.log(output);