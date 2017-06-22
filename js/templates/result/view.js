/**
 * Created by zuoa on 21.06.2017.
 */

import AbstractView from '../AbstractView';
import getUserRating from './getUserRating';

export class Result extends AbstractView {
  constructor(stats, data) {
    super();
    this.stats = stats;
    this.data = data;
    this.status = this.stats.lives ? `victory` : `defeat`;
  }

  get content() {
    if (this.stats.lives) {
      return `
        <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${this.stats.correctAnswers}&nbsp;мелодий</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${getUserRating(this.stats)}%&nbsp;игроков</span>`;
    } else {
      return `<div class="main-stat">Ничего, вам повезет в следующий раз</div>`;
    }
  }

  get template() {
    return `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">${this.data[this.status].title}</h2>
      ${this.content}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>`;
  }

  bind() {
    const btn = this.markup.querySelector(`.main-replay`);
    btn.addEventListener(`click`, () => this.clickNewGame());
  }

  clickNewGame() {}
}
