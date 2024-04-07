// ----- IMPORTS

import { updateMoviesGalleryByStatus } from './mylibrary_update-details';

// ---- DECLARATIONS

const refs = {
  galleryMyLibrary: document.querySelector('.gallery_mylibrary-box'),
  watchedBtn: document.querySelector('.watched-btn'),
  queueBtn: document.querySelector('.queue-btn'),
  paginationMyLibraryContainer: document.querySelector(
    '.pagination-mylibrary_container'
  ),
};

refs.watchedBtn.addEventListener('click', onWatchedBtnClick);
refs.queueBtn.addEventListener('click', onQueueBtnClick);

// ----- FUNCTIONS

function onWatchedBtnClick({ target }) {
  console.log(target.dataset.status);
  if (target.classList.contains('active')) {
    return;
  }
  refs.watchedBtn.classList.add('active');
  refs.queueBtn.classList.remove('active');

  updateMoviesGalleryByStatus(target.dataset.status);
}

function onQueueBtnClick({ target }) {
  if (target.classList.contains('active')) {
    return;
  }
  refs.queueBtn.classList.add('active');
  refs.watchedBtn.classList.remove('active');

  updateMoviesGalleryByStatus(target.dataset.status);
}
