/**
 * Created by wakedafuckup on 25.06.17.
 */

import DefeatView from './defeatView';
import VictoryView from './victoryView';
import data from './model';
import showScreen from '../../tools/showScreen';
import Application from '../../main';
import BaseModel from '../../tools/baseModel';
import getUserRating from './getUserRating';

export default class Result {
  init(stats) {
    if (stats && stats.lives) {
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
          const rating = serverStats ? getUserRating(formatStats, serverStats) : null;

          this.view = new VictoryView(data.victory, stats.correctAnswers, rating);
          this._setEvent(this.view);
        })
        .then(() => {
          return this.model.send(stats);
        })
        .catch(window.console.error);
    } else {
      this.view = new DefeatView(data.defeat);
      this._setEvent(this.view);
    }
  }

  _setEvent(ctx) {
    ctx.btnEvent = () => {
      Application.showWelcome();
    };
    showScreen(ctx.element);
  }
}
