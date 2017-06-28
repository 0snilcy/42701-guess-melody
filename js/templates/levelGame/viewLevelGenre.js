/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';
import getCorrectId from './getCorrectId';
import playerTemplate from '../utils/playerTemplate';
import initializePlayer from '../utils/player';
import {initializeTimer, timerValue} from '../utils/timer';
import templateTimer from '../utils/timerTemplate';

export class LevelGenre extends AbstractView {
  constructor(screenData, state) {
    super();
    this.screenData = screenData;
    this.state = Object.assign({}, state);
  }

  answer(item, id) {
    return `
      <div class="genre-answer">
        <div class="player-wrapper" data-src="${item.src}"></div>
        <input type="checkbox" name="answer" value="answer-${id + 1}" id="a-${id + 1}">
        <label class="genre-answer-check" for="a-${id + 1}"></label>
      </div>`;
  }

  get template() {
    return `
    <section class="main main--level main--level-genre">
      <h2 class="title">${this.screenData.question}</h2>
      <form class="genre">
        ${this.screenData.answers.map(this.answer).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </section>
    ${playerTemplate()}`;
  }

  bind() {
    const btnList = [...this.markup.querySelectorAll(`.main-answer-r`)];
    const correct = getCorrectId(this.screenData.answers);

    btnList.forEach((item, id) => {
      item.addEventListener(`click`, () => {

        if (id === correct) {
          ++this.state.correctAnswers;
        } else {
          --this.state.lives;
        }

        this.state.time = timerValue;

        this.btnEvent(this.state);
      });
    });

    const playerElement = this.markup.querySelector(`.player-wrapper`);

    initializePlayer(playerElement, this.screenData.track, this.markup);
    initializeTimer(timerValue, this.markup);
  }

  onAnswer() {}
}
