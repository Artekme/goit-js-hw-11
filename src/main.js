import { fetchImages } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-form');
const input = document.querySelector('input');

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  const userQuery = input.value.trim();

  if (!userQuery) {
    iziToast.show({
      title: 'Warning',
      message: 'Please enter a search query',
      position: 'topRight',
      maxWidth: 400,
    });
    return;
  }
  fetchImages(userQuery);
  input.value = '';
});
