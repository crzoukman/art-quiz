'use strict';


import { observable, Observer } from '../state';
import { Component } from '../../core/component';
import { prepareAnswersData } from './artists';

const artistsQuiz = new Component({
  selector: '#main',
  template: `
      <div class="container header-int header-quiz">
        <div class="header-int__nav header-int__nav-quiz">
          <a href="#" class="go-home-btn">
            <i>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"/></svg>
            </i>
            <div>Главная</div>
          </a>

          <a href="#artists" class="go-home-btn">
            <i>
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <g>
                <g>
                  <path d="M495.304,212.326h-58.514v-58.883c0-9.22-7.475-16.696-16.696-16.696h-58.514V77.862c0-9.22-7.475-16.696-16.696-16.696
                    H16.696C7.475,61.167,0,68.642,0,77.862V282.98c0,9.22,7.475,16.696,16.696,16.696h58.514v58.883
                    c0,9.22,7.475,16.696,16.696,16.696h58.514v58.883c0,9.22,7.475,16.696,16.696,16.696h328.19c9.22,0,16.696-7.475,16.696-16.696
                    V229.021C512,219.801,504.525,212.326,495.304,212.326z M33.391,266.284V94.558h294.797c0,3.186,0,168.506,0,171.726
                    C316.133,266.284,47.045,266.284,33.391,266.284z M108.601,341.863v-42.188h236.284c9.22,0,16.696-7.475,16.696-16.696V170.137
                    h41.818c0,3.186,0,168.506,0,171.726C391.343,341.863,122.254,341.863,108.601,341.863z M478.609,417.443H183.811v-42.188h236.284
                    c9.22,0,16.696-7.475,16.696-16.696V245.717h41.818V417.443z"/>
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              </svg>
            </i>
            <div>Художники</div>
          </a>

          <div class="quiz-download">
            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 488.658 488.658" style="enable-background:new 0 0 488.658 488.658;" xml:space="preserve">
              <g>
                <g>
                  <path d="M225.485,317.756c-21-23-42.8-45.1-67.4-64.3c-7.4-5.8-16.2-8-22.1-1.1c-5.4,6.3-5,15.3,1.1,22.8
                    c11,13.4,21.9,27,34.3,39.1c19.9,19.4,41,37.6,61.6,56.4c0.6,1,1.2,1.9,1.8,2.9v0.1c3.1,4.8,9.6,6.2,14.4,3.1l4.8-3.1
                    c41.9-27.1,72.7-66.8,109.2-100c1.7-1.5,1.7-6.5,0.7-9c-1.9-5-6.8-5.9-12.1-5.1c-17.2,2.7-32.5,11.6-45.7,23
                    c-15.8,13.7-31.7,27.2-47.2,41.3c1.2-14.4,2.1-28.8,2-43.2c-0.4-32.2-2.4-64.4-3.7-96.6c11.5-57.7,4.9-116.8,7.3-175.2
                    c0.1-2.6-3.4-6.7-5.8-8c-4.9-2.5-9,0.8-12.1,5.7c-10.3,16.3-14.8,36.1-16,56.2c-2.9,48.5-7.3,97-4,145.7c-0.4,6-0.8,12.1-1.1,18.1
                    C224.085,256.956,223.585,287.456,225.485,317.756z"/>
                  <path d="M214.685,450.756c-6.3-0.4-12.6-0.8-18.9-1.1c-40-1.7-80-2.2-119.8,1.9c-11.3,1.2-20.7,5.8-19.9,14.8
                    c0.8,8.3,8.8,14.4,20.4,15.3c20.9,1.7,41.9,3.6,62.8,3.4c33.7-0.4,67.3-2.4,101-3.7c60.3,11.5,122.1,4.9,183.1,7.3
                    c2.7,0.1,7-3.4,8.3-5.8c2.7-4.9-0.8-9-6-12.1c-17-10.3-37.7-14.8-58.8-16C316.385,451.956,265.685,447.556,214.685,450.756z"/>
                </g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              </svg>

          
            <span>Скачать</span>
          </div>
        </div>

      </div>

    <div class="container quiz">
      <div class="quiz-modal">
        <div class="quiz-modal-img-c">
          <img src="./images/img/{{tImage}}.webp"></img>

            <svg class="quiz-svg quiz-svg-correct hidden" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
              <circle style="fill:#6DC180;" cx="256" cy="256" r="256"/>
              <path style="fill:#5CA15D;" d="M256,0v512c141.385,0,256-114.615,256-256S397.385,0,256,0z"/>
              <polygon style="fill:#F2F2F4;" points="219.429,367.932 108.606,257.108 147.394,218.32 219.429,290.353 355.463,154.32
                394.251,193.108 "/>
              <polygon style="fill:#DFDFE1;" points="256,331.361 394.251,193.108 355.463,154.32 256,253.782 "/>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              <g>
              </g>
              </svg>

              

              <svg class="quiz-svg quiz-svg-wrong hidden" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <circle style="fill:#D75A4A;" cx="25" cy="25" r="25"/>
                <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,34 25,25 34,16
                  "/>
                <polyline style="fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-miterlimit:10;" points="16,16 25,25 34,34
                  "/>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                </svg>


        </div>
        <div class="quiz-modal-info quiz-modal-name">{{tName}}</div>
        <div class="quiz-modal-info quiz-modal-author">{{tAuthor}}</div>
        <div class="quiz-modal-info quiz-modal-year">{{tYear}}</div>
        <button class="quiz-modal-btn">Продолжить</button>
      </div>

      <div class="quiz-timer-c hidden">
        <div class="quiz-timer"><div></div></div>  
        <h3 class="quiz-header artists__timer">&#8203;</h3>
      </div>
      
      <h2 class="artists-quiz-author">Кто автор данной картины?</h2>

      <div class="quiz-image artists-quiz__image-c">
        <img id="artists-quiz-img" src="./images/img/{{image}}.webp"></img>
        
      </div>

      <div class="container artists-quiz-btns-c">
        <div class="row artists-quiz-btns-row">
          <a class="artists-quiz__aswBtns">{{1}}</a>
          <a class="artists-quiz__aswBtns">{{2}}</a>
        </div>

        <div class="row artists-quiz-btns-row">
          <a class="artists-quiz__aswBtns">{{3}}</a>
          <a class="artists-quiz__aswBtns">{{4}}</a>
        </div>
      </div>
    </div> 

    
  `,
  placeholders: [
    { ph: '1', code: 'artists-quiz-btns', data: 1, },
    { ph: '2', code: 'artists-quiz-btns', data: 2, },
    { ph: '3', code: 'artists-quiz-btns', data: 3, },
    { ph: '4', code: 'artists-quiz-btns', data: 4, },
    { ph: 'image', code: 'artists-image', },
    { ph: 'tImage', code: 'artists-modal', data: 'imageNum' },
    { ph: 'tName', code: 'artists-modal', data: 'name' },
    { ph: 'tAuthor', code: 'artists-modal', data: 'author' },
    { ph: 'tYear', code: 'artists-modal', data: 'year' },
  ],
  events: [
    { type: 'click', selector: '.artists-quiz__aswBtns', callbacks: [answerWasGiven] },

    { type: 'click', selector: '.quiz-modal-btn', callbacks: [next] },
    { type: 'click', selector: '.quiz-download', callbacks: [downloadImage] },


  ],
  functions: [
    timer,
    showTimer,
    animateTimer,
    pressEnter,
  ],
});

