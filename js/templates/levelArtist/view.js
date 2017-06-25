/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';
import getCorrectId from './getCorrectId';
import playerTemplate from '../utils/playerTemplate';
import initializePlayer from '../utils/player';
import {initializeTimer, timerValue} from '../utils/timer';
import templateTimer from '../utils/timerTemplate';

export class LevelView extends AbstractView {
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

  get template() {
    return `<section class="main main--level main--level-artist">
        ${templateTimer(timerValue)}
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

  bind() {
    const btnList = [...this.markup.querySelectorAll(`.main-answer-r`)];
    const correct = getCorrectId(this.renderItem.answers);

    btnList.forEach((item, id) => {
      item.addEventListener(`click`, () => {

        if (id === correct) {
          ++this.data.correctAnswers;
        } else {
          --this.data.lives;
        }

        this.data.time = timerValue;

        this.btnEvent(this.data);
      });
    });

    const playerElement = this.markup.querySelector(`.player-wrapper`);

    initializePlayer(playerElement, this.renderItem.track, this.markup);
    initializeTimer(timerValue, this.markup);
  }

  onAnswer() {}
}
