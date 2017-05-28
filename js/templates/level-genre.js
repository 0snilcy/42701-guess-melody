/**
 * Created by wakedafuckup on 28.05.17.
 */

import getElement from '../getElement';
import nextScreenGood from './result-good';
import nextScreenBad from './result-bad';
import showScreen from '../showScreen';

const levelGenre = getElement(`
  <section class="main main--level main--level-genre">
    <h2 class="title">Выберите инди-рок треки</h2>
    <form class="genre">
      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-1">
        <label class="genre-answer-check" for="a-1"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-2">
        <label class="genre-answer-check" for="a-2"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-3">
        <label class="genre-answer-check" for="a-3"></label>
      </div>

      <div class="genre-answer">
        <div class="player-wrapper"></div>
        <input type="checkbox" name="answer" value="answer-1" id="a-4">
        <label class="genre-answer-check" for="a-4"></label>
      </div>

      <button class="genre-answer-send" type="submit">Ответить</button>
    </form>
  </section>
`);

const btn = levelGenre.querySelector(`.genre-answer-send`);
btn.disabled = true;
btn.addEventListener(`click`, () => showScreen(Math.round(Math.random()) ? nextScreenGood : nextScreenBad));

const inputList = levelGenre.querySelector(`.genre`);
inputList.addEventListener(`click`, () => {
  const valid = Boolean(levelGenre.querySelector(`.genre-answer input[name=answer]:checked`));
  btn.disabled = !valid;
});

export default levelGenre;
