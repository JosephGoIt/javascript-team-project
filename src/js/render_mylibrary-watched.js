import { markupMovies } from './render_mylibrary-film-card';

const refs = {
  gallery: document.querySelector('.gallery_watch-box'),
};

export function renderMyLibraryWatched(userWatched) {
  alert('67890');
  if (!userWatched || userWatched.length === 0) {
    return (refs.gallery.innerHTML =
      '<h1 style="font-size=80px">There are no added watched films</h1>');
  }
  refs.gallery.innerHTML = markupMovies(userWatched);
}
