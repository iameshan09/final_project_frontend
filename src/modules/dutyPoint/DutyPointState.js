const initialState = {
    dutyPointStatus: true,
}

const SET_DUTYPOINTSTATUS = "SET_DUTYPOINTSTATUS";

export function setDutyPointStatusAction(dutyPointStatus) {
    return {
        type: SET_DUTYPOINTSTATUS,
        dutyPointStatus
    }
}

const setDutyPointStatus = (state, action) => ({
    ...state,
    dutyPointStatus: action.dutyPointStatus,
})

export default function dutyPointReducer(state = initialState, action) {
    switch (action.type) {
        case SET_DUTYPOINTSTATUS:
            return setDutyPointStatus(state, action);
        default:
            return state;
    }
}