/**
 * Created by wakedafuckup on 24.06.17.
 */

import welcome from './templates/welcome/controller';
import {GameScreen} from './templates/gameScreen/gameScreen';

export class Application {
  static showWelcome() {
    welcome();
  }

  static showGame() {
    return new GameScreen().init();
  }
}

Application.showWelcome();
