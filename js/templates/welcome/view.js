/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';

export class WelcomeView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play">data.title</button>
      <h2 class="title main-title">${this.data.title}</h2>
      <p class="text main-text">${this.data.subtitle}</p>
    </section>`;
  }

  bind() {
    const btn = this.markup.querySelector(`.main-play`);
    btn.addEventListener(`click`, this.btnEvent);
  }

  btnEvent() {}
}
