import {combineReducers} from 'redux';
import home from '../modules/home/HomeState';
import dutyPoint from '../modules/dutyPoint/DutyPointState';
import futureTraffic from '../modules/futureTraffic/FutureTrafficState';
export default combineReducers({
  //## Generator Reducers
  home,
  dutyPoint,
  futureTraffic,
});
