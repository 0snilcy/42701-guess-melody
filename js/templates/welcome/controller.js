/**
 * Created by zuoa on 20.06.2017.
 */

import {Welcome} from './view';
import data from './model';
import {Application} from '../../main';
import showScreen from '../../tools/showScreen';

export default () => {
  const view = new Welcome(data);
  view.btnEvent = Application.showGame;
  showScreen(view.getMarkup);
};
