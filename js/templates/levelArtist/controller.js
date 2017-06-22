/**
 * Created by zuoa on 20.06.2017.
 */

import {LevelArtist} from './view';
import data from './model';
import initial from '../initial';
import showScreen from '../../tools/showScreen';
import resultScreen from '../result/controller';

export default () => {
  const listAnswers = [...data];
  const lastAnswer = listAnswers.length - 1;
  let currentAnswer = 0;
  const view = new LevelArtist(listAnswers[currentAnswer], initial);

  const getNextStep = (stats) => {
    if (++currentAnswer < lastAnswer) {
      const nextView = new LevelArtist(listAnswers[currentAnswer], stats);
      nextView.clickCorrect = getNextStep;
      nextView.showResult = (resultStats) => showScreen(resultScreen(resultStats));
      showScreen(nextView.getMarkup);
    } else {
      showScreen(resultScreen(stats));
    }
  };

  view.clickCorrect = getNextStep;
  view.showResult = (resultStats) => showScreen(resultScreen(resultStats));
  return view.getMarkup;
};
