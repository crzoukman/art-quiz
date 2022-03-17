'use strict';

const state = {
  currentArtistsPlayingCategory: null,
  currentArtistsQList: null,
  currentArtistsTrueAnswer: null,
  currentArtistsQuestion: 0,
  currentArtistsBtnsPh: null,
  currentArtistsRightAnswers: 0,
  isArtistsAnswerWasGiven: false,
  artistsResult: {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
  },
  // айди текущей категории в ревьюtArtistsReviewID: null,
  isArtistsCategoryPlaying: false,
  // айди картины в ревью секции
  lastArtistsReviewImageID: null,
  artistsTimer: null,
  // модальное окно не было вызвано
  showQuizModal: false,
};


class Observable {
  constructor(state) {

    this.subscribers = [];
    this.state = state;
  };

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  };

  letThemKnow() {
    this.subscribers.forEach(s => {
      s.gotcha(this.state);
    });
  };

  setState(state) {
    this.state = { ...this.state, ...state };
    this.letThemKnow();

  };
};

const observable = new Observable(state);

class Observer {
  constructor(component) {
    this.component = component;
  };

  gotcha() {
    this.component.render();

  };
};

export { state, observable, Observer };