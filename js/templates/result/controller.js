/**
 * Created by wakedafuckup on 25.06.17.
 */

import {DefeatView} from './defeatView';
import {VictoryView} from './victoryView';
import data from './model';
import showScreen from '../../tools/showScreen';
import Application from '../../main';
import BaseModel from '../../tools/baseModel';
import getUserRating from './getUserRating';

export class Result {
  init(stats) {
    if (stats.lives) {
      this.model = new class extends BaseModel {
        get urlRead() {
          return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/42701`;
        }
        get urlWrite() {
          return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/42701`;
        }
      }();

      this.model.load()
        .then((serverStats) => {
          const formatStats = this.model.formatToServer(stats);
          const rating = getUserRating(formatStats, serverStats);

          this.view = new VictoryView(data.victory, stats.correctAnswers, rating);
          this.view.btnEvent = () => Application.showWelcome();
          showScreen(this.view.getMarkup);

        })
        .then(() => this.model.send(stats))
        .catch(window.console.error);
    } else {
      this.view = new DefeatView(data.defeat);
      this.view.btnEvent = () => Application.showWelcome();
      showScreen(this.view.getMarkup);
    }
  }
}
