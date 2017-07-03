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

const getCorrectList = (list, correct) => {
  return list.filter((item) => {
    return item.genre === correct;
  }).length;
};

const checkAllRight = (list, correct) => {
  return list.every((item) => {
    return item.value === correct;
  });
};

export class Level {
  constructor(data, state) {
    this.view = QuestionType[data.type](data, state);
    this.correctItems = getCorrectList(this.screenData.answers, this.screenData.genre);
    this.view.btnEvent = (checked) => {
      event.preventDefault();

      if (checked.length === this.correctItems && checkAllRight(checked, this.screenData.genre)) {
        ++this.state.correctAnswers;
      } else {
        --this.state.lives;
      }

      this.btnEvent(this.state);

      return false;

      this.onAnswer(eventState);
    };
    showScreen(this.view.getMarkup);
  }

  onAnswer() {}
}
