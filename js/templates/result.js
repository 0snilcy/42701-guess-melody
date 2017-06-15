/**
 * Created by wakedafuckup on 28.05.17.
 */

import nextScreen from './welcome';
import showScreen from '../showScreen';
import getElement from '../getElement';
import {welcome as dataList} from './data';
import rating from './model/rating';

const getUserRating = (answers, time) => {
  const item = {time, answers};
  rating.push(item);
  rating
    .sort((a, b) => a.time - b.time)
    .sort((a, b) => b.answers - a.answers);
  const position = rating.indexOf(item) + 1;
  return Math.round(((rating.length - position) / rating.length) * 100);
};

export default (data) => {
  const content = () => {
    if (data) {
      const {correctAnswers, time} = data;
      return `
        <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали ${correctAnswers}&nbsp;мелодий</div>
        <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;${getUserRating(correctAnswers, time)}%&nbsp;игроков</span>`;
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
