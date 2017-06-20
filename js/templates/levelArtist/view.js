/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';
import playerTemplate from '../utils/playerTemplate';

export default class extends AbstractView {
  constructor(renderItem) {
    super();
    this.renderItem = renderItem;
  }

  answer(item, id) {
    return `
      <div class="main-answer-wrapper">
        <input class="main-answer-r" type="radio" id="answer-${id + 1}" name="answer" value="${id + 1}" />
        <label class="main-answer" for="answer-${id + 1}">
          <img class="main-answer-preview" src="${item.pick}">
          ${item.title}
        </label>
      </div>
    `;
  }

  // Возврщаем разметку
  get template() {
    return `<section class="main main--level main--level-artist">
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle
          cx="390" cy="390" r="370"
          class="timer-line"
          style="filter: url(../#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
        <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
          <span class="timer-value-mins">02</span><!--
          --><span class="timer-value-dots">:</span><!--
          --><span class="timer-value-secs">00</span>
        </div>
      </svg>
        <div class="main-wrap">
        <div class="main-timer"></div>
        <h2 class="title title--life">Жизни: ${lives}</h2>
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${this.renderItem.answers.map(this.answer).join(``)}
        </form>
      </div>
    </section>
    ${playerTemplate()}`;
  }

  // Обработчики событий
  bind(ctx) {
    ctx.addEventListener(`click`, (event) => event.preventDefault());
  }

  clickAnswer() {

  }

  showResult() {

  }
}
