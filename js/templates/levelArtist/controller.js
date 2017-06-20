/**
 * Created by zuoa on 20.06.2017.
 */

import LevelArtist from './view';
import data from './model';
import showScreen from '../../tools/showScreen';
import resultScreen from '../result/controller';

export default () => {
  const listAnswers = [...data];
  let currentAnswer = 0;
  const view = new LevelArtist(listAnswers[currentAnswer]).getMarkup;

  view.clickAnswer = LevelArtist;

  view.showResult = showScreen(resultScreen);

  return view;
};
