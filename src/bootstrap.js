'use strict';

import { appModule } from './app/app.module';


const sounds = [
  'end',
  'no',
  'time',
  'win',
  'yes',
];

for (let i = 0; i < sounds.length; i++) {
  var res = document.createElement("link");
  res.rel = "preload";
  res.as = "audio";
  res.href = `./sounds/${sounds[i]}.wav`;
  document.head.appendChild(res);
};

for (let i = 0; i <= 240; i++) {
  var res = document.createElement("link");
  res.rel = "preload";
  res.as = "image";
  res.href = `./images/img/${i}.webp`;
  document.head.appendChild(res);
};




window.addEventListener('load', () => {
  setTimeout(() => {
    appModule.init();
  }, 1000)
});