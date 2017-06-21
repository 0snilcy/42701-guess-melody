/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';
import playerTemplate from '../utils/playerTemplate';
import getCorrectId from './getCorrectId';
import initializePlayer from '../../tools/player';
import {initializeTimer} from '../../tools/timer';

export default class extends AbstractView {
  constructor(renderItem, data) {
    super();
    this.renderItem = renderItem;
    this.data = Object.assign({}, data);
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
        <h2 class="title title--life">Жизни: ${this.data.lives}</h2>
        <h2 class="title main-title">Кто исполняет эту песню?</h2>
        <div class="player-wrapper"></div>
        <form class="main-list">
          ${this.renderItem.answers.map(this.answer).join(``)}
        </form>
      </div>
      ${playerTemplate()}
    </section>`;
  }

  btnListBind(ctx) {
    const btnList = [...ctx.querySelectorAll(`.main-answer-r`)];
    const correct = getCorrectId(this.renderItem.answers);

    btnList.forEach((item, id) => {
      item.addEventListener(`click`, () => {

        // Правильный ли ответ
        if (id === correct) {
          ++this.data.correctAnswers;
        } else if (--this.data.lives === 0) {
          this.showResult(this.data);
          return;
        }

        this.clickCorrect(this.data);
      });
    });

  }

  // Обработчики событий
  bind(ctx) {
    this.btnListBind(ctx);
    const playerElement = ctx.querySelector(`.player-wrapper`);

    initializePlayer(playerElement, this.renderItem.track, ctx);
    initializeTimer(this.data.time, ctx);

    return ctx;
  }

  reRender(renderItem) {
    this.renderItem = renderItem;

    const newAnswers = this.renderItem.answers.map(this.answer).join(``);
    const container = this.markup.querySelector(`.main-list`);
    container.innerHTML = newAnswers;

    const lifeContainer = this.markup.querySelector(`.title--life`);
    lifeContainer.innerHTML = `Жизни: ${this.data.lives}`;

    this.btnListBind(this.markup);
  }

  clickCorrect() {

  }

  showResult() {

  }
}
