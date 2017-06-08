/**
 * Created by wakedafuckup on 28.05.17.
 */

import nextScreen from './level-genre';
import showScreen from '../showScreen';
import getElement from '../getElement';
import {levelGenre as dataList} from './data';

const answer = (item, id) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${id + 1}" name="answer" value="${id + 1}" />
    <label class="main-answer" for="answer-${id + 1}">
      <img class="main-answer-preview" src="${item.pick}">
      ${item.title}
    </label>
  </div>
`;

export default (data) => {
  const template = `
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
      <h2 class="title main-title">${data.title}</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${data.answers.map(answer).join(``)}
      </form>
    </div>
  </section>
  `;

  const domElement = getElement(template);
  const btnList = [...domElement.querySelectorAll(`.main-answer-r`)];
  const player = domElement.querySelector(`.player-wrapper`);

  btnList.forEach((item) => {
    item.addEventListener(`click`, () => {
      showScreen(nextScreen(dataList));
    });
  });
  window.initializePlayer(player, data.track);

  return domElement;
};
