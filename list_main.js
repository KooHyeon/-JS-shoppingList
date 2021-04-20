'use strict';

const list = document.querySelector('.list');
const inputField = document.querySelector('.input-field');
const inputBtn = document.querySelector('.input-btn');
const normalRunji = document.querySelector('.normal');
const angryRunji = document.querySelector('.angry');
const items = document.querySelector('.list-items');
const form = document.querySelector('form');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
});

inputBtn.addEventListener('click', () => {
    onAddList();
    inputField.value = "";
})

inputField.addEventListener('keydown', () => {
    normalRunji.style.opacity = '0';
    angryRunji.style.opacity = '100%';
})

function onAddList(e){
    normalRunji.style.opacity = '100%';
    angryRunji.style.opacity = '0';

    const listItem = document.createElement('div');
    listItem.innerHTML = `
        <button class="delete-btn"></button>
        <li>${inputField.value}</li>
    `;
    items.appendChild(listItem);
}

items.addEventListener('click', (e) => {
    e.target.parentNode.remove();
})


