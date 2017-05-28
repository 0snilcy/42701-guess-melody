/**
 * Created by wakedafuckup on 28.05.17.
 */
const app = document.querySelector(`.app`);

const showScreen = (screen) => {
  const oldMain = app.querySelector(`.main`);
  app.replaceChild(screen, oldMain);
};

export default showScreen;
