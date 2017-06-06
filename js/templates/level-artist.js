/**
 * Created by wakedafuckup on 28.05.17.
 */

import nextScreen from './level-genre';
import {answerList} from './data';
import showScreen from '../showScreen';

const answer = (desc, id) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${id}" name="answer" value="val-1" />
    <label class="main-answer" for="answer-${id}">
      <img class="main-answer-preview" src="">
      ${desc}
    </label>
  </div>
`;

const levelArtist = () => `
  <section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">02</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>

    <div class="main-wrap">
      <div class="main-timer"></div>

      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${answerList.map((desc, i) => answer(desc, i + 1)).join(``)}
      </form>
    </div>
  </section>
`;

export default [levelArtist, (ctx) => {
  const btnWrap = ctx.querySelector(`.main-list`);

  btnWrap.addEventListener(`click`, (event) => {
    if (event.target.parentNode.classList.contains(`main-answer`)) {
      showScreen(nextScreen);
      event.stopPropagation();
    }
  });
}];
