const initialState = {
  dutyPointStatus: true,
  latitude: 0,
  longitude: 0,
  currentAddress: '',
  dutyPoints: [],
  defaultValue: null,
};

const SET_DUTYPOINTSTATUS = 'SET_DUTYPOINTSTATUS';
const SET_LATITUDE = 'SET_LATITUDE';
const SET_LONGITUDE = 'SET_LONGITUDE';
const SET_CURRENTADDRESS = 'SET_CURRENTADDRESS';
const SET_DUTYPOINTS = 'SET_DUTYPOINTS';
const SET_DEFAULTVALUE = 'SET_DEFAULTVALUE';

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
export function setCurrentAddressAction(currentAddress) {
  return {
    type: SET_CURRENTADDRESS,
    currentAddress,
  };
}
export function setDutyPointsAction(dutyPoints) {
  return {
    type: SET_DUTYPOINTS,
    dutyPoints,
  };
}

export function setDefaultValueAction(defaultValue) {
  return {
    type: SET_DEFAULTVALUE,
    defaultValue,
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
const setCurrentAddress = (state, action) => ({
  ...state,
  currentAddress: action.currentAddress,
});

const setDutyPoints = (state, action) => ({
  ...state,
  dutyPoints: action.dutyPoints,
});
const setDefaultValue = (state, action) => ({
  ...state,
  defaultValue: action.defaultValue,
});

export default function dutyPointReducer(state = initialState, action) {
  switch (action.type) {
    case SET_DUTYPOINTSTATUS:
      return setDutyPointStatus(state, action);
    case SET_LATITUDE:
      return setLatitude(state, action);
    case SET_LONGITUDE:
      return setLongitude(state, action);
    case SET_CURRENTADDRESS:
      return setCurrentAddress(state, action);
    case SET_DUTYPOINTS:
      return setDutyPoints(state, action);
    case SET_DEFAULTVALUE:
      return setDefaultValue(state, action);
    default:
      return state;
  }
}
