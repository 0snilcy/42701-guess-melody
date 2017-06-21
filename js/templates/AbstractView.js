/**
 * Created by zuoa on 20.06.2017.
 */

export default class AbstractView {
  constructor() {

  }

  // Возврщаем разметку
  get template() {
    return `<template id="template"></template>`;
  }

  // Возвращаем DOM элемент с событиями
  get element() {
    this.markup = this.bind(this.render);
    return this.markup;
  }

  // Создаем DOM эелемент
  get render() {
    const container = document.createElement(`div`);
    container.innerHTML = this.template;
    return container.firstElementChild;
  }

  // Обработчики событий
  bind(ctx) {
    ctx.addEventListener(`click`, (event) => event.preventDefault());
    return ctx;
  }

  get getMarkup() {
    return this.markup ? this.markup : this.element;
  }
}
