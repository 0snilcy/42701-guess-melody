/**
 * Created by wakedafuckup on 28.05.17.
 */

export default (string, callback) => {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return document.importNode(container.content, true);
};
