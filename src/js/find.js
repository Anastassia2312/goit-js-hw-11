'use strict';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
const loader = document.querySelector('.loader');
const form = document.querySelector('.img-information');
const searchInput = document.querySelector('.input-img-name');

let searchParamsObj = {
  key: '41575459-699006cd61f4fecce9ea2d52d',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

function searchImages(params) {
  searchParamsObj.q = params;
  const searchParams = new URLSearchParams(searchParamsObj);
  fetch(`https://pixabay.com/api/?${searchParams}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      }
      return response.json();
    })
    .then(({ hits }) => {
      loader.classList.add('hidden');

      const gallery = document.querySelector('.gallery');
      const lightbox = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: 'alt',
        close: true,
      });
      const renderImages = hits.reduce(
        (html, image) =>
          html +
          `<li class="gallery-item">
         <a class="image-link" href="${image.largeImageURL}">
         <img class="images" data-source="${image.largeImageURL}" alt="${image.tags}" src="${image.webformatURL}" width="360" height="200">
         </a>
         <div class="information">
         <p>Likes: ${image.likes}</p>
         <p>Views: ${image.views}</p>
         <p>Comments: ${image.comments}</p>
         <p>Downloads: ${image.downloads}</p>
        </div>
      </li>`,
        ''
      );
      gallery.innerHTML = renderImages;

      lightbox.refresh();
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: error.message,
        position: 'topRight',
      });
    });
}

form.addEventListener('submit', event => {
  event.preventDefault();

  searchImages(searchInput.value);
});
