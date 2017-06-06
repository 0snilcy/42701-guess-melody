/**
 * Created by wakedafuckup on 28.05.17.
 */

import nextScreen from './level-artist';
import showScreen from '../showScreen';

const welcome = () => `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;2 минуты дать
      максимальное количество правильных ответов.<br>
      Удачи!
    </p>
  </section>
`;

export default [welcome, (ctx) => {
  const btn = ctx.querySelector(`.main-play`);
  btn.addEventListener(`click`, () => showScreen(nextScreen));
}];
