import {combineReducers} from 'redux';
import home from '../modules/home/HomeState';
import dutyPoint from '../modules/dutyPoint/DutyPointState';
import futureTraffic from '../modules/futureTraffic/FutureTrafficState';
import suggestions from '../modules/suggestions/SuggestionsState';

export default combineReducers({
  //## Generator Reducers
  home,
  dutyPoint,
  futureTraffic,
  suggestions,
});
