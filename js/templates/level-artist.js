/**
 * Created by wakedafuckup on 28.05.17.
 */

import resultData from './model/result-data';
import result from './result';
import showScreen from '../showScreen';
import getElement from '../getElement';
import playerTemplate from './playerTemplate';
import player from '../player';
import timer from '../timer';

const {defeat, victory} = resultData;
let dataList;

const answer = (item, id) => `
  <div class="main-answer-wrapper">
    <input class="main-answer-r" type="radio" id="answer-${id + 1}" name="answer" value="${id + 1}" />
    <label class="main-answer" for="answer-${id + 1}">
      <img class="main-answer-preview" src="${item.pick}">
      ${item.title}
    </label>
  </div>
`;

export const initialArtistTemplate = (data, state) => {
  dataList = Object.assign({}, data);
  getArtistTemplate(state);
};

const getArtistTemplate = ({lives, time, correctAnswers}) => {
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
      <h2 class="title title--life">Жизни: ${lives}</h2>
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper"></div>
      <form class="main-list">
        ${getNextItem().data.answers.map(answer).join(``)}
      </form>
    </div>
  </section>
  ${playerTemplate()}
  `;

  const domElement = getElement(template);
  const btnList = [...domElement.querySelectorAll(`.main-answer-r`)];
  const playerElement = domElement.querySelector(`.player-wrapper`);
  let correct;
  data.answers.forEach((item, id) => {
    if (`correct` in item && item.correct) {
      correct = id;
    }
  });

  btnList.forEach((item, id) => {
    item.addEventListener(`click`, () => {
      if (id !== correct) {
        --lives;
        if (lives === 0) {
          showScreen(result(defeat));
          return;
        }
      } else {
        ++correctAnswers;
      }

      if (dataList.size) {
        getNextItem();
      } else {
        showScreen(result(victory));
      }
    });
  });

  player(playerElement, data.track, domElement);
  timer(domElement);

  return domElement;
};
