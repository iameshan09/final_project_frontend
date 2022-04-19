import { combineReducers } from 'redux';
import home from '../modules/home/HomeState'
import dutyPoint from '../modules/dutyPoint/DutyPointState';
export default combineReducers({
    //## Generator Reducers
    home,
    dutyPoint

});
