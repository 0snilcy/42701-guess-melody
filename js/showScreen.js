/**
 * Created by wakedafuckup on 28.05.17.
 */
const app = document.querySelector(`.app`);

export default (screen) => {
  app.innerHTML = ``;
  app.appendChild(screen);
};
