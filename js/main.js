/**
 * Created by wakedafuckup on 24.06.17.
 */

import {Welcome} from './templates/welcome/controller';
import {GameScreen} from './templates/gameScreen/gameScreen';
import {Result} from './templates/result/controller';
import statsFormat from './tools/statsFormat';
import BaseModel from './tools/baseModel';


const ControllerID = {
  WELCOME: ``,
  GAME: `game`,
  STATS: `stats`,
};

class Application {
  constructor() {
    Welcome.preloader();

    this.model = new class extends BaseModel {
      get urlRead() {
        return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions`;
      }
    }();

    this.model.load()
      .then((data) => this.setup(data))
      .then(() => this.changeController())
      .catch(window.console.error);
  }

  setup(data) {
    this.routes = {
      [ControllerID.WELCOME]: new Welcome(),
      [ControllerID.GAME]: new GameScreen(data),
      [ControllerID.STATS]: new Result(),

    };

    window.onhashchange = () => {
      this.changeController();
    };

    return data;
  }

  changeController() {
    const hash = location.hash.replace(`#`, ``).split(`=`);
    const route = hash[0];
    let stats = null;
    if (hash[1]) {
      stats = statsFormat.decode(hash[1]);
    }

    if (this.routes[route]) {
      this.routes[route].init(stats);
    }
  }

  showWelcome() {
    location.hash = ControllerID.WELCOME;
  }

  showGame() {
    location.hash = ControllerID.GAME;
  }

  showResult(stats) {
    if (stats) {
      location.hash = `${ControllerID.STATS}=${statsFormat.encode(stats)}`;
    } else {
      location.hash = ControllerID.STATS;
    }
  }
}

export default new Application();
