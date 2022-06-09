const initialState = {
  suggestionsStatus: true,
};

const SET_SUGGESTIONSSTATUS = 'SET_SUGGESTIONSSTATUS';

export function setSuggestionsStatusAction(suggestionsStatus) {
  return {
    type: SET_SUGGESTIONSSTATUS,
    suggestionsStatus,
  };
}

const setSuggestionsStatus = (state, action) => ({
  ...state,
  suggestionsStatus: action.suggestionsStatus,
});

export default function suggestionsReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SUGGESTIONSSTATUS:
      return setSuggestionsStatus(state, action);
    default:
      return state;
  }
}
