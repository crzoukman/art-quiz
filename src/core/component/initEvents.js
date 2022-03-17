'use strict';

function initEvents(events) {
  if (!events) return;
  if (events.length === 0) return;

  events.forEach(e => {
    const elements = document.querySelectorAll(e.selector);

    elements.forEach(element => {
      e.callbacks.forEach(callback => {
        element.addEventListener(e.type, callback);
      });
    });
  });
};

export { initEvents };