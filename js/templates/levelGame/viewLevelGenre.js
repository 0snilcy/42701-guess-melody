/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';
import playerTemplate from '../utils/playerTemplate';
import initializePlayer from '../utils/player';

export class LevelGenre extends AbstractView {
  constructor(screenData, state) {
    super();
    this.screenData = screenData;
    this.state = Object.assign({}, state);
  }

  get template() {
    return `<section class="main main--level main--level-genre">
              <h2 class="title title--life">Жизни: ${this.state.lives}</h2>
              <h2 class="title">${this.screenData.question}</h2>
              <form class="genre">    
                ${this.screenData.answers.map(this._answer).join(``)}
                <button class="genre-answer-send" type="submit">Ответить</button>
              </form>
              ${playerTemplate()}
            </section>`;
  }

  _answer(item, id) {
    return `<div class="genre-answer">
              <div class="player-wrapper"></div>
              <input type="checkbox" name="answer" value="${item.genre}" id="a-${id + 1}">
              <label class="genre-answer-check" for="a-${id + 1}"></label>
            </div>`;
  }

  bind() {
    const inputList = [...this.markup.querySelectorAll(`.genre-answer input[name=answer]`)];
    inputList.forEach((item) => {
      item.addEventListener(`click`, () => {
        btnSend.disabled = !inputList.some((input) => {
          return input.checked;
        });
      });
    });

    const btnSend = this.markup.querySelector(`.genre-answer-send`);
    btnSend.disabled = true;
    btnSend.addEventListener(`click`, (event) => {
      event.preventDefault();

      const checked = inputList.filter((item) => {
        return item.checked;
      });

      this.btnEvent(checked);
    });

    const players = [...this.markup.querySelectorAll(`.player-wrapper`)];
    players.forEach((item, id) => {
      return initializePlayer(item, this.screenData.answers[id].src, this.markup, false, true);
    });
  }

  btnEvent() {}
}
