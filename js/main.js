import showScreen from './showScreen';
import welcome from './templates/welcome';
import {welcome as dataList} from './templates/data';

showScreen(welcome(dataList));
