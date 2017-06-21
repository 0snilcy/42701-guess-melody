/**
 * Created by zuoa on 20.06.2017.
 */

import Welcome from './view';
import data from './model';
import showScreen from '../../tools/showScreen';
import gameScreen from '../levelArtist/controller';

export default () => {
  const view = new Welcome(data);
  view.btnEvent = () => {
    showScreen(gameScreen());
  };
  return view.getMarkup;
};
