'use strict';

const totalCategory = document.querySelectorAll('.item');
console.log('Numero de Categorias', totalCategory.length);


let items = categories.querySelectorAll('.item');
items.forEach(item => {
    let subtitle = item.querySelector('h2');
    let subtitleContent = item.querySelector('ul');
   console.log(subtitle.textContent);
    console.log(subtitleContent.children.length);
});