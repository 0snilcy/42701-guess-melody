/**
 * Created by wakedafuckup on 28.05.17.
 */

export default (string) => {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
};
