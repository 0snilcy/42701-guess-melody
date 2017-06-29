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
    console.log(stats);

    if (stats.lives) {
      this.model = new class extends BaseModel {
        get urlRead() {
          return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/42701`;
        }
        get urlWrite() {
          return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/42701`;
        }
      }();

      this.model.send(data).then((data) => console.log(data));

      this.view = new VictoryView(data.victory, stats);
    } else {
      this.view = new DefeatView(data.defeat);
    }

    // this.model.send()
    //   .then(() => console.log(`Dannie otpravleny`));

    this.view.btnEvent = () => Application.showWelcome();
    showScreen(this.view.getMarkup);
  }
}
