'use strict';


import { observable } from '../app/state';
import { observable2 } from '../app/state2';
import { stateCleaner } from './functions/stateCleaner';

class Module {
  constructor(props) {
    this.bootstrap = props.bootstrap;
    this.components = props.components;
    this.routers = props.routers;
  };

  init() {
    window.addEventListener('DOMContentLoaded', () => {
      window.location.hash = '#';
    });

    renderComponents(this.bootstrap, this.components);
    renderRouters(this.routers);
    initInitialData();
  };
};

function renderComponents(bootstrap, components) {
  bootstrap.render();
  components.forEach(c => c.render());
};

function renderRouters(routers) {
  // нужно, чтобы сработал слушатель ниже.
  window.location.hash = '#not-exist';
  window.location.hash = '#';

  window.addEventListener('hashchange', () => {
    clearInterval(observable.state.artistsTimer);
    clearInterval(observable2.state.picturesTimer);

    // при смене страницы выключить слушателя на ENTER
    observable.state.showQuizModal = false;
    observable2.state.showQuizModal = false;

    // при смене разблокировать кнопки
    observable.state.isArtistsAnswerWasGiven = false;
    observable2.state.isPicturesAnswerWasGiven = false;

    // убираем интервалы при смене страницы
    let idx = window.setInterval(function () { }, 0);
    while (idx--) {
      window.clearInterval(idx);
    };

    // если бы переход во время игры в категории артистов, то
    // вернуть изначальный сейт из ЛС
    if (observable.state.isArtistsCategoryPlaying) {
      observable.state.isArtistsCategoryPlaying = false;
      const ls = JSON.parse(localStorage.getItem('artistsResult'));
      observable.state.artistsResult = ls;
    };

    // for pictures
    if (observable2.state.isPicturesCategoryPlaying) {
      observable2.state.isPicturesCategoryPlaying = false;
      const ls = JSON.parse(localStorage.getItem('picturesResult'));
      observable2.state.picturesResult = ls;
    };

    const url = window.location.hash.trim().slice(1);
    const routerList = routers.filter(r => r.path === url);
    routerList.forEach(r => r.component.render());
    stateCleaner();
  });
};

function initInitialData() {
  if (!localStorage.getItem('artistsResult')) {
    localStorage.setItem('artistsResult', JSON.stringify(observable.state.artistsResult))
  };

  // for pictures
  if (!localStorage.getItem('picturesResult')) {
    localStorage.setItem('picturesResult', JSON.stringify(observable2.state.picturesResult))
  };

  if (!localStorage.getItem('answerTime')) {
    localStorage.setItem('answerTime', 10);
  };

  if (!localStorage.getItem('volume')) {
    localStorage.setItem('volume', 0.5);
  };

  if (!localStorage.getItem('soundStatus')) {
    localStorage.setItem('soundStatus', true);
  };
};


export { Module };