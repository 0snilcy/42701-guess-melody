/**
 * Created by wakedafuckup on 28.05.17.
 */
const app = document.querySelector(`.app`);

const showScreen = ([screen, callback]) => {
  app.innerHTML = ``;
  const clone = screen.cloneNode(true);
  app.appendChild(clone);
  if (callback) {
    callback();
  }
};

export default showScreen;
