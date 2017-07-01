/**
 * Created by zuoa on 20.06.2017.
 */

import {WelcomeView} from './view';
import {PreloaderView} from './preloaderView';
import data from './model';
import showScreen from '../../tools/showScreen';
import Application from '../../main';

export class Welcome {
  constructor() {
    this.view = new WelcomeView(data);
  }

  static preloader() {
    showScreen(new PreloaderView(data).getMarkup);
  }

  init() {
    this.view.btnEvent = () => {
      Application.showGame();
    };
    showScreen(this.view.getMarkup);
  }
}
