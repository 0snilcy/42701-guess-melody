/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';

export class PreloaderView extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  get template() {
    return `
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title main-title">${this.data.title}</h2>
      <p class="text main-text">${this.data.subtitle}</p>
    </section>`;
  }
}
