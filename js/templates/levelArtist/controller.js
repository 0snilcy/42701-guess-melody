/**
 * Created by wakedafuckup on 25.06.17.
 */

import {LevelView} from './view';
import showScreen from '../../tools/showScreen';

export class Level {
  constructor(list, state) {
    this.view = new LevelView(list, state);
    this.view.btnEvent = (eventState) => {
      this.onAnswer(eventState);
    };
    showScreen(this.view.getMarkup);
  }

  onAnswer() {}
}