async function downloadImage() {

  const imageNum = observable.state.currentArtistsTrueAnswer.imageNum;
  const imageName = observable.state.currentArtistsTrueAnswer.name;
  const imageAuthor = observable.state.currentArtistsTrueAnswer.author;
  const imageYear = observable.state.currentArtistsTrueAnswer.year;
  //const imageSrc = `http://127.0.0.1:5500/crzoukman-JSFE2021Q3/art-quiz/dist/images/img/${imageNum}.webp`;
  const imageSrc = `https://rolling-scopes-school.github.io/crzoukman-JSFE2021Q3/art-quiz/dist/images/img/${imageNum}.webp`;

  const image = await fetch(imageSrc)
  const imageBlog = await image.blob()
  const imageURL = URL.createObjectURL(imageBlog)

  const link = document.createElement('a')
  link.href = imageURL
  link.download = `${imageName} - ${imageAuthor} - ${imageYear}.webp`;
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
};

function pressEnter() {
  function fn(e) {
    const status = observable.state.showQuizModal;
    if (e.keyCode === 13 && status) {
      e.preventDefault();
      next();
      window.removeEventListener('keyup', fn);
      observable.state.showQuizModal = false;
    };
  };

  window.addEventListener('keyup', fn);
};

function showModal() {
  observable.state.showQuizModal = true;

  const modal = document.querySelector('.quiz-modal');
  modal.classList.add('show-quiz-modal');
}

