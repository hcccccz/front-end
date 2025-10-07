// function createNewItem(item) {
//     const li = document.createElement('li');
//     const text = document.createTextNode(item);

//     const btn = document.createElement('button')
//     btn.className = 'remove-item btn-link text-red'

//     const icon = document.createElement('i');
//     icon.className = 'fa-solid fa-xmark';
//     li.appendChild(text);
//     li.appendChild(btn);
//     btn.appendChild(icon);
//     document.querySelector('.items').appendChild(li);
// }

createNewItem('BOOK');

//REFACTOR

function createNewItem(item) {
    const li = document.createElement('li');
    const text = document.createTextNode(item);

    const btn = createButton('remove-item btn-link text-red');


    li.appendChild(text);
    li.appendChild(btn);
    document.querySelector('.items').appendChild(li);
}



function createButton(classes) {
    const btn = document.createElement('button');
    btn.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    btn.appendChild(icon);
    return btn;
}

function createIcon(classes) {
    const icon = document.createElement('i')
    icon.className = classes
    return icon;
}