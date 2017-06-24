/**
 * Created by wakedafuckup on 24.06.17.
 */

import {Welcome} from './templates/welcome/view';
import {GameScreen} from './templates/gameScreen/gameScreen';

class Application {
  constructor() {

  }

  static showWelcome() {
    return new Welcome();
  }

  static showGame() {
    return new GameScreen();
  }
}

export default new Application();
