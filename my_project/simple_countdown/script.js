let btn = document.getElementById('start');
let form = document.getElementById('form')
btn.addEventListener('click',() => {
    let value = form.value;
    let counter = document.createElement('div');
    counter.textContent = value;
    form.replaceWith(counter);

    let countdown = setInterval(() => {
        let current = counter.textContent;
       current_count = Number(current);
       counter.textContent = --current_count;
    },1000)
} )