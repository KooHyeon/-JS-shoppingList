'use strict';

const list = document.querySelector('.list');
const inputField = document.querySelector('.input-field');
const normalRunji = document.querySelector('.normal');
const angryRunji = document.querySelector('.angry');
const items = document.querySelector('.list-items');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
});


inputField.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        addList(e);
    }
});

function addList(e){
    const listItem = document.createElement('li');
    listItem.textContent = e.target.value;
    items.appendChild(listItem);
    e.target.value = "";
}

