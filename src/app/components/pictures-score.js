'use strict';

import { Component } from '../../core/component';

const picturesScore = new Component({
  selector: '#main',
  template: `
     <div class="container header-int">
        <div class="header-int__nav header-int__nav-score">
          <a href="#" class="go-home-btn">
            <i>
              <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 24.962891 1.0546875 A 1.0001 1.0001 0 0 0 24.384766 1.2636719 L 1.3847656 19.210938 A 1.0005659 1.0005659 0 0 0 2.6152344 20.789062 L 4 19.708984 L 4 46 A 1.0001 1.0001 0 0 0 5 47 L 18.832031 47 A 1.0001 1.0001 0 0 0 19.158203 47 L 30.832031 47 A 1.0001 1.0001 0 0 0 31.158203 47 L 45 47 A 1.0001 1.0001 0 0 0 46 46 L 46 19.708984 L 47.384766 20.789062 A 1.0005657 1.0005657 0 1 0 48.615234 19.210938 L 41 13.269531 L 41 6 L 35 6 L 35 8.5859375 L 25.615234 1.2636719 A 1.0001 1.0001 0 0 0 24.962891 1.0546875 z M 25 3.3222656 L 44 18.148438 L 44 45 L 32 45 L 32 26 L 18 26 L 18 45 L 6 45 L 6 18.148438 L 25 3.3222656 z M 37 8 L 39 8 L 39 11.708984 L 37 10.146484 L 37 8 z M 20 28 L 30 28 L 30 45 L 20 45 L 20 28 z"/></svg>
            </i>
            <div>Главная</div>
          </a>

          <a href="#pictures" class="go-home-btn">
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
            <div>Картины</div>
          </a>
        </div>
    </div>

    <div class="container score-page">
          <svg  class="score-page-lose hidden " xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" height="1872pt" width="1652pt" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" viewBox="0 0 1652 1872">
      <path id="path4" d="m39.281 12.84c-0.297 0.062-0.763 0.51-1.457 1.535-25.787 76.35-36.025 160.18-17.875 239.42 35.663 123.11 133.96 229 258.49 264.29 4.66 54.72 14.96 109.09 16.42 164-13.48 82.79-44.44 162.02-57.76 244.8-51.06 23.72-72.64 89.71-49.07 140.11 12.3 27.5 34.92 48.9 59.46 65.7 6.02-1.9-4.33-5.1-5.24-7.4-44.47-33.2-66.93-99.7-34.86-148.73 14.3-24.68 38.96-50.03 70.2-45.11 7.77 1.77 15.2 4.83 22.92 6.82-3.67-5.69-13.9-7.84-16.37-12.87 56.22-73 152.81-116.62 244.86-105.59 73.05 9.53 144.35 46.72 188.61 106.33 8.43 6.86-3.31 11.95-6.76 17.23 20.2-12.04 46.87-12.82 65.41 2.86 28.38 25.92 47.08 66.46 37.74 105.16-7.14 33.7-31.74 60-57.85 80.9 28.99-14.3 52.62-39.8 65.51-69.4 22.34-51.2-3.27-120.86-58.59-137.36-8.06-69.05-25.26-136.7-43.66-203.69-7.41-25.46-8.83-52.31-4.6-78.49 5.29 7.8 9.54 16.32 15.22 23.85 9.7-8.76 17.33-19.38 25.26-29.62-7.33 57.55 31.67 113.25 86.81 128.97-14.5-18.66-19.3-43.3-17.9-66.49 15.19 56.43 59.99 109.42 120.75 115.93-12.78-22.29-18.04-47.41-22.39-72.46 20.42 29.73 62.52 45.82 96.24 35.71-24.37-10-34.12-36.55-40.5-60.06 17.84 12.75 39.4 20.76 61.3 14.55 6.2-1.78 12.1-4.38 18.6-4.7 104.5 54.92 227 73.65 343.6 56.55 68.7-9.24 134.6-32.79 203.3-41.87 40.7-5.07 87-0.97 117.4 29.82 51.7 44.43 90.8 101.48 125.7 159.5 41.4 73.16 72 154.16 78 238.56 4.5 43.1-14 84.2-38.8 118.3-32.1 44.2-64 90.5-78.7 143.8-10.1 38.3-12.5 83.5 9.6 118 31.4 26 70.4 64.5 55.4 109.5-45.5 120.7-77.5 249.8-63.3 379.6-31.2-16.2-65.4-27.5-100.7-28.2-14.2 0.9-28.4 1.9-42.4 4.7-24.6 5.8-47.6 17.1-68.4 31.6 15.7-37.6 48.9-63 72.3-95.2 63.8-84.9 69.8-204.7 26.2-299.9-32.9-61-79.5-114.3-132.4-158.8-75.5-57.4-133.5-136.7-167.9-224.9-1.7-3.2-1.8-7.8-4.8-9.9 8.9 41.6 28.3 80.1 49.2 116.8 19.2 30.2 40.1 59.3 64.5 85.4 20.4 22.3 44.6 40.7 66.9 61 6.1 5-5.4 7.1-8.2 10-131.9 82.7-291.2 113.8-445.3 106.5-1.3-6.6 3.7-12.8 5.5-19.1 7.9-30.9 7.9-65.2-5.3-94.8-10.1-21.4-25.9-40.7-46.1-53.2 31 28.4 54.7 69.1 48.4 112.6-0.4 41-30.5 71.8-44.3 108.4-31.1 75.8-46.8 158-46.5 239.9-0.9 51.5 17 100.8 21.1 151.7 3.1 51.5-5.5 106.7-37.1 148.7 14.8-52.8-25.24-105.5-76.5-116.3-17.11-4.5-35.01-3.1-52.32-0.6-14.42 4.4-28.59 9.3-42.39 15.3 10.12-57.3 73.46-86.9 79.18-145.6 7.67-42.4 10.37-85.5 12.98-128.4 2.38-86.1-0.27-180.3-50.09-254.4-26.91-47.8-52.01-96.5-78.9-144.2-2.26-3.9-4.05-8.1-5.95-12.2-2.37-3.1-4.86-6.1-7.18-9.3 13.35 37.9 33.22 73.1 48.66 110.1-23.69-16.9-43.52-38.5-63.49-59.5-38.65-40.3-70.75-86.1-108.14-127.5-8.07-11.9-22.76-24-27.21-35.3 20.35-15.3 38.36-33.8 52.6-55 20.16-32.3 37.45-67.5 44.47-105.1 4.62-18 6.2-36.5 9.09-54.7 20.75-9.7 45.63-31.4 36.7-56.3-8.52-13.8-25.67-3.1-29.1 8.8-17.04 38.8-14.22 82.8-28.62 122.5-13.93 38.5-33.52 75.7-61.73 105.8-25.56 26.8-60.27 41.5-93.42 56.5-31.9 14.8-68.7 20.7-103.02 11.3-29.48-7-56.36-22.1-82.98-36.1-13.34-6.8-25.7-15.5-36.43-25.9-33.93-32.7-57.15-75.2-72.37-119.5-13.7-39.3-11.4-83.5-31.72-120.6-4.56-10.6-24.75-14.4-25.96 0.6-3.54 21.8 16.18 36 32 46.2 2.64 11.6 3.89 23.5 5.62 35.3 8.8 74.6 44.13 150.3 108.68 192.3 8.98 2.9 6.26 13.4 8.44 20.4 8.8 50.2 53.6 90.8 104.57 94.3 39.29 2.3 82.74-3.5 113.34-30.6 20.63-19.5 34.03-46.6 35.95-75.1-2.63-6.2 8.55-16.3 11.55-7.7 39.9 73.6 96.29 136.6 161.27 188.9 6.98 50.5 19.57 100.5 37.87 148.2 18.91 42.3 22.71 89.8 24.48 135.6 0.91 66-6.79 135.7-41.88 193.1-12.8 7.3-21.87 19.7-34.12 27.3-75.53 12.3-136.09 76.8-150.22 151-0.73 18.4 20.78 24.5 35.39 25.7 38.64 1.8 76.68-7 114.24-15-18.09 30.1-39.08 67.2-24.6 102.8 17.76 30.7 58.57 31.7 89.96 35.2 112.31 5.3 211.4-95.7 212.4-206.5 5.4-72.3-26.1-141.6-17.8-214 6.1-89.6 19.9-182.9 67.3-260.9 138.2 25.7 281.8-8.2 401.8-78.5 34.3 44.8 44.9 104.9 42.5 160.7 3.9 56.1-0.4 122.1-45.9 161.9-31.1 26.8-59.2 57-88.1 85.8-52.2 19.3-98.1 65.2-102.1 122.8 1.4 12-1.4 28.5 9.2 37 64.3 18.9 134.1-0.5 188.9-36.5 34.2-20.6 71.2-50.1 76.2-92.6 8.1-92.7 54.2-175.5 95.6-256.8 4.8-6.4 6.8-17.3 13.6-21 15.6 71.9 6 151.2-34.9 213.5-22.8 37.1-60.7 64-77.3 105.2-4 12-16.5 17.8-23 28.2-20.7 29.7-38 65.7-33.4 102.8 1.6 32.6 28.6 62.1 61.8 63.3 51.9 2.1 100-21.6 145.7-43.3 32.5-14.6 62.6-42.2 68.7-78.7 10.9-42.1-3.2-85-1.3-127.5-2.8-61.4 10.4-121.7 20.8-181.8 9-52.8 29.5-102.6 47.2-152.9 10.8-47.3-28.3-84.9-60-113.3-32.1-76 10.4-157.8 55.3-218.8 22.3-29.4 45.1-59.9 55.9-95.6-0.3 46.3-14.8 94.9-19.7 142.2-2.2 41.8-8.9 87-4.5 126.2-0.7-75.9 10.6-151.3 25.6-225.5 22.5-129.2-19.1-260.4-85.6-370.45 34.4 40.8 60.8 88.06 81.5 137.15 37.9 86.4 33.7 184.5 16 275.3-14 60.1-32.2 121.9-23.4 184.2 2-51.5 7.1-104.4 23.9-153.8 23.7-81.8 33.7-169.1 17.2-253.2-19.2-91-75.6-168.71-139.2-234.47-31.4-29.09-54.6-66.04-88.2-93.06-26.7-25.02-63.3-38.67-99.9-36.9-85.8 3.97-165.9 39.52-250.5 50.72-109.8 13.7-225.9 0.15-325-51.14 3.2-2.97 8.3-4.15 10.5-8.15-45.5 3.39-57.9-65.99-106.79-53.3-12.09-25.03-37.72-38.46-63.72-44.49-14.53-34.11-44.88-59.36-77.98-74.55-7.63-19.16-21.48-36.86-36.37-49.09 108.84-54.7 192.46-162.65 209.23-284.37 4.43-66.93-6.85-135.24-32.33-197.32-1.23 1.782-2.14 3.845-2.28 6.032 26.38 81.438 30.79 173.29 2.17 255.09-36.9 109.25-123.62 204.01-234.91 238.89 1.18-12.95 2.94-25.84 3.43-38.85 0.66-11.97 1.8-23.9 2.4-35.88-0.73-16.06-2.21-32.19-6.7-47.69-2.36-6.81-8.42-15.5-0.72-21.15 33.41-41.38 62.1-87.87 77.87-138.94 21.08-82.94 66.69-166.32 146.36-205.31 0.6-0.333 1.79-1.008 2.39-1.345l-0.16-0.924c-80.06 30.75-133 106.85-158.96 186-16.93 54.45-38.95 107.73-71.25 154.98-5.68 10.65-9.77-5.66-13.22-9.49 10.96-9.47 16-26.48 5.98-38.57-15.89-15.23-38.62-19.77-59.75-22.15 36.48-24.61 81.67-35.25 114.74-64.68 9.27-7.02 7.47-22.39-3.58-25.95-43.74-18.58-93.45-1.49-129.76 25.28 11.19-15.4 25.49-31.12 25.74-51.26-0.97-11.53-13.98-17.12-24.33-15.32-29.45-0.5-49.85 25.46-61.45 48.56-11.11-32.91-29.26-65.03-57.72-85.85-14.48-11.44-38.79-10.94-49.65 5.11-13.79 18.73-6.79 43.29-0.22 63.44-29.54-21.4-62.44-43.23-99.9-45.7-21.85-1.21-53.88 16.65-41.92 42.34 21.81 30.66 60.18 41.98 93.71 55.34-48.05-4.34-124.31-12.12-153.7 41.37-11.35 28.23 19.76 48.81 44.09 51.75-7.09 9.32-12.39 21.05-20.87 28.88-33.21-44.14-59.97-93.67-74.38-147.19-27.28-81.85-77.77-165.01-161.96-196.76 52.31 26.996 93.08 73.008 117.4 126.28 18.53 35.35 26.53 74.69 40.83 111.68 17.15 42.37 45.91 78.72 76.4 112.27-1.44 3.36-3.11 6.63-4.75 9.9-9.04 15.92-6.56 42.35-12.31 53.03 3.46 9.05 2.84 23.69 3.44 35.15 0.13 3.11 0.22 6.22 0.27 9.36l0.05 1.12c-0.62 9.63 4.06 24.18 0.95 31.29-107.89-34.46-191.15-126.32-230.16-231-30.65-80.22-27-168.76-10.6-251.71 0.575-3.874 1.225-7.738 1.875-11.601 0.138-0.762 0.401-2.286 0.526-3.049 0.506-1.696 1.123-4.996 0.23-4.81zm915.53 26.01c-6.65 4.487-12.31 10.201-17.71 16.076-30.43 41.275-52.08 88.374-67.6 137.07-25.54 86.82-51.74 181.24-125.38 240.69 44.22-30.35 75.46-76.19 95.88-125.19 36.58-79.69 47.66-170.29 97.38-243.86 5.73-8.303 11.14-16.878 17.43-24.79zm-900.63 5.5c-0.693-0.015-1.321 0.412-1.782 1.576 43.45 46.612 63.32 109.23 81.48 168.95 26.81 81.04 57.21 171.22 132.46 219.32-70.2-52.94-97.25-140.09-121.2-220.6-16.53-60.45-42.74-120.19-86.54-165.95-1.057-1.108-2.894-3.269-4.418-3.3zm429.34 91.25c46.51-0.41 72.59 51.37 91.51 86.71 16.26-19.7 34.93-43.26 61.86-49.26 7.05-2.04 15.45 4.13 13.11 12.1-2.19 20.03-8.97 41.65-23.64 56.23 35.08-16.24 74.39-29.22 113.36-25.03 13.32 3.35 0.84 17.67-6 21.21-33.96 20.73-79.28 31.52-100.02 68.43 23.85 5.7 54.93 0.18 74.95 19.23 8.5 7.85 0.06 20.43-8.72 23.5-24.23 10.19-53.15 7.64-76-5.01-3.72-1.51-3.99-5.74-5.22-9.01-7.15 41.45-23.17 108.75-76.46 117.84 4.77 6.11 11.46 9.79 18.76 11.92-20.75 4.58-34.47-15.81-40.19-32.75-4.43-15.77-13.68-33.37-5.16-49.45-0.06-1.66 0.08-3.3 0.15-4.94-21.69 36.75-49.51 70.24-83.47 96.28-14.04 9.72-29.27 20.99-47.27 20.16 0.99 5.46 2.49 10.85 3.61 16.3-25.49-9.92-18.19-42.9-12.28-63.68 11.23-27.33 25.56-53.97 46.44-75.23-23.29 11.3-31.35 40.89-53.6 54.34-20.03 14.21-45.59 30.7-70.84 22.02-0.56 6.5 0.96 12.83 2.92 18.94-16.4-8.54-12.74-32.44-7.98-46.84 14.31-34.62 43.34-66.71 77.69-81.08 14.4-3.4 30.44-5.12 42.67-14.17-39.58 1.59-85.64 10.68-122.36-11.81-11.76-5.92-19.81-23.27-6.04-32.34 47.35-37.07 113.76-27.16 168.56-25.99-40.86-16.47-84.96-35.04-110.32-73.11-6.65-8.96 0.05-16.95 9.26-18.54 39.09-7.86 75.84 14.83 109.65 31.18 16.46 5.24 14.94 26.58 27.52 36.18-9.81-29.4-28.43-65.63-8.68-94.27 0.75-0.03 1.49-0.05 2.23-0.06zm-128.52 205.86c-18.61 11.59-37.69 23.49-51.6 40.78-1.46 2.57-5.57 1-4.37-1.98 5.5-13.95 13.5-27.02 22.75-38.79 11.07 0.68 22.16 1 33.22-0.01zm266 8.83c22.6 12.58 49.03 21.32 74.93 14.9 28.26 40.01 22.01 92.12 18.93 138.41-2.92 60.82-12.22 121.35-12.14 182.25 12.02 63.86 32.48 125.76 45.94 189.35-28.96-37.98-68.32-67.24-109.87-89.13-43.64-18.2-89.69-33.54-137.39-34.58-68.52 3.92-136.54 27.91-191.54 68-17.83 17.29-38.44 33.82-55.16 52.7 12.2-56.71 32.45-111.29 47.84-167.15 7.66-26.84 3.91-54.75 1.96-82.07-4.6-51.36-8-102.92-13.79-154.12 8.28 5.8 18.43 5.9 28.11 4.85 17.14-5.51 33.92-17.4 48.84-28.7-7.89 21.6-14.52 53.99 7.46 69.84 22.37 14.87 50.6 0.3 67.76-15.73 29.8-26.02 53.54-59.55 67.63-96.57 1.74 28.41 9.89 68.72 43.96 73.62 36.73 1.75 57.18-36.37 63.25-67.76 2.55-19.24 4.74-38.63 3.28-58.11zm157.13 149.32c2.05-0.02 3.91 0.83 5.43 3.15 25.22 19.08 33.67 52.65 33.24 82.89 6.21 50.88-13.55 101.35-4.15 152.05-23.15-35.33-28.81-78.79-35.69-119.67-2.72-16.89-12.69-39.04-32.86-38.23 9.45 26.41-0.72 56.22-10.66 81.24-15.15-46.6 10.65-97.45 2.84-145.7 8.1-3.54 16.57-6.19 24.94-8.99 5.22-1.04 11.68-6.71 16.91-6.74zm46.69 51.93c12.83 5.71 23.66 15.42 32.83 25.86 13.48 10.31 22.9 25.94 30.14 41.25 6.45 56.35 13.5 112.81 26.85 168.04 1.96 4.37-2.86 2.92-4.9 1.1-45.5-33.69-64.98-91.2-72.3-145.22-1.59-23.15-13.93-44.33-9.89-67.98-0.02-7.78-1.46-15.42-2.73-23.05zm-247.17 49.1c-26.75 3.33-32.06 44.03-9.96 56.93 11.95 7.59 29.2 1.23 34.69-11.46 10.81-17.98-2.87-45.72-24.73-45.47zm-151.09 0.18c-31.55 4.77-37.76 61.86-1.49 64.93 36.58-1.64 31.91-57.45 1.49-64.93zm-20 20.5c1.89 9.64 4.38 22.86 15.62 25.43 9.85 3.03 15.3-6.46 20.57-12.72-2.23 9.82-8.16 22.46-20 21.97-15.47-2.42-20.69-21.45-16.19-34.68zm152.01 1.58c3.74 6.96 4.73 21.6 16.07 23.89 10.18 3.02 15.75-6.04 20.61-12.82-1.87 8.92-9.44 18.69-19.6 17.17-12.64-2.68-16.88-16.98-17.08-28.24zm345.17 3.53c16.25 6.08 34.56 14.75 38.95 33.41 12.93 38.02 26.65 76.16 48.51 110.12-31.94-8.33-56.29-36.47-64.51-67.91-5.59-20.17-14.13-39.55-18.68-59.96-1.84-5.13-3.47-10.3-4.27-15.66zm63.6 43.79c38.76 3.5 58.06 49.77 97.56 50.87-40.6 10.52-82.61-12.48-97.56-50.87zm-465.16 88.54c23.3 0.18 46.51 3.73 69.01 11.33 24.87 6.36 49.4 15.5 71.43 28.66 43.17 22.91 86.64 53.41 110.07 97.31 1.06 9.58 3.14 19.09 3.05 28.78-9.53-0.61-18.56 2.78-27.86 3.57-50.08-71.59-135.96-112.96-222.16-117.69-71.35 1.35-141.03 30.18-194.72 76.67-10.6 12.41-23.51 24.15-33.81 37.45-10.74-2.23-21.94-3.67-32.6-0.14-0.9-41.81 34.27-70.5 63.35-94.85 53.79-41.87 124.36-71.64 194.24-71.09zm-4.08 148.43c-1.29-0.01-2.58-0.01-3.87 0.01-30.08 0.41-59.58 9.09-81.73 30.36 46.46-19.96 100.59-27.34 149.79-13.67 8.6 1.83 16.75 5.26 25.24 7.52-9.89-6.95-21.94-9.86-32.85-14.84-17.8-5.69-37.26-9.2-56.58-9.38zm-8.76 22.75c-0.26 0.04-0.51 0.41-0.7 1.31-5.92 90.55 4.38 180.75 10 270.95 1.36 5.7-0.45 14.1 2.6 17.6 1.19-29.6 1.45-59.3 2.97-89 0.07-65.9 1.1-132.21-12.96-196.99-0.15-1.07-1.11-3.99-1.91-3.87zm93.36 346.46c-39.7 36.5-102.25 38-147 10.3-4.65-2.7-19.96-16.4-13.15-5.5 38.2 48.1 115.18 43.6 156.29 1.4 1.29-2.1 2.58-4.1 3.86-6.2zm45.15 60.3c-3.99 40.1-31.73 78.9-71.6 89.6-26.73 7-56.11 9.9-82.95 2.5-43.15-6.4-80.03-39.4-92.85-81.1-0.78-2.4-1.39-4.9-1.86-7.4 40.91 19.2 83.56 41.1 130.13 38.6 43.35-0.2 81.25-24.5 119.13-42.2zm1297.2 166.8c-0.9 0-1.8 0-2.7 0.1-2.1 2.1-14.6 1.6-8.9 6.5-5.4-3.7-13.2 8.2-10.6-4-37.2 91.9 3.6 204.8 87.2 256.4 5.1 2.3 3.4-2.6 2.8-6.2 17.1 13 37.7 18.9 58.6 21.9 1.8-1-1.6-2.2-0.4-3.9-15.4-3.8-31.6-11.6-38.8-26.6-20.3-37.8-32.5-81.3-64.3-111.9-24.4-34.1-51.1-82.2-31.5-123.3-0.3-0.7-0.7-2.1-0.9-2.8 29.5-5.3 54.9 16 73.4 36.4 24.8 25.8 40.7 58.2 53.9 91 0.8 0.9 1.6 1.8 2.5 2.7-9.1-36.5-24.2-72.4-48.7-101.4-16.9-21.7-44.1-35.2-71.6-34.9zm-348.6 24.3c55 53.8 114.1 113.7 129.4 192.1-27.8 35.1-52 74.1-73.2 113.9-24.1 51.4-36.1 107.7-40.7 164-27.5-27.4-67.6-39.2-105.8-36.9-5.1 0.3-9.9 1.1-14.9 1.6-13.1 2.6-26.2 5.3-38.7 10.1 30.8-31.9 65.9-59.4 99.7-87.9 30.9-31.3 42.6-76.3 44.6-119.2 1.8-50.8 1-104.8-23.4-150.9-8-17.9-20.4-34.6-32-50.8 18.9-11.1 37.4-22.9 55-36zm-766.61 0c14.82 12.6 36.7 19.4 42.65 39.8 16.92 40.6 44.16 77 52.97 120.7 24.29 93.8 20.85 192 11.84 287.7-1.29 21.7-7.1 44.4-21.03 61.3-17.2-8.4-36.81-11.1-55.16-13.2-8.04-0.1-16.06 0-24.06-0.5-5.05-0.6-29.08 5.7-15.74-3.8 34.5-20.2 49.25-60.2 60.75-96.5 19.2-74.9 22.98-154.8 5.02-230.3-13.68-35.6-30.27-70.1-41.39-106.6-6.05-19.3-11.5-38.8-15.85-58.6zm1182.7 91.1c5.4 12.1 16.1 21.9 27.4 28.7 5.5 2.9 12.9 5.1 12.1 13.1 6 36.4 2.7 75.1 17.6 109.6-7.9-38.2 5.5-80.3-15.7-115.5 2.3-1.5 23.4 10.7 17.8 1.6-22.3-6.7-35.7-31.5-59.2-37.5zm-500.1 354.1c5.2 42.8-10.6 87.7-42.7 116.7-25.9 24.6-64.8 38.4-98.3 38.3-5.1-2.1-14.4-1-13.4-8.9-7.8-56.7 38.1-103.9 86.2-125.7 20.4-10 44.5-19.4 68.2-20.4zm225.4 49.4c15.5 0 31 2.1 45.8 6.5 24.6 42.6 8.2 97.1-22.8 131.9-38.5 39.9-93.6 80.2-152.2 64.4-25.8-8.4-37.9-38.4-34.9-63.7 7.4-52.1 40.3-100.4 89.1-121.9 23.2-11.1 49.2-17.1 75-17.2zm-889.19 11c-0.76 2.6-4.65 2.8-6.85 4.1 0.69 64.2-41.37 126.9-97.55 156.7-17.12 3.3-36.39 4.3-53.39-0.6-8.76-0.6-19.51-4.3-21.92-13.8 20.73-80.6 97.33-140.9 179.71-146.4zm72.01 96.8c22.58 0.1 45.09 5.1 65.47 15.2-8.14 73.5-60.2 139.8-130.19 164.2-17.27 10.4-39.45 2.3-53.06-9.5-20.54-19.9-15.74-51.7-5.91-75.7 14.72-34 36.98-70.1 71.86-85.7 16.67-5.7 34.27-8.6 51.83-8.5z" transform="scale(.8)"/>
      </svg>

      <svg class="score-page-win hidden " version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<g>
		<polygon style="fill:#F0C419;" points="256,275.448 273.152,325.995 326.621,328.414 282.483,363.724 300.138,416.69 256,381.689
			211.862,416.69 229.517,363.724 185.379,328.414 238.848,325.995 		"/>
		<path style="fill:#F0C419;" d="M114.759,157.103L114.759,157.103h-0.009c-29.246-0.009-52.957-23.72-52.957-52.966v-35.31l0,0
			c29.255,0,52.966,23.711,52.966,52.966V157.103z"/>
		<path style="fill:#F0C419;" d="M81.44,238.577L81.44,238.577c-28.398,7.027-57.106-10.302-64.132-38.7l-8.483-34.278l0,0
			c28.398-7.018,57.114,10.302,64.141,38.7L81.44,238.577z"/>
		<path style="fill:#F0C419;" d="M92.893,319.8L92.893,319.8c-24.391,16.146-57.256,9.463-73.401-14.927L0,275.424l0,0
			c24.391-16.146,57.256-9.463,73.401,14.936L92.893,319.8z"/>
		<path style="fill:#F0C419;" d="M139.742,397.312L139.742,397.312c-14.627,25.335-47.016,34.013-72.351,19.385l-30.579-17.655l0,0
			c14.627-25.335,47.016-34.013,72.351-19.385L139.742,397.312z"/>
		<path style="fill:#F0C419;" d="M97.103,195.592c14.645-25.326,42.002-41.631,69.694-32.194l33.412,11.405l0,0
			c-9.437,27.683-39.539,42.47-67.222,33.024L97.103,195.592z"/>
		<path style="fill:#F0C419;" d="M94.263,313.973L94.263,313.973c28.31,7.353,57.229-9.631,64.583-37.941l8.881-34.18
			c-28.31-7.353-57.229,9.631-64.583,37.95L94.263,313.973z"/>
		<path style="fill:#F0C419;" d="M397.241,157.103L397.241,157.103h0.009c29.246-0.009,52.957-23.72,52.957-52.966v-35.31
			c-29.255,0-52.966,23.711-52.966,52.966V157.103z"/>
		<path style="fill:#F0C419;" d="M430.56,238.577L430.56,238.577c28.398,7.027,57.106-10.302,64.132-38.7l8.483-34.278
			c-28.398-7.018-57.114,10.302-64.141,38.7L430.56,238.577z"/>
		<path style="fill:#F0C419;" d="M419.107,319.8L419.107,319.8c24.391,16.146,57.256,9.463,73.401-14.927L512,275.424l0,0
			c-24.391-16.146-57.256-9.463-73.401,14.936L419.107,319.8z"/>
		<path style="fill:#F0C419;" d="M372.258,397.312L372.258,397.312c14.627,25.335,47.016,34.013,72.351,19.385l30.579-17.655l0,0
			c-14.627-25.335-47.016-34.013-72.351-19.385L372.258,397.312z"/>
		<path style="fill:#F0C419;" d="M414.897,195.592c-14.645-25.326-42.002-41.631-69.694-32.194l-33.412,11.405l0,0
			c9.437,27.683,39.539,42.47,67.222,33.024L414.897,195.592z"/>
		<path style="fill:#F0C419;" d="M417.737,313.973L417.737,313.973c-28.31,7.353-57.229-9.631-64.583-37.941l-8.881-34.18
			c28.31-7.353,57.229,9.631,64.583,37.95L417.737,313.973z"/>
	</g>
	<g>
		<path style="fill:#B19046;" d="M176.547,443.173c-2.039,0-4.087-0.706-5.747-2.136c-76.235-65.536-93.44-133.65-94.446-179.244
			c-1.201-54.528,20.25-106.593,58.845-142.848c3.549-3.328,9.137-3.16,12.473,0.388c3.337,3.558,3.169,9.145-0.388,12.482
			c-34.948,32.83-54.369,80.066-53.274,129.589c0.927,42.002,16.993,104.951,88.294,166.25c3.699,3.178,4.122,8.748,0.945,12.447
			C181.5,442.131,179.028,443.173,176.547,443.173"/>
		<path style="fill:#B19046;" d="M335.453,443.173c2.039,0,4.087-0.706,5.747-2.136c76.235-65.536,93.44-133.65,94.446-179.244
			c1.201-54.528-20.25-106.593-58.845-142.848c-3.549-3.328-9.137-3.16-12.473,0.388c-3.337,3.558-3.169,9.145,0.388,12.482
			c34.948,32.83,54.369,80.066,53.274,129.589c-0.927,42.002-16.993,104.951-88.294,166.25c-3.699,3.178-4.122,8.748-0.945,12.447
			C330.5,442.131,332.972,443.173,335.453,443.173"/>
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
      <h4 class="score-header">Вы ответили на {{score}} из 10 вопросов!<h4>
    </div>
  `,
  placeholders: [
    { ph: 'score', code: 'pictures-final-score' },
  ],
  functions: [showIcon]
});

function showIcon() {

  const last = localStorage.getItem('lastPlayingPicturesCategory');
  const res = localStorage.getItem(`picturesCategoryResult-${last}`);

  if (res == 10) {
    document.querySelector('.score-page-win').classList.remove('hidden');
  } else {
    document.querySelector('.score-page-lose').classList.remove('hidden');
  };
};


export { picturesScore };