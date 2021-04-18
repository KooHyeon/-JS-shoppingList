'use strict';

const list = document.querySelector('.list');
const inputField = document.querySelector('.input-field');
const normalRunji = document.querySelector('.normal');
const angryRunji = document.querySelector('.angry');
const form = document.querySelector('form');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
});


inputField.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.keyCode === 13) {
        check(e);
    }
});

function check (e) {
    console.log(e.target.value);
}