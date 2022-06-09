import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';

import SuggestionsView from './SuggestionsView';
import {setSuggestionsStatusAction} from './SuggestionsState';

export default compose(
  connect(
    state => ({
      suggestionsStatus: state.suggestions.suggestionsStatus,
      latitude: state.dutyPoint.latitude,
      longitude: state.dutyPoint.longitude,
    }),
    dispatch => ({
      setSuggestionsStatusAction: suggestionsStatus =>
        dispatch(setSuggestionsStatusAction(suggestionsStatus)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      console.log('Suggestions Screen');
    },
  }),
)(SuggestionsView);
