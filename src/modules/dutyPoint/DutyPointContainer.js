import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';

import DutyPointView from './DutyPointView';
import {
  setDutyPointStatusAction,
  setLatitudeAction,
  setLongitudeAction,
  setCurrentAddressAction,
  setDutyPointsAction,
  setDefaultValueAction,
} from './DutyPointState';

import * as Function from './DutyPointFunction';

export default compose(
  connect(
    state => ({
      dutyPointStatus: state.dutyPoint.dutyPointStatus,
      latitude: state.dutyPoint.latitude,
      longitude: state.dutyPoint.longitude,
      currentAddress: state.dutyPoint.currentAddress,
      dutyPoints: state.dutyPoint.dutyPoints,
      defaultValue: state.dutyPoint.defaultValue,
    }),
    dispatch => ({
      setDutyPointStatusAction: dutyPointStatus =>
        dispatch(setDutyPointStatusAction(dutyPointStatus)),
      setLatitudeAction: latitude => dispatch(setLatitudeAction(latitude)),
      setLongitudeAction: longitude => dispatch(setLongitudeAction(longitude)),
      setCurrentAddressAction: currentAddress =>
        dispatch(setCurrentAddressAction(currentAddress)),
      setDutyPointsAction: dutyPoints =>
        dispatch(setDutyPointsAction(dutyPoints)),
      setDefaultValueAction: defaultValue =>
        dispatch(setDefaultValueAction(defaultValue)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      console.log('Duty point Screen');
      Function.getCurrentPosition(this.props);
      Function.geoCorder(this.props);
      Function.getNearestDutyPoints(this.props);
    },
  }),
)(DutyPointView);
