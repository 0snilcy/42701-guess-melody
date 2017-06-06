/**
 * Created by wakedafuckup on 28.05.17.
 */

import welcome from './welcome';
import showScreen from '../showScreen';
import {stats} from './data';

const getTemplate = () => {
  console.log(stats.win);
  return resultTemplate;
};

const resultTemplate = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`;

export default [getTemplate, () => {
  const btn = document.querySelector(`.main-replay`);
  btn.addEventListener(`click`, () => showScreen(welcome));
}];
