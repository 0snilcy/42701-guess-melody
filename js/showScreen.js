/**
 * Created by wakedafuckup on 28.05.17.
 */
const app = document.querySelector(`.app`);

export default (template) => {
  app.innerHTML = ``;
  app.appendChild(template);
};
