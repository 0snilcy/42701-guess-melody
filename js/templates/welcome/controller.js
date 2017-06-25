/**
 * Created by zuoa on 20.06.2017.
 */

import {WelcomeView} from './view';
import data from './model';
import showScreen from '../../tools/showScreen';
import Application from '../../main';

export class Welcome {
  constructor() {
    this.view = new WelcomeView(data);
  }

  init() {
    this.view.btnEvent = () => Application.showGame();
    showScreen(this.view.getMarkup);
  }
}
