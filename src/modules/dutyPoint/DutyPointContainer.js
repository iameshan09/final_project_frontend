import { connect } from 'react-redux';
import { compose, lifecycle } from 'recompose';

import DutyPointView from './DutyPointView';
import { setDutyPointStatusAction } from './DutyPointState';


export default compose(
    connect(
        state => ({
            dutyPointStatus: state.dutyPoint.dutyPointStatus,
        }),
        dispatch => ({
            setDutyPointStatusAction: dutyPointStatus => dispatch(setDutyPointStatusAction(dutyPointStatus)),
        }),
    ),
    lifecycle({
        componentDidMount() {
            console.log('Duty point Screen');
        },
    }),
)(DutyPointView);
