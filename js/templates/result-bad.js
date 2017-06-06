/**
 * Created by wakedafuckup on 28.05.17.
 */

import getElement from '../getElement';
import nextScreenBad from './welcome';
import showScreen from '../showScreen';

const resultBad = getElement(`
  <section class="main main--result main--result-bad">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы проиграли</h2>
    <div class="main-stat">Ничего, вам повезет в следующий раз</div>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>
`);

const btn = resultBad.querySelector(`.main-replay`);
btn.addEventListener(`click`, () => showScreen(nextScreenBad));

export default resultBad;
