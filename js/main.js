const app = document.querySelector(`.app`);
const templates = document.querySelector(`#templates`);
const template = templates.content ? templates.content : templates;
const screens = [
  `.main--welcome`,
  `.main--level-artist`,
  `.main--level-genre`,
  `.main--bad`,
  `.main--good`
];
let activeScreen;

const setValue = (value) => {
  if (value > screens.length - 1) {
    return 0;
  } else if (value < 0) {
    return screens.length - 1;
  } else {
    return value;
  }
};

const showScreen = (num = 0) => {
  if (num > screens.length - 1 || num < 0) {
    return false;
  }

  const oldMain = app.querySelector(`.main`);
  const newMain = template.querySelector(screens[num]).cloneNode(true);
  app.replaceChild(newMain, oldMain);
  activeScreen = num;
  return true;
};

showScreen();

document.addEventListener(`keydown`, (event) => {
  if (event.altKey) {
    event.preventDefault();
    if (event.keyCode === 37) {
      showScreen(setValue(--activeScreen));
    } else if (event.keyCode === 39) {
      showScreen(setValue(++activeScreen));
    }
  }
});
