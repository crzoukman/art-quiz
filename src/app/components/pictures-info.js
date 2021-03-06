'use strict';

import { Component } from '../../core/component';

const picturesInfo = new Component({
  selector: '#main',
  template: `
          <div class="container header-int info-header">
        <div class="header-int__nav header-info-nav">
          <a  href="#pictures-review" class="go-home-btn">
            <i>
                              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                  viewBox="0 0 52.502 52.502" style="enable-background:new 0 0 52.502 52.502;" xml:space="preserve">
                <path d="M51.718,50.857l-1.341-2.252C40.075,31.295,25.975,32.357,22.524,32.917v13.642L0,23.995L22.524,1.644v13.43
                  c0.115,0,0.229-0.001,0.344-0.001c12.517,0,18.294,5.264,18.542,5.496c13.781,11.465,10.839,27.554,10.808,27.715L51.718,50.857z
                  M25.505,30.735c5.799,0,16.479,1.923,24.993,14.345c0.128-4.872-0.896-15.095-10.41-23.012c-0.099-0.088-5.935-5.364-18.533-4.975
                  l-1.03,0.03V6.447L2.832,24.001l17.692,17.724V31.311l0.76-0.188C21.338,31.109,22.947,30.735,25.505,30.735z"/>
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

    <div class="container info-c">
      <div class="info-img-c">
        <img class="info-img" src="./images/img/{{image}}.webp">
      </div>

      <h4>Художник:</h4>
      <h3>{{author}}</h3>
      <h4>Картина:</h4>
      <h3>{{name}}</h3>
      <h4>Год:</h4>
      <h3>{{year}}</h3>
    </div>
  `,
  placeholders: [
    { ph: 'author', code: 'pictures-info', data: 'author' },
    { ph: 'name', code: 'pictures-info', data: 'name' },
    { ph: 'year', code: 'pictures-info', data: 'year' },
    { ph: 'image', code: 'pictures-info', data: 'imageNum' },
  ],
});

export { picturesInfo };