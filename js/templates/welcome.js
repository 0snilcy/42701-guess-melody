/**
 * Created by wakedafuckup on 28.05.17.
 */

import {initialArtistTemplate as nextScreen} from './level-artist';
import showScreen from '../showScreen';
import getElement from '../getElement';
import dataList from './model/level-artist-data';
import initialStats from './model/initial';

export default (data) => {
  const template = `
    <section class="main main--welcome">
      <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
      <button class="main-play">data.title</button>
      <h2 class="title main-title">${data.title}</h2>
      <p class="text main-text">${data.subtitle}</p>
    </section>`;

  const domElement = getElement(template);
  const btn = domElement.querySelector(`.main-play`);
  btn.addEventListener(`click`, () => {
    showScreen(nextScreen(dataList, initialStats));
  });

  return domElement;
};
