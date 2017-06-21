/**
 * Created by zuoa on 20.06.2017.
 */

import LevelArtist from './view';
import data from './model';
import initial from '../initial';
import showScreen from '../../tools/showScreen';
import resultScreen from '../result/controller';

export default () => {
  const listAnswers = [...data];
  const lastAnswer = listAnswers.length - 1;
  let currentAnswer = 0;
  const view = new LevelArtist(listAnswers[currentAnswer], initial);

  view.clickCorrect = (stats) => {
    if (++currentAnswer < lastAnswer) {
      view.reRender(listAnswers[currentAnswer]);
    } else {
      showScreen(resultScreen(stats));
    }
  };

  view.showResult = (stats) => showScreen(resultScreen(stats));
  return view.getMarkup;
};
