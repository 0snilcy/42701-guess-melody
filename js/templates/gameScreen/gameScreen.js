/**
 * Created by wakedafuckup on 24.06.17.
 */

import {initial, Screen} from './model';
import Level from '../levelGame/controller';
import Application from '../../main';
import timer from '../utils/timer';

const getNextScreen = (data, current, max) => {
  if (!data.lives) {
    return Screen.DEFEAT;
  } else if (current > max) {
    return Screen.WIN;
  } else {
    return Screen.GAME;
  }
};

export default class GameScreen {
  constructor(data) {
    this.dataGame = data;
    this.dataGameMax = this.dataGame.length - 1;
  }

  init() {
    this.currentScreen = 0;
    this.timerValue = 0;

    this.changeLevel(Object.assign({}, initial));
    timer.init(initial.gameLimit);

    this.gameTimer = setTimeout(() => {
      timer.remove();
      Application.showResult();
    }, initial.gameLimit * 1000);

    this.setTimerGame = setInterval(() => {
      this.timerValue++;
    }, 1000);
  }

  changeLevel(state) {
    this.view = new Level(this.dataGame[this.currentScreen++], state);

    this.view.onAnswer = (nextState) => {
      switch (getNextScreen(nextState, this.currentScreen, this.dataGameMax)) {
        case Screen.DEFEAT:
        case Screen.WIN:
          clearTimeout(this.gameTimer);
          clearInterval(this.setTimerGame);
          nextState.time = this.timerValue;
          timer.remove();
          Application.showResult(nextState);
          break;

        case Screen.GAME:
          this.changeLevel(nextState);
          break;

        default:
          throw new Error(`Unknown result ${nextState}`);
      }
    };
  }
}
