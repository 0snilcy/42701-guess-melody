/**
 * Created by wakedafuckup on 24.06.17.
 */

import {initial, Screen} from './model';
import {Level} from '../levelGame/controller';
import questions from '../levelGame/model';
import Application from '../../main';

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
  constructor(data) {
    console.log(data);
    this.dataGame = data;
    this.currentScreen = 0;
  }

  init() {
    this.changeLevel(Object.assign({}, initial));
  }

  changeLevel(state) {
    this.state = state;
    this.view = new Level(this.dataGame[this.currentScreen++], this.state);

    this.view.onAnswer = (stats) => {
      switch (getNextScreen(stats, this.currentScreen)) {
        case Screen.DEFEAT:
          Application.showResult();
          break;

        case Screen.WIN:
          Application.showResult(stats);
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
