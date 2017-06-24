/**
 * Created by wakedafuckup on 24.06.17.
 */

import {initial, Screen} from './model';
import showScreen from '../../tools/showScreen';
import {LevelArtist as LevelView} from '../levelArtist/view';
import questions from '../levelArtist/model';
import {Result} from '../result/view';
import {data as resultModel} from '../result/model';
import {Application} from '../../main';

const getNextScreen = (data, current) => {
  const max = [...questions].length - 1;

  if (!data.lives) {
    return Screen.DEFEAT;
  } else if (current > max) {
    return Screen.WIN;
  } else {
    return Screen.GAME;
  }
};

export class GameScreen {
  constructor() {
    this.listAnswers = [...questions];
    this.currentAnswer = 0;
  }

  init() {
    this.changeLevel(initial);
  }

  get view() {
    return this._view;
  }

  set view(view) {
    this._view = view;
    showScreen(view.getMarkup);
  }

  changeLevel(state) {
    this.state = state;
    this.view = new LevelView(this.listAnswers[this.currentAnswer++], this.state);

    this.view.onAnswer = (stats) => {
      switch (getNextScreen(stats, this.currentAnswer)) {
        case Screen.DEFEAT:
        case Screen.WIN:
          this.view = new Result(stats, resultModel);
          this.view.clickNewGame = () => Application.showWelcome();
          break;

        case Screen.GAME:
          this.changeLevel(stats);
          break;

        default:
          throw new Error(`Unknown result ${stats}`);
      }
    };
  }
}
