/**
 * Created by wakedafuckup on 25.06.17.
 */

import {LevelArtist} from './viewLevelArtist';
import {LevelGenre} from './viewLevelGenre';
import showScreen from '../../tools/showScreen';

const QuestionType = {
  genre(data, state) {
    return new LevelGenre(data, state);
  },
  artist(data, state) {
    return new LevelArtist(data, state);
  },
};

export class Level {
  constructor(data, state) {
    this.view = QuestionType[data.type](data, state);
    this.view.btnEvent = (eventState) => {
      this.onAnswer(eventState);
    };
    showScreen(this.view.getMarkup);
  }

  onAnswer() {}
}
