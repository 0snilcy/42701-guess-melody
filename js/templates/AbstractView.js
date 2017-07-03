/**
 * Created by zuoa on 20.06.2017.
 */

export default class AbstractView {
  constructor() {}

  get template() {
    return `<template id="template"></template>`;
  }

  get element() {
    this.markup = this.render(this.template);
    this.bind();
    return this.markup;
  }

  get getMarkup() {
    return this.markup ? this.markup : this.element;
  }

  render(string) {
    const container = document.createElement(`div`);
    container.innerHTML = string;
    return container.firstElementChild;
  }

  bind() {
    this.markup.addEventListener(`click`, (event) => event.preventDefault());
  }
}
