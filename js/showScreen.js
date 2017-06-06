/**
 * Created by wakedafuckup on 28.05.17.
 */
const app = document.querySelector(`.app`);

const showScreen = (screen) => {
  app.innerHTML = ``;
  app.appendChild(screen);
};

export default showScreen;
