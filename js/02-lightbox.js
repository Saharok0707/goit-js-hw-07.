
import { galleryItems } from './gallery-items.js';


console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');
const galleryList = createGalleryImagesList(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', galleryList);



function createGalleryImagesList(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
  <li class = "gallery__item">
  <a class = "gallery__link" href="${original}">
  <img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
  title="${description}"
  />
  </a>
  </li>
  `;
    }).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    
    captionDelay: 250,
    animationSpeed: 200,
     captionsData:"alt",
});
// var lightbox = $('.gallery a').simpleLightbox({
//       
// });

