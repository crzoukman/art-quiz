'use strict';

import { observable } from '../../app/state';
import { observable2 } from '../../app/state2';

function stateCleaner() {
  observable.state.currentArtistsQuestion = 0;
  observable.state.currentArtistsRightAnswers = 0;

  // ===========================

  observable2.state.currentPicturesQuestion = 0;
  observable2.state.currentPicturesRightAnswers = 0;
};

export { stateCleaner };