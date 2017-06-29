/**
 * Created by zuoa on 20.06.2017.
 */

import AbstractView from '../AbstractView';
import playerTemplate from '../utils/playerTemplate';
import initializePlayer from '../utils/player';

const getCorrectList = (list, correct) => {
  return list.filter((item) => item.genre === correct).length;
};

const checkAllRight = (list, correct) => {
  return list.every((item) => item.value === correct);
};

export class LevelGenre extends AbstractView {
  constructor(screenData, state) {
    super();
    this.screenData = screenData;
    this.state = Object.assign({}, state);
    this.correctItems = getCorrectList(this.screenData.answers, this.screenData.genre);
  }

  answer(item, id) {
    return `
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="${item.genre}" id="a-${id + 1}">
        <label class="genre-answer-check" for="a-${id + 1}"></label>
      </div>`;
  }

  get template() {
    return `
    <section class="main main--level main--level-genre">
      <h2 class="title title--life">Жизни: ${this.state.lives}</h2>
      <h2 class="title">${this.screenData.question}</h2>
      <form class="genre">
        ${this.screenData.answers.map(this.answer).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
      ${playerTemplate()}
    </section>
    `;
  }

  bind() {
    const inputList = [...this.markup.querySelectorAll(`.genre-answer input[name=answer]`)];
    inputList.forEach((item) => {
      item.addEventListener(`click`, () => {
        btnSend.disabled = !inputList.some((input) => input.checked);
      });
    });

    const btnSend = this.markup.querySelector(`.genre-answer-send`);
    btnSend.disabled = true;
    btnSend.addEventListener(`click`, (event) => {
      event.preventDefault();

      const checked = inputList.filter((item) => item.checked);

      if (checked.length === this.correctItems && checkAllRight(checked, this.screenData.genre)) {
        ++this.state.correctAnswers;
      } else {
        --this.state.lives;
      }

      this.btnEvent(this.state);

      return false;
    });

    const players = [...this.markup.querySelectorAll(`.player-wrapper`)];
    players.forEach((item, id) => initializePlayer(item, this.screenData.answers[id].src, this.markup));
  }

  onAnswer() {}
}
