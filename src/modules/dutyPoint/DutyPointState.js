const initialState = {
  dutyPointStatus: true,
  latitude: 0,
  longitude: 0,
};

const SET_DUTYPOINTSTATUS = 'SET_DUTYPOINTSTATUS';
const SET_LATITUDE = 'SET_LATITUDE';
const SET_LONGITUDE = 'SET_LONGITUDE';

export function setDutyPointStatusAction(dutyPointStatus) {
  return {
    type: SET_DUTYPOINTSTATUS,
    dutyPointStatus,
  };
}
export function setLatitudeAction(latitude) {
  return {
    type: SET_LATITUDE,
    latitude,
  };
}
export function setLongitudeAction(longitude) {
  return {
    type: SET_LONGITUDE,
    longitude,
  };
}

const setDutyPointStatus = (state, action) => ({
  ...state,
  dutyPointStatus: action.dutyPointStatus,
});
const setLatitude = (state, action) => ({
  ...state,
  latitude: action.latitude,
});
const setLongitude = (state, action) => ({
  ...state,
  longitude: action.longitude,
});

export default function dutyPointReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DUTYPOINTSTATUS:
      return setDutyPointStatus(state, action);
    case SET_LATITUDE:
      return setLatitude(state, action);
    case SET_LONGITUDE:
      return setLongitude(state, action);
    default:
      return state;
  }
}
