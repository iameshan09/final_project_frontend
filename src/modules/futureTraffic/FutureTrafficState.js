const initialState = {
  futureTrafficStatus: true,
};

const SET_FUTURETRAFFICSTATUS = 'SET_FUTURETRAFFICSTATUS';

export function setFutureTrafficStatusAction(futureTrafficStatus) {
  return {
    type: SET_FUTURETRAFFICSTATUS,
    futureTrafficStatus,
  };
}

const setFutureTrafficStatus = (state, action) => ({
  ...state,
  futureTrafficStatus: action.futureTrafficStatus,
});

export default function futureTrafficReducer(state = initialState, action) {
  switch (action.type) {
    case SET_FUTURETRAFFICSTATUS:
      return setFutureTrafficStatus(state, action);
    default:
      return state;
  }
}
