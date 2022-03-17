'use strict';

function initFunctions(fns) {
  if (!fns) return;

  fns.forEach(fn => {
    fn();
  });
};

export { initFunctions };