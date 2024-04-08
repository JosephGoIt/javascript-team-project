import { markupMovies } from './render_mylibrary-film-card';

const refs = {
  gallery: document.querySelector('.gallery_queue-box'),
};

export function renderMyLibraryQueue(userQueue) {
  alert('12345');
  if (!userQueue || userQueue.length === 0) {
    return (refs.gallery.innerHTML =
      '<h1 style="font-size=80px">There are no added queue films</h1>');
  }
  refs.gallery.innerHTML = markupMovies(userQueue);
}
