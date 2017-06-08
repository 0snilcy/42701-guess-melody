/**
 * Created by wakedafuckup on 28.05.17.
 */

import nextScreen from './welcome';
import showScreen from '../showScreen';
import getElement from '../getElement';
import {welcome as dataList} from './data';

export default (data) => {
  const content = () => {
    if (`rating` in data.content) {
      return `<span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${data.content.rating}%&nbsp;игроков</span>`;
    } else {
      return ``;
    }
  };

  const template = `
    <section class="main main--result">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <h2 class="title">${data.title}</h2>
      <div class="main-stat">${data.content.subtitle}</div>
      ${content()}
      <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
    </section>
  `;

  const domElement = getElement(template);
  const btn = domElement.querySelector(`.main-replay`);
  btn.addEventListener(`click`, () => showScreen(nextScreen(dataList)));

  return domElement;
};
