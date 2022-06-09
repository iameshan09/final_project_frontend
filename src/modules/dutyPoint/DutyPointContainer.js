import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';

import DutyPointView from './DutyPointView';
import {
  setDutyPointStatusAction,
  setLatitudeAction,
  setLongitudeAction,
} from './DutyPointState';

import * as Function from './DutyPointFunction';

export default compose(
  connect(
    state => ({
      dutyPointStatus: state.dutyPoint.dutyPointStatus,
      latitude: state.dutyPoint.latitude,
      longitude: state.dutyPoint.longitude,
    }),
    dispatch => ({
      setDutyPointStatusAction: dutyPointStatus =>
        dispatch(setDutyPointStatusAction(dutyPointStatus)),
      setLatitudeAction: latitude => dispatch(setLatitudeAction(latitude)),
      setLongitudeAction: longitude => dispatch(setLongitudeAction(longitude)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      console.log('Duty point Screen');
      Function.getCurrentPosition(this.props);
    },
  }),
)(DutyPointView);
