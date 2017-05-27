const app = document.querySelector(`.app`);
const templates = document.querySelector(`#templates`);
const template = templates.content ? templates.content : templates;
const screens = [
  `.main--welcome`,
  `.main--level-artist`,
  `.main--level-genre`,
  `.main--bad`,
  `.main--good`
].map((selector) => template.querySelector(selector));
let activeScreen;

const handlerScreenIndex = (value) => {
  if (value > screens.length - 1) {
    return 0;
  } else if (value < 0) {
    return screens.length - 1;
  } else {
    return value;
  }
};

const showScreen = (num = 0) => {
  const oldMain = app.querySelector(`.main`);
  const newMain = screens[num].cloneNode(true);
  app.replaceChild(newMain, oldMain);
  activeScreen = num;
};

showScreen();

document.addEventListener(`keydown`, (event) => {
  if (event.altKey) {
    if (event.keyCode === 37) {
      event.preventDefault();
      showScreen(handlerScreenIndex(--activeScreen));
    } else if (event.keyCode === 39) {
      event.preventDefault();
      showScreen(handlerScreenIndex(++activeScreen));
    }
  }
});
