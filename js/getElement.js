/**
 * Created by wakedafuckup on 28.05.17.
 */

const getElement = (string) => {
  const container = document.createElement(`template`);
  container.innerHTML = string;
  return container.content;
};

export default getElement;
