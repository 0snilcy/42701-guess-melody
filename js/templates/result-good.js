/**
 * Created by wakedafuckup on 28.05.17.
 */

import getElement from '../getElement';
import nextScreenBad from './welcome';
import showScreen from '../showScreen';

const resultGood = getElement(`
  <section class="main main--result main--result-good">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;2&nbsp;минуты<br>вы&nbsp;отгадали 4&nbsp;мелодии</div>
    <span class="main-comparison">Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

const btn = resultGood.querySelector(`.main-replay`);
btn.addEventListener(`click`, () => showScreen(nextScreenBad));

export default resultGood;
