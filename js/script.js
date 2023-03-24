//ARRAY IMG
const images = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'  
]

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
  items[0].classList.remove('item');
  console.log(items[0]);