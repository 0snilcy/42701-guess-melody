/**
 * Created by wakedafuckup on 25.06.17.
 */

import {LevelArtist} from './viewLevelArtist';
import {LevelGenre} from './viewLevelGenre';
import showScreen from '../../tools/showScreen';
import getCorrectId from './getCorrectId';

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
    this.view.btnEvent = (checked) => {
      switch (data.type) {
        case `genre`:
          this.correctItems = getCorrectList(data.answers, data.genre);
          if (checked.length === this.correctItems && checkAllRight(checked, data.genre)) {
            ++state.correctAnswers;
          } else {
            --state.lives;
          }
          break;

        case `artist`:
          const correct = getCorrectId(data.answers);
          if (checked === correct) {
            ++state.correctAnswers;
          } else {
            --state.lives;
          }
          break;

        default: break;
      }

      this.onAnswer(state);
    };
    showScreen(this.view.getMarkup);
  }

  onAnswer() {}
}
