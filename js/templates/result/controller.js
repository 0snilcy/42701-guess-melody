/**
 * Created by wakedafuckup on 25.06.17.
 */

import {ResultView} from './view';
import {data as model} from './model';
import showScreen from '../../tools/showScreen';
import Application from '../../main';

export class Result {
  init(data) {
    this.view = new ResultView(data, model);
    this.view.btnEvent = () => Application.showWelcome();
    showScreen(this.view.getMarkup);
  }
}
