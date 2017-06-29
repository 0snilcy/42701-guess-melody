/**
 * Created by zuoa on 21.06.2017.
 */

import AbstractView from '../AbstractView';

export class DefeatView extends AbstractView {
  constructor(model, stats) {
    super();
    this.stats = stats;
    this.model = model;
  }

  get template() {
    return `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">${this.model.title}</h2>
      <div class="main-stat">${this.model.subtitle}</div>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    const btn = this.markup.querySelector(`.main-replay`);
    btn.addEventListener(`click`, this.btnEvent);
  }

  btnEvent() {}
}
