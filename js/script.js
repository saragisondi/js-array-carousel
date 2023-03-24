//ARRAY IMG
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'  
]

let counter = 0;

//CICLO
const itemsWrapper = document.querySelector('.items-wrapper');
console.log(itemsWrapper)

for (let i = 0; i < images.length; i++){
  const image = images[i];

  itemsWrapper.innerHTML += `
  <img class="item" src="${image}">
  `
  }
  //PRENDO TUTTI GLI ITEMS
  const items = document.getElementsByClassName('item');
  items[counter].classList.remove('item');


  // const btn = document.querySelector('btn-chevron');

  // btn.addEventListener('click', function(){

  // })