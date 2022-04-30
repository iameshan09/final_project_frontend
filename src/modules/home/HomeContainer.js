import {connect} from 'react-redux';
import {compose, lifecycle} from 'recompose';

import HomeView from './HomeView';
import {setHomeStatusAction} from './HomeState';
import * as Function from './HomeFunction';

export default compose(
  connect(
    state => ({
      homeStatus: state.home.homeStatus,
    }),
    dispatch => ({
      setHomeStatusAction: homeStatus =>
        dispatch(setHomeStatusAction(homeStatus)),
    }),
  ),
  lifecycle({
    componentDidMount() {
      console.log('Home Screen');
    },
  }),
)(HomeView);
