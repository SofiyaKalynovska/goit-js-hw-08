import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';

// Функція, яка створює галерею картинок з масиву об'єктів, які містять прев'ю, повнорозмірну картинку і її опис
const createRenderListOfImgs = (imgs) =>
  imgs.reduce(
    (acc, { preview, original, description }) => acc + `
    <a class="gallery__item" href=${original}>
      <img 
      class="gallery__image" 
      src = ${preview}
      alt = ${description}
      />
    </a>`, ''
  );
// Функція, яка додає в розмітку HTML елементи перед закриваючим тегом div.gallery
const insertListOfImgs = (item) => {
  const galleryOfImgs = document.querySelector('.gallery');
  galleryOfImgs.insertAdjacentHTML("beforeend", item)
};
// Створює галерею картинок з масиву об'єктів galleryItems і додає її в розмітку
insertListOfImgs(createRenderListOfImgs(galleryItems));

// 4. Додає відображення підписів до зображень з атрибута alt. Підпис знизу і з'являється через 250 мілісекунд після відкриття зображення.
new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captions: true,
})
console.log(galleryItems);
