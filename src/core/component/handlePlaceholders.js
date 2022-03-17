'use strict';

import { observable } from '../../app/state';
import { observable2 } from '../../app/state2';

function handlePlaceholders(template, placeholders) {
  if (!placeholders) return template;
  if (placeholders.length === 0) return template;

  const regexp = /\{{(.*?)}}/g;
  const foundedPhs = template.match(regexp).map(e => e.substring(2, e.length - 2));

  placeholders.forEach(obj => {
    if (foundedPhs.includes(obj.ph)) {
      // -------- artists ------------
      if (obj.code === 'artists-quiz-btns') {
        const data = observable.state.currentArtistsBtnsPh;
        if (data) {
          template = template.replace(`{{${obj.ph}}}`, data[obj.data]);
        };
      };

      if (obj.code === 'artists-image') {

        if (observable.state.currentArtistsQList) {
          const imageNum = observable
            .state.currentArtistsQList[observable.state.currentArtistsQuestion]
            .imageNum;

          template = template.replace(`{{${obj.ph}}}`, imageNum);
        };

      };

      if (obj.code === 'artists-final-score') {
        const last = localStorage.getItem('lastPlayingArtistsCategory');
        const res = localStorage.getItem(`artistsCategoryResult-${last}`);
        template = template.replace(`{{${obj.ph}}}`, res);
      };

      if (obj.code === 'artists-score') {
        const id = obj.data;
        const res = localStorage.getItem(`artistsCategoryResult-${id}`);

        res === null ?
          template = template.replace(`{{${obj.ph}}}`, '&#8203') :
          template = template.replace(`{{${obj.ph}}}`, `${res} / 10`);
      };

      if (obj.code === 'artists-review') {
        if (obj.ph === 'some') {
          const res = observable.state.lastArtistsReviewID;
          template = template.replace(`{{${obj.ph}}}`, res);
        } else {
          const id = observable.state.lastArtistsReviewID;
          const data = JSON.parse(localStorage.getItem('artistsResult'));

          if (data[id].length === 0) return template = template.replace(`{{${obj.ph}}}`, '');
          template = template.replace(`{{${obj.ph}}}`, data[id][obj.data].data.imageNum);
        };

      };

      if (obj.code === 'artists-info') {
        const imgID = observable.state.lastArtistsReviewImageID;
        const catID = observable.state.lastArtistsReviewID;
        const data = JSON.parse(localStorage.getItem('artistsResult'))[catID][imgID - 1];

        template = template.replace(`{{${obj.ph}}}`, data.data[obj.data]);

      };

      // -------- pictures --------------
      if (obj.code === 'pictures-quiz-btns') {
        const data = observable2.state.currentPicturesBtnsPh;


        if (data) {
          if (obj.ph === 'author') {
            const data = observable2.state.currentPicturesTrueAnswer;
            template = template.replace(`{{${obj.ph}}}`, data[obj.data]);
          } else {
            template = template.replace(`{{${obj.ph}}}`, data[obj.data]);
          };

        };
      };

      if (obj.code === 'pictures-image') {
        const imageNum = observable2
          .state.currentPicturesQList[observable2.state.currentPicturesQuestion]
          .imageNum;

        template = template.replace(`{{${obj.ph}}}`, imageNum);
      };

      if (obj.code === 'pictures-final-score') {
        const last = localStorage.getItem('lastPlayingPicturesCategory');
        const res = localStorage.getItem(`picturesCategoryResult-${last}`);
        template = template.replace(`{{${obj.ph}}}`, res);
      };

      if (obj.code === 'pictures-score') {
        const id = obj.data;
        const res = localStorage.getItem(`picturesCategoryResult-${id}`);

        res === null ?
          template = template.replace(`{{${obj.ph}}}`, '&#8203') :
          template = template.replace(`{{${obj.ph}}}`, `${res} / 10`);
      };

      if (obj.code === 'pictures-review') {
        if (obj.ph === 'some') {
          const res = observable2.state.lastPicturesReviewID;
          template = template.replace(`{{${obj.ph}}}`, res);
        } else {
          const id = observable2.state.lastPicturesReviewID;
          const data = JSON.parse(localStorage.getItem('picturesResult'));

          if (data[id].length === 0) return template = template.replace(`{{${obj.ph}}}`, '');
          template = template.replace(`{{${obj.ph}}}`, data[id][obj.data].data.imageNum);
        };

      };

      if (obj.code === 'pictures-info') {
        const imgID = observable2.state.lastPicturesReviewImageID;
        const catID = observable2.state.lastPicturesReviewID;
        const data = JSON.parse(localStorage.getItem('picturesResult'))[catID][imgID - 1];

        template = template.replace(`{{${obj.ph}}}`, data.data[obj.data]);

      };

      // settings 
      if (obj.code === 'settings-time-game') {
        const state = localStorage.getItem('isTimeGameOn');
        if (!state) {
          localStorage.setItem('isTimeGameOn', false);
          template = template.replace(`{{${obj.ph}}}`, 'ВЫКЛ.');
        } else {
          if (state === 'true') {
            template = template.replace(`{{${obj.ph}}}`, 'ВКЛ.');

          } else {
            template = template.replace(`{{${obj.ph}}}`, 'ВЫКЛ.');

          };
        };
      };

      if (obj.code === 'settings-answer-time') {
        const state = localStorage.getItem('answerTime');
        if (!state) {
          localStorage.setItem('answerTime', 5);
          template = template.replace(`{{${obj.ph}}}`, 5);
        } else {
          template = template.replace(`{{${obj.ph}}}`, state);
        };
      };

      // --------- settings -------------
      if (obj.code === 'settings-set-init-volume') {
        const vol = +localStorage.getItem('volume');
        template = template.replace(`{{${obj.ph}}}`, Math.round(vol * 100));
      };

      // ---- modals ----

      if (obj.code === 'artists-modal') {
        const data = observable.state.currentArtistsTrueAnswer;
        if (!data) return;



        template = template.replace(`{{${obj.ph}}}`, data[obj.data]);
      };

      if (obj.code === 'pictures-modal') {
        const data = observable2.state.currentPicturesTrueAnswer;
        if (!data) return;
        template = template.replace(`{{${obj.ph}}}`, data[obj.data]);
      };

    };
  });

  return template;
};

export { handlePlaceholders };