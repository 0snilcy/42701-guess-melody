/**
 * Created by wakedafuckup on 28.05.17.
 */
import getElement from './getElement';
const app = document.querySelector(`.app`);

export default ([template, callback]) => {
  app.innerHTML = ``;
  const clone = getElement(template()).cloneNode(true);
  app.appendChild(clone);
  if (callback) {
    callback(app);
  }
};
