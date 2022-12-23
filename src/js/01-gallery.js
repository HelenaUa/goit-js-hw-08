// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
// Описан в документации
import SimpleLightbox from "simplelightbox";

// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(galleryItems);

// 1.Добавь библиотеку SimpleLightbox как зависимость проекта используя
// npm(ссылка на CDN из твоей прошлой работы больше не нужна).
// 2.Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того,
// что библиотека была установлена через npm(синтаксис import /export).

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl);

const arrayDiv = createGalleryMarkup(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", arrayDiv);

function createGalleryMarkup(array) {
//     return array.map(({ preview, original, description }) => `<a class="gallery__item"
//  href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       alt="${description}"
//     />
//   </a>`).join(" ");
    return array.reduce((acc, {preview, original, description}) => acc + `<a class="gallery__item"
  href="${original}">
   <img
       class="gallery__image"
       src="${preview}"
       alt="${description}"
     />
   </a>`, '')
};

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
  captionDelay: 250,
});
 

    
