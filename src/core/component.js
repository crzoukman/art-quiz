'use strict';

import { handlePlaceholders } from './component/handlePlaceholders';
import { initEvents } from './component/initEvents';
import { initFunctions } from './component/initFunctions';

class Component {
  constructor(props) {
    this.selector = props.selector;
    this.template = props.template;
    this.placeholders = props.placeholders;
    this.events = props.events;
    this.functions = props.functions;
  };

  render() {
    const element = document.querySelector(this.selector);
    element.innerHTML = handlePlaceholders(this.template, this.placeholders);
    initEvents(this.events);
    initFunctions(this.functions);
  };
};

export { Component };