import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';

import FutureTrafficView from './FutureTrafficView';
import {setFutureTrafficStatusAction} from './FutureTrafficState';

export default compose(
  connect(
    state => ({
      futureTrafficStatus: state.futureTraffic.futureTrafficStatus,
    }),
    dispatch => ({
      setFutureTrafficStatusAction: futureTrafficStatus =>
        dispatch(setFutureTrafficStatusAction(futureTrafficStatus)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      console.log('Future Traffic Screen');
    },
  }),
)(FutureTrafficView);
