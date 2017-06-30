/**
 * Created by wakedafuckup on 28.05.17.
 */
const app = document.querySelector(`.app`);

export default (template) => {
  const oldItem = app.querySelector(`.main`);
  app.replaceChild(template, oldItem);
};
