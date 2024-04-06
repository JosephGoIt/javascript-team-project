import closeBtnIcon from '../images/icon/symbol-defs.svg';

const BASE_URL = "https://api.themoviedb.org";
const API_KEY = "9d52264b8376313698d7d20c165a8537";
const TRENDING_MOVIES_ENDPOINT = "/3/trending/movie/day";
const IMAGE_PATH_W300 = "https://image.tmdb.org/t/p/w300";
const IMAGE_PATH_W780 = "https://image.tmdb.org/t/p/w780";

const refs = {
  galleryBox: document.querySelector('.gallery-fetch_container'),
  filmModal: document.querySelector('[data-modal]'),
  body: document.querySelector('body'),
};

refs.galleryBox.addEventListener('click', onGalleryBoxClick);

async function onGalleryBoxClick(event) {
  event.preventDefault();
  console.log("box is clicked");
  if (event.target.classList.contains('gallery_fetch_box')) {
    return;
  }

  const filmId = Number(event.target.closest('.card').id);
  console.log(filmId);

  try {
    const filmDetails = await fetchFilmDetailsById(filmId);
    console.log(filmDetails);
    clearFilmModalMarkup();
    renderFilmModal(filmDetails);
    onOpenModal();
    window.addEventListener('keydown', onEscKeyPress);
  } catch (error) {
    console.error(error);
  }

  const modalButtonsRefs = {
    closeBtn: document.querySelector('[button-modal-close]'),
    // addQueqeBtn: document.querySelector('[button-add-queue]'),
    // addWatchBtn: document.querySelector('[button-add-watch]'),
  };

  modalButtonsRefs.closeBtn.addEventListener('click', onCloseModal);
  // modalButtonsRefs.addQueqeBtn.addEventListener('click', onAddQueqeBtn);
  // modalButtonsRefs.addWatchBtn.addEventListener('click', onAddWatchBtn);

}

function onOpenModal() {
  refs.filmModal.classList.remove('is-hidden');
  disableScroll();
}

function onCloseModal() {
  refs.filmModal.classList.add('is-hidden');
  window.removeEventListener('keydown', onEscKeyPress);
  enableScroll();
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

function createFilmModalMarkup(data) {
  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    popularity,
    original_title,
    genres,
    overview,
  } = data;

  const posterUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return `
    <div class="film-modal">
      <button class="button-close" type="button" button-modal-close>
        <svg class="icon-close">
          <use href="${closeBtnIcon}#icon-close"></use>
        </svg>
      </button>
      <img
        class="film__image"
        src="${posterUrl}"
        alt="Film Image"
        onerror="loadNoPoster(this)"
      />
      <article>
        <div class="film__content">
          <h2 class="film__title">${title}</h2>

          <ul class="film-info">
            <li class="film-info__item">
              <p class="film-info__label">Vote / Votes</p>

              <div class="film-vote">
                <span class="film-vote__label film-vote__label--orange">
                  ${vote_average}
                </span>
                <span>/</span>
                <span class="film-vote__label">${vote_count}</span>
              </div>
            </li>

            <li class="film-info__item">
              <p class="film-info__label">Popularity</p>
              <span class="film-info__text">${popularity}</span>
            </li>

            <li class="film-info__item">
              <p class="film-info__label">Original Title</p>
              <span class="film-info__text film-info__text--uppercase">
                ${original_title}
              </span>
            </li>

            <li class="film-info__item">
              <p class="film-info__label">Genre</p>
              <span class="film-info__text">
                ${genres.map(genre => genre.name).join(', ')}
              </span>
            </li>
          </ul>

          <div class="film-description">
            <h3 class="film-description__title">About</h3>
            <p class="film-description__text">${overview}</p>
          </div>
        </div>

        <ul class="film-button">
          <li class="film-button__item">
            <button
              class="film-button__primary"
              type="button"
              button-add-watch
            >
              Add to Watched
            </button>
          </li>

          <li class="film-button__item">
            <button class="film-button__primary" type="button" button-add-queue>
              Add to Queue
            </button>
          </li>
        </ul>
      </article>
    </div>
  `;
}

function clearFilmModalMarkup() {
  refs.filmModal.innerHTML = '';
}

function renderFilmModal(data) {
  const filmModalMarkup = createFilmModalMarkup(data);
  console.log(filmModalMarkup);
  refs.filmModal.insertAdjacentHTML('beforeend', filmModalMarkup);
}

const fetchFilmDetailsById = async (filmId) => {
  try {
    const response = await fetch(`${BASE_URL}/3/movie/${filmId}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Failed to fetch movie details: ${error.message}`);
  }
};

function disableScroll() {
  let paddingOffset = window.innerWidth - refs.body.offsetWidth + 'px';
  refs.body.classList.add('disable-scroll');
  refs.body.style.paddingRight = paddingOffset;
}

function enableScroll() {
  refs.body.classList.remove('disable-scroll');
  refs.body.style.paddingRight = 0;
}

