/**
 * Created by wakedafuckup on 24.06.17.
 */

import {initial, Screen} from './model';
import {Level} from '../levelGame/controller';
import questions from '../levelGame/model';
import Application from '../../main';
import timer from '../utils/timer';

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
    this.dataGame = data;
    this.currentScreen = 0;
    this.timerValue = 0;
  }

  init() {
    this.changeLevel(Object.assign({}, initial));
    timer.init(this.gameTimer);

    this.gameTimer = setTimeout(() => {
      timer.remove();
      Application.showResult();
    }, initial.gameLimit);

    this.setTimverHundler = setInterval(() => this.timerValue++, 1000);
  }

  changeLevel(state) {
    this.view = new Level(this.dataGame[this.currentScreen++], state);

    this.view.onAnswer = (nextState) => {
      switch (getNextScreen(nextState, this.currentScreen)) {
        case Screen.DEFEAT:
        case Screen.WIN:
          clearTimeout(this.gameTimer);
          clearTimeout(this.levelTimer);
          clearInterval(this.setTimverHundler);
          nextState.time = this.timerValue;
          timer.remove();
          Application.showResult(nextState);
          break;

        case Screen.GAME:
          clearTimeout(this.levelTimer);
          this.changeLevel(nextState);
          break;

        default:
          throw new Error(`Unknown result ${nextState}`);
      }
    };

    this.levelTimer = setTimeout(() => {
      timer.remove();
      Application.showResult();
    }, initial.levelLimit);
  }
}
