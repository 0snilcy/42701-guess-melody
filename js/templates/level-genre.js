/**
 * Created by wakedafuckup on 28.05.17.
 */

import showScreen from '../showScreen';
import {stats} from './data';
import nextScreen from './result';

const answer = (id) => `
  <div class="genre-answer" data-item="${id}">
    <div class="player-wrapper"></div>
    <input type="checkbox" name="answer" value="answer-${id}" id="a-${id}">
    <label class="genre-answer-check" for="a-${id}"></label>
  </div>
`;

let answerList = ``;
for (let i = 4; i;) {
  answerList += answer(i--);
}

const levelGenre = () => `
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      ${answerList}
      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`;

export default [levelGenre, (ctx) => {
  const btn = ctx.querySelector(`.genre-answer-send`);
  btn.disabled = true;
  btn.addEventListener(`click`, () => showScreen(nextScreen));

  const inputList = ctx.querySelector(`.genre`);
  inputList.addEventListener(`click`, (event) => {
    if (event.target.getAttribute(`name`) === `answer`) {
      const valid = Boolean(inputList.querySelector(`.genre-answer input[name=answer]:checked`));
      btn.disabled = !valid;

      stats.win = !Math.round(Math.random());
      event.stopPropagation();
    }
  });
}];
