/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';
import getCorrectId from './getCorrectId';
import playerTemplate from '../utils/playerTemplate';
import initializePlayer from '../utils/player';

export class LevelArtist extends AbstractView {
  constructor(screenData, state) {
    super();
    this.screenData = screenData;
    this.state = Object.assign({}, state);
  }

  answer(item, id) {
    return `<div class="main-answer-wrapper">
              <input class="main-answer-r" type="radio" id="answer-${id + 1}" name="answer" value="${id + 1}" />
              <label class="main-answer" for="answer-${id + 1}">
                <img class="main-answer-preview" src="${item.image.url}" width="${item.image.width}" height="${item.image.height}">
                ${item.title}
              </label>
            </div>`;
  }

  get template() {
    return `<section class="main main--level main--level-artist">
              <div class="main-wrap">
                <div class="main-timer"></div>
                <h2 class="title title--life">Жизни: ${this.state.lives}</h2>
                <h2 class="title main-title">${this.screenData.question}</h2>
                <div class="player-wrapper"></div>
                <form class="main-list">
                  ${this.screenData.answers.map(this.answer).join(``)}
                </form>
              </div>
              ${playerTemplate()}
            </section>`;
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

        this.btnEvent(this.state);
      });
    });

    const playerElement = this.markup.querySelector(`.player-wrapper`);

    initializePlayer(playerElement, this.screenData.src, this.markup);
  }

  btnEvent() {}
}
