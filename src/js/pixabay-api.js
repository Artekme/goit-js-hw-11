import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { renderGallery } from './render-functions.js';

const loader = document.querySelector('.loader');
loader.style.display = 'none';

export function fetchImages(userQuery) {
  loader.style.display = 'block';
  fetch(
    `https://pixabay.com/api/?key=43036012-df3a1e6422cb462a655402953&q=${userQuery}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images. Please try again later.');
      }
      return response.json();
    })
    .then(data => {
      loader.style.display = 'none';
      if (data.hits.length === 0) {
        iziToast.warning({
          title: 'Warning',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          maxWidth: 400,
        });
      } else {
        renderGallery(data.hits);
   
      }
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      loader.style.display = 'none';
      iziToast.error({
        title: 'Error',
        message: 'Failed to fetch images. Please try again later.',
        position: 'topRight',
        maxWidth: 400,
      });
    });
}
