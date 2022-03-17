'use strict';

const state = {
  currentPicturesPlayingCategory: null,
  currentPicturesQList: null,
  currentPicturesTrueAnswer: null,
  currentPicturesAnswerID: null,
  currentPicturesQuestion: 0,
  currentPicturesBtnsPh: null,
  currentPicturesRightAnswers: 0,
  isPicturesAnswerWasGiven: false,
  picturesResult: {
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
  // айди текущей категории в ревью
  lastPicturesReviewID: null,
  isPicturesCategoryPlaying: false,

  lastPicturesReviewImageID: null,
  picturesTimer: null,
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

const observable2 = new Observable(state);

class Observer {
  constructor(component) {
    this.component = component;
  };

  gotcha() {
    this.component.render();

  };
};

export { state, observable2, Observer };