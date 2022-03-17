import { Component } from '../../core/component';


const settings = new Component({
  selector: '#main',
  template: `
    <a href="#" class="settings__go-home">
      <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"/></svg>
    </a>

    <div class="settings">
      <div class="settings__volume-c">
        <h2>Громкость</h2>
        <div class="input-volume-c">
          <input class="input-volume" type="range" id="" min="0" max="100" />
          <div class="input-volume-value">
            <div>{{volumeInitial}}</div>
          </div>
        </div>
        <a class="input-volume-btn"></a>
      </div>

      <div class="settings__game-time-c">
        <h2>Игра на время</h2>
        <a class="time-game__btn">{{onoff}}</a>
      </div>

      <div class="settings__answer-time">
        <h2>Время ответа</h2>
        <div class="time-game__c">
          <button id="time-game-dec" class="settings__inc-dec-btns"><div></div></button>
          <h3 id="time-game-current">{{time}}</h3>
          <button id="time-game-inc" class="settings__inc-dec-btns">+</button>
        </div>
      </div>

    </div>


      
    </div>

  `,
  events: [
    { type: 'click', selector: '.time-game__btn', callbacks: [timeGameSwtitcher] },
    { type: 'click', selector: '#time-game-inc', callbacks: [incTime] },
    { type: 'click', selector: '#time-game-dec', callbacks: [decTime] },
    { type: 'input', selector: '.input-volume', callbacks: [volChange] },
    { type: 'click', selector: '.input-volume-btn', callbacks: [volBtn] },
  ],
  placeholders: [
    { ph: 'onoff', code: 'settings-time-game', },
    { ph: 'time', code: 'settings-answer-time', },
    { ph: 'volumeInitial', code: 'settings-set-init-volume', },
  ],
  functions: [
    setVolume,
    initTimeBtn,
    initVolBtn
  ],
});

function volChange(e) {
  const vol = e.target.value / 100;
  const value = document.querySelector('.input-volume-value');
  value.textContent = Math.round(vol * 100);
  localStorage.setItem('volume', vol);
};

function setVolume() {
  const vol = +localStorage.getItem('volume') * 100;
  document.querySelector('.input-volume').value = vol;
};

function incTime() {
  let answerTime = +localStorage.getItem('answerTime');
  answerTime += 5;
  if (answerTime > 30) answerTime = 30;
  localStorage.setItem('answerTime', answerTime);
  document.querySelector('#time-game-current').textContent = answerTime;
};

function decTime() {
  let answerTime = +localStorage.getItem('answerTime');
  answerTime -= 5;
  if (answerTime < 5) answerTime = 5;
  localStorage.setItem('answerTime', answerTime);
  document.querySelector('#time-game-current').textContent = answerTime;
};

function timeGameSwtitcher(e) {
  const state = localStorage.getItem('isTimeGameOn');
  if (!state) {
    localStorage.setItem('isTimeGameOn', true);
    e.target.textContent = 'ВКЛ.'
  } else {
    if (state === 'true') {
      localStorage.setItem('isTimeGameOn', false);
      e.target.textContent = 'ВЫКЛ.'
      document.querySelector('.time-game__btn').classList.remove('on');
    } else {
      localStorage.setItem('isTimeGameOn', true);
      e.target.textContent = 'ВКЛ.'
      document.querySelector('.time-game__btn').classList.add('on');
    };
  };
};

function initTimeBtn() {
  const state = localStorage.getItem('isTimeGameOn');
  if (!state) {

  } else {
    if (state === 'true') {
      document.querySelector('.time-game__btn').classList.add('on');

    } else {

      document.querySelector('.time-game__btn').classList.remove('on');
    };
  };
};

function initVolBtn() {
  const state = localStorage.getItem('soundStatus');
  const btn = document.querySelector('.input-volume-btn');

  if (!state) {
    btn.textContent = 'ВКЛ.';
    btn.classList.add('on');
    localStorage.setItem('soundStatus', true);
  } else {
    if (state === 'true') {
      btn.classList.add('on');
      btn.textContent = 'ВКЛ.';
    } else {
      btn.classList.remove('on');
      btn.textContent = 'ВЫКЛ.';
    };
  };
};

function volBtn(e) {
  const state = localStorage.getItem('soundStatus');

  if (state === 'true') {
    e.target.classList.remove('on');
    e.target.textContent = 'ВЫКЛ.';
    localStorage.setItem('soundStatus', false);
  } else {
    e.target.classList.add('on');
    e.target.textContent = 'ВКЛ.';
    localStorage.setItem('soundStatus', true);
  };

};


export { settings };