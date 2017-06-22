/**
 * Created by wakedafuckup on 28.05.17.
 */

// import showScreen from '../showScreen';
// import nextScreen from './result';
import getElement from '../../getElement';
import playerTemplate from '../utils/playerTemplate';
import player from '../utils/player';
// import {result as dataList} from './data';

const answerCreate = (elem, id) => `
  <div class="genre-answer">
    <div class="player-wrapper"></div>
    <input type="checkbox" name="answer" value="answer-${id + 1}" id="a-${id + 1}">
    <label class="genre-answer-check" for="a-${id + 1}"></label>
  </div>
`;

export default (data) => {
  const template = `
    <section class="main main--level main--level-genre">
      <h2 class="title">${data.title}</h2>
      <form class="genre">
        ${data.answers.map(answerCreate).join(``)}
        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </section>
    ${playerTemplate()}
  `;

  const domElement = getElement(template);
  const players = [...domElement.querySelectorAll(`.player-wrapper`)];
  players.forEach((item, id) => player(item, data.answers[id], domElement));

  const inputList = [...domElement.querySelectorAll(`.genre-answer input[name=answer]`)];
  inputList.forEach((item) => {
    item.addEventListener(`click`, () => {
      btn.disabled = !inputList.some((input) => input.checked);
    });
  });

  // const isWinner = !Math.round(Math.random());
  const btn = domElement.querySelector(`.genre-answer-send`);
  btn.disabled = true;
  btn.addEventListener(`click`, () => {
    // showScreen(nextScreen(dataList[isWinner ? `victory` : `defeat`]));
    return false;
  });

  return domElement;
};
