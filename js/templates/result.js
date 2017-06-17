/**
 * Created by wakedafuckup on 28.05.17.
 */

import nextScreen from './welcome';
import showScreen from '../showScreen';
import getElement from '../getElement';
import {welcome as dataList} from './data';
import getUserRating from '../getUserRating';

export default (data, stats) => {
  const content = () => {
    if (stats) {
      return `
        <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${stats.correctAnswers}&nbsp;мелодий</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${getUserRating(stats)}%&nbsp;игроков</span>`;
    } else {
      return `<div class="main-stat">Ничего, вам повезет в следующий раз</div>`;
    }
  };

  const template = `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">${data.title}</h2>
      ${content()}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>
  `;

  const domElement = getElement(template);
  const btn = domElement.querySelector(`.main-replay`);
  btn.addEventListener(`click`, () => showScreen(nextScreen(dataList)));

  return domElement;
};
