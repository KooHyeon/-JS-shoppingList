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


inputField.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
        addList(e);
    }
});

function addList(e){
    const listItem = document.createElement('div');
    const itemText = document.createElement('li');
    const deleteBtn = document.createElement('button');
    itemText.textContent = e.target.value;
    deleteBtn.classList.add('delete-btn');
    items.appendChild(listItem);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(itemText);
    e.target.value = "";

    deleteBtn.addEventListener('click', deleteItem);
}

function deleteItem (e) {
    const btn = e.target;
    const item = btn.nextSibling;
    const list = btn.parentNode;
    list.removeChild(item);
    list.removeChild(btn);
    list.remove();
}

