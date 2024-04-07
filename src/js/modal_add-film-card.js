import uniqBy from 'lodash';

// ----- ADD | WATCH FILM-CARD

export let watchFilms = [];
let uniqFilms = [];

export const dataSaveWatch = function (data) {
  if (localStorage.watched) {
    watchFilms = JSON.parse(localStorage.watched);
  }
  if (localStorage.queue) {
    const storedFilms = JSON.parse(localStorage.queue);

    for (let i = 0; i < storedFilms.length; i++) {
      if (storedFilms[i].id === data.id) {
        storedFilms.splice(i, 1);
        queueFilms = [];
      }
    }
    localStorage.queue = JSON.stringify(storedFilms);
  }

  watchFilms.push(data);
  uniqFilms = uniqBy(watchFilms, 'id');
  localStorage.setItem('watched', JSON.stringify(uniqFilms));
};

// ----- ADD | WATCH FILM-CARD

let queueFilms = [];
let uniqQueueFilms = [];

export const dataSaveQueue = function (data) {
  if (localStorage.queue) {
    queueFilms = JSON.parse(localStorage.queue);
  }

  if (localStorage.watched) {
    const storedFilms = JSON.parse(localStorage.watched);

    for (let i = 0; i < storedFilms.length; i++) {
      if (storedFilms[i].id === data.id) {
        storedFilms.splice(i, 1);
        watchFilms = [];
      }
    }
    localStorage.watched = JSON.stringify(storedFilms);
  }

  queueFilms.push(data);
  uniqQueueFilms = uniqBy(queueFilms, 'id');
  localStorage.setItem('queue', JSON.stringify(uniqQueueFilms));
};
