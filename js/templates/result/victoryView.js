/**
 * Created by zuoa on 21.06.2017.
 */

import AbstractView from '../AbstractView';

export class VictoryView extends AbstractView {
  constructor(model, stats, rating) {
    super();
    this.stats = stats;
    this.model = model;
    this.rating = rating;
  }

  get template() {
    return `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">${this.model.title}</h2>
      <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${this.stats.correctAnswers}&nbsp;мелодий</div>
      <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${this.rating}%&nbsp;игроков</span>
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    const btn = this.markup.querySelector(`.main-replay`);
    btn.addEventListener(`click`, this.btnEvent);
  }

  btnEvent() {}
}
