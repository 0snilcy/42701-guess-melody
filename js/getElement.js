/**
 * Created by wakedafuckup on 28.05.17.
 */

const getElement = (string) => {
  const parser = new DOMParser();
  return parser.parseFromString(string, `text/html`).body.firstChild;
};

export default getElement;
