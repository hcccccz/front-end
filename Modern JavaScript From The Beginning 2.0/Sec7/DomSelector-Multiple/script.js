//querySelectorAll()
const listItems = document.querySelectorAll('.items');
console.log(listItems, typeof listItems, listItems.length);


console.log(listItems[0]);

const lists = listItems[0].querySelectorAll('li');
lists.forEach(list => {
    console.log(list.innerText);
})

lists.forEach((item, index) => {
    item.style.color = 'red';
    if (index === 1) {
        item.remove();
    }
})


const listItems2 = document.getElementsByClassName('items');

console.log(listItems2);


const listItems3 = document.getElementsByTagName('li');
console.log(listItems3)