import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});

const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
  gallery.innerHTML = images
    .map(image =>
`<li class="gallery-item">
<div class="image-card">
<a class="gallery-link" href="${image.largeImageURL}">
<img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}"/>
<div class="data-field">

<div class="img-data">
<h4 class="data-title">Likes</h4>
<p class="data-value">${image.likes}</p>
</div>

<div class="img-data">
<h4 class="data-title">Views</h4>
<p class="data-value">${image.views}</p>
</div>

<div class="img-data">
<h4 class="data-title">Comments</h4>
<p class="data-value">${image.comments}</p>
</div>

<div class="img-data">
<h4 class="data-title">Downloads</h4>
<p class="data-value">${image.downloads}</p>
</div>

</div>
</a>
</div>
</li>`
    )
    .join('');

  lightbox.on('show.simplelightbox', function () {});
  lightbox.refresh();
}
