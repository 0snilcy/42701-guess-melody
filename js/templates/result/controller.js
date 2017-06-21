/**
 * Created by wakedafuckup on 21.06.17.
 */

import Result from './view';
import model from './model';
import showScreen from '../../tools/showScreen';
import welcomeScreen from '../welcome/controller';

export default (data) => {
  const view = new Result(data, model);

  view.clickNewGame = () => showScreen(welcomeScreen());

  return view.getMarkup;
};