function animateTimer() {
  const timer = document.querySelector('.quiz-timer div');
  const max = +localStorage.getItem('answerTime');

  let progress = 0;

  const timerID = setInterval(() => {
    progress += 100 / max;
    timer.style.width = `${progress}%`;
  }, 1000);

  observable.state.timerID = timerID;
};


function showTimer() {
  const timer = document.querySelector('.quiz-timer-c');
  const status = localStorage.getItem('isTimeGameOn');

  if (status === 'true') timer.classList.remove('hidden');
  else timer.classList.add('hidden');
};

function timer() {
  if (localStorage.getItem('isTimeGameOn') === 'true') {
    let idx = window.setInterval(function () { }, 0);

    while (idx--) {
      window.clearInterval(idx);
    };

    const element = document.querySelector('.artists__timer');
    let counter = +localStorage.getItem('answerTime');
    element.textContent = counter;
    const id = setInterval(() => {
      observable.state.artistsTimer = id;

      counter--;
      element.textContent = counter;
      if (counter === 0) {
        document.querySelector('.quiz-svg-wrong').classList.remove('hidden');
        document.querySelector('.quiz-svg-correct').classList.add('hidden');

        const soundStatus = localStorage.getItem('soundStatus');
        if (soundStatus === 'true') {
          const play = new Audio('./sounds/time.wav');
          play.volume = +localStorage.getItem('volume');
          play.play();
        };


        clearInterval(id);

        const cur = observable.state.currentArtistsPlayingCategory;
        if (observable.state.artistsResult[cur].length >= 10) {
          observable.state.artistsResult[cur].length = 0;
        };

        observable.state.artistsResult[cur].push({ res: null, data: { imageNum: 240 } });


        if (observable.state.currentArtistsQuestion === 9) {
          showModal();
          document.querySelector('.quiz-modal-btn').textContent = 'Закончить';
          // вносим в ЛС результат раунда с данными
          localStorage.setItem('artistsResult', JSON.stringify(observable.state.artistsResult));
          setTimeout(() => clearInterval(observable.state.timerID), 0);

        } else {
          showModal();
          setTimeout(() => clearInterval(observable.state.timerID), 0);

        };


      };
    }, 1000)
  };

};

