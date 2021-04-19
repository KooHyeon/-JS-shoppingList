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
    addList();
})

inputField.addEventListener('keydown', () => {
    normalRunji.style.opacity = '0';
    angryRunji.style.opacity = '100%';
})

function addList(){
    normalRunji.style.opacity = '100%';
    angryRunji.style.opacity = '0';

    const listItem = document.createElement('div');
    const itemText = document.createElement('li');
    const deleteBtn = document.createElement('button');
    itemText.textContent = inputField.value;
    deleteBtn.classList.add('delete-btn');
    items.appendChild(listItem);
    listItem.appendChild(deleteBtn);
    listItem.appendChild(itemText);
    inputField.value = "";

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

