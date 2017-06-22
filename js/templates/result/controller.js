/**
 * Created by wakedafuckup on 21.06.17.
 */

import {Result} from './view';
import {data} from './model';
import showScreen from '../../tools/showScreen';
import welcomeScreen from '../welcome/controller';

export default (stats) => {
  const view = new Result(stats, data);
  view.clickNewGame = () => showScreen(welcomeScreen());
  return view.getMarkup;
};