function answerWasGiven(e) {
  let idx = window.setInterval(function () { }, 0);

  while (idx--) {
    window.clearInterval(idx);
  };


  // блокируем нажатие на ответы, после того, как ответ был дан
  if (!observable.state.isArtistsAnswerWasGiven) {
    observable.state.isArtistsAnswerWasGiven = true;
    // количество миллисекунд, которое мы ждём после ответа
    const MS = 2000;

    const userAnswer = e.target.textContent.toUpperCase().trim();
    const answer = observable.state.currentArtistsTrueAnswer.author.toUpperCase();
    let res;

    if (userAnswer === answer) {
      // был ли ответ верен
      observable.state.isAnswerWasTrue = true;

      const soundStatus = localStorage.getItem('soundStatus');
      if (soundStatus === 'true') {
        const play = new Audio('./sounds/yes.wav');
        play.volume = +localStorage.getItem('volume');
        play.play();
      };



      document.querySelector('.quiz-svg-wrong').classList.add('hidden');
      document.querySelector('.quiz-svg-correct').classList.remove('hidden');

      e.target.style.border = '1.5px solid green';
      e.target.style.backgroundColor = 'green';
      // увеличиваем счётчик количества правильных ответов, если ответ верный
      observable.state.currentArtistsRightAnswers++;
      res = true;
    } else {
      // был ли ответ верен
      observable.state.isAnswerWasTrue = false;

      const soundStatus = localStorage.getItem('soundStatus');
      if (soundStatus === 'true') {
        const play = new Audio('./sounds/no.wav');
        play.volume = +localStorage.getItem('volume');
        play.play();
      };



      document.querySelector('.quiz-svg-wrong').classList.remove('hidden');
      document.querySelector('.quiz-svg-correct').classList.add('hidden');


      e.target.style.border = '1.5px solid red';
      e.target.style.backgroundColor = 'red';
      document.querySelectorAll('.artists-quiz__aswBtns').forEach(btn => {
        if (btn.textContent.trim().toUpperCase() === answer) {
          btn.style.border = '1.5px solid green';
          btn.style.backgroundColor = 'green';
        };
      });
      res = false;
    };

    // запихиваем в стейт результат наших ответов с данными
    const cur = observable.state.currentArtistsPlayingCategory;
    const ans = observable.state.currentArtistsTrueAnswer;

    // блядсткое колдовство. дублирую код, что обнулить массив...
    if (observable.state.artistsResult[cur].length >= 10) {
      observable.state.artistsResult[cur].length = 0;
    };
    observable.state.artistsResult[cur].push({ res, data: ans })



    // при ответе на все вопросы раунд завершается
    if (observable.state.currentArtistsQuestion === 9) {
      showModal();
      document.querySelector('.quiz-modal-btn').textContent = 'Закончить';

      // записываем в стейт, что игра закончилась
      observable.state.isArtistsCategoryPlaying = false;


      // вносим в ЛС результат раунда с данными
      localStorage.setItem('artistsResult', JSON.stringify(observable.state.artistsResult));


    } else {
      showModal();

    };

  };

};


function next() {
  observable.state.isArtistsAnswerWasGiven = false;
  if (observable.state.currentArtistsQuestion >= 9) {
    finishRound();
  } else {
    const num = ++observable.state.currentArtistsQuestion;
    observable.setState({ currentArtistsQuestion: num });
    // функция из artists.js, которая подготавливает данные для 
    // следующего вопроса
    prepareAnswersData();
  };

};

function finishRound() {


  // сменить адресную строку по завершению раунда, чтобы перейти
  window.location.hash = 'artists-score';

  // запишем результат игры в локал сторейдж
  const id = observable.state.currentArtistsPlayingCategory;
  const res = observable.state.currentArtistsRightAnswers;

  if (res === 10) {
    const soundStatus = localStorage.getItem('soundStatus');
    if (soundStatus === 'true') {
      const play = new Audio('./sounds/win.wav');
      play.volume = +localStorage.getItem('volume');
      play.play();
    };


  } else {
    const soundStatus = localStorage.getItem('soundStatus');
    if (soundStatus === 'true') {
      const play = new Audio('./sounds/end.wav');
      play.volume = +localStorage.getItem('volume');
      play.play();
    };

  };

  localStorage.setItem(`artistsCategoryResult-${id}`, res);
  localStorage.setItem(`lastPlayingArtistsCategory`, observable.state.currentArtistsPlayingCategory);

  // обнуляем счётчик вопросов прм завершении раунда
  observable.state.currentArtistsQuestion = 0;
  // обнуляем счётчик количества правильных ответов
  observable.state.currentArtistsRightAnswers = 0;
  observable.state.currentArtistsPlayingCategory = null;
  observable.state.currentArtistsQList = null;
  observable.state.currentArtistsTrueAnswer = null;
  observable.state.currentArtistsBtnsPh = null;
};

// подключаем обсёрвер
const artistsQuizObserver = new Observer(artistsQuiz);
observable.subscribe(artistsQuizObserver);

export { artistsQuiz };