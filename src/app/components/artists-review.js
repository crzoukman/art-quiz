'use strict';

import { Component } from '../../core/component';
import { observable } from '../state';

const artistsReview = new Component({
  selector: '#main',
  template: `
      <div class="container header-int header-int-review">
        <div class="header-int__logo-c">
          <i class="header-int__logo">
                          <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="456.793px" height="456.793px" viewBox="0 0 456.793 456.793" style="enable-background:new 0 0 456.793 456.793;"
                xml:space="preserve">
              <g>
                <g>
                  <path d="M448.947,218.474c-0.922-1.168-23.055-28.933-61-56.81c-50.707-37.253-105.879-56.944-159.551-56.944
                    c-53.673,0-108.845,19.691-159.551,56.944c-37.944,27.876-60.077,55.642-61,56.81L0,228.396l7.845,9.923
                    c0.923,1.168,23.056,28.934,61,56.811c50.707,37.254,105.878,56.943,159.551,56.943c53.672,0,108.844-19.689,159.551-56.943
                    c37.945-27.877,60.078-55.643,61-56.811l7.846-9.923L448.947,218.474z M228.396,312.096c-46.152,0-83.699-37.548-83.699-83.699
                    c0-46.152,37.547-83.699,83.699-83.699s83.7,37.547,83.7,83.699C312.096,274.548,274.548,312.096,228.396,312.096z
                    M41.685,228.396c9.197-9.872,25.32-25.764,46.833-41.478c13.911-10.16,31.442-21.181,51.772-30.305
                    c-15.989,19.589-25.593,44.584-25.593,71.782s9.604,52.193,25.593,71.782c-20.329-9.124-37.861-20.146-51.771-30.306
                    C67.002,254.159,50.878,238.265,41.685,228.396z M368.273,269.874c-13.912,10.16-31.443,21.182-51.771,30.306
                    c15.988-19.589,25.594-44.584,25.594-71.782s-9.605-52.193-25.594-71.782c20.33,9.124,37.861,20.146,51.771,30.305
                    c21.516,15.715,37.639,31.609,46.832,41.477C405.91,238.268,389.785,254.161,368.273,269.874z"/>
                  <path d="M223.646,168.834c-27.513,4-50.791,31.432-41.752,59.562c8.23-20.318,25.457-33.991,45.795-32.917
                    c16.336,0.863,33.983,18.237,33.59,32.228c1.488,22.407-12.725,39.047-32.884,47.191c46.671,15.21,73.197-44.368,51.818-79.352
                    C268.232,175.942,245.969,166.23,223.646,168.834z"/>
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

          <div class="header-int__name">Художники</div>
        </div>


        <div class="header-int__nav">
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
            <div>Назад</div>
          </a>
        </div>
    </div>

    <div class="container review-c">
      <div class="review-img-c">
        <img data-id="1" class="review-img artists-review__images" src="./images/img/{{image-1}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="2" class="review-img artists-review__images" src="./images/img/{{image-2}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="3" class="review-img artists-review__images" src="./images/img/{{image-3}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="4" class="review-img artists-review__images" src="./images/img/{{image-4}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="5" class="review-img artists-review__images" src="./images/img/{{image-5}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="6" class="review-img artists-review__images" src="./images/img/{{image-6}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="7" class="review-img artists-review__images" src="./images/img/{{image-7}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="8" class="review-img artists-review__images" src="./images/img/{{image-8}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="9" class="review-img artists-review__images" src="./images/img/{{image-9}}.webp">
      </div>

       <div class="review-img-c">
        <img data-id="10" class="review-img artists-review__images" src="./images/img/{{image-10}}.webp">
      </div>
    </div>

   
  `,
  placeholders: [
    { ph: 'some', code: 'artists-review' },
    { ph: 'image-1', code: 'artists-review', data: 0 },
    { ph: 'image-2', code: 'artists-review', data: 1 },
    { ph: 'image-3', code: 'artists-review', data: 2 },
    { ph: 'image-4', code: 'artists-review', data: 3 },
    { ph: 'image-5', code: 'artists-review', data: 4 },
    { ph: 'image-6', code: 'artists-review', data: 5 },
    { ph: 'image-7', code: 'artists-review', data: 6 },
    { ph: 'image-8', code: 'artists-review', data: 7 },
    { ph: 'image-9', code: 'artists-review', data: 8 },
    { ph: 'image-10', code: 'artists-review', data: 9 },

  ],
  functions: [
    addBlackWhiteClass,
    addBlur,
  ],
  events: [
    { type: 'click', selector: '.artists-review__images', callbacks: [goToArtistsInfo] },
  ],
});

function goToArtistsInfo(e) {
  // добавляет в стейт айди картины, по которой кликнули
  observable.state.lastArtistsReviewImageID = e.target.dataset.id;

  // делаем так, чтобы в review нельзя было кликнуть по 
  // ответам зафейленных из-за времени
  const imgID = e.target.dataset.id;
  const catID = observable.state.lastArtistsReviewID;
  const artistsRes = JSON.parse(localStorage.getItem('artistsResult'));
  if (artistsRes[catID][imgID - 1].res !== null) {
    window.location.hash = '#artists-info';
  };


};

function addBlur() {
  document.querySelectorAll('.artists-review__images').forEach(e => {
    const imgID = e.dataset.id;
    const catID = observable.state.lastArtistsReviewID;
    const data = JSON.parse(localStorage.getItem('artistsResult'))[catID][imgID - 1];

    e.classList.remove('blur');
    if (data.res === null) {
      e.classList.add('blur');
    };
  });
};

function addBlackWhiteClass() {
  document.querySelectorAll('.artists-review__images').forEach(e => {
    const imgID = e.dataset.id;
    const catID = observable.state.lastArtistsReviewID;
    const data = JSON.parse(localStorage.getItem('artistsResult'))[catID][imgID - 1];

    e.classList.remove('black-white');
    if (!data.res) {
      e.classList.add('black-white');
    };
  });
};

export { artistsReview };