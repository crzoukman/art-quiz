'use strict';

import { Module } from '../core/module';
import { app } from './app.component';
import { header } from './components/header';
import { main } from './components/main';
import { artists } from './components/artists';
import { pictures } from './components/pictures';
import { artistsQuiz } from './components/artists-quiz';
import { picturesQuiz } from './components/pictures-quiz';
import { artistsScore } from './components/artists-score';
import { picturesScore } from './components/pictures-score';
import { artistsReview } from './components/artists-review';
import { picturesReview } from './components/pictures-review';
import { artistsInfo } from './components/artists-info';
import { picturesInfo } from './components/pictures-info';
import { settings } from './components/settings';

const appModule = new Module({
  bootstrap: app,
  components: [
    //header,
  ],
  routers: [
    { component: main, path: '' },
    { component: artists, path: 'artists' },
    { component: pictures, path: 'pictures' },
    { component: artistsQuiz, path: 'artists-quiz' },
    { component: picturesQuiz, path: 'pictures-quiz' },
    { component: artistsScore, path: 'artists-score' },
    { component: picturesScore, path: 'pictures-score' },
    { component: artistsReview, path: 'artists-review' },
    { component: picturesReview, path: 'pictures-review' },
    { component: artistsInfo, path: 'artists-info' },
    { component: picturesInfo, path: 'pictures-info' },
    { component: settings, path: 'settings' },
    { component: header, path: '' },
  ],
});

export { appModule };